import Head from 'next/head';
import axios from "axios"

const getServerSideProps = async () => {
  try {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/articles?populate=*`)
    return res.data.data
  } catch (error) {
    console.log('error', error)
    return [];
  }
}

export default async function ArticlesPage() {
    const articles = await getServerSideProps();
    const baseUrl = process.env.NEXT_PUBLIC_STRAPI_URL;
  return (
    <>
      <Head>
        <title>บทความเกี่ยวกับที่เกี่ยวข้อง | BuildandSign</title>
        <meta name="description" content="รวมบทความ ความรู้ และแนวทางเกี่ยวกับงานป้ายก่อสร้าง ป้ายเตือน และป้ายโครงการต่าง ๆ ครบจบในที่เดียว" />
        <meta name="keywords" content="ป้ายก่อสร้าง, ป้ายโครงการ, ป้ายเตือน, ป้ายความปลอดภัย, ป้ายไซต์งาน" />
        <meta property="og:title" content="บทความเกี่ยวกับงานป้าย | YourSite" />
        <meta property="og:description" content="รวมบทความ ความรู้ และแนวทางเกี่ยวกับงานป้ายก่อสร้าง ป้ายเตือน และป้ายโครงการต่าง ๆ ครบจบในที่เดียว" />
      </Head>
      <div className="w-full h-auto bg-white  px-10 p-10" id="articles">
          <div className="max-w-6xl mx-auto flex flex-col">
          <h1 className="text-4xl lg:text-5xl text-black font-bold mb-6">บทความเกี่ยวกับที่เกี่ยวข้อง</h1>
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {articles.map((article) => (
            <a
              key={article.id}
              href={`/article/${article.slug}`}
              className="border rounded-xl overflow-hidden  transition hover:scale-108 hover:shadow-lg bg-white duration-200"
            >
              <img
                src={`${baseUrl + article.image[0].url}`}
                alt={`${article.image[0].alternativeText || ''} ${article.title}`}
                className="w-full h-40 object-cover"
              />
              <div className="p-3">
                <h2 className="text-md font-semibold text-blue-700">{article.title}</h2>
                <p className="text-sm text-gray-600 mt-1 line-clamp-3">{article.summary}</p>
              </div>
            </a>
          ))}
          </div>
        </div>
      </div>
    </>
  )
}