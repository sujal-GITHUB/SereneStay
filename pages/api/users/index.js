import connectDB from '../../db';  // Import the MongoDB connection function
import User from '../../models/User';  // User model

export default async function handler(req, res) {
  await connectDB();  // Ensure that database is connected

  if (req.method === 'GET') {
    try {
      const users = await User.find();
      res.status(200).json(users);
    } catch (error) {
      console.error('Error fetching users:', error);
      res.status(500).json({ message: 'Server error' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
