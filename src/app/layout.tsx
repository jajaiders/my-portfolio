import "../styles/globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <header>
        <Navbar />
      </header>
      <body>{children}</body>
      <footer>
        <Footer />
      </footer>
    </html>
  );
}
