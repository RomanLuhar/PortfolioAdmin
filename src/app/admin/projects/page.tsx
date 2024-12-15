'use client'

import { AdminLayout } from '../../../components/AdminLayout'
import { useEffect, useState } from 'react'
import { getData, deleteData } from '@/utils/api'
import Link from 'next/link'
import { FiEdit, FiTrash2, FiPlus } from 'react-icons/fi'
import { toast } from 'react-hot-toast';
import { ConfirmationDialog } from '@/components/ConfirmationDialog'

const ProjectsList = () => {
  const [projects, setProjects] = useState([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedProjectId, setSelectedProjectId] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await getData('/projects');
        if (response && Array.isArray(response.data)) {
          setProjects(response.data);
        } else {
          setProjects([]);
        }
      } catch (error) {
        console.log('Error fetching projects:', error);
        setProjects([]);
      }
    };
    fetchProjects();
  }, []);

  const openDialog = (id) => {
    setSelectedProjectId(id);
    setIsDialogOpen(true);
  };

  const handleConfirmDelete = async () => {
    if (!selectedProjectId) return;

    try {
      const success = await deleteData(`/projects/${selectedProjectId}`);
      if (success) {
        toast.success('Project deleted successfully!');
        setProjects(projects.filter((project) => project._id !== selectedProjectId));
      } else {
        toast.error('Failed to delete project. Please try again.');
      }
    } catch (error) {
      console.log('Error deleting project:', error);
    } finally {
      setIsDialogOpen(false);
      setSelectedProjectId(null);
    }
  };

  const handleCancelDelete = () => {
    setIsDialogOpen(false);
    setSelectedProjectId(null);
  };

  return (
    <AdminLayout title="Projects">
      <div className="container mx-auto p-6">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-700">Projects</h1>
          <Link
            href="/admin/projects/add"
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md"
          >
            <FiPlus size={16} /> Add New Project
          </Link>
        </div>

        {/* Projects Table */}
        <div className="overflow-x-auto">
          <table className="w-full table-auto border-collapse bg-white shadow-md rounded-lg">
            <thead>
              <tr className="bg-gray-100 text-gray-700 uppercase text-sm leading-normal">
                <th className="py-3 px-6 text-left">Name</th>
                <th className="py-3 px-6 text-left">Description</th>
                <th className="py-3 px-6 text-left">TechStack</th>
                <th className="py-3 px-6 text-left">Live Demo</th>
                <th className="py-3 px-6 text-left">GitHub</th>
                <th className="py-3 px-6 text-left">Photo</th>
                <th className="py-3 px-6 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {projects.length > 0 ? (
                projects.map((project) => (
                  <tr
                    key={project._id}
                    className="border-b hover:bg-gray-50 transition"
                  >
                    <td className="py-3 px-6 text-gray-600">{project.title}</td>
                    <td className="py-3 px-6 whitespace-pre-wrap text-gray-600">{project.description}</td>
                    <td className="py-3 px-6 text-gray-600">{project.techStack}</td>
                    <td className="py-3 px-6 text-gray-600">
                      {project.liveDemo}
                    </td>
                    <td className="py-3 px-6 text-gray-600">
                      {project.github}
                    </td>
                    <td className="py-3 px-6 text-gray-600">
                      {project.photo && (
                        <img
                          src={project.photo}
                          alt={`${project.title} photo`}
                          className="mt-2 h-16 w-auto object-contain"
                        />
                      )}
                    </td>
                    <td className="py-3 px-6 text-center">
                      <div className="flex items-center justify-center gap-4">
                        <Link
                          href={`/admin/projects/${project._id}/edit`}
                          className="text-blue-500 hover:text-blue-700"
                        >
                          <FiEdit size={18} />
                        </Link>
                        <button
                          onClick={() => openDialog(project._id)}
                          className="text-red-500 hover:text-red-700"
                        >
                          <FiTrash2 size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={6} className="py-4 text-center text-gray-500">
                    No projects found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Confirmation Dialog */}
      <ConfirmationDialog
        isOpen={isDialogOpen}
        onConfirm={handleConfirmDelete}
        onCancel={handleCancelDelete}
        message="Are you sure you want to delete this project?"
      />
    </AdminLayout>
  );
};

export default ProjectsList;
