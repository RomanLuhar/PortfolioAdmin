'use client';

import { useState } from 'react';
import { postData } from 'utils/api';
import { useRouter } from 'next/navigation';
import { Save, AlertTriangle } from 'lucide-react';
import { AdminLayout } from '../../../../components/AdminLayout';
import { toast } from 'react-hot-toast';


const AddService = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const serviceData = { title, description };
    try {
      const response = await postData('/services', serviceData);
      if (response) {
        toast.success('Service added successfully!');
        router.push('/admin/services');
      }
    } catch (err) {
      toast.error('Failed to add service. Please try again.');
      setError('Failed to add service. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AdminLayout title="Add New Service">
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
            Service Name
          </label>
          <input
            type="text"
            id="title"
            placeholder="Enter service name"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-gray-700 text-sm font-bold mb-2">
            Service Description
          </label>
          <textarea
            id="description"
            placeholder="Enter service description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32"
            required
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
            {isSubmitting ? 'Adding...' : 'Add Service'}
          </button>
        </div>
      </form>
    </AdminLayout>
  );
};

export default AddService;
