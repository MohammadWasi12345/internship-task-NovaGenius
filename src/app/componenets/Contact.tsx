import { Button } from '@/components/ui/button'
import React from 'react'

const Contact = () => {
  return (
    <div>
          <div id='Contact'>
            <section className="text-gray-600 body-font items-center shadow-md relative mx-auto ">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col text-center w-full mb-12">
                        <h1 className="sm:text-3xl text-2xl title-font mb-4 font-extrabold text-gray-900">
                            Request a <span className='bg-gradient-to-r from-blue-400 to-pink-400 bg-clip-text text-transparent'>Proposal </span>
                        </h1>
                       
                    </div>

                    <div className="lg:w-full sm:mx-auto md:w-2/3 ">
                        <div className="flex flex-wrap justify-center  -m-2">
                            <form className='mx-auto shadow-lg p-[100px]  w-[658px] h=[949px]'>
                                <div className="p-2 w-full">
                                    <div className="relative">
                                        <label htmlFor="name" className="font-bold leading-7 text-sm  text-gray-900">
                                            Name
                                        </label>
                                        <input
                                            placeholder='Name'
                                            type="text"
                                            id="name"
                                            name="name"
                                            className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="p-2 w-full">
                                    <div className="relative">
                                        <label htmlFor="email" className="text-gray-900 font-bold  leading-7 text-sm  ">
                                            Email
                                        </label>
                                        <input
                                            placeholder='Enter Your Email'
                                            type="email"
                                            id="email"
                                            name="email"
                                            className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="p-2 w-full">
                                    <div className="relative">
                                        <label htmlFor="subject" className="leading-7 text-sm text-gray-900 font-bold ">
                                            Marketing Budget
                                        </label>
                                        <input
                                            placeholder='Enter Your Budget'
                                            type="text"
                                            id="Subject"
                                            name="Subject"
                                            className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="p-2 w-full">
                                    <div className="relative">
                                        <label
                                            htmlFor="message"
                                            className="text-gray-900 font-bold leading-7 text-sm ">
                                            About Business
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            placeholder='Write Your Business'
                                            className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                                            defaultValue={""}
                                        />
                                    </div>
                                </div>
                                <div className="p-2 md:mt-3 w-full">
                                    <Button className="flex mx-auto text-white  bg-gradient-to-r from-pink-400 to-blue-400 border-0 py-2 px-8 focus:outline-none rounded text-lg">
                                        Submit
                                    </Button>
                                </div>
                            </form>


                        </div>
                    </div>

                </div>
            </section >

        </div >
    </div>
  )
}

export default Contact