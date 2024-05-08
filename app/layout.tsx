'use client';
import '@/app/cores/ui/global.css';
import ReactQueryProvider from './cores/providers/ReactQueryProvider';
import { AuthProvider } from './cores/providers/AuthProvider';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <ReactQueryProvider>{children}</ReactQueryProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
