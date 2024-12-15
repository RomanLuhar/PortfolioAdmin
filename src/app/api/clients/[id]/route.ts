import { NextRequest, NextResponse } from 'next/server';
import connectDB from '../../../../services/db';
import Client from '../../../../models/clientModel';

// Handle DELETE requests
export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  await connectDB();
  try {
    const { id } = params;
    const deletedClient = await Client.findByIdAndDelete(id);

    if (!deletedClient) {
      return NextResponse.json(
        {
          message: 'Client not found',
        },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        message: 'Client successfully deleted',
        data: deletedClient,
      },
      { status: 200 }
    );
  } catch (error) {
    console.log('Error deleting client:', error);
    return NextResponse.json(
      {
        message: 'Failed to delete client',
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
    const client = await Client.findById(id);

    if (!client) {
      return NextResponse.json(
        {
          message: 'Client not found',
        },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        message: 'Client retrieved successfully',
        data: client,
      },
      { status: 200 }
    );
  } catch (error) {
    console.log('Error fetching client:', error);
    return NextResponse.json(
      {
        message: 'Failed to fetch client',
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

    const updatedClient = await Client.findByIdAndUpdate(id, body, {
      new: true,
      runValidators: true,
    });

    if (!updatedClient) {
      return NextResponse.json(
        {
          message: 'Client not found',
        },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        message: 'Client successfully updated',
        data: updatedClient,
      },
      { status: 200 }
    );
  } catch (error) {
    console.log('Error updating client:', error);
    return NextResponse.json(
      {
        message: 'Failed to update client',
        error: error.message || 'Internal Server Error',
      },
      { status: 500 }
    );
  }
}
