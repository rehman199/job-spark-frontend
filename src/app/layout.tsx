import { Provider } from "react-redux";
import { Navbar } from "../components/home";
import "./globals.css";
import { Inter } from "next/font/google";
import { store } from "./store/store";

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
        <Navbar />
        <Provider store={store}>{children}</Provider>
      </body>
    </html>
  );
}
