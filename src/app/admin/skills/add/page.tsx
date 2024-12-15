'use client';

import { useState } from 'react';
import { postData } from 'utils/api';
import { useRouter } from 'next/navigation';
import { Save, AlertTriangle } from 'lucide-react';
import { AdminLayout } from '../../../../components/AdminLayout';
import { toast } from 'react-hot-toast';

const AddSkill = () => {
  const [skillName, setSkillName] = useState('');
  const [category, setCategory] = useState('');
  const [logo, setLogo] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const skillData = {
      skillName,
      category,
      logo,
    };

    try {
      const response = await postData('/skills', skillData);
      if (response) {
        toast.success('Skill added successfully!');
        router.push('/admin/skills');
      }
    } catch (err) {
      toast.error('Failed to add skill. Please try again.');
      setError('Failed to add skill. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

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

  return (
    <AdminLayout title="Add New Skill">
      {error && (
        <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4" role="alert">
          <div className="flex">
            <AlertTriangle className="h-5 w-5 mr-2" />
            <p>{error}</p>
          </div>
        </div>
      )}
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        {/* Skill Name */}
        <div className="mb-4">
          <label htmlFor="skillName" className="block text-gray-700 text-sm font-bold mb-2">
            Skill Name
          </label>
          <input
            type="text"
            id="skillName"
            placeholder="Enter skill name"
            value={skillName}
            onChange={(e) => setSkillName(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        {/* Category */}
        <div className="mb-4">
          <label htmlFor="category" className="block text-gray-700 text-sm font-bold mb-2">
            Category
          </label>
          <input
            type="text"
            id="category"
            placeholder="Enter skill category (e.g., Frontend, Backend)"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        {/* Logo URL */}
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
        {/* Submit Button */}
        <div className="flex items-center justify-between">
          <button
            type="submit"
            disabled={isSubmitting}
            className={`bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex items-center ${
              isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            <Save className="mr-2 h-5 w-5" />
            {isSubmitting ? 'Adding...' : 'Add Skill'}
          </button>
        </div>
      </form>
    </AdminLayout>
  );
};

export default AddSkill;
