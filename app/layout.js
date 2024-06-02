import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import OverlayButton from "./components/OverlayButton";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Hopper",
  description: "Powered by Pluq.io",
};

export default function RootLayout({ children }) {
  return (
    
      <html lang="en">
        <body className={inter.className}>
          {/* <Navbar /> */}
          {children}
          <OverlayButton className="mt-auto" />
        </body>
      </html>
  );
}
