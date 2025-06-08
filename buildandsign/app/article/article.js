import Head from 'next/head';
import Link from 'next/link';

export async function getServerSideProps() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/articles?populate=*`);
    const data = await res.json();

    return {
      props: {
        articles: data.data,
        baseUrl: process.env.NEXT_PUBLIC_STRAPI_URL,
      },
    };
  } catch (error) {
    console.error('Error:', error);
    return {
      props: {
        articles: [],
        baseUrl: '',
      },
    };
  }
}

export default function ArticlesPage({ articles, baseUrl }) {
  return (
    <>
      <Head>
        <title>บทความเกี่ยวกับงานป้าย | YourSite</title>
        <meta name="description" content="รวมบทความ ความรู้ และแนวทางเกี่ยวกับงานป้ายก่อสร้าง ป้ายเตือน และป้ายโครงการต่าง ๆ ครบจบในที่เดียว" />
        <meta name="keywords" content="ป้ายก่อสร้าง, ป้ายโครงการ, ป้ายเตือน, ป้ายความปลอดภัย, ป้ายไซต์งาน" />
        <meta property="og:title" content="บทความเกี่ยวกับงานป้าย | YourSite" />
        <meta property="og:description" content="รวมบทความ ความรู้ และแนวทางเกี่ยวกับงานป้ายก่อสร้าง ป้ายเตือน และป้ายโครงการต่าง ๆ ครบจบในที่เดียว" />
      </Head>
      <div className="min-h-screen bg-white px-4 py-8 max-w-5xl mx-auto" id="article">
        <h1 className="text-3xl text-black font-bold mb-6">บทความเกี่ยวกับงานป้าย</h1>
        <div className="grid gap-6 md:grid-cols-2">
          {articles.map((article) => {
            const { id, attributes } = article;
            const imageUrl = attributes.image?.data?.[0]?.attributes?.url;

            return (
              <Link
                key={id}
                href={`/articles/${attributes.slug}`}
                className="border rounded-2xl p-4 hover:shadow-lg transition block"
              >
                {imageUrl && (
                  <img
                    src={baseUrl + imageUrl}
                    alt={attributes.image?.data?.[0]?.attributes?.alternativeText || attributes.title}
                    className="w-full rounded-lg mb-4"
                    height={300}
                    width={500}
                  />
                )}
                <h2 className="text-xl font-semibold text-blue-700">
                  {attributes.title}
                </h2>
                <p className="text-gray-700 mt-2">
                  {attributes.summary}
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}
