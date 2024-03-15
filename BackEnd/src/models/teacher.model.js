import mongoose, { Schema } from "mongoose";

const teacherSchema = new Schema(
  {
    name: {
      type: String,
      require: true,
    },
    
  },
  { timestamps: true }
);

export const Teacher = mongoose.model("Teacher", teacherSchema);
