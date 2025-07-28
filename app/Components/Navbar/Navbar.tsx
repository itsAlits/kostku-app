import { Menu, Power } from "lucide-react";

interface NavbarProps {
  onToggleSidebar: () => void;
  isSidebarOpen: boolean;
}

export default function Navbar({
  onToggleSidebar,
  isSidebarOpen,
}: NavbarProps) {
  return (
    <nav
      className={`h-14 border-b fixed w-full z-10 top-0 bg-white border-gray-200 transition-all duration-300 ease-in-out ${
        isSidebarOpen ? "pl-64" : "pl-0"
      }`}
    >
      <div className="flex px-4 items-center justify-between h-full w-full">
        <button
          onClick={onToggleSidebar}
          className=" cursor-pointer hover:text-gray-500"
          aria-label="Toggle sidebar"
        >
          <Menu />
        </button>
        <div className="flex items-center gap-4">
          <h1 className="text-sm text-gray-700">Ngakan Made Alit Wiradhanta</h1>
        </div>
      </div>
    </nav>
  );
}
