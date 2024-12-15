import { NextResponse } from 'next/server'
import bcrypt from 'bcrypt'
import dbConnect from '@/services/db'
import User from '@/models/userModel'

export async function POST(request: Request) {
  const { username, email, password } = await request.json()
  await dbConnect()

  const existingUser = await User.findOne({ email })
  if (existingUser) {
    return NextResponse.json({ error: 'User already exists' }, { status: 409 })
  }
  const hashedPassword = await bcrypt.hash(password, 10)
  const newUser = new User({
    username,
    email,
    password: hashedPassword,
  })

  await newUser.save()

  const response = NextResponse.json({ message: 'User created successfully' }, { status: 201 })
  response.cookies.set('userId', newUser._id.toString(), { httpOnly: true })

  return response
}

