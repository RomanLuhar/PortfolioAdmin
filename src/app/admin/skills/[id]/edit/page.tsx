'use client';

import { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { getDataById, putData } from 'utils/api';
import { Save, Loader2, AlertTriangle } from 'lucide-react';
import { AdminLayout } from '../../../../../components/AdminLayout';
import { toast } from 'react-hot-toast';

const EditSkill = () => {
  const { id } = useParams();
  const [category, setCategory] = useState('');
  const [skillName, setSkillName] = useState('');
  const [logo, setLogo] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchSkill = async () => {
      try {
        const data = await getDataById('/skills', id);
        setCategory(data.data.category);
        setSkillName(data.data.skillName);
        setLogo(data.data.logo || null);
      } catch (err) {
        console.log('Failed to fetch skill:', err);
        setError('Failed to load skill data. Please try again.');
      } finally {
        setIsLoading(false);
      }
    };

    if (id) fetchSkill();
    else {
      setError('Skill ID not provided.');
      setIsLoading(false);
    }
  }, [id]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setLogo(reader.result as string);
        };
        reader.readAsDataURL(file);
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const skillData = {
      category,
      skillName,
      logo,
    };

    try {
      const response = await putData(`/skills/${id}`, skillData);
      if (response) {
        toast.success('Skill updated successfully!');
        router.push('/admin/skills');
      }
    } catch (err) {
      console.log('Failed to update skill:', err);
      setError('Failed to update skill. Please try again.');
      toast.error('Failed to update skill. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isLoading) {
    return (
      <AdminLayout title="Edit Skill">
        <div className="flex justify-center items-center h-64">
          <Loader2 className="h-8 w-8 animate-spin text-blue-500" />
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout title="Edit Skill">
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
          <label htmlFor="category" className="block text-gray-700 text-sm font-bold mb-2">
            Category
          </label>
          <input
            type="text"
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="skillName" className="block text-gray-700 text-sm font-bold mb-2">
            Skill Name
          </label>
          <input
            type="text"
            id="skillName"
            value={skillName}
            onChange={(e) => setSkillName(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="logo" className="block text-gray-700 text-sm font-bold mb-2">
            Logo (Optional)
          </label>
          <input
            type="file"
            id="logo"
            onChange={handleFileChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          {logo && (
            <div className="mt-2">
              <img src={logo} alt="Selected logo" className="max-h-32 rounded-md" />
            </div>
          )}
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
            {isSubmitting ? 'Updating...' : 'Update Skill'}
          </button>
        </div>
      </form>
    </AdminLayout>
  );
};

export default EditSkill;
