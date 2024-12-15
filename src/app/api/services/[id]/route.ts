import { NextRequest, NextResponse } from 'next/server';
import connectDB from '../../../../services/db';
import Service from '../../../../models/serviceModel';

// Handle DELETE requests
export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  await connectDB();
  try {
    const { id } = params;
    const deletedService = await Service.findByIdAndDelete(id);
    
    if (!deletedService) {
      return NextResponse.json(
        {
          message: 'Service not found',
        },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        message: 'Service successfully deleted',
        data: deletedService,
      },
      { status: 200 }
    );
  } catch (error) {
    console.log('Error deleting service:', error);
    return NextResponse.json(
      {
        message: 'Failed to delete service',
        error: error.message || 'Internal Server Error',
      },
      { status: 500 }
    );
  }
}

// Handle GET requests
export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  await connectDB();
  try {
    const { id } = params;
    const service = await Service.findById(id);

    if (!service) {
      return NextResponse.json(
        {
          message: 'Service not found',
        },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        message: 'Service retrieved successfully',
        data: service,
      },
      { status: 200 }
    );
  } catch (error) {
    console.log('Error fetching service:', error);
    return NextResponse.json(
      {
        message: 'Failed to fetch service',
        error: error.message || 'Internal Server Error',
      },
      { status: 500 }
    );
  }
}

// Handle PUT requests
export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
  await connectDB();
  try {
    const { id } = params;
    const body = await req.json();

    const updatedService = await Service.findByIdAndUpdate(id, body, {
      new: true,
      runValidators: true,
    });

    if (!updatedService) {
      return NextResponse.json(
        {
          message: 'Service not found',
        },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        message: 'Service successfully updated',
        data: updatedService,
      },
      { status: 200 }
    );
  } catch (error) {
    console.log('Error updating service:', error);
    return NextResponse.json(
      {
        message: 'Failed to update service',
        error: error.message || 'Internal Server Error',
      },
      { status: 500 }
    );
  }
}
