import React, { useState } from "react";
import Header from "../Header/Header";
import { Helmet } from "react-helmet";
import DrivingSchoolPopup from "../utils/DrivingSchoolPopup";
import { DrivingSchoolForm } from "./DrivingSchoolForm";

// Import Swiper styles
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Navigation } from "swiper";

const DrivingSchool = () => {
  return (
    <div className="">
      <Helmet>
        <title>
          Maruti Suzuki Driving School Car Service | Expert Training &
          Maintenance.
        </title>
        <meta
          name="title"
          content="Maruti Suzuki Driving School Car Service | Expert Training & Maintenance."
        />
        <meta
          name="description"
          content="Learn to drive with confidence at Maruti Suzuki Driving School. Our expert instructors and well-maintained vehicles ensure a safe and comprehensive driving experience. Enroll now for professional driving lessons and top-notch car service."
        />
        <meta
          name="keywords"
          content="Maruti Suzuki Driving School, Car service, Driving lessons, Professional driving training, Expert instructors, Safe driving, Comprehensive driving school ,Vehicle maintenance, Learn to drive"
        />
        <meta name="author" content="Broaddcast" />
      </Helmet>
      <Header />

      <HeroSection />
      {/* <FormSub /> */}
      <DrivingSchoolForm />
      <WhyChooseUs />
      <Course />
      <Locations />
    </div>
  );
};

const HeroSection = () => {
  return (
    <>
      <div className="pb-[67px] sm:pb-[120px] lg:pb-[135px] bg-[#171c8f] "></div>
      <div className="relative ">
        {/* <img
          src={require("../../Website_Mobile_Maruti_Suzuki_Driving_School_January_New_Year_2025_offers_Saboo_RKS_Motor.webp")}
          // src={require("../../assets/others/Website_Mobile_Maruti_Suzuki_Driving_School_October_Dussehra_Diwali_Offers_Saboo_RKS_Motor_Learn_Driving_Driving_School.webp")}
          alt="Website Maruti Suzuki Driving School October Dussehra Diwali Offers Saboo RKS Motor Learn Driving Driving School"
          className="w-full h-full md:hidden"
        /> */}
        <img
          src={require("../../assets/others/Maruti_Driving_School_Kushaiguda.webp")}
          alt="Saboo_Maruti_Driving_School _in_Hyderabad_Driving_School_Near_Me "
          className="w-full h-full md:hidden"
        />
      </div>

      <section className="relative hidden md:block">
        <Swiper
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          }}
          // loop={true}
          speed={1000}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          // spaceBetween={10}
          grabCursor={true}
          slidesPerView={1}
          centeredSlides={true}
          // navigation={true}
          modules={[Navigation, Autoplay]}
          className="h-full select-none mySwiper2 "
        >
          <SwiperSlide className="h-full bg-black">
            <img
              //src={require("../../Website_Maruti_Suzuki_Driving_School_January_New_Year_2025_offers_Saboo_RKS_Motor.webp")}
               src={require("../../assets/others/Saboo_Maruti_Driving_School _in_Hyderabad_Driving_School_Near_Me.webp")}
              alt="Saboo_Maruti_Driving_School _in_Hyderabad_Driving_School_Near_Me "
              className="hidden w-full h-full select-none md:block"
            />
            {/* <img
              src={require("../../assets/others/Maruti_Driving_School_Kushaiguda.webp")}
              alt="Saboo_Maruti_Driving_School _in_Hyderabad_Driving_School_Near_Me "
              className="w-full h-full md:hidden"
            /> */}
          </SwiperSlide>
          {/* <SwiperSlide className="h-full bg-black">
            <img
              src={require("../../assets/others/Saboo_Maruti_Driving_School _in_Hyderabad_Driving_School_Near_Me.webp")}
              alt="Saboo_Maruti_Driving_School _in_Hyderabad_Driving_School_Near_Me "
              className="hidden w-full h-full select-none md:block"
            />
            {/* <img
              src={require("../../assets/others/Maruti_Driving_School_Kushaiguda.webp")}
              alt="Saboo_Maruti_Driving_School _in_Hyderabad_Driving_School_Near_Me "
              className="w-full h-full md:hidden"
            /> 
          </SwiperSlide>
          <SwiperSlide className="relative">
            <img
              src={require("../../assets/others/Saboo_Maruti_Driving_School _in_Hyderabad.webp")}
              alt="Saboo_Maruti_Driving_School _in_Hyderabad_Driving_School_Near_Me"
              className="hidden w-full select-none md:block xl:h-[25vh]"
            />
            <div className="absolute hidden w-full md:block top-1/3">
              <div className="container w-full px-4 mx-auto text-2xl xl:text-3xl text-[#171c8f]">
                LEARN DRIVING and <br />
                <span className="text-4xl font-semibold ">
                  TRAFFIC RULES that make
                </span>
                <br />
                you a better driver.
              </div>
            </div>
          </SwiperSlide> */}
        </Swiper>
      </section>
    </>
  );
};

const WhyChooseUs = () => (
  <div className="container px-1 py-10 mx-auto lg:py-16">
    <div className="text-[#171c8f] text-4xl lg:text-5xl font-medium mb-4">
      Why Choose Us?
    </div>
    <div className="">
      Knowing how to drive a car is no longer a luxury, it's a necessity!
    </div>
    <div className="grid gap-4 px-2 md:grid-cols-2 lg:gap-8">
      <div className="mt-6 lg:mt-8">
        <div className="flex items-start gap-4 lg:gap-8">
          <img
            src="https://www.marutisuzukidrivingschool.com/-/media/feature/maruti-driving-school/why-choose-imagevideo/happy-student.png?rev=82c0011066984078abf3e7c2d3de0157"
            alt=""
          />
          <div>
            <div className="text-3xl md:text-4xl text-[#171c8f]">10 000+</div>
            <div className="text-[#171c8f] py-1 font-medium">
              HAPPY STUDENTS
            </div>
            <div>
              We have successfully transformed 20 00 000+ beginners into skilled
              and confident drivers.
            </div>
          </div>
        </div>
        <div className="flex items-start gap-4 mt-6 lg:gap-8">
          <img
            src="https://www.marutisuzukidrivingschool.com/-/media/feature/maruti-driving-school/why-choose-imagevideo/trained-faculty.png?rev=c41da16784264499bf56d49b57d9e27f"
            alt=""
          />
          <div>
            <div className="text-3xl md:text-4xl text-[#171c8f]">10 +</div>
            <div className="text-[#171c8f] py-1 font-medium">
              CERTIFIED TRAINERS
            </div>
            <div>
              Get driving training from our team of driving professionals that
              has 1,328 certified male and female trainers.
            </div>
          </div>
        </div>
        <div className="flex items-start gap-4 mt-6 lg:gap-8">
          <img
            src="https://www.marutisuzukidrivingschool.com/-/media/feature/maruti-driving-school/why-choose-imagevideo/authorised-dealers.png?rev=f35d6c2b84844e0dbd6217fe6617e38f"
            alt=""
          />
          <div>
            <div className="text-3xl md:text-4xl text-[#171c8f]">3</div>
            <div className="text-[#171c8f] py-1 font-medium">
              TRAINING SCHOOLS
            </div>
            <div>
              We have made quality driving training accessible with our
              widespread network of 520+ Training Schools covering 250+ Cities.
            </div>
          </div>
        </div>
      </div>
      <div className="pt-4 text-center ">
        <div>
          <img
            src="https://www.marutisuzukidrivingschool.com/-/media/feature/maruti-driving-school/why-choose-imagevideo/why-chooseimg1.webp?rev=c76f29fbd539432c96174f5b45239356"
            alt=""
            className="mx-auto"
          />
        </div>
        <div className="text-[#171c8f] pt-4 font-medium">
          Learn Theoretically. Apply Practically.
        </div>
        <div className="py-4">
          Perfection comes with seamless integration of learning and
          application! Become a confident driver by getting theoretical and
          practical driving training at Maruti Suzuki Driving School.
        </div>
        <div>
          <a href="#course" aria-label="View All Courses">
            <button
              className="bg-[#171c8f] text-white px-8 py-3 mt-4 rounded-lg"
              aria-label="View All Courses"
            >
              VIEW ALL
            </button>
          </a>
        </div>
      </div>
    </div>
  </div>
);

const Course = () => {
  const [open, setOpen] = useState(false);

  return (
    <div id="course" className="container px-1 mx-auto md:py-10 ">
      <div className="text-[#171c8f] text-3xl lg:text-4xl font-medium mb-4">
        CHOOSE YOUR COURSE TO DRIVE WITH CONFIDENCE ON THE ROAD
      </div>
      <div>
        Our meticulously designed courses help transform beginners into skilled
        and confident drivers. Choose your desired course from a range of
        driving training courses and master the skill of driving at Maruti
        Suzuki Driving School.
      </div>
      <div className="px-2 md:px-4 md:py-4 my-8 rounded bg-gradient-to-t from-[#d0d4f8] via-white ">
        <div className="text-3xl md:text-4xl text-[#171c8f] mb-4">
          1. Learner <span className="font-medium">Standard</span> Track Course
        </div>
        <div className="grid gap-2 lg:grid-cols-2 ">
          <div>
            {/* <div className="text-xl md:text-2xl text-[#171c8f] mb-2  tracking-wide">
              Learner Standard Track Course
            </div> */}
            <div className="mb-4 leading-5 text-justify">
              If you've never been behind the steering wheel, this course is for
              you. At the end of 21 days, you'll know the basic traffic rules
              and have a hands-on driving experience through simulators and
              on-road driving. What's more, you'll have the confidence of taking
              the RTO driving exam to obtain a permanent driving license.
            </div>
            <div className="grid grid-cols-2 gap-2 md:gap-4 sm:grid-cols-3">
              {/* Theory Session */}
              <div className="py-4 text-sm ">
                <img
                  src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboomaruti/subscribe_screen/maruti-drivingschool-icon-1.webp"
                  className=" w-14"
                  alt="1"
                />
                <p>Theory Session</p>
                <p>07 Hours</p>
              </div>
              {/* Theory Session End*/}

              {/* Practical Session */}
              <div className="py-4 ">
                <img
                  src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboomaruti/subscribe_screen/maruti-drivingschool-icon-5.webp"
                  className=" w-14"
                  alt="1"
                />
                <p>Practical Session</p>
                <p>10 Hours</p>
              </div>
              {/* Practical Session End*/}

              {/* Demo Session */}
              <div className="py-4 ">
                <img
                  src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboomaruti/subscribe_screen/maruti-drivingschool-icon-2.webp"
                  className=""
                  alt="1"
                />
                <p>Demo Session</p>
                <p>30 Minutes</p>
              </div>
              {/* Demo Session End*/}

              {/* Simulator Session */}
              <div className="py-4 ">
                <img
                  src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboomaruti/subscribe_screen/maruti-drivingschool-icon-3.webp"
                  className=""
                  alt="1"
                />
                <p>Simulator Session</p>
                <p>2.5 Hours</p>
              </div>
              {/* Simulator Session End */}

              {/* Theory Exam */}
              <div className="py-4 ">
                <img
                  src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboomaruti/subscribe_screen/maruti-drivingschool-icon-4.webp"
                  className=""
                  alt="1"
                />
                <p>Theory Exam</p>
                <p>30 Minutes</p>
              </div>
              {/* Theory Exam End*/}

              {/* Practical Exam */}
              <div className="py-4 ">
                <img
                  src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboomaruti/subscribe_screen/maruti-drivingschool-icon-4.webp"
                  className=""
                  alt="1"
                />
                <p>Practical Exam</p>
                <p>30 Minutes</p>
              </div>
              {/* Practical Exam End*/}
            </div>
          </div>

          <div className="flex flex-col justify-between">
            <img
              src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/driving-school/learner-course.webp"
              alt="1"
              // className="w-60"
              className="hidden lg:block"
            />
            <div className="mt-4">
              <div className="flex flex-wrap justify-between">
                <div className=" text-[#171c8f] mb-2  tracking-wide">
                  <span className="text-3xl font-semibold xl:text-4xl ">
                    ₹ 6 000*{" "}
                  </span>{" "}
                  <span className="text-sm">(Starting Course Fees)</span>
                </div>
                <div
                  className="bg-[#171c8f] px-6 py-3 text-white h-min rounded-md cursor-pointer hover:shadow-xl hover:-translate-y-1 duration-300 mt-2"
                  onClick={() => setOpen(true)}
                >
                  ENROLL NOW
                </div>
              </div>
              <div className="mt-2 text-xs">
                *Price can vary from city to city and month to month. For
                accurate pricing, please check the course details page. (Prices
                are exclusive of 18% GST)
              </div>
            </div>
          </div>
        </div>
        <div className="py-2 mt-6 border-t border-white">
          <div className="mb-2 text-lg font-medium">*Disclaimer</div>
          <ul className="flex flex-wrap text-sm gap-x-4">
            <li>* License assistance is subjected to RTO norms.</li>
            <li>
              * Training on upgraded car models is based on availability as per
              driving schools.
            </li>
            <li>* For detailed terms and conditions.</li>{" "}
            <li>
              * Value-added services are only applicable to students who have
              enrolled at Maruti Suzuki Driving School.
            </li>
          </ul>
        </div>
      </div>

      {/* Learner Extended Track Course */}
      <div className="px-2 md:px-4 md:py-4 my-8 rounded bg-gradient-to-t from-[#d0d4f8] via-white ">
        <div className="text-3xl md:text-4xl text-[#171c8f] mb-4">
          2. Learner <span className="font-medium">Extended</span> Track Course
        </div>
        <div className="grid gap-2 lg:grid-cols-2 ">
          <div>
            {/* <div className="text-xl md:text-2xl text-[#171c8f] mb-2  tracking-wide">
              Learner Standard Track Course
            </div> */}
            <div className="mb-4 leading-5 text-justify">
              If you've never been behind the steering wheel, this course is for
              you. At the end of 26 days, you'll know the basic traffic rules
              and have a hands-on driving experience through simulators and
              on-road driving. What's more, you'll have the confidence of taking
              the RTO driving exam to obtain a permanent driving license.
            </div>
            <div className="grid grid-cols-2 gap-2 md:gap-4 sm:grid-cols-3">
              {/* Theory Session */}
              <div className="py-4 text-sm ">
                <img
                  src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboomaruti/subscribe_screen/maruti-drivingschool-icon-1.webp"
                  className=" w-14"
                  alt="1"
                />
                <p>Theory Session</p>
                <p>07 Hours</p>
              </div>
              {/* Theory Session End*/}

              {/* Practical Session */}
              <div className="py-4 ">
                <img
                  src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboomaruti/subscribe_screen/maruti-drivingschool-icon-5.webp"
                  className=" w-14"
                  alt="1"
                />
                <p>Practical Session</p>
                <p>15 Hours</p>
              </div>
              {/* Practical Session End*/}

              {/* Demo Session */}
              <div className="py-4 ">
                <img
                  src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboomaruti/subscribe_screen/maruti-drivingschool-icon-2.webp"
                  className=""
                  alt="1"
                />
                <p>Demo Session</p>
                <p>30 Minutes</p>
              </div>
              {/* Demo Session End*/}

              {/* Simulator Session */}
              <div className="py-4 ">
                <img
                  src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboomaruti/subscribe_screen/maruti-drivingschool-icon-3.webp"
                  className=""
                  alt="1"
                />
                <p>Simulator Session</p>
                <p>2.5 Hours</p>
              </div>
              {/* Simulator Session End */}

              {/* Theory Exam */}
              <div className="py-4 ">
                <img
                  src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboomaruti/subscribe_screen/maruti-drivingschool-icon-4.webp"
                  className=""
                  alt="1"
                />
                <p>Theory Exam</p>
                <p>30 Minutes</p>
              </div>
              {/* Theory Exam End*/}

              {/* Practical Exam */}
              <div className="py-4 ">
                <img
                  src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboomaruti/subscribe_screen/maruti-drivingschool-icon-4.webp"
                  className=""
                  alt="1"
                />
                <p>Practical Exam</p>
                <p>30 Minutes</p>
              </div>
              {/* Practical Exam End*/}
            </div>
          </div>

          <div className="flex flex-col justify-between">
            <img
              src="https://www.marutisuzukidrivingschool.com/-/media/feature/maruti-driving-school/courses/new/learner-extended-track-course.png?rev=cf5ec44516d24e6f827f9b7f849c05e2&h=318&w=743&la=en&hash=229FA7C2329356962083E9DBC9532287"
              alt="Learner Extended Track Course"
              // className="w-60"
              className="hidden lg:block"
            />
            <div className="mt-4">
              <div className="flex flex-wrap justify-between">
                <div className=" text-[#171c8f] mb-2  tracking-wide">
                  <span className="text-3xl font-semibold xl:text-4xl ">
                    ₹ 8 000*{" "}
                  </span>{" "}
                  <span className="text-sm">(Starting Course Fees)</span>
                </div>
                <div
                  className="bg-[#171c8f] px-6 py-3 text-white h-min rounded-md cursor-pointer hover:shadow-xl hover:-translate-y-1 duration-300 mt-2"
                  onClick={() => setOpen(true)}
                >
                  ENROLL NOW
                </div>
              </div>
              <div className="mt-2 text-xs">
                *Price can vary from city to city and month to month. For
                accurate pricing, please check the course details page. (Prices
                are exclusive of 18% GST)
              </div>
            </div>
          </div>
        </div>
        <div className="py-2 mt-6 border-t border-white">
          <div className="mb-2 text-lg font-medium">*Disclaimer</div>
          <ul className="flex flex-wrap text-sm gap-x-4">
            <li>* License assistance is subjected to RTO norms.</li>
            <li>
              * Training on upgraded car models is based on availability as per
              driving schools.
            </li>
            <li>* For detailed terms and conditions.</li>{" "}
            <li>
              * Value-added services are only applicable to students who have
              enrolled at Maruti Suzuki Driving School.
            </li>
          </ul>
        </div>
      </div>

      {/* Learner Detailed Track Course */}
      <div className="px-2 md:px-4 md:py-4 my-8 rounded bg-gradient-to-t from-[#d0d4f8] via-white ">
        <div className="text-3xl md:text-4xl text-[#171c8f] mb-4">
          3. Learner <span className="font-medium">Detailed</span> Track Course
        </div>
        <div className="grid gap-2 lg:grid-cols-2 ">
          <div>
            {/* <div className="text-xl md:text-2xl text-[#171c8f] mb-2  tracking-wide">
              Learner Standard Track Course
            </div> */}
            <div className="mb-4 leading-5 text-justify">
              If you've never been behind the steering wheel, this course is for
              you. At the end of 31 days, you'll know the basic traffic rules
              and have a hands-on driving experience through simulators and
              on-road driving. What's more, you'll have the confidence of taking
              the RTO driving exam to obtain a permanent driving license.
            </div>
            <div className="grid grid-cols-2 gap-2 md:gap-4 sm:grid-cols-3">
              {/* Theory Session */}
              <div className="py-4 text-sm ">
                <img
                  src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboomaruti/subscribe_screen/maruti-drivingschool-icon-1.webp"
                  className=" w-14"
                  alt="1"
                />
                <p>Theory Session</p>
                <p>07 Hours</p>
              </div>
              {/* Theory Session End*/}

              {/* Practical Session */}
              <div className="py-4 ">
                <img
                  src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboomaruti/subscribe_screen/maruti-drivingschool-icon-5.webp"
                  className=" w-14"
                  alt="1"
                />
                <p>Practical Session</p>
                <p>20 Hours</p>
              </div>
              {/* Practical Session End*/}

              {/* Demo Session */}
              <div className="py-4 ">
                <img
                  src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboomaruti/subscribe_screen/maruti-drivingschool-icon-2.webp"
                  className=""
                  alt="1"
                />
                <p>Demo Session</p>
                <p>30 Minutes</p>
              </div>
              {/* Demo Session End*/}

              {/* Simulator Session */}
              <div className="py-4 ">
                <img
                  src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboomaruti/subscribe_screen/maruti-drivingschool-icon-3.webp"
                  className=""
                  alt="1"
                />
                <p>Simulator Session</p>
                <p>2.5 Hours</p>
              </div>
              {/* Simulator Session End */}

              {/* Theory Exam */}
              <div className="py-4 ">
                <img
                  src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboomaruti/subscribe_screen/maruti-drivingschool-icon-4.webp"
                  className=""
                  alt="1"
                />
                <p>Theory Exam</p>
                <p>30 Minutes</p>
              </div>
              {/* Theory Exam End*/}

              {/* Practical Exam */}
              <div className="py-4 ">
                <img
                  src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboomaruti/subscribe_screen/maruti-drivingschool-icon-4.webp"
                  className=""
                  alt="1"
                />
                <p>Practical Exam</p>
                <p>30 Minutes</p>
              </div>
              {/* Practical Exam End*/}
            </div>
          </div>

          <div className="flex flex-col justify-between">
            <img
              src="https://www.marutisuzukidrivingschool.com/-/media/feature/maruti-driving-school/courses/new/learner-detailed-track-course.png?rev=bc1qre8jdw2azrg6tf49wmp652w00xltddxmpk98xp&h=318&w=743&la=en&hash=B56C3859895B6E5CF8C883BB8CFC1CD5"
              alt="Learner Detailed Track Course"
              // className="w-60"
              className="hidden lg:block"
            />
            <div className="mt-4">
              <div className="flex flex-wrap justify-between">
                <div className=" text-[#171c8f] mb-2  tracking-wide">
                  <span className="text-3xl font-semibold xl:text-4xl ">
                    ₹ 9 500*{" "}
                  </span>{" "}
                  <span className="text-sm">(Starting Course Fees)</span>
                </div>
                <div
                  className="bg-[#171c8f] px-6 py-3 text-white h-min rounded-md cursor-pointer hover:shadow-xl hover:-translate-y-1 duration-300 mt-2"
                  onClick={() => setOpen(true)}
                >
                  ENROLL NOW
                </div>
              </div>
              <div className="mt-2 text-xs">
                *Price can vary from city to city and month to month. For
                accurate pricing, please check the course details page. (Prices
                are exclusive of 18% GST)
              </div>
            </div>
          </div>
        </div>
        <div className="py-2 mt-6 border-t border-white">
          <div className="mb-2 text-lg font-medium">*Disclaimer</div>
          <ul className="flex flex-wrap text-sm gap-x-4">
            <li>* License assistance is subjected to RTO norms.</li>
            <li>
              * Training on upgraded car models is based on availability as per
              driving schools.
            </li>
            <li>* For detailed terms and conditions.</li>{" "}
            <li>
              * Value-added services are only applicable to students who have
              enrolled at Maruti Suzuki Driving School.
            </li>
          </ul>
        </div>
      </div>

      {/* Advance Course */}
      <div className="px-2 md:px-4 md:py-4 my-8 rounded bg-gradient-to-t from-[#d0d4f8] via-white ">
        <div className="text-3xl md:text-4xl text-[#171c8f] mb-4">
          4. <span className="font-medium">Advance</span> Course
        </div>
        <div className="grid gap-2 lg:grid-cols-2 ">
          <div>
            <div className="mb-4 leading-5 text-justify">
              If you’re the one who has a license but feels under-confident
              while driving alone, this course is for you. At the end of these
              exciting 8 days, you’ll take on the roads effortlessly. How? By
              training under proficient trainers, of course.
            </div>
            <div className="grid grid-cols-2 gap-2 md:gap-4 ">
              {/* Theory Session */}
              <div className="py-4 text-sm ">
                <img
                  src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboomaruti/subscribe_screen/maruti-drivingschool-icon-1.webp"
                  className=" w-14"
                  alt="1"
                />
                <p>Theory Session</p>
                <p>02 Hours</p>
              </div>
              {/* Theory Session End*/}

              {/* Practical Session */}
              <div className="py-4 ">
                <img
                  src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboomaruti/subscribe_screen/maruti-drivingschool-icon-5.webp"
                  className=" w-14"
                  alt="1"
                />
                <p>Practical Session</p>
                <p>06 Hours</p>
              </div>
              {/* Practical Session End*/}

              {/* Practical Exam */}
              <div className="py-4 ">
                <img
                  src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboomaruti/subscribe_screen/maruti-drivingschool-icon-4.webp"
                  className=""
                  alt="1"
                />
                <p>Practical Exam</p>
                <p>30 Minutes</p>
              </div>
              {/* Practical Exam End*/}
            </div>
          </div>

          <div className="flex flex-col justify-between">
            <img
              src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/driving-school/advance-course.webp"
              alt="Advance Course"
              // className="w-60"
              className="hidden lg:block"
            />
            <div className="mt-4">
              <div className="flex flex-wrap justify-between">
                <div className=" text-[#171c8f] mb-2  tracking-wide">
                  <span className="text-3xl font-semibold xl:text-4xl ">
                    ₹ 4 500*{" "}
                  </span>{" "}
                  <span className="text-sm">(Starting Course Fees)</span>
                </div>
                <div
                  className="bg-[#171c8f] px-6 py-3 text-white h-min rounded-md cursor-pointer hover:shadow-xl hover:-translate-y-1 duration-300 mt-2"
                  onClick={() => setOpen(true)}
                >
                  ENROLL NOW
                </div>
              </div>
              <div className="mt-2 text-xs">
                *Price can vary from city to city and month to month. For
                accurate pricing, please check the course details page. (Prices
                are exclusive of 18% GST)
              </div>
            </div>
          </div>
        </div>
        <div className="py-2 mt-6 border-t border-white">
          <div className="mb-2 text-lg font-medium">*Disclaimer</div>
          <ul className="flex flex-wrap text-sm gap-x-4">
            <li>* License assistance is subjected to RTO norms.</li>
            <li>
              * Training on upgraded car models is based on availability as per
              driving schools.
            </li>
            <li>* For detailed terms and conditions.</li>{" "}
            <li>
              * Value-added services are only applicable to students who have
              enrolled at Maruti Suzuki Driving School.
            </li>
          </ul>
        </div>
      </div>

      {/* Corporate Course */}
      <div className="px-2 md:px-4 md:py-4 my-8 rounded bg-gradient-to-t from-[#d0d4f8] via-white ">
        <div className="text-3xl md:text-4xl text-[#171c8f] mb-4">
          5. <span className="font-medium">Corporate</span> Course
        </div>
        <div className="grid gap-2 lg:grid-cols-2 ">
          <div>
            <div className="mb-4 leading-5 text-justify">
              Corporate Driving Courses are meant for corporate drivers, this
              helps them get more professional and a one hour test is conducted
              to assess the driving skills.
            </div>

            {/* Theory Session */}
            <div className="py-4 text-sm ">
              <img
                src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboomaruti/subscribe_screen/maruti-drivingschool-icon-1.webp"
                className=" w-14"
                alt="1"
              />
              <p>Theory Session</p>
              <p>04 Hours</p>
              <div
                onClick={() => setOpen(true)}
                className="bg-[#171c8f] mt-4 px-6 py-3 text-white h-min rounded-md cursor-pointer hover:shadow-xl hover:-translate-y-1 duration-300 w-min whitespace-nowrap"
              >
                ENROLL NOW
              </div>
              <div className="mt-2 text-xs">
                *Price can vary from city to city and month to month. For
                accurate pricing, please check the course details page. (Prices
                are exclusive of 18% GST)
              </div>
            </div>
            {/* Theory Session End*/}
          </div>

          <div className="flex flex-col justify-between">
            <img
              src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/driving-school/advance-course.webp"
              alt="Advance Course"
              // className="w-60"
              className="hidden lg:block"
            />
            {/* <div className="mt-4">
              <div className="flex flex-wrap justify-between">
                <div className=" text-[#171c8f] mb-2  tracking-wide">
                   <span className="text-3xl font-semibold xl:text-4xl ">
                    ₹ 4 500*{" "}
                  </span>{" "}
                  <span className="text-sm">(Starting Course Fees)</span> 
                </div>
                
              </div>
              <div className="mt-2 text-xs">
                *Price can vary from city to city and month to month. For
                accurate pricing, please check the course details page. (Prices
                are exclusive of 18% GST)
              </div>
            </div> */}
          </div>
        </div>
        <div className="py-2 mt-6 border-t border-white">
          <div className="mb-2 text-lg font-medium">*Disclaimer</div>
          <ul className="text-sm">
            <li>* License assistance is subjected to RTO norms.</li>
            <li>
              * Training on upgraded car models is based on availability as per
              driving schools.
            </li>
            <li>
              * Value-added services are only applicable to students who have
              enrolled at Maruti Suzuki Driving School.
            </li>
            <li>* For detailed terms and conditions.</li>
          </ul>
        </div>
      </div>

      <div className="py-4 md:py-8">
        <div className="text-3xl md:text-4xl text-[#171c8f] mb-2">
          Make the Most of Your Driving Course
        </div>
        <div>Value-Added services customized for you.</div>
        <div className="grid gap-2 mt-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-4">
          <div className="flex gap-2 p-4 duration-300 border rounded-lg cursor-pointer lg:gap-5 md:p-6 hover:shadow-lg">
            <div className="">
              <img
                src="https://www.marutisuzukidrivingschool.com/-/media/feature/maruti-driving-school/coursevalueads/license-assistance.png?rev=27c1510c1ecc49c4a1ea26f3e6058e96"
                alt=""
                className="w-20 lg:w-24"
              />
            </div>
            <div>
              <div className="text-[#171c8f] font-medium mb-2">
                License Assistance*
              </div>
              <div className="text-sm">
                Get pick & drop facility and vehicle assistance for license test
                at RTO
              </div>
            </div>
          </div>
          <div className="flex gap-2 p-4 duration-300 border rounded-lg cursor-pointer lg:gap-5 md:p-6 hover:shadow-lg">
            <div className="">
              <img
                src="https://www.marutisuzukidrivingschool.com/-/media/feature/maruti-driving-school/coursevalueads/learning-on-own-car.png?rev=e26ab4d7c0004ab298c16b0fcadbe276"
                alt=""
                className="w-20 lg:w-24"
              />
            </div>
            <div>
              <div className="text-[#171c8f] font-medium mb-2">
                Assistance on own car*
              </div>
              <div className="text-sm">
                Get practical sessions (3 hours) on your own car, which further
                enhances the learning
              </div>
            </div>
          </div>
          <div className="flex gap-2 p-4 duration-300 border rounded-lg cursor-pointer lg:gap-5 md:p-6 hover:shadow-lg">
            <div className="">
              <img
                src="https://www.marutisuzukidrivingschool.com/-/media/feature/maruti-driving-school/coursevalueads/training-on-upgraded-car-models.png?rev=bc1qre8jdw2azrg6tf49wmp652w00xltddxmpk98xp"
                alt=""
                className="w-20 lg:w-24"
              />
            </div>
            <div>
              <div className="text-[#171c8f] font-medium mb-2">
                Training on Upgraded Car Models*
              </div>
              <div className="text-sm">
                Learn to drive on upgraded models e.g. Swift, Dzire, Vitara
                Brezza and Ertiga
              </div>
            </div>
          </div>
        </div>
      </div>
      <DrivingSchoolPopup
        open={open}
        setOpen={setOpen}
        title={"Driving School"}
      />
    </div>
  );
};

const Locations = () => {
  const drivingSchoolLocations = [
    {
      googleMap: "https://maps.app.goo.gl/wmLCVn2rNfVwwZm46",
      title: "NAMPALLY",
      image:
        "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/showroom+locations/webp-showrooms/webp-driving/RKS-Motor-Maruti-Suzuki-Driving-School-Center-Near-Me-Nampally.webp",
      address:
        "MD Khan jewellers, Block-B, Public Garden Rd, Mahesh Nagar Colony, Nampally, Hyderabad, Telangana 500001",
    },
    {
      googleMap: "https://maps.app.goo.gl/QgdEu7V84H79XCAbA",
      title: "MALAKPET",
      image:
        "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/showroom+locations/webp-showrooms/webp-driving/RKS-Motor-Maruti-Suzuki-Driving-School-Center-Near-Me-Malakpet.webp",
      address:
        "Appaji Complex, 16-11-19/8/1, Saleem Nagar Colony, Malakpet Extension, Old Malakpet, Hyderabad, Telangana 500016",
    },
    {
      googleMap: "https://maps.app.goo.gl/q7AYaxC9ELUW8paB7",
      title: "KUSHAIGUDA",
      image:
        "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/showroom+locations/webp-showrooms/webp-driving/RKS-Motor-Maruti-Suzuki-Driving-School-Center-Near-Me-Kushaiguda.webp",
      address:
        "1-10-1/285/1, ECIL Cross Roads, beside bharat petrol pump, South Kamala Nagar, Kamalanagar, Kushaiguda, Hyderabad, Secunderabad, Telangana 500062",
    },
  ];
  return (
    <div className="container px-1 pb-5 mx-auto md:pb-10 ">
      <div className="text-3xl md:text-4xl text-[#171c8f] mb-2">
        Driving School Outlets
      </div>
      <div className="container grid grid-cols-1 gap-4 pt-4 mx-auto mb-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10 xl:gap-14 ">
        {drivingSchoolLocations.map((x, i) => {
          return (
            <div
              key={i}
              className=" w-full  px-4 text-left py-6 hover:text-white shadow-xl  shadow-[#b0b0b0] group duration-500 border-t rounded-3xl relative overflow-hidden"
            >
              <div className="bg-[#171c8f] h-32 w-36 duration-500 group-hover:h-[200%] group-hover:w-[200%] group-hover:-top-56 group-hover:-right-56 rounded-full absolute -top-20 -right-20 -z-10"></div>
              <div className="mb-4 text-xl font-medium uppercase sm:text-2xl text-[#171c8f] group-hover:text-white ">
                {x.title}
              </div>
              <a href={x.googleMap} target="_blank" rel="noreferrer">
                <div
                  className="flex justify-center duration-500 bg-center h-52 lg:h-60 group-hover:saturate-200 rounded-3xl grayscale group-hover:grayscale-0"
                  style={{
                    backgroundImage: `url(${x.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                ></div>
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default DrivingSchool;
