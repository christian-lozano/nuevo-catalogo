import Nav from "@/components/styleComponent/nav/nav";
import { connect } from "@/utils/config/dbConfig";

import { Inter } from "next/font/google";
import { Suspense } from "react";

connect();
const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "App Admin Panel Fritz Sport",
  description: "Panel Administrativo Fritz Sport ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ed">
      <body>
        <Nav></Nav>

        {children}
      </body>
    </html>
  );
}
