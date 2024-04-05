import dbConnect from "@/db/dbConnect";
import { Image } from "@/db/models/Image";
import { createFrontendImageFromDbImage } from "./ImageService";

export const dbService = {
  async createImage({ originalFilename, size, mimetype, binaryData }) {
    await dbConnect();
    const newImage = await Image.create({
      originalFilename,
      size,
      mimetype,
      binaryData,
    });

    return createFrontendImageFromDbImage(newImage);
  },
  async getImages() {
    await dbConnect();
    return (await Image.find()).map((image) =>
      createFrontendImageFromDbImage(image)
    );
  },
};
