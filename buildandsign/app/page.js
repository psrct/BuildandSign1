import Poster from './_components/Poster';
import Aboutus from './_components/Aboutus';
import AboutService from './_components/AboutService';
import Service from './_components/Services';

export default async function Home() {
  return (
    <>
    <Poster />
    <Aboutus />
    <AboutService />
    <Service />
    </>
  );
}
