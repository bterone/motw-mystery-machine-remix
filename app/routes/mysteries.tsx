import { Outlet } from "@remix-run/react";
import DashboardLayout from "~/layouts/dashboard";

export default function MysteryPage() {
  return (
    <DashboardLayout>
      <Outlet />
    </DashboardLayout>
  );
}
