import connectDB from '../../db';  // Import the MongoDB connection
import User from '../../models/User';  // Import the User model (replace with your model)

export default async function handler(req, res) {
  await connectDB(); // Connect to the DB on each API call

  if (req.method === 'POST') {
    const { email, password } = req.body;

    try {
      const user = await User.findOne({ email });

      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }

      // Add logic for comparing passwords, etc.
      res.status(200).json({ message: 'Login successful', user });

    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ message: 'Server error' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
