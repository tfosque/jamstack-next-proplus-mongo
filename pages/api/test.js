export default async (req, res) => {
  // const { db } = await connectToDatabase();
  return res.status(200).json([
    {
      email: 'tfosque@gmail.com',
      id: 1,
      name: 'Tim'
    }
  ])

};