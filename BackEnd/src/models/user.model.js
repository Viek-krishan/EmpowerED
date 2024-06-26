import mongoose, { Schema } from "mongoose";
import Jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
      index: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    phone: {
      type: Number,
      required: true,
      unique: true,
      trim: true,
    },
    fullName: {
      type: String,
      required: true,
      trim: true,
    },
    gradeLevel: {
      type: String,
      // required: true,
      trim: true,
    },
    learningStyle: {
      type: String,
      // required: true,
      trim: true,
    },
    currentStatus: {
      type: String,
      required: true,
      trim: true,
    },
    age: {
      type: Number,
      required: true,
      trim: true,
    },
    board: {
      type: String,
      required: true,
      trim: true,
    },
    preferredClassTime: {
      type: { type: String, default: "timeRange" }, // Set default as 'timeRange'
      startTime: { type: String }, // Store in string format (e.g., "HH:MM")
      endTime: { type: String }, // Store in string format (e.g., "HH:MM")
    },
    avatar: {
      type: String, // Cloudenary URLs
      required: true,
    },
    watchHistory: [
      {
        type: Schema.Types.ObjectId,
        ref: "Video",
      },
    ],
    interest: [
      {
        type: String,
        trim: true,
      },
    ],
    feedback: {
      type: Schema.Types.ObjectId,
      ref: "Feedback",
    },
    achivement: {
      type: Schema.Types.ObjectId,
      ref: "Achivement",
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
    refreshToken: {
      type: String,
    },
  },
  { timestamps: true }
);

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  this.password = await bcrypt.hash(this.password, 10);
  next();
});

userSchema.methods.isPasswordCorrect = async function (password) {
  return await bcrypt.compare(password, this.password);
};

userSchema.methods.GenerateAccessToken = function () {
  return Jwt.sign(
    {
      _id: this._id,
      email: this.email,
    },
    process.env.ACCESS_TOKEN_SECRATE,
    {
      expiresIn: process.env.ACCESS_TOKEN_EXPIRY,
    }
  );
};
userSchema.methods.GenerateRefreshToken = function () {
  return Jwt.sign(
    {
      _id: this._id,
    },
    process.env.REFRESH_TOKEN_SECRATE,
    {
      expiresIn: process.env.REFRESH_TOKEN_EXPIRY,
    }
  );
};
export const User = mongoose.model("User", userSchema);
