import React from 'react'
import Image from 'next/image'
const Explore = () => {
    return (
        <div className='w-full mb-32 md:mt-96 mt-80'>
            <div className='mt-32 space-x-3 space-y-16  md:items-start flex flex-col md:flex-row m-10'>
                <div className='w-3/4'>
                    <h5 className='text-sm text-green-500'>EXPLORE US</h5>
                    <h1 className="text-4xl font-extrabold  capitalize  mb-8">unlock B2B opportunity: lets our Email <span className='bg-gradient-to-r from-blue-400 to-pink-400 bg-clip-text text-transparent'>marketing agency</span> take the lead!</h1>
                    <p className='leading-relaxed text-gray-500'>Our B2B email marketing agency specializes in crafting highly effective
                        email compaigns that Drive result for buisness like yours. With our staretegic
                        approach, personalized messaging and expert targeting, we’ll help you connect with your ideal B2B audience and generate leads that convert. Get ready to
                        supercharge your buisness growth with our tailored email marketing solutions.</p>
                    <p className='leading-relaxed text-gray-500 mt-7'>We are an outbound email marketing agency helping b2b businesses create outbound acquisition systems that get results fast without spending lots of money. We have helped 180 clients in 15 different industries. We always guarantee our clients a minimum 3x ROI or they dont pay.
                    </p>




                </div>
                <div className=''>


                    <Image src={require('../../../public/assets/picture/3 90.png')} alt='leadin'
                        className='mt-0    ' />



                </div>
            </div>

            <div>

            </div>
            {/* part 2 */}
            <div className='flex flex-col md:flex-row mt-8 m-10  mx-auto'>
                <div className='md:w-1/2'>
                    <Image src={require('../../../public/assets/picture/imgcover.png')} alt='img' />
                </div>
                <div className='md:h-[500px] h-0 mt-10 opacity-0 md:opacity-100 w-1 bg-purple-400'></div>

                <div className='md:w-1/2 ml-3'>
                    <div className=" ">
                        <div className="container mx-auto px-4 ">
                            <h5 className='texy-sm text-green-500'>EXPLORE US</h5>
                            <h1 className="text-4xl font-extrabold capitalize md:w-[90%] mb-8">our  <span className='bg-gradient-to-r from-blue-400 to-pink-400 bg-clip-text text-transparent'>marketing</span> success this year </h1>





                        </div>
                        <div className='flex space-x-1 mt-10 text-2xl ml-3 font-bold text-gray-900'>
                            <Image src={require('../../../public/assets/picture/pro.png')} alt='profile' />  <h2 >180+ Clients </h2>
                        </div>
                    </div>
                    <div><p className='text-gray-500 ml-9 leading-relaxed'>
                        Partnering with over 180 clients globally, our B2B email marketing services offer tailored strategies and proven results for business growth and success.
                    </p>
                    </div>
                    <div className='flex space-x-1 mt-10 text-2xl ml-3 font-bold text-gray-900'>
                        <Image src={require('../../../public/assets/picture/Vector.png')} alt='profile' />  <h2 >15+ Industries </h2>
                    </div>
                    <div><p className='text-gray-500 ml-9 leading-relaxed'>
                        Servicing over 180 clients from 15+ countries, we excel in providing dynamic B2B email marketing solutions, globally recognized for their efficacy and impact
                    </p>
                    </div>
                    <div className='flex space-x-1 mt-10 text-2xl ml-3 font-bold text-gray-900'>
                        <Image src={require('../../../public/assets/picture/apple.png')} alt='profile' />  <h2 >Minimum ROI </h2>
                    </div>
                    <div><p className='text-gray-500 ml-9 leading-relaxed'>
                        Experience unmatched ROI with our guaranteed minimum 3x return on investment, backed by our expertly crafted B2B email marketing strategies
                    </p>
                    </div>
                </div>

            </div>


            {/* part 3 */}


            <div className='flex flex-col md:flex-row  m-10'>
                <div className='md:w-3/5 '>
                    <h5 className='text-sm text-green-500'>EXPLORE US</h5>
                    <h1 className="text-4xl font-extrabold md:w-3/5 mt-3  capitalize  mb-8">the  <span className='bg-gradient-to-r from-blue-400 to-pink-400 bg-clip-text text-transparent'>complete</span> media stack</h1>
                    <p className='leading-relaxed text-gray-500 md:w-3/4'>Full stack marketing ensures you’re not missing an opportunity or worse yet, being held to ransom by one platform. We’ve built a team of specialist marketers that deploy all the tools necessary to get the job done</p>
                    <p className='leading-relaxed text-gray-500 mt-7 md:w-3/4'>Full stack marketing ensures you’re not missing an opportunity or worse yet, being held to ransom by one platform. We’ve built a team of specialist marketers that deploy all the tools necessary to get the job done
                    </p>




                </div>
                <div className='md:h-[400px] h-0 mt-10 opacity-0 md:opacity-100 w-1 bg-purple-400'></div>

                <div className='mt-10'>
                    
                    <div className='flex space-x-1 text-2xl ml-3 font-bold text-gray-900'>
                        <Image src={require('../../../public/assets/picture/LinkedIn.png')} alt='profile' />  <h2 className='mt-3'>Linkedin </h2>
                    </div>

                    <div>
                        <p className='text-gray-500 ml-10 leading-relaxed'>
                        Our team is fully active on social media platforms for marketing assistance.
                        </p>
                    </div>

                    <div className='flex space-x-1 mt-2 text-2xl ml-3 font-bold text-gray-900'>
                        <Image src={require('../../../public/assets/picture/Group 1000006615.png')} alt='profile' />  <h2 className='mt-3'>Mail </h2>
                    </div>

                    <div><p className='text-gray-500 ml-9 leading-relaxed'>
                    Our team is fully active on social media platforms for marketing assistance.
                </p>
                </div>
                <div className='flex space-x-1 text-2xl mt-2 ml-3 font-bold text-gray-900'>
                        <Image src={require('../../../public/assets/picture/Facebock.png')} alt='profile' />  <h2 className='mt-3'>Facebook </h2>
                    </div>

                    <div><p className='text-gray-500 ml-9 leading-relaxed'>
                    Our team is fully active on social media platforms for marketing assistance.
                </p>
                </div>
                </div>
               
            </div>



        </div>

        





        





    )
}

export default Explore
