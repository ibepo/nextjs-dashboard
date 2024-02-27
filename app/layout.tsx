import '@/app/ui/global.css';
import { inter, lusitana, barlow } from '@/app/ui/fonts';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${barlow.className} antialiased`}>{children}</body>
    </html>
  );
}
