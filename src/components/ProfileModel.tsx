'use client';

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface ProfileModalProps {
  onClose: () => void;
}

const ProfileModal: React.FC<ProfileModalProps> = ({ onClose }) => {
  const [profileData, setProfileData] = useState({
    username: '',
    email: '',
    password: '',
    role: '',
  });

  useEffect(() => {
    const fetchProfile = async () => {
      const res = await fetch('/api/users/session');
      const data = await res.json();
      if (data.user) {
        setProfileData({
          username: data.user.username || '',
          email: data.user.email || '',
          password: '', 
          role: data.user.role || '',
        });
      }
    };
    fetchProfile();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProfileData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    const res = await fetch('/api/users/update-profile', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: profileData.username,
        role: profileData.role,
      }), 
    });

    if (res.ok) {
      alert('Profile updated successfully!');
      onClose();
    } else {
      alert('Failed to update profile.');
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg p-6 w-96 shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Update Profile</h2>
        <div className="space-y-4">
          {/* Username Field */}
          <Input
            name="username"
            value={profileData.username}
            onChange={handleInputChange}
            placeholder="Username"
          />

          {/* Email Field (Read-only) */}
          <Input
            name="email"
            value={profileData.email}
            onChange={handleInputChange}
            placeholder="Email"
            disabled
          />

          {/* Role Field */}
          <Input
            name="role"
            value={profileData.role}
            onChange={handleInputChange}
            placeholder="Role"
          />

          {/* Password Field (Empty, users can't change password in the modal) */}
          <Input
            name="password"
            value={profileData.password}
            onChange={handleInputChange}
            placeholder="New Password (Leave empty if not changing)"
            type="password"
          />
        </div>
        <div className="flex justify-end mt-6 space-x-2">
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button onClick={handleSubmit}>Save</Button>
        </div>
      </div>
    </div>
  );
};

export default ProfileModal;
