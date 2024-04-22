import dbConnect from "@/db/dbConnect";
import { Image } from "@/db/models/Image";

export default async function handler(req, res) {
  const { id, filename } = req.query;

  await dbConnect();

  const image = await Image.findById(id);

  res.appendHeader("Content-Type", image.mimetype);
  res.appendHeader("Content-Length", image.size);

  res.status(200).send(image.binaryData);

  if (req.method === "DELETE") {
    await Image.findByIdAndDelete(id);

    response.status(200).json({ message: "Success!" });
  }

  if (req.method === "PATCH") {
    await Image.findByIdAndUpdate(id, {
      $set: req.body,
    });

    response.status(200).json({ message: "Success!" });
  }
}
