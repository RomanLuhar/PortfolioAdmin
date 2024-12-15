'use client'

import { AdminLayout } from '../../../components/AdminLayout'
import { useEffect, useState } from 'react'
import { getData } from '@/utils/api'

const EnquiriesList = () => {
  const [enquiries, setEnquiries] = useState([])

  useEffect(() => {
    const fetchEnquiries = async () => {
      try {
        const response = await getData('/contact')
        if (response && Array.isArray(response.data)) {
          setEnquiries(response.data)
        } else {
          setEnquiries([])
        }
      } catch (error) {
        console.log('Error fetching enquiries:', error)
        setEnquiries([])
      }
    }
    fetchEnquiries()
  }, [])

  // Helper function to format the date
  const formatDate = (isoDate) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' }
    return new Date(isoDate).toLocaleDateString(undefined, options)
  }

  return (
    <AdminLayout title="Enquiries">
      <div className="container mx-auto p-6">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-700">Enquiries Messages</h1>
        </div>

        {/* Enquiries Table */}
        <div className="overflow-x-auto">
          <table className="w-full table-auto border-collapse bg-white shadow-md rounded-lg">
            <thead>
              <tr className="bg-gray-100 text-gray-700 uppercase text-sm leading-normal">
                <th className="py-3 px-6 text-left">Name</th>
                <th className="py-3 px-6 text-left">Email / Phone</th>
                <th className="py-3 px-6 text-left">Subject</th>
                <th className="py-3 px-6 text-left">Message</th>
                <th className="py-3 px-6 text-left">Date</th>
              </tr>
            </thead>
            <tbody>
              {enquiries.length > 0 ? (
                enquiries.map((enquiry) => (
                  <tr
                    key={enquiry._id}
                    className="border-b hover:bg-gray-50 transition"
                  >
                    <td className="py-3 px-6 text-gray-600">{enquiry.name}</td>
                    <td className="py-3 px-6 text-gray-600">{enquiry.emailOrPhone}</td>
                    <td className="py-3 px-6 text-gray-600">{enquiry.subject}</td>
                    <td className="py-3 px-6 whitespace-pre-wrap text-gray-600">{enquiry.message}</td>
                    <td className="py-3 px-6 text-gray-600">{formatDate(enquiry.createdAt)}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={5} className="py-4 text-center text-gray-500">
                    No enquiries found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </AdminLayout>
  )
}

export default EnquiriesList
