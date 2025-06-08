import Poster from './_components/Poster';
import Aboutus from './_components/Aboutus';
import AboutService from './_components/AboutService';
import Service from './_components/Services';
import Whyus from './_components/Whyus';
import Article from './article/article';

export default async function Home() {
  return (
    <>
    <Poster />
    <Aboutus />
    <AboutService />
    <Service />
    <Whyus />
    <Article/>
    </>
  );
}
