import React from 'react';
import Image from 'next/image';
const Services = () => {
  return (
    <div className="bg-white mb-10">
      <div className="container mx-auto px-4 py-16">
        <h5 className='texy-sm text-green-500'>WHAT WE OFFER?</h5>
        <h1 className="text-4xl font-extrabold w-1/2 mb-8">EVERYTHING <span className='text-purple-500'>YOU NEEED</span>, NOTHING YOU DONT </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center mb-4">
              <div className="bg-gradient-to-r from-pink-400 to-blue-400 rounded-none py-2 p-2">
               <Image src ={require('../../../public/assets/picture/Frame.png')} alt='cloud'/>
              </div>
              <h2 className="ml-4 text-xl font-bold text-gray-800">B2B Marketing</h2>
            </div>
            <p className="text-gray-600">Engage students & boost enrollments with targeted RTO email marketing. We craft campaigns that convert</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center mb-4">
              <div className="bg-gradient-to-r from-pink-400 to-blue-400 rounded-none py-2 p-2">
              <Image src ={require('../../../public/assets/picture/7067468_graph_analysis_analytics_icon 1.png')} alt='cloud'/>
              </div>
              <h2 className="ml-4 text-xl font-bold text-gray-800">High Growth</h2>
            </div>
            <p className="text-gray-600">Businesses of all sizes, but with a focus on small and medium-sized businesses (SMBs) that are looking to grow their customer base and revenue</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center mb-4">
              <div className="bg-gradient-to-r from-pink-400 to-blue-400 rounded-none py-2 p-2">
              <Image src ={require('../../../public/assets/picture/Frame.png')} alt='cloud'/>
              </div>
              <h2 className="ml-4 text-xl font-bold text-gray-800">Meta Advertising</h2>
            </div>
            <p className="text-gray-600">Generate more leads, convert more enrollments.</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center mb-4">
              <div className="bg-gradient-to-r from-pink-400 to-blue-400 rounded-none py-2 p-2">
              <Image src ={require('../../../public/assets/picture/bar-chart.png')} alt='cloud'/>
              </div>
              <h2 className="ml-4 text-xl font-bold text-gray-800">Email Marketing</h2>
            </div>
            <p className="text-gray-600">Leveraging AI to create dynamic and creativecontent, utilizing generative algorithms to produce innovative and uniquematerials, from text to multimedia.</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center mb-4">
              <div className="bg-gradient-to-r from-pink-400 to-blue-400 rounded-none py-2 p-2">
              <Image src ={require('../../../public/assets/picture/1.png')} alt='cloud'/>
              </div>
              <h2 className="ml-4 text-xl font-bold text-gray-800">Social Media Market</h2>
            </div>
            <p className="text-gray-600">Turn clicks into customers with personalized email campaigns. Boost sales & engagement for your online store</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center mb-4">
              <div className="bg-gradient-to-r from-pink-400 to-blue-400 rounded-none py-2 p-2">
              <Image src ={require('../../../public/assets/picture/bar-chart.png')} alt='cloud'/>
              </div>
              <h2 className="ml-4 text-xl font-bold text-gray-800">Google Ads</h2>
            </div>
            <p className="text-gray-600">Grow trust, build relationships, and boost engagement. Powerful email strategies for financial services</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
