'use client'

import { AdminLayout } from '../../../components/AdminLayout'
import { useEffect, useState } from 'react'
import { getData, deleteData } from '@/utils/api'
import Link from 'next/link'
import { FiEdit, FiTrash2, FiPlus } from 'react-icons/fi'
import { toast } from 'react-hot-toast'
import { ConfirmationDialog } from '@/components/ConfirmationDialog'

const TestimonialsList = () => {
  const [testimonials, setTestimonials] = useState([])
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [selectedTestimonialId, setSelectedTestimonialId] = useState(null)

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await getData('/testimonials')
        if (response && Array.isArray(response.data)) {
          setTestimonials(response.data)
        } else {
          setTestimonials([])
        }
      } catch (error) {
        console.log('Error fetching testimonials:', error)
        setTestimonials([])
      }
    }
    fetchTestimonials()
  }, [])

  const openDialog = (id) => {
    setSelectedTestimonialId(id)
    setIsDialogOpen(true)
  }

  const handleConfirmDelete = async () => {
    if (!selectedTestimonialId) return

    try {
      const success = await deleteData(`/testimonials/${selectedTestimonialId}`)
      if (success) {
        toast.success('Testimonial deleted successfully!')
        setTestimonials(testimonials.filter((testimonial) => testimonial._id !== selectedTestimonialId))
      } else {
        toast.error('Failed to delete testimonial. Please try again.')
      }
    } catch (error) {
      console.log('Error deleting testimonial:', error)
    } finally {
      setIsDialogOpen(false)
      setSelectedTestimonialId(null)
    }
  }

  const handleCancelDelete = () => {
    setIsDialogOpen(false)
    setSelectedTestimonialId(null)
  }

  return (
    <AdminLayout title="Testimonials">
      <div className="container mx-auto p-6">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-700">Testimonials</h1>
          <Link
            href="/admin/testimonials/add"
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md"
          >
            <FiPlus size={16} /> Add New Testimonial
          </Link>
        </div>

        {/* Testimonials Table */}
        <div className="overflow-x-auto">
          <table className="w-full table-auto border-collapse bg-white shadow-md rounded-lg">
            <thead>
              <tr className="bg-gray-100 text-gray-700 uppercase text-sm leading-normal">
                <th className="py-3 px-6 text-left">Name</th>
                <th className="py-3 px-6 text-left">Role</th>
                <th className="py-3 px-6 text-left">Message</th>
                <th className="py-3 px-6 text-left">Photo</th>
                <th className="py-3 px-6 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {testimonials.length > 0 ? (
                testimonials.map((testimonial) => (
                  <tr
                    key={testimonial._id}
                    className="border-b hover:bg-gray-50 transition"
                  >
                    <td className="py-3 px-6 text-gray-600">{testimonial.name}</td>
                    <td className="py-3 px-6 text-gray-600">{testimonial.role}</td>
                    <td className="py-3 px-6 whitespace-pre-wrap text-gray-600">{testimonial.message}</td>
                    <td className="py-3 px-6 text-gray-600">
                      {testimonial.photo && (
                        <img
                          src={testimonial.photo}
                          alt={`${testimonial.name} photo`}
                          className="mt-2 h-16 w-auto object-contain"
                        />
                      )}
                    </td>
                    <td className="py-3 px-6 text-center">
                      <div className="flex items-center justify-center gap-4">
                        <Link
                          href={`/admin/testimonials/${testimonial._id}/edit`}
                          className="text-blue-500 hover:text-blue-700"
                        >
                          <FiEdit size={18} />
                        </Link>
                        <button
                          onClick={() => openDialog(testimonial._id)}
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
                  <td colSpan={5} className="py-4 text-center text-gray-500">
                    No testimonials found.
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
        message="Are you sure you want to delete this testimonial?"
      />
    </AdminLayout>
  )
}

export default TestimonialsList
