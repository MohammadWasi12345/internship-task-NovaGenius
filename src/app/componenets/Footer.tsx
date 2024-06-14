import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaPhone, FaEnvelope } from 'react-icons/fa';
import { BsGeoAlt } from 'react-icons/bs';
import Image from 'next/image';
const Footer = () => {
  return (
    <footer className="bg-[#222D39] w-screen mx-auto text-gray-300 py-10 items-center p-8">
      <div className="container gap-3 mx-auto flex md:h-[300px] flex-col md:flex-row justify-between items-center px-4">
        <div className="mb-6 md:w-1/4 md:mb-0">
           <Image src={require('../../../public/assets/picture/Group 1000006620.png')} alt ='logo'/>
          <p className="mt-4 md:w-[200px] leading-relaxed  text-sm">
            Bring a best development experience to designers and developers by offer the tools needed for having a quicks and most web projects.
          </p>
        </div>
        <div className="w-full md:w-1/4 md:ml-8 ">
          <h3 className="text-lg text-white font-medium mb-4">About Company</h3>
          <div className='flex'>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Services</a></li>
            <li><a href="#" className="hover:underline">Works</a></li>
            <li><a href="#" className="hover:underline">Pricing</a></li>
            <li><a href="#" className="hover:underline">Resources</a></li>
           
          </ul>
          <ul className='space-y-2 ml-8'>
          <li><a href="#" className="hover:underline">Contact</a></li>
            <li><a href="#" className="hover:underline">News</a></li>
            <li><a href="#" className="hover:underline">Careers</a></li>
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>

          </ul>

          </div>
        
        </div> 
        <div className="w-full md:w-1/4">
          <h3 className="text-lg text-white font-medium mb-4">Account</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Profile</a></li>
            <li><a href="#" className="hover:underline">Setting</a></li>
            <li><a href="#" className="hover:underline">Billing</a></li>
            <li><a href="#" className="hover:underline">Notifications</a></li>
          </ul>
        </div>
        <div className="w-full md:w-1/4">
          <h3 className="text-lg font-medium text-white mb-4">Get In Touch</h3>
          <ul className="space-y-2">
            <li className="flex items-center">
              <FaPhone className="mr-2" />
              Sun-Fri: 9:00-5:00
            </li>
            <li className="flex items-center">
              <FaEnvelope className="mr-2" />
              <a href="#" className="hover:underline">info@example.com</a>
            </li>
            <li className="flex items-center">
              <BsGeoAlt className="mr-2" />
              16/A New York, USA
            </li>
            <li className="flex items-center">
              <FaPhone className="mr-2" />
              0834 3849 9200
            </li>
          </ul>
        </div>
      </div>
      <div className='h-1 w-[90%] mx-auto md:mt-9 mt-6  bg-slate-300'></div>
      <div className="md:ml-8 md:mt-4 mx-auto mt-3 flex justify-start items-center text-sm">
        
        <a href="#" className="mr-4 hover:underline"><FaFacebook /></a>
        <a href="#" className="mr-4 hover:underline"><FaInstagram /></a>
        <a href="#" className="mr-4 hover:underline"><FaTwitter /></a>
      </div>
    </footer>
  );
};

export default Footer;