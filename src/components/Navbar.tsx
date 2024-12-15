'use client';

import React, { useState, useEffect } from 'react';
import { Bell, Search, User } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { SidebarTrigger } from '@/components/ui/sidebar';
import ProfileModal from './ProfileModel'; 
import { useRouter } from 'next/navigation'; 

interface NavbarProps {
  title: string;
}

export function Navbar({ title }: NavbarProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userData, setUserData] = useState({ username: '', email: '', avatar: '' });
  const [loading, setLoading] = useState(false); 
  const router = useRouter(); 

  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const res = await fetch('/api/users/session');

        if (!res.ok) {
          throw new Error('Failed to fetch user data');
        }

        const data = await res.json();
        if (data.user) {
          setUserData({
            username: data.user.username || 'Guest',
            email: data.user.email || '',
            avatar: data.user.avatar || '/avatars/default-avatar.png', 
          });
        }
      } catch (error) {
        console.log('Failed to fetch user data', error);
      }
    };

    fetchUserData();
  }, []);

  const handleLogout = async () => {
    setLoading(true); 
    try {
      const response = await fetch('/api/users/logout', {
        method: 'POST',
      });

      if (response.ok) {
        setUserData({ username: '', email: '', avatar: '' });
        router.push('/admin'); 
      } else {
        console.log('Logout failed');
      }
    } catch (error) {
      console.log('Error during logout:', error);
    } finally {
      setLoading(false); 
    }
  };

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b backdrop-blur bg-sidebar">
        <div className="container flex h-14 mt-2 items-center">
          <SidebarTrigger />
          <div className="mr-4 hidden md:flex">
            <h1 className="text-xl font-semibold">{title}</h1>
          </div>
          <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
            <nav className="flex items-center space-x-2">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={userData.avatar} alt={userData.username} />
                      <AvatarFallback className='bg-red-200	'>{userData.username.charAt(0)}</AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end" forceMount>
                  <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-medium leading-none">{userData.username}</p>
                      <p className="text-xs leading-none text-muted-foreground">{userData.email}</p>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={toggleModal}>
                    <User className="mr-2 h-4 w-4" />
                    <span>Profile</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={handleLogout}>
                    {loading ? 'Logging out...' : 'Log out'}
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </nav>
          </div>
        </div>
      </header>

      {/* Profile Modal */}
      {isModalOpen && <ProfileModal onClose={toggleModal} />}
    </>
  );
}
