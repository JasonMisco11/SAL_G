export default function AdminDashboard() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Dashboard Overview</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow p-6 border-t-4 border-blue-500">
          <h3 className="text-lg font-medium text-gray-500">Welcome back</h3>
          <p className="mt-2 text-sm text-gray-600">
            Use the sidebar to navigate to the Blog Manager or Gallery Manager.
          </p>
        </div>
      </div>
    </div>
  );
}
