import { FaFacebookMessenger, FaPhoneAlt, FaLine, FaCommentDots } from 'react-icons/fa'

export default function SideContact(){
    return(
        <div className='fixed right-3 bottom-3 flex flex-col space-y-3 z-50'>
        {/* Phone Icon */}
            <a className="rounded-full bg-gray-500 p-3 shadow-lg hover:scale-150 transition">
                <FaPhoneAlt className="text-white text-2xl" id='icon' />
            </a>

        {/* Messenger Icon */}
            <a href="https://www.facebook.com/profile.php?id=61576667166263" target="_blank" rel="noopener noreferrer" className="rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 p-3 shadow-lg hover:scale-150 transition">
                <FaFacebookMessenger className="text-white text-2xl" id='icon' />
            </a>

        {/* LINE Icon */}
            <a href="https://lin.ee/mWvzu1v" target="_blank" rel="noopener noreferrer" className="rounded-full bg-green-500 p-3 shadow-lg hover:scale-150 transition">
                <FaLine className="text-white text-2xl" id='icon' />
            </a>
        </div>
    )
}