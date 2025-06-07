export default function Abouteus(){
    return(
        <>
        <div className="mx-auto max-w-full h-full relative justify-center items-center mt-30 mb-30" id="aboutus">
            <h1 className="text-[#0080FF] text-6xl justify-self-center item-center font-extrabold" id="BAS">
                บิลด์แอนด์ไซน์ จำกัด
            </h1>
            <div className="flex justify-center items-center text-4xl font-bold pt-5" id="BAS2">
                <a className="text-black px-1">ดำเนินธุรกิจด้าน</a>
                <a className="text-[#0080FF] px-1">“งานป้ายครบวงจร”</a>
                <a className="text-black px-1">และ</a>
                <a className="text-[#0080FF] px-1">“งานต่อเติมครบวงจร”</a>
            </div>
            

            {/* Media 680px */}
            <div className="pt-3 text-2xl font-bold [@media(min-width:680px)]:hidden [@media(max-width:500px)]:hidden" id="BASv2">
                <a className="flex justify-self-center text-black px-1">ดำเนินธุรกิจด้าน</a>
                <div className="flex justify-self-center">
                    <span className="flex justify-self-center text-[#0080FF] px-1">“งานป้ายครบวงจร”</span>
                    <span className="flex justify-self-center text-black px-1">และ</span>
                    <span className="flex justify-self-center text-[#0080FF] px-1">“งานต่อเติมครบวงจร”</span>
                </div>
            </div>

            {/* Media 500px */}
            <div className="pt-3 text-2xl font-bold [@media(min-width:500px)]:hidden" id=''>
                <a className="flex justify-self-center text-black px-1">ดำเนินธุรกิจด้าน</a>
                <a className="flex justify-self-center text-[#0080FF] px-1">“งานป้ายครบวงจร”</a>
                <a className="flex justify-self-center text-black px-1">และ</a>
                <a className="flex justify-self-center text-[#0080FF] px-1">“งานต่อเติมครบวงจร”</a>
            </div>

             <div className="flex justify-center items-center text-black font-bol pt-10 text-3xl mx-8" id="paragram">
                <p className="justify-center items-center w-[1200px] "><span className="pl-10">เราให้บริการ</span> ทั้งสำรวจหน้างานออกแบบ ผลิตและติดตั้งงาน ป้ายอาคารสูง ป้ายไฟ ป้ายล้อเลื่อน งานโครงการ งานป้ายภายในและภายนอกอาคาร อีกทั้งยังบริการ เขียนแบบทุกขนาด ประเมินราคา BOQ สร้างอาคาร ต่อเติมครบวงจร รับออกแบบและขึ้นแบบ3D งานก่อสร้าง โกดัง หลังคา ที่จอดรถ ด้วยวัสดุที่ได้มาตรฐานช่วยให้งาน ออกมาสวยงามและคงทน
                โดยทีมงานมืออาชีพในทุกสัดส่วนที่ช่วยดูแลคุณอย่างเต็มที่เพื่อให้งานออกมาสวยงาม เหนือความต้องการของลูกค้า</p>
            </div>   
        </div>
        </>
    )
}