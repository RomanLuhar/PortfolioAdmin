import { NextResponse, NextRequest } from 'next/server';
import dbConnect from '@/services/db';
import User from '@/models/userModel';

export async function GET(req: NextRequest) {
  await dbConnect();

  try {
    // Fetch all users from the database
    const users = await User.find({}).select('-password'); 

    return NextResponse.json(
        {
          message: 'Projects fetched successfully',
          data: users,
        },
        { status: 200 }
      );
  } catch (error) {
    console.log('Error fetching users:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}