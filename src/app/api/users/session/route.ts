import { NextResponse , NextRequest} from 'next/server';
import dbConnect from '@/services/db';
import User from '@/models/userModel';

export async function GET(req: NextRequest) {
  await dbConnect();

  const cookies = req.cookies;
  const userId = cookies.get('userId')?.value;

  if (!userId) {
    return NextResponse.json({ user: null }, { status: 200 });
  }

  const user = await User.findById(userId);

  if (!user) {
    return NextResponse.json({ user: null }, { status: 200 });
  }

  return NextResponse.json({ user }, { status: 200 });
}
