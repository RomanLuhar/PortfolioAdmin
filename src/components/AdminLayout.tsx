'use client'

import React from 'react' 
import { AppSidebar } from './Sidebar'
import { Navbar } from './Navbar'
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"

interface AdminLayoutProps {
  children: React.ReactNode;
  title: string;
}

export function AdminLayout({ children, title }: AdminLayoutProps) {
  return (
    <SidebarProvider>
      <div className="flex h-screen bg-background">
        <AppSidebar />
        <SidebarInset className="flex flex-col">
          <Navbar title={title} />
          <main className="flex-1 overflow-y-auto p-4 md:p-6">
            {children}
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  )
}

