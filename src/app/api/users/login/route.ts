import { NextResponse } from 'next/server';
import bcrypt from 'bcrypt';
import dbConnect from '@/services/db';
import User from '@/models/userModel';

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();

    await dbConnect();

    // Check if the user exists
    const user = await User.findOne({ email: 'romanluhar07@gmail.com' });
    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    // Validate the password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return NextResponse.json({ error: 'Invalid password' }, { status: 401 });
    }

    // Generate response
    const response = NextResponse.json(
      { message: 'Login successful' },
      { status: 200 }
    );

    // Set a cookie (optional)
    response.cookies.set('userId', user._id.toString(), { httpOnly: true });

    return response;
  } catch (error) {
    console.log('Error in login API:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
