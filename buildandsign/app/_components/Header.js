import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { Slabo_13px } from 'next/font/google';

const slabo = Slabo_13px({
  subsets: ['latin'],
  weight: '400',
})

const navigation = [
  { name: 'หน้าแรก', href: 'http://localhost:3000/', current: true },
  { name: 'ทำไมต้องเป็นเรา', href: 'http://localhost:3000/#whyus', current: false },
  { name: 'บริการของเรา', href: 'http://localhost:3000/#service', current: false },
  { name: 'ตัวอย่างผลงาน', href: 'http://localhost:3000/#', current: false },
  { name: 'บทความ', href: 'http://localhost:3000/#articles', current: false },
  { name: 'ติดต่อเรา', href: 'http://localhost:3000/#', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Header(){
  return (
    <>
      <nav className='fixed top-0 right-0 left-0 z-[1000] shadow-underline'>
        {/* Fast contact */}
        <div className="mx-auto max-w-full h-8 items-center sm:px-6 lg:px-8 bg-[#393E46]  [@media(max-width:800px)]:hidden">
          <div className='pt-1 items-center flex px-5'>
            <img src="/door.svg" alt="เวลาทำการ" className="w-6 h-6 invert" />
            <a className='text-md'>เวลาทำการ 08:00 - 17:00 น. | Facebook: Buildandsign | Line: @buildandsign |</a>
            <img src="/phone.svg" alt="เวลาทำการ" className="w-4 h-4 invert" />
            <a className='text-md'> : 0806976334</a>
          </div>
        </div>

        {/* Start Navbar */}
        <Disclosure as="nav" className="bg-[#0000dc]">
        <div className="mx-auto max-w-full px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-14 items-center justify-between">

            {/* Dropdown list icon โชว์เมื่อจอเล็ก */}
            <div className="absolute inset-y-0 left-0 items-center hidden [@media(max-width:900px)]:flex hover:scale-95 transition">
              {/* Mobile menu button*/}
              <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-gray-600 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset">
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open main menu</span>
                <Bars3Icon aria-hidden="true" className="block size-7 group-data-open:hidden" />
                <XMarkIcon aria-hidden="true" className="hidden size-7 group-data-open:block" />
              </DisclosureButton>
            </div>
            <div className="flex flex-1 items-center justify-center [@media(min-width:900px)]:items-stretch [@media(min-width:900px)]:justify-between">
              {/* ชื่อบริษัท */}
              <div className="flex shrink-0 items-center">
                <a className={`text-2xl text-shadow-lg/30 px-7  ${slabo.className}`} href='#'>
                    Build and Sign
                </a>
              </div>

              <div className="hidden sm:ml-6 sm:block self-center">
                <div className="hidden [@media(min-width:900px)]:flex space-x-4">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      aria-current={item.current ? 'page' : undefined}
                      className={classNames(
                        item.current ? 'bg-[#FFD369] text-[#0000dc]' : 'text-white hover:bg-gray-600 hover:text-white',
                        'rounded-md px-1  text-lg font-medium hover:scale-115 transition',
                      )}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Dropdown menu */}
        <DisclosurePanel className="xl:hidden">
          <div className="space-y-1 px-2 pt-2 pb-3">
            {navigation.map((item) => (
              <DisclosureButton
                key={item.name}
                as="a"
                href={item.href}
                aria-current={item.current ? 'page' : undefined}
                className={classNames(
                  item.current ? 'bg-white text-[#0000dc]' : 'text-white hover:bg-gray-600 hover:text-white',
                  'block rounded-md px-3 py-2 text-md font-medium hover:scale-95 transition',
                )}
              >
                {item.name}
              </DisclosureButton>
            ))}
          </div>
        </DisclosurePanel>
      </Disclosure>
    </nav>
    </>
  )
}