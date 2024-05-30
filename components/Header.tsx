'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Disclosure, Transition } from '@headlessui/react'
import { Fragment } from 'react'

const Header = () => {
    const pathname = usePathname()

    return (
        <header className='container mx-auto mb-3 md:mb-5 lg:mb-8'>
          <Disclosure as="nav" className="p-0 py-4 lg:py-7 border-b border-b-gray-400 sm:px-0">
            {({ open }) => (
              <>
                <div className="relative flex items-center justify-between">
                  <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                    {/* Mobile menu button*/}
                    <Disclosure.Button className="relative w-6 h-6">
                      <span className="sr-only">Open main menu</span>
                      <div className="block w-6 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <span aria-hidden="true" className={`block absolute h-0.7 rounded-lg w-6 bg-current transform transition duration-500 ease-in-out ${open ? 'rotate-45' : '-translate-y-2'}`}></span>
                        <span aria-hidden="true" className={`block absolute h-0.7 rounded-lg w-6 bg-current transform transition duration-500 ease-in-out ${open ? 'opacity-0' : ''}`}></span>
                        <span aria-hidden="true" className={`block absolute h-0.7 rounded-lg w-6 bg-current transform transition duration-500 ease-in-out ${open ? '-rotate-45' : 'translate-y-2'}`}></span>
                      </div>
                    </Disclosure.Button>
                  </div>
                  
                  <Link href="/" title='Go to Homepage'>
                    <span className='font-bold text-xl lg:text-3xl'>KaszubDev</span>
                  </Link>
                  <div className="hidden sm:ml-6 sm:block">
                    <div className="flex space-x-4">
                      <Link href="/" className={`text-base text-black text-right border-none pr-2 md:hover:text-zinc-700 ${pathname == "/projects" ? "font-bold" : ""}`}>
                        Projects
                      </Link>
                      <Link href="/about-me" className={`text-base text-black text-right border-none pr-2 md:hover:text-zinc-700 ${pathname == "/about-me" ? "font-bold" : ""}`}>
                        About me
                      </Link>
                    </div>
                  </div>
                </div>
                
                <Transition
                  as={Fragment}
                  enter="transition duration-250 ease-out"
                  enterFrom="transform scale-95 opacity-0"
                  enterTo="transform scale-100 opacity-100"
                  leave="transition duration-100 ease-out"
                  leaveFrom="transform scale-100 opacity-100"
                  leaveTo="transform scale-95 opacity-0"
                >
                  <Disclosure.Panel className="sm:hidden">
                    <div className="flex flex-col gap-y-3 mt-4">
                      <Link href="/" className={`text-base text-black text-right border-none pr-2 md:hover:text-zinc-700 ${pathname == "/projects" ? "font-bold" : ""}`}>
                        Projects
                      </Link>
                      <Link href="/about-me" className={`text-base text-black text-right border-none pr-2 md:hover:text-zinc-700 ${pathname == "/about-me" ? "font-bold" : ""}`}>
                        About me
                      </Link>
                    </div>
                  </Disclosure.Panel>
                </Transition>
              </>
            )}
          </Disclosure>
        </header>
    )
}

export default Header