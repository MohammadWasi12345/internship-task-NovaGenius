 import { Button } from '@/components/ui/button'
 import React from 'react'
 import Image from 'next/image'

const Hero = () => {
     return (
        <div className='bg-gradient-to-r from-purple-950 via-pink-950 to-purple-950 w-[100vw] h-[100%]'>
            <section className="text-white   body-font ">
                <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">

                    <div className="text-center mt-32 mb-56 lg:w-2/3 w-full">
                        <h1 className="title-font capitalize sm:text-4xl text-3xl mb-4 font-extrabold text-white">
                            connect & convert: elevate your <span className='bg-gradient-to-r from-blue-400 to-pink-400 bg-clip-text text-transparent'>B2B</span> email <span className='bg-gradient-to-r from-blue-400 to-pink-400 bg-clip-text text-transparent'>marketing </span> strategy
                        </h1>
                        <p className="mb-8 leading-relaxed w-1/2 text-center mx-auto">
                            Norem ipsum dolor sit amet, consectetur adipiscin
                            g elit. Nunc vulputate libero et velit interdum,
                        </p>
                        <div className="flex justify-center">

                            <Button
                                variant={'outline'}
                                type="button"
                                className=' hover:text-white rounded-full bg-gradient-to-r from-black via-pink-950 to-black'
                            >
                                Get The App
                            </Button>
                        </div>


                    </div>


                </div>
            </section>

           

<div className="relative w-full h-full ">
      <div className="absolute inset-0 bg-gradient-to-r from-black via-gray-700 to-black opacity-70" />
      <div className="absolute inset-0 flex flex-col w-3/4 mx-auto justify-center items-center">
      <Image src={require('../../../public/assets/picture/Group 1000006615.png')} alt='social'/>

        <Image
          src={require('../../../public/assets/picture/Campaign Screenshot 7 2.png')}
          alt="Your Image"
          className="rounded-lg border-black  object-cover border-8 shadow-2xl"
        />
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full">
      <div className='relative'>
      <div className='flex md:mx-38 xl:mx-40 justify-between'>
            <div>      <Image src={require('../../../public/assets/picture/Facebock.png')} alt='social'/>
            </div>
            <div>      <Image src={require('../../../public/assets/picture/LinkedIn.png')} alt='social'/>
            </div>

        </div>
      </div>
   
      </div>
    </div>

        </div>
    )
}

export default Hero
