import { NextRequest, NextResponse } from 'next/server';
import connectDB from '../../../../services/db';
import Project from '../../../../models/projectModel';

// Handle DELETE requests
export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  await connectDB();
  try {
    const { id } = params;
    const deletedProject = await Project.findByIdAndDelete(id);
    if (!deletedProject) {
      return NextResponse.json(
        {
          message: 'Project not found',
        },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        message: 'Project successfully deleted',
        data: deletedProject,
      },
      { status: 200 }
    );
  } catch (error) {
    console.log('Error deleting project:', error);
    return NextResponse.json(
      {
        message: 'Failed to delete project',
        error: error.message || 'Internal Server Error',
      },
      { status: 500 }
    );
  }
}

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
    await connectDB();
    try {
      const { id } = params;
      const project = await Project.findById(id);
      if (!project) {
        return NextResponse.json(
          {
            message: 'Project not found',
          },
          { status: 404 }
        );
      }
  
      return NextResponse.json(
        {
          message: 'Project retrieved successfully',
          data: project,
        },
        { status: 200 }
      );
    } catch (error) {
      console.log('Error fetching project:', error);
      return NextResponse.json(
        {
          message: 'Failed to fetch project',
          error: error.message || 'Internal Server Error',
        },
        { status: 500 }
      );
    }
  }
  
  export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
    await connectDB();
    try {
      const { id } = params;
      const body = await req.json();
  
      const updatedProject = await Project.findByIdAndUpdate(id, body, {
        new: true,
        runValidators: true,
      });
  
      if (!updatedProject) {
        return NextResponse.json(
          {
            message: 'Project not found',
          },
          { status: 404 }
        );
      }
  
      return NextResponse.json(
        {
          message: 'Project successfully updated',
          data: updatedProject,
        },
        { status: 200 }
      );
    } catch (error) {
      console.log('Error updating project:', error);
      return NextResponse.json(
        {
          message: 'Failed to update project',
          error: error.message || 'Internal Server Error',
        },
        { status: 500 }
      );
    }
  }