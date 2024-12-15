import mongoose, { Document, Schema } from 'mongoose';

// Define an interface for the Contact model
interface IContact extends Document {
  name: string;
  emailOrPhone: string;
  subject: string;
  message: string;
  createdAt: Date;
  updatedAt: Date;
}

const ContactSchema = new Schema<IContact>(
  {
    name: { type: String, required: true },
    emailOrPhone: { type: String, required: true },
    subject: { type: String, required: true },
    message: { type: String, required: true },
  },
  { timestamps: true }
);

// Create the model or use an existing one
const Contact = mongoose.models.Contact || mongoose.model<IContact>('Contact', ContactSchema);

export default Contact;
