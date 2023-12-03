import dbConnect from "@/db/dbConnect";
import Joke from "@/db/Joke";

export default async function handler(request, response) {
  await dbConnect()
  const { id } = request.query;
  const joke = await Joke.findById(id)

  if (!joke) {
    return response.status(404).json({ status: "Not Found" });
  }

  response.status(200).json(joke);
}
