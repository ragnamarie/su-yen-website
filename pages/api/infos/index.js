import dbConnect from "@/db/dbConnect";
import Info from "@/db/models/Info";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    const infos = await Info.find();
    return response.status(200).json(infos);
  }
}
