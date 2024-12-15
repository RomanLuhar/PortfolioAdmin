'use client';

import { useState } from 'react';
import { postData } from 'utils/api';
import { useRouter } from 'next/navigation';
import { Save, AlertTriangle } from 'lucide-react';
import { AdminLayout } from '../../../../components/AdminLayout';
import { toast } from 'react-hot-toast';

const AddProject = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [techStack, setTechStack] = useState('');
  const [liveDemo, setLiveDemo] = useState('');
  const [github, setGithub] = useState('');
  const [photo, setPhoto] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();



  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setPhoto(reader.result as string);
        };
        reader.readAsDataURL(file);
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const projectData = {
      title,
      description,
      techStack: techStack.split(',').map(tech => tech.trim()),
      liveDemo,
      github,
      photo,
    };

    try {
      const response = await postData('/projects', projectData);

      if (response) {
        toast.success('Project added successfully!');
        router.push('/admin/projects');
      }
    } catch (err) {
      toast.error('Failed to add project. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AdminLayout title="Add New Project">
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-700 text-sm font-bold mb-2">
            Project Title
          </label>
          <input
            type="text"
            id="title"
            placeholder="Enter project title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-gray-700 text-sm font-bold mb-2">
            Project Description
          </label>
          <textarea
            id="description"
            placeholder="Enter project description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="techStack" className="block text-gray-700 text-sm font-bold mb-2">
            Tech Stack
          </label>
          <input
            type="text"
            id="techStack"
            placeholder="Enter tech stack (comma separated)"
            value={techStack}
            onChange={(e) => setTechStack(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="liveDemo" className="block text-gray-700 text-sm font-bold mb-2">
            Live Demo URL
          </label>
          <input
            type="url"
            id="liveDemo"
            placeholder="Enter live demo URL"
            value={liveDemo}
            onChange={(e) => setLiveDemo(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="github" className="block text-gray-700 text-sm font-bold mb-2">
            GitHub URL
          </label>
          <input
            type="url"
            id="github"
            placeholder="Enter GitHub URL"
            value={github}
            onChange={(e) => setGithub(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="photo" className="block text-gray-700 text-sm font-bold mb-2">
            Photo
          </label>
          <input
            type="file"
            id="photo"
            onChange={handleFileChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            disabled={isSubmitting}
            className={`bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex items-center ${
              isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            <Save className="mr-2 h-5 w-5" />
            {isSubmitting ? 'Adding...' : 'Add Project'}
          </button>
        </div>
      </form>
    </AdminLayout>
  );
};

export default AddProject;
