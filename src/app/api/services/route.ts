import { NextRequest, NextResponse } from 'next/server';
import connectDB from '../../../services/db';
import Service from '../../../models/serviceModel';

export async function POST(req: NextRequest) {
  await connectDB();
  try {
    const body = await req.json(); 

    const newService = body;
    const savedService = await Service.create(newService); // Create a new service

    return NextResponse.json(
      {
        message: 'Service successfully created',
        data: savedService,
      },
      { status: 201 } 
    );
  } catch (error) {
    console.log('Error saving service:', error);
    return NextResponse.json(
      {
        message: 'Failed to save service',
        error: error.message || 'Internal Server Error',
      },
      { status: 500 } 
    );
  }
}

// Handle GET requests for fetching services
export async function GET(req: NextRequest) {
  await connectDB(); 
  try {
    const id = req.nextUrl.searchParams.get('id'); 

    if (id) {
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
          message: 'Service fetched successfully',
          data: service,
        },
        { status: 200 } 
      );
    } else {
      // Fetch all services
      const services = await Service.find();

      return NextResponse.json(
        {
          message: 'Services fetched successfully',
          data: services,
        },
        { status: 200 } 
      );
    }
  } catch (error) {
    console.log('Error fetching service(s):', error);
    return NextResponse.json(
      {
        message: 'Failed to fetch service(s)',
        error: error.message || 'Internal Server Error',
      },
      { status: 500 } 
    );
  }
}
