import dbConnect from "@/db/dbConnect";
import Contact from "@/db/models/Contact";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    const contacts = await Contact.find();
    return response.status(200).json(contacts);
  }
}
