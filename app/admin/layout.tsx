import Link from "next/link";
import { signOut } from "./actions";
import { LayoutDashboard, Image as ImageIcon, FileText, LogOut } from "lucide-react";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md hidden md:flex flex-col">
        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-800">Admin Panel</h2>
        </div>
        <nav className="flex-1 px-4 space-y-2">
          <Link
            href="/admin"
            className="flex items-center gap-3 px-4 py-3 text-gray-700 rounded-md hover:bg-gray-50 hover:text-blue-600 transition-colors"
          >
            <LayoutDashboard className="w-5 h-5" />
            Dashboard
          </Link>
          <Link
            href="/admin/blog"
            className="flex items-center gap-3 px-4 py-3 text-gray-700 rounded-md hover:bg-gray-50 hover:text-blue-600 transition-colors"
          >
            <FileText className="w-5 h-5" />
            Blog Posts
          </Link>
          <Link
            href="/admin/gallery"
            className="flex items-center gap-3 px-4 py-3 text-gray-700 rounded-md hover:bg-gray-50 hover:text-blue-600 transition-colors"
          >
            <ImageIcon className="w-5 h-5" />
            Gallery
          </Link>
        </nav>
        <div className="p-4 border-t">
          <form action={signOut}>
            <button
              type="submit"
              className="flex w-full items-center gap-3 px-4 py-3 text-red-600 rounded-md hover:bg-red-50 transition-colors"
            >
              <LogOut className="w-5 h-5" />
              Sign Out
            </button>
          </form>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-white shadow-sm md:hidden p-4 flex justify-between items-center">
          <h2 className="text-xl font-bold text-gray-800">Admin</h2>
          <form action={signOut}>
            <button type="submit" className="text-red-600">
              <LogOut className="w-5 h-5" />
            </button>
          </form>
        </header>
        <div className="flex-1 overflow-auto p-6 md:p-8">
          {children}
        </div>
      </main>
    </div>
  );
}
