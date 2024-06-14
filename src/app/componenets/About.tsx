import { Button } from '@/components/ui/button';
import React from 'react';
import { IoCaretForwardOutline } from "react-icons/io5";
import Image from 'next/image';
import { FaRegCheckCircle } from "react-icons/fa";

const About = () => {
    return (
        <div className="bg-[#262626]  text-white py-20 px-10 ">

            <div className='grid sm:grid-cols-2 grid-cols-1 gap-8 mt-32'>



                <div className='mb-12 ml-12 md:ml-0 flex justify-center mx-auto w-full md:mb-16 sm:flex-col sm:items-center md:flex-row '>
                    <div className='w-full h-full'>
                        <Image src={require('../../../public/assets/picture/team-ux-ui-designer-mobile-development-experience-app (1) 1.jpg')} alt='img' className='object-cover object-center' height={500} width={500} />
                    </div>
                    <div className='h-full w-full z-10 relative lg:right-[185px] lg:top-32 right-24 top-16 overflow-hidden'>
                        <Image src={require('../../../public/assets/picture/Image_1.png')} alt='img' className='object-cover object-center  ' height={500} width={500} />
                    </div>
                </div>
                <div className="max-w-screen-xl md:w-[100%] mx-auto">
                    <h5 className='text-sm text-green-400'>ABOUT US</h5>
                    <h1 className="text-4xl md:mt-4 mt-3 font-bold md:w-3/4 mb-4">
                        Your Trusted B2B Email Marketing Agency
                    </h1>

                    <h2 className="text-2xl md:mt-14 font-bold mb-4 mt-12">Why Choose Us?</h2>
                    <ul className="list-none pl-0 mb-6 space-y-3">
                        <li className='flex space-x-2'>
                            <Image src={require('../../../public/assets/picture/check.png')} alt='check' className='h-5 w-5' /> <span className="font-bold">Targeted Messaging:</span> Tailor solutions to clients
                        </li>
                        <li className='flex space-x-2'>
                            <Image src={require('../../../public/assets/picture/check.png')} alt='check' className='h-5 w-5' /> <span className="font-bold">Demonstrated Results:</span> Showcase successes with tangible.
                        </li>
                        <li className='flex space-x-2'>
                            <Image src={require('../../../public/assets/picture/check.png')} alt='check' className='h-5 w-5' /> <span className="font-bold">Customized Solutions:</span> Personalize strategies to client needs
                        </li>
                        <li className='flex space-x-2'>
                            <Image src={require('../../../public/assets/picture/check.png')} alt='check' className='h-5 w-5' />   <span className="font-bold">Industry Expertise:</span> Highlight knowledge and experience effectively
                        </li>
                        <li className='flex space-x-2'>
                            <Image src={require('../../../public/assets/picture/check.png')} alt='check' className='h-5 w-5' />    <span className="font-bold">Transparent Communication:</span> Foster trust through open dialogue
                            channels.
                        </li>
                    </ul>
                    <div className="bg-white md:w-full mt-12 rounded-none p-8 mb-10 hover:border-blue-500 border-2">
                        <div className='flex'>
                            <div>
                                <Image src={require('../../../public/assets/picture/target.png')} alt='dart' className='' />

                            </div>
                            <div className='text-2xl ml-3 font-bold text-gray-900'>
                                <h1 > Our Business Goal</h1>
                            </div>
                        </div>
                        <div><p className='text-gray-500 ml-9 leading-relaxed'>
                            The primary business goal of every email marketing agency is to
                            drive client success and maximize ROI.
                        </p></div>

                    </div>
                    <Button className="font-normal px-2 py-4 text-white p-5 bg-gradient-to-r from-pink-400 to-blue-400  hover:border-blue-500 hover:border-2 rounded-none ">
                        Explore Us{'   '}  <IoCaretForwardOutline className='ml-3' />
                    </Button>
                </div>

            </div>




        </div>
    );
};

export default About