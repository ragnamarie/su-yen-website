import { dbService } from "@/services/dbService";

export default async function handler(req, res) {
  const { getImages, createImage } = dbService;

  switch (req.method) {
    case "GET":
      res.status(200).json(await getImages());
      break;

    case "POST":
      const newImage = await createImage(req.body.fileData);
      res.status(201).json(newImage);
      break;
  }
  res.status(200).end();
}

export const config = {
  api: {
    bodyParser: {
      sizeLimit: "100mb", // Set desired value here
    },
  },
};
