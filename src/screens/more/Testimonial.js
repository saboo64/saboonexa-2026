import React from "react";
import Header from "../../components/Header/Header";
import { testimonials } from "../../constants";
import { BsQuote } from "react-icons/bs";
import { RiStarFill } from "react-icons/ri";
import Seo from "../../components/SEO/seo";
import { BreadcrumbSchema } from "../../components/SEO/schema";

function Testimonial() {
  return (
    <>
      <Seo
        title="Hear from Our Satisfied Customers - Testimonials - Popular Nexa"
        description="Discover what our satisfied customers have to say about their experiences with Saboo Nexa and our exceptional services."
        keywords="Testimonials, Customers, Satisfaction, Reviews, Popular Nexa"
        url="https://saboonexa.in/testimonials"
      />
      <BreadcrumbSchema items={[{ name: 'Home', path: '/' }, { name: 'Testimonials' }]} />
      <Header />
      <div className="pb-[67px] bg-black sm:pb-[120px] lg:pb-[135px]"></div>

      <div className="bg-[#15151e] pb-12 pt-6 ">
        <p className="text-2xl font-medium text-center text-white uppercase sm:text-3xl md:text-4xl">
          Testimonials
        </p>
        <p className="mt-1 tracking-wider text-center text-gray-100">
          What Customers Say About Us
        </p>
      </div>

      <div className="container px-4 pt-8 pb-16 mx-auto space-y-7 sm:px-0">
        <div className="grid grid-cols-1 gap-4 mt-3 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {testimonials.map((item) => (
            <div
              key={item.author}
              className="text-black duration-300 bg-white shadow-lg cursor-pointer shadow-gray-500 rounded-3xl hover:bg-gray-200 hover:scale-105"
            >
              {/* <img
            src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/icons/Saboo-Nexa-Profile-Icon.webp'
            alt='profile icon'
            className='mx-auto'
          /> */}
              <div className="flex flex-col h-full py-8">
                <div className="ml-10 text-4xl ">
                  <BsQuote />
                </div>
                <p className="text-lg text-center uppercase ">{item.author}</p>
                <div className="flex items-center justify-center text-red-600">
                  <RiStarFill />
                  <RiStarFill />
                  <RiStarFill />
                  <RiStarFill />
                  <RiStarFill />
                </div>
                <div className="px-5 mt-6 text-center ">{item.text}</div>
                <div className="mr-10 text-4xl rotate-180 ">
                  <BsQuote />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Testimonial;
