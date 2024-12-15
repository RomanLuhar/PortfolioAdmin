'use client'

import { AdminLayout } from '../../../components/AdminLayout'
import { useEffect, useState } from 'react'
import { getData, deleteData } from '@/utils/api'
import Link from 'next/link'
import { FiEdit, FiTrash2, FiPlus } from 'react-icons/fi'
import { toast } from 'react-hot-toast'
import { ConfirmationDialog } from '@/components/ConfirmationDialog'

const ServicesList = () => {
  const [services, setServices] = useState([])
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [selectedServiceId, setSelectedServiceId] = useState(null)

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await getData('/services')
        if (response && Array.isArray(response.data)) {
          setServices(response.data)
        } else {
          setServices([])
        }
      } catch (error) {
        console.log('Error fetching services:', error)
        setServices([])
      }
    }
    fetchServices()
  }, [])

  const openDialog = (id) => {
    setSelectedServiceId(id)
    setIsDialogOpen(true)
  }

  const handleConfirmDelete = async () => {
    if (!selectedServiceId) return

    try {
      const success = await deleteData(`/services/${selectedServiceId}`)
      if (success) {
        toast.success('Service deleted successfully!')
        setServices(services.filter((service) => service._id !== selectedServiceId))
      } else {
        toast.error('Failed to delete service. Please try again.')
      }
    } catch (error) {
      console.log('Error deleting service:', error)
    } finally {
      setIsDialogOpen(false)
      setSelectedServiceId(null)
    }
  }

  const handleCancelDelete = () => {
    setIsDialogOpen(false)
    setSelectedServiceId(null)
  }

  return (
    <AdminLayout title="Services">
      <div className="container mx-auto p-6">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-700">Services</h1>
          <Link
            href="/admin/services/add"
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md"
          >
            <FiPlus size={16} /> Add New Service
          </Link>
        </div>

        {/* Services Table */}
        <div className="overflow-x-auto">
          <table className="w-full table-auto border-collapse bg-white shadow-md rounded-lg">
            <thead>
              <tr className="bg-gray-100 text-gray-700 uppercase text-sm leading-normal">
                <th className="py-3 px-6 text-left">Name</th>
                <th className="py-3 px-6 text-left">Description</th>
                <th className="py-3 px-6 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {services.length > 0 ? (
                services.map((service) => (
                  <tr key={service._id} className="border-b hover:bg-gray-50 transition">
                    <td className="py-3 px-6 text-gray-600">{service.title}</td>
                    <td className="py-3 px-6 whitespace-pre-wrap text-gray-600">{service.description}</td>
                    <td className="py-3 px-6 text-center">
                      <div className="flex items-center justify-center gap-4">
                        <Link
                          href={`/admin/services/${service._id}/edit`}
                          className="text-blue-500 hover:text-blue-700"
                        >
                          <FiEdit size={18} />
                        </Link>
                        <button
                          onClick={() => openDialog(service._id)}
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
                  <td colSpan={3} className="py-4 text-center text-gray-500">
                    No services found.
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
        message="Are you sure you want to delete this service?"
      />
    </AdminLayout>
  )
}

export default ServicesList
