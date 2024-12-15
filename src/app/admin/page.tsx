'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { toast } from 'react-hot-toast';

export default function AdminPage() {
  const [user, setUser] = useState(null);

  // Fetch user session from API
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch('/api/users/session');
        if (response.ok) {
          const data = await response.json();
          setUser(data.user);
        } else {
          console.log('Failed to fetch user session');
        }
      } catch (error) {
        console.log('Error fetching user session:', error);
      }
    };

    fetchUser();
  }, []);

  // Handle logout
  const handleLogout = async () => {
    try {
      const response = await fetch('/api/users/logout', {
        method: 'POST',
      });

      if (response.ok) {
        toast.success('Logout successfully!');
        setUser(null); 
      } else {
        toast.error('Failed to logout. Please try again.');
        console.log('Logout failed');
      }
    } catch (error) {
      console.log('Error during logout:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-light-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <h1 className="text-2xl font-semibold text-center mb-6">Admin Dashboard</h1>
            {user ? (
              <div className="divide-y divide-gray-200">
                <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                  <p>Welcome, {user.username}!</p>
                  <p>Email: {user.email}</p>
                  <p>Role: {user.role}</p>
                </div>
                <div className="pt-6 text-base leading-6 font-bold sm:text-lg sm:leading-7">
                  <button
                    onClick={handleLogout}
                    className="text-indigo-600 hover:text-indigo-500"
                  >
                    Logout &rarr;
                  </button>
                </div>
                <div className="pt-6 text-base leading-6 font-bold sm:text-lg sm:leading-7">
                  <Link href="/admin/dashboard" className="text-indigo-600 hover:text-indigo-500">
                    Go to Dashboard &rarr;
                  </Link>
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                <p className="text-center">Please log in or sign up to access the admin dashboard.</p>
                <div className="flex justify-center space-x-4">
                  <Link
                    href="/admin/login"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  >
                    Login
                  </Link>
                  <Link
                    href="/admin/signup"
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                  >
                    Sign Up
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
