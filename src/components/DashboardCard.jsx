export default function DashboardCard({ title, children }) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition flex flex-col gap-3">
      <h3 className="text-lg font-semibold text-gray-700">{title}</h3>
      <div>{children}</div>
    </div>
  );
}
