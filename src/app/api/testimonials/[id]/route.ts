import { NextRequest, NextResponse } from 'next/server';
import connectDB from '../../../../services/db';
import Testimonial from '../../../../models/testimonialModel'; 

// Handle DELETE requests
export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  await connectDB();
  try {
    const { id } = params;
    const deletedTestimonial = await Testimonial.findByIdAndDelete(id);

    if (!deletedTestimonial) {
      return NextResponse.json(
        {
          message: 'Testimonial not found',
        },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        message: 'Testimonial successfully deleted',
        data: deletedTestimonial,
      },
      { status: 200 }
    );
  } catch (error) {
    console.log('Error deleting testimonial:', error);
    return NextResponse.json(
      {
        message: 'Failed to delete testimonial',
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
    const testimonial = await Testimonial.findById(id);

    if (!testimonial) {
      return NextResponse.json(
        {
          message: 'Testimonial not found',
        },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        message: 'Testimonial retrieved successfully',
        data: testimonial,
      },
      { status: 200 }
    );
  } catch (error) {
    console.log('Error fetching testimonial:', error);
    return NextResponse.json(
      {
        message: 'Failed to fetch testimonial',
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

    const updatedTestimonial = await Testimonial.findByIdAndUpdate(id, body, {
      new: true,
      runValidators: true,
    });

    if (!updatedTestimonial) {
      return NextResponse.json(
        {
          message: 'Testimonial not found',
        },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        message: 'Testimonial successfully updated',
        data: updatedTestimonial,
      },
      { status: 200 }
    );
  } catch (error) {
    console.log('Error updating testimonial:', error);
    return NextResponse.json(
      {
        message: 'Failed to update testimonial',
        error: error.message || 'Internal Server Error',
      },
      { status: 500 }
    );
  }
}
