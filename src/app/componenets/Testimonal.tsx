'use client';
import Image from 'next/image';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import React, { useState } from 'react';
const Testimonial = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: 'Jesica Lirona',
      title: 'Front End Developer',
      quote:
        '"There are many variation of passages of Lorem ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable. If you are going to use a passage of lorem Ipsum"',
        img: '/assets/pictures/Avatar.png'
    },
    {
      name: 'John Doe',
      title: 'CEO',
      quote:
        '"I have been using this product for over a year now and I am very satisfied. It has helped me improve my business significantly. I would recommend this product to anyone."',
      img: '/assets/picture/Avatar.png'
    },
    {
      name: 'Jane Smith',
      title: 'Marketing Manager',
      quote:
        '"This product is amazing! It is easy to use and has helped me reach my target audience. I love it!"',
      img: ''
    }

  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prevTestimonial) =>
      prevTestimonial === testimonials.length - 1
        ? 0
        : prevTestimonial + 1
    );
  };

  const previousTestimonial = () => {
    setCurrentTestimonial((prevTestimonial) =>
      prevTestimonial === 0
        ? testimonials.length - 1
        : prevTestimonial - 1
    );
  };

  return (
  <div className="w-[100vw] bg-gradient-to-r from-purple-950 via-pink-950 to-purple-950  text-white py-16 px-4">
      <div className="container mx-auto">
        <div>
        <h5 className='text-center text-green-500 text-sm uppercase'>Testimonal</h5>
        <h2 className="text-3xl font-bold text-center mb-8">
          What <span className='text-purple-500'>Clients</span> Say About US
        </h2>
        <div className='flex justify-between'>
          <div><Image src={require('../../../public/assets/picture/image_here (1).png')} alt='img'/>
          </div>
          <div><Image src={require('../../../public/assets/picture/image_4.png')} alt='img'></Image></div>
        </div>
        </div>
       
       
        <div className="relative w-3/4 shadow-slate-700 border-x-slate-300 border-y-slate-300 shadow-xl mt-14 mx-auto rounded-none h-[400px] overflow-hidden md:h-[418px] bg-white">
          <div className="flex items-center justify-center mt-3 md:mt-10">
            <Image src={require('../../../public/assets/picture/Rating.png')} alt='rating'/>
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`absolute mt-4 top-0 left-0 w-full h-full rounded-lg md:mt-16 transition-opacity duration-500 ${
                  index === currentTestimonial ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <div className="p-8 mt-4">
                  <p className=" w-3/4 leading-relaxed line-clamp-3 md:line-clamp-none text-gray-800 mx-auto text-center mb-4">
                    {testimonial.quote}
                  </p>
                  <div className="flex mt-10 items-center justify-center">
                    <Image
                      src={require('../../../public/assets/picture/Avatar.png')}
                      alt={testimonial.name}
                      width={100}
                      height={100}
                      className="w-16 h-16 rounded-full mr-4"
                    />
                    <div>
                      <h3 className="font-bold text-gray-900 text-lg mb-1">
                        {testimonial.name}
                      </h3>
                      <p className="text-green-400">{testimonial.title}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="absolute bottom-0 left-0 w-full flex items-center justify-center space-x-4 px-4 py-2">
            {testimonials.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full bg-gray-400 ${
                  index === currentTestimonial
                    ? 'bg-white'
                    : 'hover:bg-white'
                }`}
                onClick={() => setCurrentTestimonial(index)}
              ></div>
            ))}
          </div>

          <div className="absolute bottom-0 right-0 w-16 h-16 flex items-center justify-center rounded-full text-gray-900 text-3xl cursor-pointer">
            <IoIosArrowForward onClick={nextTestimonial}/>
          </div>

          <div className="absolute bottom-0 left-0 w-16 h-16 flex items-center justify-center rounded-full text-gray-900 text-3xl cursor-pointer">
          <IoIosArrowBack onClick={previousTestimonial} />
          </div>
         
        </div>
      </div>
      <div className='flex justify-between m-7 mt-5'>
          <div><Image src={require('../../../public/assets/picture/image_here.png')} alt='img'/>
          </div>
          <div><Image src={require('../../../public/assets/picture/image_3.png')} alt='img'></Image></div>
        </div>
    </div>
  );
};

export default Testimonial;