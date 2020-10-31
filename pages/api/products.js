import { connectToDatabase } from "../../util/mongodb";

/* TODO: add error handlilng try catch */
export default async (req, res) => {
    const { db } = await connectToDatabase();
  
    const products = await db
      .collection("cartlarge")
      .find({})
      .sort({ metacritic: -1 })
      .limit(20)
      .toArray();
  
    res.json(products);
  };