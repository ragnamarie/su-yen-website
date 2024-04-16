import mongoose, { Document, models } from "mongoose";

const { Schema } = mongoose;

// definition of the image schema
export const imageSchema = new Schema({
  createdAt: { type: Date, default: Date.now },
  originalFilename: String,
  mimetype: String,
  size: Number,
  binaryData: Buffer,
  artName: String,
});

export const Image = models.Image || mongoose.model("Image", imageSchema);
