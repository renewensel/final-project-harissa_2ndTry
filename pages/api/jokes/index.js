import dbConnect from "@/db/dbConnect";
import Joke from "@/db/Joke";

export default async function handler(request, response) {
  await dbConnect()
  if(request.method === "GET"){
    const jokes = await Joke.find()
    console.log(jokes);
    response.status(200).json(jokes);

  }
}
