import mongoose from 'mongoose'
import Project from '../src/models/projectModel'
import Service from '../src/models/serviceModel'
import Client from '../src/models/clientModel'
import Skill from '../src/models/skillModel'
import Testimonial from '../src/models/testimonialModel'
import User from '../src/models/userModel'
import Contact from '../src/models/contactModel'
const MONGODB_URI = process.env.MONGODB_URI


async function migrate() {
  try {
    await mongoose.connect(MONGODB_URI)
    console.log('Connected to MongoDB');

    // Create the books collection if it doesn't exist
    await Project.createCollection()
    await Service.createCollection()
    await Client.createCollection()
    await Skill.createCollection()
    await Testimonial.createCollection()
    await User.createCollection()
    await Contact.createCollection()
    console.log('Your Collection created.')

    // Add any additional migration steps here
    await Project.updateMany({}, { $set: { newField: 'defaultValue' } })
    await Service.updateMany({}, { $set: { newField: 'defaultValue' } })
    await Client.updateMany({}, { $set: { newField: 'defaultValue' } })
    await Skill.updateMany({}, { $set: { newField: 'defaultValue' } })
    await Testimonial.updateMany({}, { $set: { newField: 'defaultValue' } })
    await User.updateMany({}, { $set: { newField: 'defaultValue' } })
    await Contact.updateMany({}, { $set: { newField: 'defaultValue' } })
    console.log('Migration completed successfully')
  } catch (error) {
    console.error('Migration failed:', error)
  } finally {
    await mongoose.disconnect()
    console.log('Disconnected from MongoDB')
  }
}

migrate()