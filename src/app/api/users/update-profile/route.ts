import { NextResponse, NextRequest } from 'next/server';
import dbConnect from '@/services/db';
import User from '@/models/userModel';

export async function POST(req: NextRequest) {
  await dbConnect();

  // Fetching user data from request body
  const { username, email, password, role } = await req.json();
  const cookies = req.cookies;
  const userId = cookies.get('userId')?.value;

  if (!userId) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    // Find the user by ID and update the fields that are provided
    const updatedUserData: Record<string, any> = {};
    if (username) updatedUserData.username = username;
    if (email) updatedUserData.email = email; 
    if (password) updatedUserData.password = password;
    if (role) updatedUserData.role = role;

    const user = await User.findByIdAndUpdate(userId, updatedUserData, { new: true });

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    return NextResponse.json({ message: 'Profile updated successfully', user });
  } catch (error) {
    console.log('Error updating profile:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
