import type {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'ABHIBHIDEVELOPERS School Management ERP',
  description: 'Multi-page showcase of the ABHIBHIDEVELOPERS School Management ERP system including Admissions, Student Accounting, Academics, Office Accounts, Web Installer, and Portal Login.',
  openGraph: {
    title: 'ABHIBHIDEVELOPERS School Management ERP',
    description: 'Multi-page showcase of the ABHIBHIDEVELOPERS School Management ERP system including Admissions, Student Accounting, Academics, Office Accounts, Web Installer, and Portal Login.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ABHIBHIDEVELOPERS School Management ERP',
    description: 'Multi-page showcase of the ABHIBHIDEVELOPERS School Management ERP system including Admissions, Student Accounting, Academics, Office Accounts, Web Installer, and Portal Login.',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className="antialiased bg-[#1e2125] text-[#d6d9dc] min-h-screen selection:bg-[#ff5252]/30 selection:text-white" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
