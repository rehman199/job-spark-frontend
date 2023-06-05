"use client";
import withAuth from "@/app/hoc/withAuth";
import DashboardLayout from "./dashboard-layout";

function Dashboard() {
  return (
    <DashboardLayout>
      <div>Dashboard</div>
    </DashboardLayout>
  );
}

export default withAuth(Dashboard);
