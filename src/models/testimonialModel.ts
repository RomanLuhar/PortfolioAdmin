import mongoose, { Document, Schema } from 'mongoose';

interface ITestimonial extends Document {
  name: string;
  role: string;
  message: string;
  photo: string; 
}

const TestimonialSchema: Schema = new Schema({
  name: { type: String, required: true },
  role: { type: String, required: true },
  message: { type: String, required: true },
  photo: { type: String }, 
}, {
  timestamps: true,
});

const Testimonial = mongoose.models.Testimonial || mongoose.model<ITestimonial>('Testimonial', TestimonialSchema);

export default Testimonial;
