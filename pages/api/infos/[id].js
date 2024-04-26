import dbConnect from "@/db/dbConnect";
import Info from "@/db/models/Info";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;

  if (request.method === "GET") {
    const info = await Info.findById(id);

    if (!info) {
      return response.status(404).json({ status: "Not Found" });
    }

    response.status(200).json(info);
  }

  if (request.method === "PATCH") {
    await Info.findByIdAndUpdate(id, {
      $set: request.body,
    });

    response.status(200).json({ message: "Success!" });
  }
}
