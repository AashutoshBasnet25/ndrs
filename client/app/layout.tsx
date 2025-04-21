import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/ThemeProvider';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Toaster } from "@/components/ui/toaster"
import { AuthProvider } from "@/lib/auth"

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Nepal Disaster Response System',
  description: 'A comprehensive disaster management system for Nepal',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={inter.className} suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <AuthProvider>
            {/* Outer container: no padding on small screens */}
            <div className="min-h-screen bg-background/90 p-0 md:p-6 lg:p-8">
              {/* Inner container: full 100vh for small screens, calc(100vh-4rem) for large */}
              <div className="relative min-h-screen lg:min-h-[calc(100vh-4rem)] bg-background rounded-xl shadow-lg flex flex-col lg:flex-row">
                <Navbar />
                <main className="flex-1 overflow-hidden relative">
                  <div className="container h-full py-6 px-4 md:px-6">
                    {children}
                  </div>
                </main>
              </div>
              <Footer />
            </div>
            <Toaster />
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}