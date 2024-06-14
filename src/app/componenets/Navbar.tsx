import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { LuMenu } from 'react-icons/lu'


const Navbar = () => {
  return (
    <div>
      <nav className="bg-gradient-to-r from-purple-950 via-pink-950 to-purple-950  text-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 dark:border-gray-600">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link
            href=""
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <span className="italic self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              <Image src={require('../../../public/assets/picture/Group 1000006620.png')} alt='logo' />
            </span>
          </Link>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <Button
              variant={'outline'}
              type="button"
              className=' hover:text-white rounded-full bg-gradient-to-r from-purple-950 via-pink-950 to-purple-950 '
            >
              Get The App
            </Button>
            <Sheet>
              <SheetTrigger className='md:hidden text-3xl hover:border-white rounded-lg border-2'><LuMenu/></SheetTrigger>
              <SheetContent className='bg-pink-950'>
                <SheetHeader>
                  <SheetTitle><Image src={require('../../../public/assets/picture/Group 1000006620.png')} alt='logo' /></SheetTitle>
                  <SheetDescription>
                  <div
            className="items-center   justify-between  w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className="flex flex-col text-white justify-end bg-gradient-to-r from-purple-950 via-pink-950 to-purple-950  p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-gradient-to-r dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link
                  href="#"
                  className="block py-2 px-3 text-white bg-slate-400 rounded md:bg-transparent md:text-white md:p-0 md:dark:text-white"
                  aria-current="page"
                >
                  Reviews
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-slate-400 md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-black md:dark:hover:bg-slate-400 dark:border-gray-700"
                >
                  Partners
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Peoples
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Feedback
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Pricing
                </Link>
              </li>
            </ul>
          </div>
                   
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>

          </div>
          <div
            className="items-center   justify-between md:justify-end hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className="flex flex-col text-white justify-end bg-gradient-to-r from-purple-950 via-pink-950 to-purple-950  p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-gradient-to-r dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link
                  href="#"
                  className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-white md:p-0 md:dark:text-white"
                  aria-current="page"
                >
                  Reviews
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Partners
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Peoples
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Feedback
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Pricing
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

    </div>
  )
}

export default Navbar