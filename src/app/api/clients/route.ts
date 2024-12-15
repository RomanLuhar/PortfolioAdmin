import { NextRequest, NextResponse } from 'next/server';
import connectDB from '../../../services/db';
import Client from '../../../models/clientModel';

// Handle POST requests
export async function POST(req: NextRequest) {
  await connectDB();
  try {
    const body = await req.json();

    const { name, logo } = body;

    if (!name || !logo) {
      return NextResponse.json(
        { message: 'Name and Logo are required.' },
        { status: 400 }
      );
    }

    // Save client to the database
    const newClient = { name, logo };
    const savedClient = await Client.create(newClient);

    return NextResponse.json(
      {
        message: 'Client successfully created',
        data: savedClient,
      },
      { status: 201 }
    );
  } catch (error) {
    console.log('Error saving client:', error);
    return NextResponse.json(
      {
        message: 'Failed to save client',
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
      const client = await Client.findById(id);

      if (!client) {
        return NextResponse.json(
          { message: 'Client not found' },
          { status: 404 }
        );
      }

      return NextResponse.json(
        {
          message: 'Client fetched successfully',
          data: client,
        },
        { status: 200 }
      );
    } else {
      const clients = await Client.find();

      return NextResponse.json(
        {
          message: 'Clients fetched successfully',
          data: clients,
        },
        { status: 200 }
      );
    }
  } catch (error) {
    console.log('Error fetching client(s):', error);
    return NextResponse.json(
      {
        message: 'Failed to fetch client(s)',
        error: error.message || 'Internal Server Error',
      },
      { status: 500 }
    );
  }
}
