import "./globals.css";
import { GlobalContextProvider } from "./Context/store";

import { Footer, NavBar } from "@components";

export const metadata = {
  title: "Car-O-Bar",
  description: "Discover world's best car showcase application",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative">
        <NavBar />
        <GlobalContextProvider>{children}</GlobalContextProvider>
        <Footer />
      </body>
    </html>
  );
}
