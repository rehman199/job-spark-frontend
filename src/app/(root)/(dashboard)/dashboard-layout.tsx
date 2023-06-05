"use client";
import { Box } from "@mui/material";
import { Sidebar } from "./sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Box display="grid" alignItems="center" gridTemplateColumns="21% 79%" height="100%">
      <Sidebar />
      {children}
    </Box>
  );
}
