"use client";

import { House, Wallet, UsersRound, Power } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

interface SubItem {
  name: string;
  path: string;
}

interface SidebarItem {
  name: string;
  icon?: React.ReactNode;
  path: string;
  hasDropdown?: boolean;
  subItems?: SubItem[];
}

interface SidebarProps {
  isOpen: boolean;
}

export default function Sidebar({ isOpen }: SidebarProps) {
  const pathname = usePathname();
  const [openDropdowns, setOpenDropdowns] = useState<{
    [key: string]: boolean;
  }>({});

  const toggleDropdown = (itemName: string) => {
    setOpenDropdowns((prev) => ({
      ...prev,
      [itemName]: !prev[itemName],
    }));
  };

  const isActive = (path: string, subItems?: SubItem[]) => {
    if (pathname === path) return true;
    if (subItems) {
      return subItems.some((subItem) => pathname === subItem.path);
    }
    return false;
  };

  const isSubItemActive = (path: string) => {
    return pathname === path;
  };

  const sidebarItems: SidebarItem[] = [
    {
      name: "Dashboard Kost",
      icon: <House className="size-4.5" />,
      path: "/Dashboard",
    },
    {
      name: "Invoice",
      icon: <Wallet className="size-4.5" />,
      path: "/invoice",
      hasDropdown: true,
      subItems: [
        { name: "Buat Invoice", path: "/Dashboard/Invoice/Create-Invoice" },
        { name: "Daftar Invoice", path: "/Dashboard/Invoice/Daftar-Invoice" },
      ],
    },
    {
      name: "Detail Penyewa",
      icon: <UsersRound className="size-4.5" />,
      path: "/tenant",
      hasDropdown: true,
      subItems: [
        { name: "Daftar Penyewa", path: "/tenant/list" },
        { name: "Tambah Penyewa", path: "/tenant/add" },
        { name: "Penyewa Aktif", path: "/tenant/active" },
        { name: "Penyewa Keluar", path: "/tenant/inactive" },
      ],
    },
    {
      name: "Keluar",
      icon: <Power className="size-4.5" />,
      path: "/",
    },
  ];

  return (
    <>
      <div
        className={`sidebar bg-white fixed z-50 left-0 w-64 h-dvh border-r border-gray-200 transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div>
          <div className="border-b border-gray-200 h-14 flex items-center justify-center">
            <h2 className="text-lg font-medium">Kostku App</h2>
          </div>
          <div>
            <ul className="mt-2 px-2">
              {sidebarItems.map((item) => (
                <li key={item.name}>
                  {item.hasDropdown ? (
                    <div className="mt-1">
                      <button
                        onClick={() => toggleDropdown(item.name)}
                        className={`w-full cursor-pointer text-left text-sm rounded-md px-2 py-2.5 hover:bg-gray-100 flex items-center justify-between ${
                          isActive(item.path, item.subItems)
                            ? "bg-primary/10 text-primary"
                            : ""
                        }`}
                      >
                        <span className="flex items-center">
                          {item.icon && (
                            <span className="mr-2">{item.icon}</span>
                          )}
                          {item.name}
                        </span>
                        <svg
                          className={`w-4 h-4 transition-transform duration-200 ${
                            openDropdowns[item.name] ? "rotate-180" : ""
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>
                      {openDropdowns[item.name] && (
                        <ul className="ml-2 mt-1 space-y-1">
                          {item.subItems?.map((subItem) => (
                            <li key={subItem.name}>
                              <Link
                                href={subItem.path}
                                className={`block text-sm rounded-md px-2 py-2.5 hover:bg-gray-50 ${
                                  isSubItemActive(subItem.path)
                                    ? "bg-primary/10 text-primary"
                                    : "text-gray-600"
                                }`}
                              >
                                {subItem.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.path}
                      className={`flex items-center text-sm rounded-md px-2 py-2.5 hover:bg-gray-100 ${
                        isActive(item.path) ? "bg-primary/10 text-primary" : ""
                      }`}
                    >
                      {item.icon && <span className="mr-2">{item.icon}</span>}
                      {item.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
