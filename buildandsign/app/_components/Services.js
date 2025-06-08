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

export default async function Getservice(){
    const data = await fetchData();
    const build = await fetchDatabuild();
    const baseUrl = process.env.NEXT_PUBLIC_STRAPI_URL;
    console.log(data);
  return(
  <>
  <div className="w-full">
        {/* บริการ */}
        <div className  ="relative h-20 flex justify-center items-center">
            <div className  ="absolute inset-0 flex">
                <div className="w-1/2 bg-[#013E7B] [@media(max-width:770px)]:bg-[#013E7B]"></div>
                <div className="w-1/2 bg-[#393E46] [@media(max-width:770px)]:bg-[#013E7B]"></div>
            </div>

            <div className  ="relative text-white text-5xl font-bold z-10">
                บริการของเรา
            </div>
        </div>

        {/* รายการบริการ */}
        <div className="grid grid-cols-1 md:grid-cols-2 h-auto w-full">

          {/* ฝั่งซ้าย - งานป้าย */}
        <div className="bg-[#013E7B] text-white px-6 py-10 flex flex-col items-center">
            <div className="grid grid-cols-3  gap-5" id="card">
                {data.map((data) => (
                    <a href=""
                        key={data.id}
                        className="border border-gray-500 rounded-lg  shadow-sm bg-white hover:shadow-md transition duration-300"
                    >
                    <div className="relative font-semibold rounded-md justify-center text-center items-center  text-blue-600 h-15 bg-[#0080FF] w-auto">
                        <h3 className="text-2xl font-bold rounded-md pt-1 text-white" id="textcard">
                            {data.title}
                        </h3>
                    </div>
                        

                        <div className="flex justify-center items-center pt-3">
                            <img
                                src={`${baseUrl+data.image.url}`}
                                alt={data.image.alternativeText || data.title}
                                height={400}
                                
                                
                                className="rounded shadow-lg px-3"
                            />
                        </div>

                        <p className="text-gray-900 text-lg justify-center text-center p-2" id="textcard2">{data.detail}</p>
                    </a>
                ))}
            </div>
            
        </div>
  
        {/* ฝั่งขวา - งานต่อเติม */}
        <div className="bg-[#393E46] px-6 py-10 flex flex-col items-center">
           <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-y-10 gap-x-6" id="build">
            {build.map((build) => (
              <a 
                key={build.id}
                className="flex border border-gray-300 rounded-lg h-40 w-full items-center shadow-sm bg-white hover:shadow-md transition duration-300"
              >
                <img
                  src={`${baseUrl + build.image.url}`}
                  alt={build.image.alternativeText || build.title}
                  height={150}
                  width={150}
                  className="px-3"
                />
                <div className="justify-center w-auto">
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-black" id="textcard">
                    {build.title}
                  </h3>
                </div>
              </a>
            ))}
          </div>
        </div>
        </div>
      </div>
  </>
  )
}
