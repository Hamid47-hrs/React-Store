function Dashboard() {
  return (
    <div className="flex h-screen bg-gray-100">
      <main className="flex-1 p-6 overflow-auto">
        <header className="mb-6">
          <h1 className="text-2xl font-semibold">Dashboard</h1>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-white p-4 shadow rounded-lg">
            <h3 className="text-sm font-medium text-gray-500 mb-4">
              Number of Users
            </h3>
            <p className="text-2xl font-bold">1234</p>
          </div>
          <div className="bg-white p-4 shadow rounded-lg">
            <h3 className="text-sm font-medium text-gray-500 mb-4">
              Today's Sales
            </h3>
            <p className="text-2xl font-bold">$ 100.000</p>
          </div>
          <div className="bg-white p-4 shadow rounded-lg">
            <h3 className="text-sm font-medium text-gray-500 mb-4">
              Total Revenue
            </h3>
            <p className="text-2xl font-bold">$ 1,530.000</p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Dashboard;
