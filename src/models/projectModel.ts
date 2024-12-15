import mongoose, { Schema, Document } from 'mongoose';

interface IProject extends Document {
  title: string;
  description: string;
  techStack: string[];
  liveDemo: string;
  github: string;
  photo: string;
}

const projectSchema: Schema<IProject> = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  techStack: { type: [String], required: true },
  liveDemo: { type: String },
  github: { type: String },
  photo: { type: String },
}, {
  timestamps: true, 
});

const Project = mongoose.models.Project || mongoose.model<IProject>('Project', projectSchema);

export default Project;
