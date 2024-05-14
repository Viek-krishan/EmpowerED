import { v2 as cloudinary } from "cloudinary";
import fs from "fs";
import ApiError from "./ApiError.js";

cloudinary.config({
  cloud_name: "dz1tape4y",
  api_key: "681621269488143",
  api_secret: "ZcwESjd413ZjKZKF73_f82taRC0",
});

const UploadFileToCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null;

    const Response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });

    const resp = await cloudinary.uploader.fs; // console.log("file uploaded successfully", Response);
    fs.unlinkSync(localFilePath);
    return Response;
  } catch (error) {
    console.log(error);
    fs.unlinkSync(localFilePath);
    return null;
  }
};

const DeleteFileFromCloudinary = async (publicId, type) => {
  if (!publicId) throw new ApiError(400, "file url is important");

  const Response = await cloudinary.api
    .delete_resources([publicId], {
      type: "upload",
      resource_type: type,
    })
    .then(function (result) {
      console.log("result from cloudinary file:", result);
      return result;
    })
    .catch((error) => {
      console.log(error);
      throw new ApiError(500, "file deletion failed");
    });

  return Response;
};

export { UploadFileToCloudinary, DeleteFileFromCloudinary };
