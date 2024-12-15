import { NextRequest, NextResponse } from 'next/server';
import connectDB from '../../../../services/db';
import Skill from '../../../../models/skillModel';

// Handle DELETE requests
export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  await connectDB();
  try {
    const { id } = params;
    const deletedSkill = await Skill.findByIdAndDelete(id);
    
    if (!deletedSkill) {
      return NextResponse.json(
        {
          message: 'Skill not found',
        },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        message: 'Skill successfully deleted',
        data: deletedSkill,
      },
      { status: 200 }
    );
  } catch (error) {
    console.log('Error deleting skill:', error);
    return NextResponse.json(
      {
        message: 'Failed to delete skill',
        error: error.message || 'Internal Server Error',
      },
      { status: 500 }
    );
  }
}

// Handle GET requests
export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  await connectDB();
  try {
    const { id } = params;
    const skill = await Skill.findById(id);

    if (!skill) {
      return NextResponse.json(
        {
          message: 'Skill not found',
        },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        message: 'Skill retrieved successfully',
        data: skill,
      },
      { status: 200 }
    );
  } catch (error) {
    console.log('Error fetching skill:', error);
    return NextResponse.json(
      {
        message: 'Failed to fetch skill',
        error: error.message || 'Internal Server Error',
      },
      { status: 500 }
    );
  }
}

// Handle PUT requests
export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  await connectDB();
  try {
    const { id } = params;
    const body = await req.json();

    const updatedSkill = await Skill.findByIdAndUpdate(id, body, {
      new: true,
      runValidators: true,
    });

    if (!updatedSkill) {
      return NextResponse.json(
        {
          message: 'Skill not found',
        },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        message: 'Skill successfully updated',
        data: updatedSkill,
      },
      { status: 200 }
    );
  } catch (error) {
    console.log('Error updating skill:', error);
    return NextResponse.json(
      {
        message: 'Failed to update skill',
        error: error.message || 'Internal Server Error',
      },
      { status: 500 }
    );
  }
}
