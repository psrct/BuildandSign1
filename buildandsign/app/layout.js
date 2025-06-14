import "./globals.css";
import { IBM_Plex_Sans_Thai } from 'next/font/google';
import Header from "./_components/Header";
import SideContact from "./_components/SideContact";
import Footer from "./_components/Footer";
import { Slabo_13px } from 'next/font/google';

const slabo = Slabo_13px({
  subsets: ['latin'],
  weight: '400',
})

const ibm = IBM_Plex_Sans_Thai({
  subsets: ['thai'],
  weight: '400',
})

export const metadata = {
  title: 'BuildandSign | Build and Sign',
  description:
    'รับทำป้าย, ป้ายโฆษณา, ป้ายไฟ, ป้ายอาคาร, งานต่อเติมครบวงจร พร้อมทีมช่างมืออาชีพ',
  openGraph: {
    title: 'บิลด์แอนด์ไซน์ | รับทำป้ายครบวงจร',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <body className={`${ibm.className}`}>
        <Header />
        {children}
        <SideContact />
        <Footer />
      </body>
    </html>
  );
}
