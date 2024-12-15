import mongoose, { Document, Schema } from 'mongoose';

interface IService extends Document {
  title: string;
  description: string;
}

const ServiceSchema: Schema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
}, {
  timestamps: true,
});

const Service = mongoose.models.Service || mongoose.model<IService>('Service', ServiceSchema);

export default Service;
