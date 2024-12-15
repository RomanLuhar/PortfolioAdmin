'use client'

import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { AdminLayout } from '@/components/AdminLayout'
import { getData } from '@/utils/api'

const AdminDashboard = () => {
  const router = useRouter()
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [stats, setStats] = useState([
    { title: 'Total Projects', value: 0, icon: '💼' },
    { title: 'Skills', value: 0, icon: '💻' },
    { title: 'Services', value: 0, icon: '🔧' },
    { title: 'Clients', value: 0, icon: '👥' },
    { title: 'Testimonials', value: 0, icon: '💬' },
    { title: 'Enquiries', value: 0, icon: '💬' },
  ])

  const sections = ['Enquiries','Projects', 'Skills', 'Services', 'Clients', 'Testimonials']

  useEffect(() => {
    async function validateSession() {
      try {
        const response = await fetch('/api/users/session')
        if (!response.ok) {
          router.push('/admin')
        }
      } catch (error) {
        console.log('Error validating session:', error)
        router.push('/admin')
      }
    }

    async function fetchStats() {
      try {
        const projectsData = await getData('/projects')
        const skillsData = await getData('/skills')
        const servicesData = await getData('/services')
        const clientsData = await getData('/clients')
        const testimonialsData = await getData('/testimonials')
        const usersData = await getData('/users')
        const enquiriesData = await getData('/contact')
        setStats([
          { title: 'Total Projects', value: projectsData?.data?.length || 0, icon: '💼' },
          { title: 'Total Skills', value: skillsData?.data?.length || 0, icon: '</>' },
          { title: 'Total Services', value: servicesData?.data?.length || 0, icon: '🛠️' },
          { title: 'Total Clients', value: clientsData?.data?.length || 0, icon: '👥' },
          { title: 'Total Testimonials', value: testimonialsData?.data?.length || 0, icon: '🗣️' },
          { title: 'Total Enquiries', value: enquiriesData?.data?.length || 0, icon: '💬' },
          { title: 'Total Users', value: usersData?.data?.length || 0, icon: '🧑🏻‍💻' },
        ])
        setLoading(false)
      } catch (error) {
        console.log('Error fetching stats:', error)
        setLoading(false)
      }
    }

    validateSession()
    fetchStats()
  }, [router])

  return (
    <AdminLayout title="Dashboard">
      <div className="flex-1 space-y-4 p-8 pt-6">

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          {loading ? (
            <div className="col-span-5 text-center">Loading stats...</div>
          ) : (
            stats.map((stat) => (
              <div key={stat.title} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-medium text-gray-500">{stat.title}</h3>
                  <span className="text-2xl">{stat.icon}</span>
                </div>
                <p className="mt-2 text-3xl font-semibold text-gray-900">{stat.value}</p>
              </div>
            ))
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sections.map((item) => (
            <div key={item} className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg h-64 flex flex-col justify-between">
              <div className="p-8">
                <h3 className="text-2xl font-semibold mb-6 text-gray-800">{item}</h3>
                <div className="flex flex-col space-y-4">
                  <Link 
                    href={`/admin/${item.toLowerCase()}`}
                    className="px-4 py-3 bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100 transition-colors duration-200 text-center font-medium"
                  >
                    View all {item}
                  </Link>
                  {item !== 'Enquiries' && (
                  <Link 
                    href={`/admin/${item.toLowerCase()}/add`}
                    className="px-4 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors duration-200 text-center font-medium"
                  >
                    Add new {item.slice(0, -1)}
                  </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AdminLayout>
  )
}

export default AdminDashboard

