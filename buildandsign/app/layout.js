import "./globals.css";
import { IBM_Plex_Sans_Thai } from 'next/font/google';
import Header from "./_components/Header";
import SideContact from "./_components/SideContact";

const ibm = IBM_Plex_Sans_Thai({
  subsets: ['thai'],
  weight: '400',
})

export const metadata = {
  title: "BuildandSign",
  description: "BuildandSign",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <body className={`${ibm.className}`}>
        <Header />
        {children}
        <SideContact />
      </body>
    </html>
  );
}
