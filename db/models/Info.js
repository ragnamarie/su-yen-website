import mongoose from "mongoose";

const { Schema } = mongoose;

const infoSchema = new Schema({
  phone: { type: String },
  mail: { type: String },
  instagram: { type: String },
  tiktok: { type: String },
  about: { type: String },
});

const Info = mongoose.models.Info || mongoose.model("Info", infoSchema);

export default Info;
