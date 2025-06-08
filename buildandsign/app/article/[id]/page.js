import Head from 'next/head';

export async function fetchArticle({ params }) {
  const { slug } = params;

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/articles?filters[slug][$eq]=${slug}&populate=*`);
    const data = await res.json();

    if (!data.data || data.data.length === 0) {
      return { notFound: true };
    }

    return {
      props: {
        article: data.data[0].attributes,
      },
    };
  } catch (error) {
    console.error('Error fetching article:', error);
    return { notFound: true };
  }
}

export default function ArticleDetail({ article }) {
  return (
    <>
      <Head>
        <title>{article.title} | YourSite</title>
        <meta name="description" content={article.summary || article.title} />
        <meta name="keywords" content="ป้ายก่อสร้าง, ป้ายเตือน, ความรู้ด้านงานป้าย" />
        <meta property="og:title" content={article.title} />
        <meta property="og:description" content={article.summary || article.title} />
      </Head>
      <div className="min-h-screen bg-white px-4 py-8 max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">{article.title}</h1>
        <div
          className="text-gray-700 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />
      </div>
    </>
  );
}
