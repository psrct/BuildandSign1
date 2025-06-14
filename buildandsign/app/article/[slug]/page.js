import Head from 'next/head';
import axios from 'axios';

export async function Post({ params }) {
  const slug = params.slug;

  try {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/articles?/${slug}&populate=*`);
    const data = res.data.data;
    return data;

  } catch (error) {
    console.error('Error fetching article:', error);
    return { notFound: true };
  }
}

export default async function ArticleDetail({params}) {
  const article = await Post({params});
  const baseUrl = `${process.env.NEXT_PUBLIC_STRAPI_URL}`;
  console.log(article[0])
  return (
    <>
      <Head>
        <title>{article[0].title} | BuildandSign</title>
        <meta name="description" content={article[0].summary || article[0][0].title} />
        <meta property="og:title" content={article[0].title} />
        <meta property="og:description" content={article[0].summary || article[0].title} />
      </Head>
      <main className="w-full h-screen mx-auto px-10 mt-30">
        <h1 className="text-4xl font-bold mb-4 justify-self-center text-black">{article[0].title}</h1>
        <img
            src={`${baseUrl + article[0].image[0].url}`}
            alt={article[0].image.alternativeText + article[0].title + article[0].detail}
            className="object-cover rounded-xl justify-self-center w-[100px] h-[100px]"
          />
      </main>
    </>
  );
}
