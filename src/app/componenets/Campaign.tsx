import React from 'react'

const Campaign = () => {
    return (
        <div className='mb-32'>

            <div className='flex flex-col md:flex-row space-y-7 space-x-7 m-10'>

                <div className='md:w-1/2'>
                    <div className='grid grig-grid-cols-1 md:grid-cols-2 gap-8'>

                        <div className="bg-white rounded-lg shadow-md p-6">
                            <div className="flex items-center mb-4">
                                <h2 className="ml-4 text-xl font-bold text-gray-800">Problems</h2>
                            </div>
                            <p className="text-gray-600">Start of the year facing so
                                many problems low analytics
                                reports and some serious
                                rejections</p>
                        </div>
                        <div className="bg-white rounded-lg shadow-md p-6">
                            <div className="flex items-center mb-4">
                                <h2 className="ml-4 text-xl font-bold text-gray-800">Our Analysis</h2>
                            </div>
                            <p className="text-gray-600">When we saw that there
                                is low performance due to
                                not active team on
                                social media</p>
                        </div>

                        <div className="bg-white rounded-lg shadow-md p-6">
                            <div className="flex items-center mb-4">
                                <h2 className="ml-4 text-xl font-bold text-gray-800">Solution</h2>
                            </div>
                            <p className="text-gray-600">Change the staff and hire
                                some professionals of
                                social media that help us
                                fly over the year</p>
                        </div>

                        <div className="bg-white rounded-lg shadow-md p-6">
                            <div className="flex items-center mb-4">
                                <h2 className="ml-4 text-xl font-bold text-gray-800">Success</h2>
                            </div>
                            <p className="text-gray-600">This move road us to success
                                and a bright future in the
                                market</p>
                        </div>

                    </div>

                </div>

                <div className='md:h-[400px] h-0 mt-10 opacity-0 md:opacity-100 w-1 bg-purple-400'></div>

                <div className='md:w-1/2'>
                <div className=''>
                    <h5 className='text-sm text-green-500'>CAMPAIGN</h5>
                    <h1 className="text-4xl font-extrabold  capitalize  mb-8">  <span className='bg-gradient-to-r from-blue-400 to-pink-400 bg-clip-text text-transparent'>maketing campaign</span> over the year</h1>
                    <p className='leading-relaxed text-gray-500'>Ignite your B2B pipeline with email marketing that converts! We craft compelling messages that drive leads, nurture prospects, and close deals. Stop sending emails into the void. Lets turn your inbox into a powerful sales machine</p>
                    <p className='leading-relaxed text-gray-500 mt-7'>We develop performance campaigns with creative that cuts through. Scroll stopping, mind bending, brilliantly strategic, direct response campaigns that convert.
                    </p>




                </div>
                </div>
            </div>
        </div>
    )
}

export default Campaign