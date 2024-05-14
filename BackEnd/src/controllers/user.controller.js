import asyncHandler from "../utils/asyncHandler.js";
import ApiError from "../utils/ApiError.js";
import { User } from "../models/user.model.js";
import {
  UploadFileToCloudinary,
  DeleteFileFromCloudinary,
} from "../utils/Cloudinary.js";
import ApiResponse from "../utils/ApiResponse.js";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";

const generateAccessAndRefreshTokens = async (userId) => {
  try {
    const user = await User.findById(userId);

    const AccessToken = await user.GenerateAccessToken();
    const RefreshToken = await user.GenerateRefreshToken();

    user.refreshToken = RefreshToken;
    user.save();

    return { AccessToken, RefreshToken };
  } catch (error) {
    console.log(error);
    throw new ApiError(
      500,
      "Something went wrong while generating access and refresh tokens"
    );
  }
};

function validateTimeRange(startTimeStr, endTimeStr) {
  // Implement validation logic here (e.g., using a time zone library and time format checks)
  const timeRegex = /^([0-1][0-9]|2[0-3]):([0-5][0-9])$/; // Basic time format validation

  if (!timeRegex.test(startTimeStr) || !timeRegex.test(endTimeStr)) {
    return false;
  }

  // Additional validation logic here (e.g., comparing start and end times, time zone handling)
  return true;
}

const RegisterUser = asyncHandler(async (req, res) => {
  /*fetch data from frontend
		  check for validation
		  check if user already exist
		  check for file, avatar
		  check for file upload process, cloudinary
		  create new user obj
		  remove password and refresh tokens from response
		  check for user creation
		  res.send( user )
		  */

  // interests [], achivements [], upi details
  const {
    fullName,
    email,
    username,
    gradeLevel,
    learningStyle,
    startTime,
    endTime,
    currentStatus,
    interest,
    age,
    phone,
    board,
    passkey,
  } = req.body;

  if (
    [
      fullName,
      email,
      username,
      gradeLevel,
      learningStyle,
      currentStatus,
      board,
      passkey,
    ].some((field) => field?.trim() === "")
  ) {
    throw new ApiError(400, "all field are required");
  }


  if (!age) throw new ApiError(400, "Please enter age");

  if (age < 10)
    throw new ApiError(
      400,
      "Register under your parents servilience and you must be 10 or elder"
    );

  if (!email.includes("@")) throw new ApiError(400, "Please enter valid email");

  if (!phone) throw new ApiError(400, "Phone number is important");

  if (!startTime || !endTime) {
    throw new ApiError(400, "Missing required fields (startTime, endTime)");
  }

  if (!validateTimeRange(startTime, endTime)) {
    return res.status(400).json({ error: "Invalid time range format" });
  }

  // checking for unique user by checking username or email is already registered or not
  const ExistedUser = await User.findOne({
    $or: [{ username }, { email }],
  });

  if (ExistedUser)
    throw new ApiError(400, "Given username or email is already registered");

  // Taking Profile picture named as avatar
   console.log(req.files);
  const avatarLocalPath = req.file?.path;

  if (!avatarLocalPath)
    throw new ApiError(400, "Avatar is required. Please upload");


  const Avatar = await UploadFileToCloudinary(avatarLocalPath);

  if (!Avatar)
    throw new ApiError(
      401,
      "Something went wrong with Avatar!!, Please upload once again"
    );

  const user = await User.create({
    fullName,
    email,
    password:passkey,
    username,
    gradeLevel,
    learningStyle,
    preferredClassTime: {
      startTime,
      endTime,
    },
    phone,
    currentStatus,
    interest,
    age,
    board,
    avatar: Avatar.url,
  });

  const CreatedUser = await User.findById(user._id).select(
    "-password -refreshToken"
  );

  if (!CreatedUser)
    throw new ApiError(500, "Something went wrong while user registration");

  res
    .status(201)
    .json(
      new ApiResponse(
        201,
        CreatedUser,
        "User registration completed successfully"
      )
    );
});

const LogInUser = asyncHandler(async (req, res) => {
  /*
	    1. get the logIn data from req.body - username, email, password
	    2. check for the authentication data
	    3. check if the user is available or not
	    4. check for password
	    5. generate refresh & access tokens
	    6 give response
	    */

  const { email, username, password } = req.body;

  if (!(email || username))
    throw new ApiError(401, "Either username or email is required");

  const user = await User.findOne({
    $or: [{ username }, { email }],
  });

  if (!user) throw new ApiError(404, "Provided username or email not found");

  const isValid = await user.isPasswordCorrect(password);

  if (!isValid) throw new ApiError(401, "Entered Credential is not correct");

  const { AccessToken, RefreshToken } = await generateAccessAndRefreshTokens(
    user?._id
  );

  const loggedInUser = await User.findById(user._id).select(
    "-password -refreshToken"
  );

  const options = {
    httpOnly: true,
    secure: true,
  };

  return res
    .status(201)
    .cookie("RefreshToken", RefreshToken, options)
    .cookie("AccessToken", AccessToken, options)
    .json(
      new ApiResponse(
        201,
        {
          user: loggedInUser,
          RefreshToken,
          AccessToken,
        },
        "User Loged In successfully"
      )
    );
});

const LogOutUser = asyncHandler(async (req, res) => {
  await User.findOneAndUpdate(req.user._id, {
    $unset: {
      refreshToken: 1,
    },
  });

  const options = {
    httpOnly: true,
    secure: true,
  };

  return res
    .status(200)
    .clearCookie("AccessToken", options)
    .clearCookie("RefreshToken", options);
});

const regenerateRefreshToken = asyncHandler(async (req, res) => {
  try {
    const token = req.cookies.RefreshToken || req.body.RefreshToken;

    if (!token) throw new ApiError(401, "Unauthorized request");

    const DecodedToken = jwt.verify(token, process.env.REFRESH_TOKEN_SECRATE);

    const user = await User.findById(DecodedToken._id).select(
      "-password -refreshToken"
    );

    if (!user) throw new ApiError(400, "Invalid Token");

    const { RefreshToken, AccessToken } = await generateAccessAndRefreshTokens(
      user._id
    );

    const options = {
      httpOnly: true,
      secure: true,
    };

    return res
      .status(201)
      .cookie("RefreshToken", RefreshToken, options)
      .cookie("AccessToken", AccessToken, options)
      .json(
        new ApiResponse(
          201,
          {
            RefreshToken,
            AccessToken,
          },
          "Refresh token regenerated successfully"
        )
      );
  } catch (error) {
    throw new ApiError(401, error.message || "Invalid Token");
  }
});

const ChangeCurrentPassword = asyncHandler(async (req, res) => {
  const { oldPassword, newPassword } = req.body;

  const user = await User.findById(req.user?._id);

  const isPasswordCorrect = await user.isPasswordCorrect(oldPassword);

  if (!isPasswordCorrect) {
    throw new ApiError(400, "Invalid password");
  }

  user.password = newPassword;

  await user.save({ validateBeforeSave: false });

  return res
    .status(200)
    .json(new ApiResponse(200, {}, "Password changed successfully"));
});

const GetUser = asyncHandler(async (req, res) => {
  return res
    .status(200)
    .json(
      new ApiResponse(
        200,
        { user: req.user },
        "Get request successfully executed"
      )
    );
});

const UpdateUserDetails = asyncHandler(async (req, res) => {
  const { fullName, email } = req.body;

  if (!fullName || !email) {
    throw new ApiError(400, "all fields are required");
  }

  const user = await User.findByIdAndUpdate(
    req.user._id,
    {
      $set: {
        fullName,
        email,
      },
    },
    { new: true }
  ).select("-password");

  return res
    .status(200)
    .json(new ApiResponse(200, { user }, "User updation successfully"));
});

const UpdateAvatar = asyncHandler(async (req, res) => {
  const AvatartLocalPath = req.file?.path;

  if (!AvatartLocalPath) throw new ApiError(400, "Avatar file is missing");

  const Avatar = await UploadFileToCloudinary(AvatartLocalPath);

  if (!Avatar.url) {
    throw new ApiError(500, "Something went wrong while uploading Avatar");
  }

  const user = await User.findByIdAndUpdate(
    req.user?._id,
    {
      $set: {
        avatar: Avatar.url,
      },
    },
    { new: true }
  ).select("-password");

  const DeletedAvatar = await DeleteFileFromCloudinary(req.user.avatar);
  console.log(DeletedAvatar);

  return res
    .status(200)
    .json(new ApiResponse(200, { user }, "Avatar updated successfully"));
});

const UpdateCoverImage = asyncHandler(async (req, res) => {
  const CoverImageLocalPath = req.file?.path;

  if (!CoverImageLocalPath)
    throw new ApiError(400, "Cover image file is missing");

  const CoverImage = await UploadFileToCloudinary(CoverImageLocalPath);

  if (!CoverImage.url) {
    throw new ApiError(500, "Something went wrong while uploading CoverImage");
  }

  const user = await User.findByIdAndUpdate(
    req.user?._id,
    {
      $set: {
        coverImage: CoverImage.url,
      },
    },
    { new: true }
  ).select("-password");

  const DeletedCoverImg = await DeleteFileFromCloudinary(req.user.avatar);
  console.log(DeletedCoverImg);

  return res
    .status(200)
    .json(new ApiResponse(200, { user }, "Avatar updated successfully"));
});

const GetUserChannelDetails = asyncHandler(async (req, res) => {
  const { username } = req.params;

  if (!username?.trim()) {
    throw new ApiError(400, "Username not found");
  }

  const Channel = await User.aggregate([
    {
      $match: {
        username: username,
      },
    },
    {
      $lookup: {
        from: "subscriptions",
        localField: "_id",
        foreignField: "channel",
        as: "Subscribers",
      },
    },
    {
      $lookup: {
        from: "subscriptions",
        localField: "_id",
        foreignField: "subscriber",
        as: "SubscribedTo",
      },
    },
    {
      $addFields: {
        subscriberCount: {
          $size: "$Subscribers",
        },
        subscriptionCount: {
          $size: "$SubscribedTo",
        },
        isSubscribed: {
          $cond: {
            if: { $in: [req.user?._id, "$Subscribers"] },
            then: true,
            else: false,
          },
        },
      },
    },
    {
      $project: {
        fullName: 1,
        username: 1,
        avatar: 1,
        coverImage: 1,
        isSubscribed: 1,
        subscriptionCount: 1,
        subscriberCount: 1,
      },
    },
  ]);

  if (!Channel?.length) {
    throw new ApiError(400, "User doesn't exsist");
  }

  return res
    .status(200)
    .json(new ApiResponse(200, Channel[0], "Channel Festched successfully"));
});

const GetWatchHistory = asyncHandler(async (req, res) => {
  const user = await User.aggregate([
    {
      $match: {
        _id: new mongoose.Types.ObjectId(req.user._id),
      },
    },
    {
      $lookup: {
        from: "videos",
        localField: "watchHistory",
        foreignField: "_id",
        as: "WatchHistoryLookUp",
        pipeline: [
          {
            $lookup: {
              from: "users",
              localField: "owner",
              foreignField: "_id",
              as: "owner",
              pipeline: [
                {
                  $project: {
                    fullName: 1,
                    username: 1,
                    avatar: 1,
                  },
                },
              ],
            },
          },
          {
            $addFields: {
              owner: {
                $arrayElemAt: ["$owner", 0],
              },
            },
          },
        ],
      },
    },
  ]);

  return res
    .status(200)
    .json(
      new ApiResponse(
        200,
        user[0].watchHistory,
        "Watch history fetched successfully"
      )
    );
});

export {
  GetUser,
  LogInUser,
  LogOutUser,
  UpdateAvatar,
  RegisterUser,
  GetWatchHistory,
  UpdateCoverImage,
  UpdateUserDetails,
  ChangeCurrentPassword,
  GetUserChannelDetails,
  regenerateRefreshToken,
};
