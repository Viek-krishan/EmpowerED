import { Teacher } from "../models/teacher.model.js";
import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";
import { UploadFileToCloudinary } from "../utils/Cloudinary.js";
import asyncHandler from "../utils/asyncHandler.js";

const generateAccessAndRefreshTokens = async (userId) => {
  try {
    const user = await Teacher.findById(userId);

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

const RegisterTeacher = asyncHandler(async (req, res) => {
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

  const {
    fullName,
    email,
    username,
    currentQualification,
    isEmployed,
    startTime,
    endTime,
    bio,
    fees,
    age,
    phone,
    passkey,
  } = req.body;


  if (
    [
      fullName,
      email,
      username,
      currentQualification,
      isEmployed,
      bio,
      fees,
      age,
      phone,
      passkey,
    ].some((field) => field?.trim() === "")
  ) {
    throw new ApiError(400, "all field are required");
  }

  if (!age) throw new ApiError(400, "Please enter age");

  if (age < 15)
    throw new ApiError(400, "Minimum age for being a faculty is above 15");

  if (!email.includes("@")) throw new ApiError(400, "Please enter valid email");

  if (!phone) throw new ApiError(400, "Phone number is important");

  if (!startTime || !endTime) {
    throw new ApiError(400, "Missing required fields (startTime, endTime)");
  }

  if (!validateTimeRange(startTime, endTime)) {
    return res.status(400).json({ error: "Invalid time range format" });
  }

  // checking for unique user by checking username or email is already registered or not
  const ExistedUser = await Teacher.findOne({
    $or: [{ username }, { email }],
  });

  if (ExistedUser)
    throw new ApiError(400, "Given username or email is already registered");

  // Taking Profile picture named as avatar
//   console.log(req.files);
  const avatarLocalPath = req.files?.avatar[0]?.path;
  const introVideoLocalPath = req.files?.introVideo[0]?.path;

  if (!avatarLocalPath)
    throw new ApiError(400, "Avatar is required. Please upload");

  if (!introVideoLocalPath)
    throw new ApiError(400, "Intro video is important, Please upload");

  const Avatar = await UploadFileToCloudinary(avatarLocalPath);
  const IntroVideo = await UploadFileToCloudinary(introVideoLocalPath);

  if (!Avatar)
    throw new ApiError(
      401,
      "Something went wrong with Avatar!!, Please upload once again"
    );
  if (!IntroVideo)
    throw new ApiError(
      401,
      "Something went wrong with Introduction Video!!, Please upload once again"
    );
    
    console.log(Avatar, IntroVideo);

  const teacher = await Teacher.create({
    fullName,
    email,
    username,
    currentQualification,
    isEmployed,
    preferredClassTime: {
      startTime,
      endTime,
    },
    bio,
    fees,
    age,
    phone,
    password: passkey,
    avatar: Avatar.url,
    introVideo: IntroVideo.url,
  });

  const CreatedUser = await Teacher.findById(teacher._id).select(
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
        "Teacher registration completed successfully"
      )
    );
});

const LogInTeacher = asyncHandler(async (req, res) => {
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

  const user = await Teacher.findOne({
    $or: [{ username }, { email }],
  });

  if (!user) throw new ApiError(404, "Provided username or email not found");

  const isValid = await Teacher.isPasswordCorrect(password);

  if (!isValid) throw new ApiError(401, "Entered Credential is not correct");

  const { AccessToken, RefreshToken } = await generateAccessAndRefreshTokens(
    user?._id
  );

  const loggedInUser = await Teacher.findById(user._id).select(
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
        "Teacher Loged In successfully"
      )
    );
});

export { RegisterTeacher, LogInTeacher };
