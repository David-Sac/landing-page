import '../styles/globals.css'; // Ruta corregida
import ThemeRegistry from './components/ThemeRegistry';

export const metadata = {
  title: 'Landing Page',
  description: 'Una página de ejemplo',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry>{children}</ThemeRegistry>
      </body>
    </html>
  );
}
