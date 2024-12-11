'use client';

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Lines from '@/components/Lines';
import ScrollToTop from '@/components/ScrollToTop';
import { ThemeProvider } from 'next-themes';
import { Inter, Anton } from 'next/font/google'; // Import both fonts
import '../globals.css';

const inter = Inter({ subsets: ['latin'] });
const anton = Anton({ weight: '400', subsets: ['latin'] }); // Configure Anton with weight

import ToasterContext from '../context/ToastContext';
import { ApolloProvider } from '@apollo/client';
import client from 'apollo-client';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`overflow-x-hidden ${inter.className} `}>
        <ApolloProvider client={client}>
          <ThemeProvider
            enableSystem={false}
            attribute="class"
            defaultTheme="light"
            forcedTheme={'light'}
          >
            {/* <Lines /> */}
            <Header />
            <ToasterContext />
            {children}
            <Footer />
            <ScrollToTop />
          </ThemeProvider>
        </ApolloProvider>
      </body>
    </html>
  );
}
