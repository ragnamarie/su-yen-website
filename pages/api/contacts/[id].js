import dbConnect from "@/db/dbConnect";
import Contact from "@/db/models/Contact";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;

  if (request.method === "PATCH") {
    await Contact.findByIdAndUpdate(id, {
      $set: request.body,
    });

    response.status(200).json({ message: "Success!" });
  }
}
