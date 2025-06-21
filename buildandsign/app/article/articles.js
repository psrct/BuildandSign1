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
  
  // Generate structured data for articles
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "บทความเกี่ยวกับงานป้ายก่อสร้าง",
    "description": "รวมบทความ ความรู้ และแนวทางเกี่ยวกับงานป้ายก่อสร้าง ป้ายเตือน และป้ายโครงการต่าง ๆ ครบจบในที่เดียว",
    "url": `${process.env.NEXT_PUBLIC_STRAPI_URL}/articles`,
    "mainEntity": {
      "@type": "ItemList",
      "numberOfItems": articles.length,
      "itemListElement": articles.map((article, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": {
          "@type": "Article",
          "headline": article.title,
          "description": article.summary,
          "url": `${process.env.NEXT_PUBLIC_STRAPI_URL}/article/${article.slug}`,
          "image": article.image?.[0] ? `${baseUrl}${article.image[0].url}` : undefined,
          "datePublished": article.publishedAt || article.createdAt,
          "dateModified": article.updatedAt,
          "author": {
            "@type": "Organization",
            "name": "BuildandSign"
          }
        }
      }))
    }
  };

  const articlesUrl = `${process.env.NEXT_PUBLIC_STRAPI_URL}/articles`;

  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <title>บทความเกี่ยวกับงานป้ายก่อสร้าง | BuildandSign</title>
        <meta name="title" content="บทความเกี่ยวกับงานป้ายก่อสร้าง | BuildandSign" />
        <meta name="description" content="รวมบทความ ความรู้ และแนวทางเกี่ยวกับงานป้ายก่อสร้าง ป้ายเตือน และป้ายโครงการต่าง ๆ ครบจบในที่เดียว พร้อมคำแนะนำจากผู้เชี่ยวชาญ" />
        <meta name="keywords" content="ป้ายก่อสร้าง, ป้ายโครงการ, ป้ายเตือน, ป้ายความปลอดภัย, ป้ายไซต์งาน, งานป้าย, ป้ายจราจร, ป้ายอาคาร, ป้ายโรงงาน" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="author" content="BuildandSign" />
        <meta name="language" content="th" />
        <meta httpEquiv="content-language" content="th" />
        
        {/* articlesUrl URL */}
        <link rel="articlesUrl" href={articlesUrl} />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="BuildandSign" />
        <meta property="og:title" content="บทความเกี่ยวกับงานป้ายก่อสร้าง | BuildandSign" />
        <meta property="og:description" content="รวมบทความ ความรู้ และแนวทางเกี่ยวกับงานป้ายก่อสร้าง ป้ายเตือน และป้ายโครงการต่าง ๆ ครบจบในที่เดียว" />
        <meta property="og:url" content={articlesUrl} />
        <meta property="og:locale" content="th_TH" />
        {articles.length > 0 && articles[0].image?.[0] && (
          <>
            <meta property="og:image" content={`${articles[0].image[0].url}`} />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta property="og:image:alt" content={articles[0].image[0].alternativeText || articles[0].title} />
          </>
        )}

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="บทความเกี่ยวกับงานป้ายก่อสร้าง | BuildandSign" />
        <meta name="twitter:description" content="รวมบทความ ความรู้ และแนวทางเกี่ยวกับงานป้ายก่อสร้าง ป้ายเตือน และป้ายโครงการต่าง ๆ" />
        {articles.length > 0 && articles[0].image?.[0] && (
          <meta name="twitter:image" content={`${articles[0].image[0].url}`} />
        )}

        {/* Additional SEO tags */}
        <meta name="format-detection" content="telephone=no" />
        <meta name="theme-color" content="#1e40af" />
        
      </Head>
      
      <div className="w-full h-auto bg-white px-10 p-10 scroll-mt-20" id="articles">
        <div className="max-w-6xl mx-auto flex flex-col">
          {/* SEO optimized heading structure */}
          <header className="mb-8">
            <h1 className="text-4xl lg:text-5xl text-black font-bold mb-4">
              บทความเกี่ยวกับงานป้ายและงานก่อสร้าง
            </h1>
            <p className="text-lg text-gray-700 max-w-6xl">
              รวมบทความ ความรู้ และแนวทางเกี่ยวกับงานป้าย ป้ายเตือน และป้ายโครงการต่าง ๆ งานก่อสร้างครบวงจร จากผู้เชี่ยวชาญด้านป้ายและการก่อสร้าง เพื่อให้ความรู้ที่เป็นประโยชน์แก่ผู้ที่สนใจ
            </p>
          </header>

          {/* Articles Grid with better semantic structure */}
          <section aria-label="รายการบทความ">
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {articles.map((article, index) => (
                <article
                  key={article.id}
                  className="border rounded-xl overflow-hidden transition hover:scale-105 hover:shadow-lg bg-white duration-200"
                >
                  <a
                    href={`/article/${article.slug}`}
                    className="block h-full"
                    aria-label={`อ่านบทความ: ${article.title}`}
                  >
                    {article.image?.[0] && (
                      <div className="relative">
                        <img
                          src={`${article.image[0].url}`}
                          alt={article.image[0].alternativeText + `รูปประกอบบทความ ${article.title}`}
                          className="w-full h-40 object-cover"
                          loading={index < 4 ? "eager" : "lazy"}
                          width="300"
                          height="160"
                        />
                      </div>
                    )}
                    <div className="p-4">
                      <h2 className="text-lg font-semibold text-[#0101bd] mb-2 line-clamp-2">
                        {article.title}
                      </h2>
                      {article.summary && (
                        <p className="text-sm text-gray-600 line-clamp-3">
                          {article.summary}
                        </p>
                      )}
                      {article.publishedAt && (
                        <time 
                          dateTime={article.publishedAt}
                          className="text-xs text-gray-500 mt-2 block"
                        >
                          {new Date(article.publishedAt).toLocaleDateString('th-TH', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}
                        </time>
                      )}
                    </div>
                  </a>
                </article>
              ))}
            </div>
          </section>

          {/* No articles fallback */}
          {articles.length === 0 && (
            <div className="text-center py-12">
              <h2 className="text-2xl font-semibold text-gray-600 mb-4">
                ยังไม่มีบทความในขณะนี้
              </h2>
              <p className="text-gray-500">
                กรุณาติดตามบทความใหม่ ๆ ที่จะมาเร็ว ๆ นี้
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  )
}