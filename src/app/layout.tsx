import "@/app/globals.css";
import { Inter } from "next/font/google";
import Providers from "./providers/providers";
import { Navbar } from "@/app/components";
import { Toaster } from "react-hot-toast";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Job Spark",
  description: "A Job Board Application",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Navbar />
          {children}
        </Providers>
        <Toaster position="top-right" />
      </body>
    </html>
  );
}
