'use client';

import { useEffect, useState } from 'react';
import { useRouter , useParams } from 'next/navigation';
import { getDataById, putData } from 'utils/api';
import { Save, Loader2, AlertTriangle } from 'lucide-react';
import { AdminLayout } from '../../../../../components/AdminLayout';
import { toast } from 'react-hot-toast';

interface Project {
  title: string;
  description: string;
  techStack: string[];
  liveDemo: string;
  github: string;
  photo: string;
}

const EditProject = ({ params }: { params: { id: string } }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [techStack, setTechStack] = useState('');
  const [liveDemo, setLiveDemo] = useState('');
  const [github, setGithub] = useState('');
  const [photo, setPhoto] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const { id } = useParams();

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const data = await getDataById('/projects', id);
        setTitle(data.data.title);
        setDescription(data.data.description);
        setTechStack(data.data.techStack.join(', '));
        setLiveDemo(data.data.liveDemo);
        setGithub(data.data.github);
        setPhoto(data.data.photo);
      } catch (error) {
        console.log('Error fetching project:', error);
        setError('Could not load project data.');
      } finally {
        setIsLoading(false);
      }
    };
  
    if (id) fetchProject();
  }, [id]);

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
    setIsSaving(true);
    setError(null);
    const projectData = {
      title,
      description,
      techStack: techStack.split(',').map(tech => tech.trim()),
      liveDemo,
      github,
      photo,
    };
    try {
      const response = await putData(`/projects/${id}`, projectData);
      if (response) {
        toast.success('Project updated successfully!');
        router.push('/admin/projects');
      }
    } catch (error) {
      console.log('Failed to update project:', error);
      setError('Failed to update project. Please try again.');
      toast.error('Failed to update project. Please try again.');
    } finally {
      setIsSaving(false);
    }
  };

  if (isLoading) {
    return (
      <AdminLayout title="Edit Project">
        <div className="flex justify-center items-center h-64">
          <Loader2 className="h-8 w-8 animate-spin text-blue-500" />
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout title="Edit Project">
      {error && (
        <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4" role="alert">
          <div className="flex">
            <AlertTriangle className="h-5 w-5 mr-2" />
            <p>{error}</p>
          </div>
        </div>
      )}
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-700 text-sm font-bold mb-2">
            Project Title
          </label>
          <input
            type="text"
            id="title"
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
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="techStack" className="block text-gray-700 text-sm font-bold mb-2">
            Tech Stack (comma separated)
          </label>
          <input
            type="text"
            id="techStack"
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
          {photo && (
            <div className="mt-2">
              <img src={photo} alt="Selected" className="max-h-32 rounded-md" />
            </div>
          )}
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            disabled={isSaving}
            className={`bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex items-center ${
              isSaving ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            {isSaving ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Saving...
              </>
            ) : (
              <>
                <Save className="mr-2 h-5 w-5" />
                Save Changes
              </>
            )}
          </button>
        </div>
      </form>
    </AdminLayout>
  );
};

export default EditProject;

