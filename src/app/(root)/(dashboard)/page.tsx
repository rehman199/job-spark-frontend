"use client";
import Landing from "@/app/(root)/(home)/landing";
import Dashboard from "./dashboard";
import { useAppSelector } from "@/app/hooks/use-store";

export default function HomePage() {
  const user = useAppSelector((state) => state.user.user);
  return user ? <Dashboard /> : <Landing />;
}
