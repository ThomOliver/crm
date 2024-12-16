import ProtectedRoute from "@/components/common/ProtectedRoute";

const DashboardPage = () => {
  return (
    <ProtectedRoute>
      <div>
        <h1>Dashboard</h1>
        <p>Bem-vindo à sua Dashboard!</p>
      </div>
    </ProtectedRoute>
  );
};

export default DashboardPage;
