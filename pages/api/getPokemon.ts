// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

type Data = {
  pokemon: [];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "GET") {
    let pokeUrl = "https://pokeapi.co/api/v2/pokemon";
    try {
      const { data } = await axios.get(pokeUrl);
      const pokemon = data.results;
      res.status(200).json({ pokemon });
    } catch (error) {
      console.error(error);
    }
  }
}
