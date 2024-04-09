import mongoose from "mongoose";
import { Comment } from "../middlewares/models/comment.model.js";
import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { User } from "../middlewares/models/user.model.js";
import { Feedback } from "../middlewares/models/feedback.model.js";
import { Teacher } from "../middlewares/models/teacher.model.js";

const getAllFeedback = asyncHandler(async (req, res) => {
  //TODO: get all comments for a video
});

const addFeedback = asyncHandler(async (req, res) => {
  // TODO: add a feedback

  const { content, FeedbackReciver } = req.body;

  if (!content) {
    throw new ApiError(401, "Content not found");
  }

  const existedUser = await Teacher.findById(FeedbackReciver);

  if (!existedUser) throw new ApiError(401, "feedback reciver not found");

  const FeedBack = await Feedback.create({
    owner: req.user._id,
    content,
    reciver: FeedbackReciver,
  });

  if (!Feedback)
    throw new ApiError(
      500,
      "something went wrong while creating feedback ! please try again"
    );

  res
    .status(201)
    .json(new ApiResponse(201, FeedBack, "Feedback collected successfully"));
});

const updateFeedBack = asyncHandler(async (req, res) => {
  // TODO: update a comment

  const { content, feedbackId } = req.body;

  if (!content || !feedbackId)
    throw new ApiError(401, "all credential are required");

  const existedFeedback = await Teacher.findById(feedbackId);

  if (!existedFeedback)
    throw new ApiError(401, "Reciver Id or feedback is not correct");

  const UpdatedFeedback = await Feedback.findOneAndUpdate(
    feedbackId,
    {
      $set: { content },
    },
    {
      new: true,
    }
  );

  if (!UpdatedFeedback)
    throw new ApiError(500, "something went wrong while updating feedback");

  res
    .status(201)
    .json(new ApiResponse(201, UpdatedFeedback, "Updation compleated"));
});

const deleteFeedback = asyncHandler(async (req, res) => {
  // TODO: delete a comment
});

export { getAllFeedback, addFeedback, updateFeedBack, deleteFeedback };
