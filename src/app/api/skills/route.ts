import { NextRequest, NextResponse } from 'next/server';
import connectDB from '../../../services/db'; 
import Skill from '../../../models/skillModel';

// Handle POST requests
export async function POST(req: NextRequest) {
  await connectDB(); 
  try {
    const body = await req.json(); // Parse the request body

    const { category, skillName, logo } = body;

    // Validate input data
    if (!category || !skillName) {
      return NextResponse.json(
        { message: 'Category and Skill Name are required.' },
        { status: 400 }
      );
    }

    // Save skill to the database
    const newSkill = { category, skillName, logo };
    const savedSkill = await Skill.create(newSkill);

    return NextResponse.json(
      {
        message: 'Skill successfully created',
        data: savedSkill,
      },
      { status: 201 }
    );
  } catch (error) {
    console.log('Error saving skill:', error);
    return NextResponse.json(
      {
        message: 'Failed to save skill',
        error: error.message || 'Internal Server Error',
      },
      { status: 500 }
    );
  }
}

// Handle GET requests for all skills or a single skill
export async function GET(req: NextRequest) {
  await connectDB(); 
  try {
    const id = req.nextUrl.searchParams.get('id');

    if (id) {
      // Fetch a single skill by ID
      const skill = await Skill.findById(id);

      if (!skill) {
        return NextResponse.json(
          { message: 'Skill not found' },
          { status: 404 }
        );
      }

      return NextResponse.json(
        {
          message: 'Skill fetched successfully',
          data: skill,
        },
        { status: 200 }
      );
    } else {
      // Fetch all skills
      const skills = await Skill.find();

      return NextResponse.json(
        {
          message: 'Skills fetched successfully',
          data: skills,
        },
        { status: 200 }
      );
    }
  } catch (error) {
    console.log('Error fetching skill(s):', error);
    return NextResponse.json(
      {
        message: 'Failed to fetch skill(s)',
        error: error.message || 'Internal Server Error',
      },
      { status: 500 }
    );
  }
}
