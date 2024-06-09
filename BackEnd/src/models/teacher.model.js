import mongoose, { Schema } from "mongoose";
import Jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const teacherSchema = new Schema(
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
    currentQualification: {
      type: String,
      trim: true,
    },
    bio: {
      type: String,
      trim: true,
    },
    fees: {
      type: Number,
      trim: true,
    },
    isEmployed: {
      type: String,
      trim: true,
    },
    preferredClassTime: {
      type: { type: String, default: "timeRange" }, // Set default as 'timeRange'
      startTime: { type: String }, // Store in string format (e.g., "HH:MM")
      endTime: { type: String }, // Store in string format (e.g., "HH:MM")
    },
    age: {
      type: Number,
      required: true,
      trim: true,
    },
    avatar: {
      type: String, // Cloudenary URLs
      required: true,
    },
    introVideo: {
      type: String, // Cloudenary URLs
      required: true,
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

teacherSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  this.password = await bcrypt.hash(this.password, 10);
  next();
});

teacherSchema.methods.isPasswordCorrect = async function (password) {
  return await bcrypt.compare(password, this.password);
};

teacherSchema.methods.GenerateAccessToken = function () {
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

teacherSchema.methods.GenerateRefreshToken = function () {
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

export const Teacher = mongoose.model("Teacher", teacherSchema);
