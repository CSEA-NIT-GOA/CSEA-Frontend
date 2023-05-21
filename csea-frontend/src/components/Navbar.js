import React from 'react'
import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import logo from './images/CSEA11.png'
const navigation = [
  { name: 'HOME', href: '/CSEA-Frontend/' },
  { name: 'GALLERY', href: '#gallery' },
  { name: 'EVENTS', href: '#features' },
  { name: 'BLOGS', href: '#news' },
  { name: 'TEAM', href: '#team' },
  { name: 'CONTACT US', href: '#contact' }
]
function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  return (
    <div className="p-5 pt-5 lg:px-8 bg-slate-200 sticky top-0 z-10 bg-gradient-to-r from-zinc-900 via-zinc-900 to-zinc-900 ">
      <div>
        <nav className="flex h-9 items-center justify-between " aria-label="Global">
          {/* Logo code */}
          <div className="flex lg:min-w-0 lg:flex-1" aria-label="Global">
            <a href="/CSEA-Frontend/" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img className='h-8' src={logo} alt="logo" />
            </a>
          </div>

          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-end lg:gap-x-16">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="group font-[700] text-white hover:text-slate-400 " >
                {item.name}
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-sky-500 "></span>
              </a>
            ))}
          </div>
        </nav>
        <Dialog as="div" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <Dialog.Panel focus="true" className="fixed inset-0 z-10 overflow-y-auto bg-gradient-to-r from-zinc-900 via-zinc-900 to-zinc-900 px-6 py-6 lg:hidden">
            <div className="flex h-9 items-center justify-between">
              <div className="flex">
                <a href="/CSEA-Frontend/" className="-m-1.5 p-1.5">
                  <span className="sr-only">Your Company</span>
                  <img className='h-8' src={logo} alt="logo" />
                </a>
              </div>
              <div className="flex">
                <button
                  type="button"
                  className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-white hover:bg-slate-400"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </div>
    </div>
  )
}

export default Navbar