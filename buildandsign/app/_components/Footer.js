import { FaFacebookF, FaLine } from 'react-icons/fa';
import { MdPhone } from 'react-icons/md';

export default function Footer() {
  return (
    <footer className="bg-blue-600 text-white py-5">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-5 text-center md:text-left items-center">
        
        {/* Left Section - Logo & Name */}
        <div className="flex flex-col items-center md:items-start">
          <img src="/icon0.svg" className='w-60'/>
        </div>

        {/* Middle Section - Menu */}
        <div className="space-y-4 grid grid-cols-1">
          <a href='#' className="font-bold text-lg">หน้าแรก</a>
          <a href='http://localhost:3000/#service' className="font-bold text-lg">บริการ</a>
          <a href='#' className="font-bold text-lg">ผลงาน</a>
        </div>

        {/* Right Section - Contact */}
        <div className="space-y-4 pt-10">
          <p className="font-bold text-lg">ติดต่อ</p>
          <p className="flex justify-center md:justify-start items-center gap-2">
            <FaFacebookF /> Facebook : Buildandsign
          </p>
          <p className="flex justify-center md:justify-start items-center gap-2">
            <FaLine /> Line : @buildandsign
          </p>
          <p className="flex justify-center md:justify-start items-center gap-2">
            <MdPhone /> Tel : 080 - 697 - 6339
          </p>
        </div>

      </div>
    </footer>
  );
}
