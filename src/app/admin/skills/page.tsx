'use client'

import { AdminLayout } from '../../../components/AdminLayout'
import { useEffect, useState } from 'react'
import { getData, deleteData } from '@/utils/api'
import Link from 'next/link'
import { FiEdit, FiTrash2, FiPlus } from 'react-icons/fi'
import { toast } from 'react-hot-toast'
import { ConfirmationDialog } from '@/components/ConfirmationDialog'

const SkillsList = () => {
  const [skills, setSkills] = useState([])
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [selectedSkillId, setSelectedSkillId] = useState(null)

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const response = await getData('/skills')
        if (response && Array.isArray(response.data)) {
          setSkills(response.data)
        } else {
          setSkills([])
        }
      } catch (error) {
        console.log('Error fetching skills:', error)
        setSkills([])
      }
    }
    fetchSkills()
  }, [])

  const openDialog = (id) => {
    setSelectedSkillId(id)
    setIsDialogOpen(true)
  }

  const handleConfirmDelete = async () => {
    if (!selectedSkillId) return

    try {
      const success = await deleteData(`/skills/${selectedSkillId}`)
      if (success) {
        toast.success('Skill deleted successfully!')
        setSkills(skills.filter((skill) => skill._id !== selectedSkillId))
      } else {
        toast.error('Failed to delete skill. Please try again.')
      }
    } catch (error) {
      console.log('Error deleting skill:', error)
    } finally {
      setIsDialogOpen(false)
      setSelectedSkillId(null)
    }
  }

  const handleCancelDelete = () => {
    setIsDialogOpen(false)
    setSelectedSkillId(null)
  }

  return (
    <AdminLayout title="Skills">
      <div className="container mx-auto p-6">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-700">Skills</h1>
          <Link
            href="/admin/skills/add"
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md"
          >
            <FiPlus size={16} /> Add New Skill
          </Link>
        </div>

        {/* Skills Table */}
        <div className="overflow-x-auto">
          <table className="w-full table-auto border-collapse bg-white shadow-md rounded-lg">
            <thead>
              <tr className="bg-gray-100 text-gray-700 uppercase text-sm leading-normal">
                <th className="py-3 px-6 text-left">Name</th>
                <th className="py-3 px-6 text-left">Category</th>
                <th className="py-3 px-6 text-left">Logo</th>
                <th className="py-3 px-6 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {skills.length > 0 ? (
                skills.map((skill) => (
                  <tr key={skill._id} className="border-b hover:bg-gray-50 transition">
                    <td className="py-3 px-6 text-gray-600">{skill.skillName}</td>
                    <td className="py-3 px-6 text-gray-600">{skill.category}</td>
                    <td className="py-3 px-6 text-gray-600">
                      {skill.logo && (
                        <img
                          src={skill.logo}
                          alt={`${skill.skillName} Logo`}
                          className="mt-2 h-16 w-auto object-contain"
                        />
                      )}
                    </td>
                    <td className="py-3 px-6 text-center">
                      <div className="flex items-center justify-center gap-4">
                        <Link
                          href={`/admin/skills/${skill._id}/edit`}
                          className="text-blue-500 hover:text-blue-700"
                        >
                          <FiEdit size={18} />
                        </Link>
                        <button
                          onClick={() => openDialog(skill._id)}
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
                  <td colSpan={4} className="py-4 text-center text-gray-500">
                    No skills found.
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
        message="Are you sure you want to delete this skill?"
      />
    </AdminLayout>
  )
}

export default SkillsList
