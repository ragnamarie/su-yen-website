import mongoose from "mongoose";

const { Schema } = mongoose;

const contactSchema = new Schema({
  phone: { type: String },
  mail: { type: String },
  instagram: { type: String },
  tiktok: { type: String },
});

const Contact =
  mongoose.models.Contact || mongoose.model("Contact", contactSchema);

export default Contact;
