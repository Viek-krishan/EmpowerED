import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const achivementSchema = new Schema(
  {
    field: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

achivementSchema.plugin(mongooseAggregatePaginate);

export const Achivement = mongoose.model("Achivement", achivementSchema);
