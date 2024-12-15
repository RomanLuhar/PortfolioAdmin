import { NextRequest, NextResponse } from 'next/server';
import connectDB from '../../../services/db';
import Testimonial from '../../../models/testimonialModel'; 

// Handle POST requests to create a new testimonial
export async function POST(req: NextRequest) {
  await connectDB();
  try {
    const body = await req.json();

    const newTestimonial = body;
    const savedTestimonial = await Testimonial.create(newTestimonial);

    return NextResponse.json(
      {
        message: 'Testimonial successfully created',
        data: savedTestimonial,
      },
      { status: 201 }
    );
  } catch (error) {
    console.log('Error saving testimonial:', error);
    return NextResponse.json(
      {
        message: 'Failed to save testimonial',
        error: error.message || 'Internal Server Error',
      },
      { status: 500 }
    );
  }
}

// Handle GET requests for all testimonials or a single testimonial
export async function GET(req: NextRequest) {
  await connectDB();
  try {
    const id = req.nextUrl.searchParams.get('id');

    if (id) {
      // Fetch a single testimonial by ID
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
          message: 'Testimonial fetched successfully',
          data: testimonial,
        },
        { status: 200 }
      );
    } else {
      // Fetch all testimonials
      const testimonials = await Testimonial.find();

      return NextResponse.json(
        {
          message: 'Testimonials fetched successfully',
          data: testimonials,
        },
        { status: 200 }
      );
    }
  } catch (error) {
    console.log('Error fetching testimonial(s):', error);
    return NextResponse.json(
      {
        message: 'Failed to fetch testimonial(s)',
        error: error.message || 'Internal Server Error',
      },
      { status: 500 }
    );
  }
}
