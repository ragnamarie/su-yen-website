import dbConnect from "@/db/dbConnect";
import { Image } from "@/db/models/Image";

export default async function handler(req, res) {
  const { id, filename } = req.query;

  await dbConnect();

  const image = await Image.findById(id);

  res.appendHeader("Content-Type", image.mimetype);
  res.appendHeader("Content-Length", image.size);

  res.status(200).send(image.binaryData);
}
