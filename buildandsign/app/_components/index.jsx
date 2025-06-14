import ImageSlider from './ImageSlider';
import { FaPhoneAlt, FaLine, FaFacebookF } from 'react-icons/fa'

export const dynamic = 'force-dynamic';

export default function Home() {
  return (
    <main className="mx-auto max-w-full h-full relative justify-center items-center mt-60 mb-20 [@media(max-width:800px)]:mt-20">
      <div className='justify-center [@media(min-width:900px)]:flex'>
        <div className='px-5 justify-self-center max-sm:h-auto'>
          <ImageSlider />
        </div>
        <div>
            <h1 className="text-[#0000dc] text-5xl lg:text-6xl justify-self-center item-center font-extrabold" id="head">
              บิลด์แอนด์ไซน์ จำกัด
            </h1>
            <div className="flex justify-center items-center text-3xl md:text-4xl font-bold pt-2" id="head2">
                <a className="text-[#0080FF] px-1">“งานป้าย”</a>
                <a className="text-black px-1">และ</a>
                <a className="text-[#0080FF] px-1">“งานต่อเติม”</a>
                <a className="text-black px-1">ครบวงจร</a>
            </div>

            <div className="flex justify-center items-center text-black font-medium pt-5 px-5" id="paragram">
                <p className="justify-center items-center w-[600px] lg:w-[800px] text-md lg:text-xl"><span className="pl-10">เราให้บริการ</span> ทั้งสำรวจหน้างานออกแบบ ผลิตและติดตั้งงาน ป้ายอาคารสูง ป้ายไฟ ป้ายล้อเลื่อน งานโครงการ งานป้ายภายในและภายนอกอาคาร อีกทั้งยังบริการ เขียนแบบทุกขนาด ประเมินราคา BOQ สร้างอาคาร ต่อเติมครบวงจร รับออกแบบและขึ้นแบบ3D งานก่อสร้าง โกดัง หลังคา ที่จอดรถ ด้วยวัสดุที่ได้มาตรฐานช่วยให้งาน ออกมาสวยงามและคงทน
                โดยทีมงานมืออาชีพในทุกสัดส่วนที่ช่วยดูแลคุณอย่างเต็มที่เพื่อให้งานออกมาสวยงาม เหนือความต้องการของลูกค้า</p>
            </div>
            
            <div className='flex items-center justify-center gap-5 pt-5'>
              <a href="#" className="flex items-center justify-center bg-[#0000dc] rounded-xl px-15 py-2 shadow-lg hover:scale-110 transition" id='btnhead'>
                <p className="text-2xl font-bold text-white ">งานป้าย</p>
              </a>

              <a href="#" className="flex items-center justify-center bg-gray-800 rounded-xl px-15 py-2 shadow-lg hover:scale-110 transition" id='btnhead'>
                <p className="text-2xl text-white font-bold">งานต่อเติม</p>
              </a> 
            </div>
        </div>
      </div>

      <div className="flex justify-self-center gap-6 p-5 max-sm:block mx-13 mt-5" id="contact1">
          {/* Phone */}
          <a href="tel:0806976334" className="max-sm:my-3 flex items-center gap-2 bg-gray-700 rounded-full px-3 py-2 shadow-lg hover:scale-110 transition">
              <div className="bg-black text-white p-2 rounded-full">
                  <FaPhoneAlt className="text-2xl" />
              </div>
              <span className="text-xl text-white font-bold" id="textlg">080-697-6334</span>
          </a>

          {/* LINE */}
          <a href="https://lin.ee/mWvzu1v" target="_blank" rel="noopener noreferrer" className="max-sm:my-3 flex items-center gap-2 bg-green-500 rounded-full px-3 py-2 shadow-lg hover:scale-110 transition">
              <div className="bg-white text-green-500 p-2 rounded-full">
                  <FaLine className="text-2xl" />
              </div>
              <span className="text-xl text-white font-bold" id="textlg">@buildandsign</span>
          </a>

          {/* Messenger */}
          <a href="https://www.facebook.com/profile.php?id=61576667166263" target="_blank" rel="noopener noreferrer" className="max-sm:my-3 flex items-center gap-2 bg-blue-500 rounded-full px-3 py-2 shadow-lg hover:scale-110 transition">
              <div className="bg-white text-blue-500 p-2 rounded-full">
                  <FaFacebookF className="text-2xl" />
              </div>
              <span className="text-xl text-white font-bold" id="textlg">Buildandsign</span>
          </a>
      </div>
      
    </main>
  );
}
