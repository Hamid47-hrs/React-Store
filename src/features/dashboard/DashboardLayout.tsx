import { Link, Outlet } from "react-router-dom";

function DashboardLayout() {
  return (
    <div className="flex min-h-screen">
      <aside className="w-64 bg-gray-800 text-white p-4">
        <h2 className="text-xl font-bold mb-4">Dashboard</h2>
        <ul className="space-y-2">
          <li>
            <Link className="hover:underline" to="/dashboard">
              Dashboard
            </Link>
          </li>
          <li>
            <Link className="hover:underline" to="/dashboard/products">
              Products
            </Link>
          </li>
          <li>
            <Link className="hover:underline" to="/dashboard/orders">
              Orders
            </Link>
          </li>
          <li>
            <Link className="hover:underline" to="/dashboard/settings">
              Settings
            </Link>
          </li>
        </ul>
      </aside>
      <main className="flex-1 bg-gray-100 p-6">
        <Outlet />
      </main>
    </div>
  );
}

export default DashboardLayout;
