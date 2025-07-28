"use client";

import { useState } from "react";
import Navbar from "../Components/Navbar/Navbar";
import Sidebar from "../Components/Sidebar/Sidebar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <html lang="en">
      <body>
        <Sidebar isOpen={isSidebarOpen} />
        <Navbar onToggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
        <main
          className={`transition-all bg-gray-100 min-h-dvh duration-300 py-18 px-4 ${
            isSidebarOpen ? "ml-64" : "ml-0"
          }`}
        >
          {children}
        </main>
      </body>
    </html>
  );
}
