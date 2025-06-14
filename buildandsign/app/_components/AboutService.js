import Image from "next/image"
import axios from "axios"

const fetchData = async () => {
  try{
    const response = await axios.get(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/services?populate=*`)
    return response.data.data
  }catch(error){
    console.log('error', error)
    return []
  }
}

const fetchDatabuild = async () => {
  try{
    const res = await axios.get(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/buildings?populate=*`)
    return res.data.data
  }catch(error){
    console.log('error', error)
    return []
  }
}

export default async function AboutService(){
    const data = await fetchData();
    const builds = await fetchDatabuild();
    const baseUrl = process.env.NEXT_PUBLIC_STRAPI_URL;
    return(
    <>
    <div className="h-auto w-full">
      {/* งานป้าย */}
      <div className="bg-blue-600 text-white px-10 py-10">
        <div className="max-w-6xl mx-auto flex flex-col">
          <h2 className="text-5xl md:text-6xl font-bold text-shadow-md text-shadow-black mb-6">
            งานป้าย
          </h2>
          <p className="text-lg sm:text-xl leading-relaxed font-medium mb-10">
            เราให้บริการ ทั้งสำรวจหน้างานออกแบบ ผลิตและติดตั้งงาน
            <span className="text-yellow-200 font-medium">
              " ป้ายอาคาร ป้ายไฟ ป้ายล้อเลื่อน งานโครงการ งานป้ายภายในและภายนอกอาคาร"
            </span>
            ด้วยวัสดุที่ได้มาตรฐานช่วยให้งานออกมาและคงทนโดยทีมงานมืออาชีพในทุกสัดส่วนที่ช่วยดูแลคุณอย่างเต็มที่เพื่อให้งานออกมาสวยงามเหนือความต้องการของลูกค้า
          </p>

          {/* Card Section */}
          <div className="px-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {data.map((data) => (
                <a
                  href=""
                  key={data.id}
                  className="bg-white rounded-xl shadow-md border border-gray-200 hover:scale-108 transition-transform duration-300 overflow-hidden flex flex-col"
                >
                  {/* รูปภาพเต็มกรอบด้านบน */}
                  <div className="w-full h-40">
                    <img
                      src={`${baseUrl + data.image.url}`}
                      alt={data.image.alternativeText + data.title + data.detail}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Title ด้านล่าง */}
                  <div className="p-4 text-center">
                    <h3 className="text-base font-semibold text-gray-800">{data.title}</h3>
                  </div>
                </a>
              ))}
            </div>
        </div>
      </div>

        </div>
    {/* งานต่อเติม */}
    <div className="h-auto w-full bg-[#393E46]">
          <div className="text-white px-10 py-10 flex flex-col items-start max-w-6xl mx-auto">
              <h2 className="text-5xl md:text-6xl font-bold mb-6 text-shadow-md text-shadow-black">
                งานต่อเติม
              </h2>
              <p className="text-lg sm:text-xl leading-relaxed font-medium">
                เราให้บริการ ทั้งสำรวจหน้างานออกแบบ ผลิตและติดตั้งงาน
                <span className="text-yellow-200 font-medium">
                  " เขียนแบบทุกชนิด ประเมินราคา BOQ ออกแบบและขึ้นแบบ 3D งานสร้าง โกดัง หลังคา ที่จอดรถ"
                </span>
                โดยทีมงานวิศวกร 100% ในการควบคุมการก่อสร้าง เพื่อให้ได้มาตรฐานการก่อสร้าง และความปลอดภัยในการใช้งาน
              </p>
          </div>

          {/* บริการ */}
          <div className="px-10 py-5 flex justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-6xl">
              {builds.map((data) => (
                <a
                  key={data.id}
                  // href={`/article/${build.slug}`}
                  className="flex flex-col items-center text-center bg-white border border-gray-200 rounded-xl shadow-md p-4 hover:scale-108 transition-transform duration-300"
                >
                  <div className="w-[100px] h-[100px] flex items-center justify-center max-sm:w-[100px] max-sm:h-[100px]">
                    <img
                      src={`${baseUrl + data.image.url}`}
                      alt={data.image.alternativeText + data.title + data.detail}
                      className="object-cover rounded-xl w-full h-full"
                    />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-gray-800">{data.title}</h3>
                </a>
              ))}
            </div>
          </div>
      </div>
    </> 
    )
}
