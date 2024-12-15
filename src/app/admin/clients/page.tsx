'use client'

import { AdminLayout } from '../../../components/AdminLayout'
import { useEffect, useState } from 'react'
import { getData, deleteData } from '@/utils/api'
import Link from 'next/link'
import { FiEdit, FiTrash2, FiPlus } from 'react-icons/fi'
import { toast } from 'react-hot-toast';
import { ConfirmationDialog } from '@/components/ConfirmationDialog'

const ClientsList = () => {
  const [clients, setClients] = useState([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedClientId, setSelectedClientId] = useState(null);

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const response = await getData('/clients');
        if (response && Array.isArray(response.data)) {
          setClients(response.data);
        } else {
          setClients([]);
        }
      } catch (error) {
        console.log('Error fetching clients:', error);
        setClients([]);
      }
    };
    fetchClients();
  }, []);

  const openDialog = (id) => {
    setSelectedClientId(id);
    setIsDialogOpen(true);
  };

  const handleConfirmDelete = async () => {
    if (!selectedClientId) return;

    try {
      const success = await deleteData(`/clients/${selectedClientId}`);
      if (success) {
        toast.success('Client deleted successfully!');
        setClients(clients.filter((client) => client._id !== selectedClientId));
      } else {
        toast.error('Failed to delete client. Please try again.');
      }
    } catch (error) {
      console.log('Error deleting client:', error);
    } finally {
      setIsDialogOpen(false);
      setSelectedClientId(null);
    }
  };

  const handleCancelDelete = () => {
    setIsDialogOpen(false);
    setSelectedClientId(null);
  };

  return (
    <AdminLayout title="Clients">
      <div className="container mx-auto p-6">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-700">Clients</h1>
          <Link
            href="/admin/clients/add"
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md"
          >
            <FiPlus size={16} /> Add New Client
          </Link>
        </div>

        {/* Clients Table */}
        <div className="overflow-x-auto">
          <table className="w-full table-auto border-collapse bg-white shadow-md rounded-lg">
            <thead>
              <tr className="bg-gray-100 text-gray-700 uppercase text-sm leading-normal">
                <th className="py-3 px-6 text-left">Name</th>
                <th className="py-3 px-6 text-left">Logo</th>
                <th className="py-3 px-6 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {clients.length > 0 ? (
                clients.map((client) => (
                  <tr
                    key={client._id}
                    className="border-b hover:bg-gray-50 transition"
                  >
                    <td className="py-3 px-6 text-gray-600">{client.name}</td>
                    <td className="py-3 px-6 text-gray-600">
                      {client.logo && (
                        <img
                          src={client.logo}
                          alt={`${client.name} Logo`}
                          className="mt-2 h-16 w-auto object-contain"
                        />
                      )}
                    </td>
                    <td className="py-3 px-6 text-center">
                      <div className="flex items-center justify-center gap-4">
                        <Link
                          href={`/admin/clients/${client._id}/edit`}
                          className="text-blue-500 hover:text-blue-700"
                        >
                          <FiEdit size={18} />
                        </Link>
                        <button
                          onClick={() => openDialog(client._id)}
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
                  <td
                    colSpan={3}
                    className="py-4 text-center text-gray-500"
                  >
                    No clients found.
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
        message="Are you sure you want to delete this client?"
      />
    </AdminLayout>
  );
};

export default ClientsList;
