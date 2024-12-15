import mongoose, { Document, Schema } from 'mongoose';

interface ISkill extends Document {
  category: string;
  skillName: string;
  logo: string;
}

const SkillSchema: Schema = new Schema({
  category: { type: String, required: true }, 
  skillName: { type: String, required: true },
  logo: { type: String },
}, {
  timestamps: true,
});

const Skill = mongoose.models.Skill || mongoose.model<ISkill>('Skill', SkillSchema);

export default Skill;
