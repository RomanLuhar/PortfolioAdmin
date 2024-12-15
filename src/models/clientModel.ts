import mongoose, { Schema, Document } from 'mongoose';

interface IClient extends Document {
  name: string;
  logo: string; 
}

const clientSchema: Schema<IClient> = new Schema(
  {
    name: { type: String, required: true },
    logo: { type: String, required: true },
  },
  {
    timestamps: true, 
  }
);

const Client = mongoose.models.Client || mongoose.model<IClient>('Client', clientSchema);

export default Client;
