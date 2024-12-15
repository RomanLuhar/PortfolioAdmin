import { NextResponse , NextRequest} from 'next/server';
import dbConnect from '@/services/db';
import Contact from '@/models/contactModel';

export async function POST(request: Request) {
  // Parse the request body
  const { name, emailOrPhone, subject, message } = await request.json();

  // Ensure all fields are provided
  if (!name || !emailOrPhone || !subject || !message) {
    return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
  }

  // Connect to the database
  await dbConnect();

  try {
    // Create a new contact entry
    const newContact = new Contact({
      name,
      emailOrPhone,
      subject,
      message,
    });

    // Save the entry to the database
    await newContact.save();

    // Return success response
    const response = NextResponse.json({ message: 'Contact saved successfully' }, { status: 201 });
    return response;
  } catch (error) {
    console.log('Error saving contact:', error);
    return NextResponse.json({ error: 'Failed to save contact' }, { status: 500 });
  }
}

export async function GET(req: NextRequest) {
  await dbConnect();

  try {
    // Fetch all contact form submissions from the database
    const contacts = await Contact.find({}).sort({ createdAt: -1 });

    return NextResponse.json(
      {
        message: 'Contacts fetched successfully',
        data: contacts,
      },
      { status: 200 }
    );
  } catch (error) {
    console.log('Error fetching contacts:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
