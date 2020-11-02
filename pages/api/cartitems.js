import { connectToDatabase } from "../../util/mongodb";

export default async (req, res) => {
    const { db } = await connectToDatabase();
    console.log({req})
  
    const cartItems = await db
      .collection("cart")
      .find({})
      .sort({ metacritic: -1 })
      .limit(20)
      .toArray();
  
    res.json(cartItems);
  };

/*   module.exports = (req, res) => {
    res.json({
      body: req.body,
      query: req.query,
      cookies: req.cookies,
    })
  } */