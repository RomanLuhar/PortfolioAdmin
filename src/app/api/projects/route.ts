import { NextRequest, NextResponse } from 'next/server';
import connectDB from '../../../services/db';
import Project from '../../../models/projectModel';

// Handle POST requests
export async function POST(req: NextRequest) {
  await connectDB();
  try {
    const body = await req.json();

    const newProject = body;
    const savedProject = await Project.create(newProject);

    return NextResponse.json(
      {
        message: 'Project successfully created',
        data: savedProject,
      },
      { status: 201 }
    );
  } catch (error) {
    console.log('Error saving project:', error);
    return NextResponse.json(
      {
        message: 'Failed to save project',
        error: error.message || 'Internal Server Error',
      },
      { status: 500 }
    );
  }
}

export async function GET(req: NextRequest) {
  await connectDB();
  try {
    const id = req.nextUrl.searchParams.get('id');

    if (id) {
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
          message: 'Project fetched successfully',
          data: project,
        },
        { status: 200 }
      );
    } else {
      // Fetch all projects
      const projects = await Project.find();

      return NextResponse.json(
        {
          message: 'Projects fetched successfully',
          data: projects,
        },
        { status: 200 }
      );
    }
  } catch (error) {
    console.log('Error fetching project(s):', error);
    return NextResponse.json(
      {
        message: 'Failed to fetch project(s)',
        error: error.message || 'Internal Server Error',
      },
      { status: 500 }
    );
  }
}