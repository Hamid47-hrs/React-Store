import { Link, Outlet, useNavigate } from "react-router-dom";

function DashboardLayout() {
  const navigate = useNavigate();

  const handlelogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
  };
  return (
    <div className="flex min-h-[calc(100vh-155px)]">
      <aside className="w-64 bg-gray-800 text-white p-4">
        <h2 className="text-xl font-bold mb-4">Dashboard</h2>
        <div className="flex flex-col justify-between min-h-[calc(100vh-50px)]">
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
          <button
            onClick={handlelogout}
            className="bg-red-400 hover:bg-red-600 text-white py-3 px-6 cursor-pointer rounded-xl w-fit mx-auto"
          >
            Logout
          </button>
        </div>
      </aside>
      <main className="flex-1 bg-gray-100 p-6">
        <Outlet />
      </main>
    </div>
  );
}

export default DashboardLayout;
