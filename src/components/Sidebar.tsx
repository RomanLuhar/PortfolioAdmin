import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Home, Briefcase, Code, Users, MessageSquare, LogOut } from 'lucide-react';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

const menuItems = [
  { title: 'Dashboard', icon: Home, href: '/admin/dashboard' },
  { title: 'Projects', icon: Briefcase, href: '/admin/projects' },
  { title: 'Skills', icon: Code, href: '/admin/skills' },
  { title: 'Services', icon: Users, href: '/admin/services' },
  { title: 'Clients', icon: Users, href: '/admin/clients' },
  { title: 'Testimonials', icon: MessageSquare, href: '/admin/testimonials' },
  { title: 'Enquiries', icon: MessageSquare, href: '/admin/enquiries' },
];

export function AppSidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleLogout = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/users/logout', {
        method: 'POST',
      });

      if (response.ok) {
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
    <Sidebar>
      <SidebarHeader className="border-b p-2">
        <div className="flex items-center space-x-2">
          <Avatar>
            <AvatarFallback>RL</AvatarFallback>
          </Avatar>
          <div>
            <h2 className="text-lg font-semibold">Roman Luhar</h2>
            <p className="text-sm text-muted-foreground">Manage Portfolio</p>
          </div>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title} className="mb-6">
                  <SidebarMenuButton asChild isActive={pathname === item.href}>
                    <Link 
                      href={item.href} 
                      className="flex items-center space-x-3 px-4 py-6 text-gray-800 bg-gray-200 rounded-md hover:bg-gray-300 transition duration-200"
                    >
                      <item.icon className="h-5 w-5 text-gray-600" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="border-t p-4">
        <Button
          variant="outline"
          className="w-full justify-start bg-green-500 text-white hover:bg-green-600"
          onClick={handleLogout}
          disabled={loading}
        >
          <LogOut className="mr-2 h-4 w-4" />
          {loading ? 'Logging out...' : 'Logout'}
        </Button>
      </SidebarFooter>
      <SidebarTrigger />
    </Sidebar>
  );
}
