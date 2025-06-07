import Image from "next/image"

export default function AboutService(){
    return(
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 h-auto w-full">
        {/* ฝั่งซ้าย - งานป้าย */}
        <div className="bg-[#013E7B] text-white px-6 py-10 flex flex-col items-center">
          <Image
            src="/sign-bg.webp"
            alt="Sign"
            width={800}
            height={300}
            className="rounded shadow-lg"
          />
          <h2 className="text-white text-5xl font-bold mt-6 mb-3 text-center">งานป้ายครบวงจร</h2>
          <p className="text-2xl leading-relaxed text-center">
            เราให้บริการ ทั้งสำรวจหน้างาน ออกแบบ ผลิตและติดตั้งงาน<br />
            <span className="text-orange-200 font-semibold">ป้ายอาคารสูง ป้ายไฟ ป้ายล้อเลื่อน งานโครงการงานป้ายภายในและภายนอกอาคาร</span><br />
             ด้วยวัสดุที่ได้มาตรฐานโดยทีมงานมืออาชีพ
            
          </p>
        </div>

        {/* ฝั่งขวา - งานต่อเติม */}
        <div className="bg-[#393E46] text-white px-6 py-10 flex flex-col items-center">
          <Image
            src="/building-bg.jpeg"
            alt="Build"
            width={800}
            height={300}
            className="rounded shadow-lg"
          />
          <h2 className="text-white text-5xl font-bold mt-6 mb-3 text-center">งานต่อเติมครบวงจร</h2>
          <p className="text-2xl leading-relaxed text-center">
            เราให้บริการ <span className="font-semibold">เขียนแบบทุกขนาด ประเมินราคา BOQ สร้างอาคาร ต่อเติมครบวงจร รับออกแบบและขึ้นแบบ 3D งานก่อสร้าง โกดัง หลังคา ที่จอดรถ</span><br />
            โดยทีมงานวิศวกร 100% ในการควบคุมการก่อสร้าง
          </p>
        </div>
      </div>
    </div>
    )
}