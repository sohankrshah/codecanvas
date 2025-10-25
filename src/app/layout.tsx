import './globals.css';
import Header from '@/app/header/page';
import Footer from '@/app/footer/page';

export const metadata = {
  title: 'Portfolio | Sohan Kr. Shah',
  description: 'Personal portfolio website of Sohan Kr. Shah',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link 
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" 
        />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}