import Image from "next/image"
import { FaFacebookMessenger, FaPhoneAlt, FaLine, FaCommentDots, FaFacebookF } from 'react-icons/fa'

export default function Whyus(){
    return(
        <div className="mx-auto max-w-full w-full h-full pt-10 bg-[#FFD369]" id="whyus">
            <div className=" text-center" >
                <div className="flex justify-center pt-10 font-bold">
                    <h2 className="text-5xl max-sm:text-4xl text-red-500 text-shadow-md text-shadow-white">
                        ทำไม.. 
                    </h2>
                    <h2 className="text-5xl max-sm:text-4xl text-black text-shadow-md text-shadow-white">
                        ถึงต้องใช้บริการกับ
                    </h2>
                </div>
                <h2 className="text-[#013E7B] text-5xl max-sm:text-4xl justify-self-center font-extrabold pt-5 text-shadow-md text-shadow-white">
                        BuildandSign
                </h2>
                <p className="text-black font-medium text-lg w-auto justify-self-center p-15">
                    เราทำงานร่วมกันเป็นทีม ทำให้การทำงานรวดเร็วและทำงานได้อย่างเต็มประสิทธิภาพ เราใช้ประสบการณ์การทำงานร่วมกันกับความเชี่ยวชาญเฉพาะด้านของทีมงานแต่ละคน มาช่วยในการพัฒนาในด้านต่างๆ
                </p>
            </div>
            <div className="grid grid-cols-4 max-md:grid-cols-2 max-sm:grid-cols-1 gap-5 justify-self-center items-center p-5">
                <img src="whyus/1.PNG" alt="ช่างชำนาญการ" className=" w-70 h-50 border-white border-2" />
                <img src="whyus/2.jpg" alt="ออกแบบโดยทีม Graphic" className=" w-70 h-50 border-white border-2" />
                <img src="whyus/3.jpg" alt="ให้คำแนะนำลูกค้า" className=" w-70 h-50 border-white border-2" />
                <img src="whyus/4.PNG" alt="ใช้วัสดุคุณภาพ" className=" w-70 h-50 border-white border-2" />
                <img src="whyus/5.jpg" alt="ส่งงานตรงเวลา" className=" w-70 h-50 border-white border-2" />
                <img src="whyus/6.jpg" alt="บริการจัดส่งทั่วประเทศ" className=" w-70 h-50 border-white border-2" />
                <img src="whyus/7.jpg" alt="รับประกันหลังการขาย" className=" w-70 h-50 border-white border-2" />
                <img src="whyus/8.jpg" alt="ส่งงานตรงเวลา" className=" w-70 h-50 border-white border-2" />
            </div>
            <div className="flex justify-center gap-6 p-5 max-sm:block mx-13">
                {/* Phone */}
                <a href="tel:0806976334" className="max-sm:my-3 flex items-center gap-2 bg-purple-600 rounded-full px-4 py-2 shadow-lg hover:scale-110 transition">
                    <div className="bg-white text-purple-600 p-2 rounded-full">
                        <FaPhoneAlt className="text-xl" />
                    </div>
                    <span className="text-white font-bold">0806976334</span>
                </a>

                {/* LINE */}
                <a href="https://lin.ee/mWvzu1v" target="_blank" rel="noopener noreferrer" className="max-sm:my-3 flex items-center gap-2 bg-green-500 rounded-full px-4 py-2 shadow-lg hover:scale-110 transition">
                    <div className="bg-white text-green-500 p-2 rounded-full">
                        <FaLine className="text-xl" />
                    </div>
                    <span className="text-white font-bold">@buildandsign</span>
                </a>

                {/* Messenger */}
                <a href="https://www.facebook.com/profile.php?id=61576667166263" target="_blank" rel="noopener noreferrer" className="max-sm:my-3 flex items-center gap-2 bg-blue-500 rounded-full px-4 py-2 shadow-lg hover:scale-110 transition">
                    <div className="bg-white text-blue-500 p-2 rounded-full">
                        <FaFacebookF className="text-xl" />
                    </div>
                    <span className="text-white font-bold">Buildandsign</span>
                </a>
            </div>

    </div>
    )
}