import { Provider } from "react-redux";
import { Navbar } from "../components/home";
import "./globals.css";
import { Inter } from "next/font/google";
import { store } from "./store";
import Providers from "./providers/providers";

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
      </body>
    </html>
  );
}
