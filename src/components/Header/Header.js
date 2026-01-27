import { Fragment, useEffect, useState } from "react";
import { Dialog, Tab, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";
import { MdPhone } from "react-icons/md";
import { IoClose, IoMail } from "react-icons/io5";
import { useComponentState } from "../Context/StateProvide";
import { IoIosArrowForward } from "react-icons/io";
import { FiArrowUpRight } from "react-icons/fi";
import { MdOutlineElectricBolt } from "react-icons/md";
const navigation = {
  categories: [
    {
      id: "vehicles",
      name: "Vehicles",
      featured: [

        {
          name: "Created to…..in order to maintain uniformity",
          brand_logo:
          require("../../components/Header/e vitara logo-01 webp.webp"),
          href: "/nexa-evitara-on-road",
          imageSrc:
            require('../../assets/cars/Evitara.png'),
          imageAlt: "EVitara",
          price: "coming-soon*",
        },



        {
          name: "Created to…..in order to maintain uniformity",
          brand_logo:
            "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/invicto/Invicto+Logo-header.webp",
          href: "/maruti-invicto-price-in-hyderabad",
          imageSrc:
            "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/invicto/invicto-thumbnail.webp",
          imageAlt: "Suzuki invicto",
          price: "₹ 25,21,000*",
        },
        {
          name: "Created to Inspire Style and Performance.",
          brand_logo:
            "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/fronx/Flash_header_Menu_logo.webp",
          href: "/maruti-fronx-price-in-hyderabad",
          imageSrc:
            "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/fronx/HeaderMenu-167x87.webp",
          imageAlt: "Suzuki Fronx",
          price: "₹ 7,51,500*",
        },
        {
          name: "Functional Beauty Crafted for Purity of Function.",
          brand_logo:
            "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/jimny/120x30+black.webp",
          href: "/maruti-jimny-price-in-hyderabad",
          imageSrc:
            "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/jimny/167x87-Ar_Vk_Jimny_Side+3-4th+Limbo+Shot_V1.webp",
          imageAlt: "Suzuki Jimny",
          price: "₹ 12,74,000*",
        },
        {
          name: "Create Inspire.",
          brand_logo:
            "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/color-icons/GV-logo-204x37+webp.webp",
          href: "/grand-vitara-on-road-price-in-hyderabad",
          imageSrc:
            "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/color-icons/new167x87.webp",
          imageAlt: "Grand Vitara",
          price: " ₹ 10,80,000*",
        },
        {
          name: "Created to Inspire Indulgence.",
          brand_logo:
            "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/logos/Saboo-Nexa-Logo-XL6.webp",
          href: "/nexa-xl6-on-road-price-in-hyderabad",
          imageSrc:
            "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/XL6/Hover_menu_XL6.webp",
          imageAlt: "XL6",
          price: "₹ 11,61,000*",
        },

        {
          name: "Created to Inspire Elegance.",
          brand_logo:
            "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/logos/Saboo-Nexa-Ciaz-logo.webp",
          href: "/nexa-ciaz-on-road-price-in-hyderabad",
          imageSrc:
            "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/logos/Saboo-Nexa-Ciaz-Car.webp",
          imageAlt: "Ciaz",
          price: " ₹ 9,40,000*",
        },
        {
          name: "Created to Inspire The Bold and Intelligent.",
          brand_logo:
            "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/newage_baleno_logo.png",
          href: "/new-maruti-baleno-price-in-hyderabad",
          imageSrc:
            "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/new_agebaleno.png",
          imageAlt: "Baleno",
          price: "₹ 6,66,000*",
        },
        {
          name: "Created to Inspire The Toughness in You.",
          brand_logo:
            "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/logos/Maruti-Suzuki-Ignis-logo.webp",
          href: "/nexa-ignis-on-road-price-in-hyderabad",
          imageSrc:
            "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/logos/Saboo-Nexa-Ignis-Car.webp",
          imageAlt: "Ignis",
          price: "₹ 5,84,000*",
        },
      ],
    },
  ],
  pages: [
    { name: "About Us", to: "/about" },
    { name: "Contact", to: "/contact-us" },
  ],
  servicepages: [
    {
      name: "Insurance",
      to: "/maruti-car-insurance",
    },
    {
      name: "Finance",
      to: "/maruti-car-finance",
    },
    {
      name: "Corporate",
      to: "/corporate",
    },
  ],

  outlets: [
    {
      name: "Showrooms",
      to: "/maruti-nexa-showroom-outlets-in-hyderabad",
    },
    {
      name: "Workshop",
      to: "/maruti-nexa-workshop-outlets-in-hyderabad",
    },
    {
      name: "Truevalue",
      to: "/maruti-nexa-truevalue-outlets-in-hyderabad",
    },
  ],
  more: [
    {
      name: "CNG",
      to: "/cng",
    },

    {
      name: "Careers",
      to: "/career",
    },
    {
      name: "Testimonials",
      to: "/testimonials",
    },
    {
      name: "Awards",
      to: "/awards",
    },
    {
      name: "Gallery",
      to: "/gallery",
    },
    {
      name: "Accessories",
      to: "/accessories",
    },
    {
      name: "Compare",
      to: "/compare",
    },
    {
      name: "Blog",
      to: "/maruti-nexa-latest-news",
    },
  ],
  all: [
    { name: "About Us", to: "/about" },
    { name: "Accessories", to: "/accessories" },
    { name: "Awards", to: "/awards" },
    { name: "Blog", to: "/maruti-nexa-latest-news" },
    { name: "Careers", to: "/career" },
    { name: "Nexa CNG", to: "/cng" },
    { name: "Compare", to: "/compare" },
    { name: "Contact", to: "/contact-us" },
    { name: "Corporate", to: "/corporate" },
    { name: "Driving School", to: "/maruti-suzuki-driving-school" },
    { name: "Finance", to: "/maruti-car-finance" },
    { name: "Gallery", to: "/gallery" },
    { name: "Insurance", to: "/maruti-car-insurance" },
    { name: "Showrooms", to: "/maruti-nexa-showroom-outlets-in-hyderabad" },
    { name: "Subscribe", to: "/subscribe" },
    { name: "Testimonials", to: "/testimonials" },
    { name: "Truevalue", to: "/maruti-nexa-truevalue-outlets-in-hyderabad" },
    { name: "Workshop", to: "/maruti-nexa-workshop-outlets-in-hyderabad" },
  ],
};

const carLinks = [

  {
    name:(
      <div className="flex items-center">
        <MdOutlineElectricBolt style={{ marginRight: '8px ',margintop:'8px', color:'gold' }} />
        e Vitara
      </div>
    ),
    link:"/nexa-evitara-on-road",
    heading:"Created to Spark Your eMagination.",
  },

  
  {
    name: "Invicto",
    link: "/maruti-invicto-price-in-hyderabad",
    heading: "Created to…..in order to maintain uniformity",
  },
  {
    name: "Fronx",
    link: "/maruti-fronx-price-in-hyderabad",
    heading: "Created to Inspire Style and Performance.",
  },

  {
    name: "Jimny",
    link: "/maruti-jimny-price-in-hyderabad",
    heading: "Functional Beauty Crafted for Purity of Function.",
  },
  {
    name: "Grand Vitara",
    link: "/grand-vitara-on-road-price-in-hyderabad",
    heading: "Create Inspire.",
  },
  {
    name: "XL6",
    link: "/nexa-xl6-on-road-price-in-hyderabad",
    heading: "Created to Inspire Indulgence.",
  },
  {
    name: "Ciaz",
    link: "/nexa-ciaz-on-road-price-in-hyderabad",
    heading: "Created to Inspire Elegance.",
  },
  {
    name: "Baleno",
    link: "/new-maruti-baleno-price-in-hyderabad",
    heading: "Created to Inspire The Bold and Intelligent.",
  },
  {
    name: "Ignis",
    link: "/nexa-ignis-on-road-price-in-hyderabad",
    heading: "Created to Inspire The Toughness in You.",
  },


  
];

function Header({ col }) {
  const [open, setOpen] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);
  const { setOpen2 } = useComponentState();
  const [onHover, setOnHover] = useState(0);

  const onScroll = () => {
    const winScroll = document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;

    setScrollTop(scrolled);
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className={"bg-[#000000e8]   duration-500 transition"}>
      {/* Mobile menu */}

      <div className="">
        <Transition.Root show={open} as={Fragment}>
          <Dialog
            as="div"
            className="fixed inset-0 z-[9999999] flex"
            onClose={setOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-75 " />
            </Transition.Child>

            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <div className="relative flex flex-col   overflow-y-auto text-black shadow-xl w-[350px] lg:w-screen">
                {/* Links */}

                <Tab.Group
                  as="div"
                  className="bg-white lg:hidden"
                  onClick={() => setOpen(false)}
                >
                  {/* <div className='border-b border-gray-200'>
                  <Tab.List className='flex px-4 -mb-px space-x-8'>
                    {navigation.categories.map((category) => (
                      <Tab
                        key={category.name}
                        className={({ selected }) =>
                          classNames(
                            selected
                              ? 'text-[#f01b28] border-[#f01b28]'
                              : 'text-gray-900 border-transparent',
                            'flex-1 whitespace-nowrap py-4 px-1 border-b-2 text-base font-medium'
                          )
                        }
                      >
                        {category.name}
                      </Tab>
                    ))}
                  </Tab.List>
                </div> */}
                  <div className="sticky top-0 z-10">
                    <div className="flex justify-end px-2 pt-5 pb-3 text-white bg-black">
                      <button
                        type="button"
                        aria-label="Close menu"
                        className="inline-flex items-center justify-center px-2 hover:text-red-600"
                        onClick={() => setOpen(false)}
                      >
                        <span className="sr-only">Close menu</span>
                        Close
                        <XIcon className="w-6 h-6" aria-hidden="true" />
                      </button>
                    </div>
                    <div className="flex flex-wrap justify-center w-full gap-1 pb-4 text-white bg-black">
                      <Link to="/book-online-maruti-nexa-car-service">
                        <button
                          className=" bg-red-600 py-2 px-1.5  rounded "
                          aria-label="Book a service"
                        >
                          Book a Service
                        </button>
                      </Link>
                      <Link to="/nexa-car-offers-in-hyderabad">
                        <button
                          className=" bg-red-600 py-2 px-1.5  rounded "
                          aria-label="Offers"
                        >
                          Offers
                        </button>
                      </Link>
                      <Link to="/maruti-suzuki-24/7-service-in-hyderabad">
                        <button
                          className=" bg-red-600 py-2 px-1.5  rounded "
                          aria-label="24/7 Services"
                        >
                          24/7 Services
                        </button>
                      </Link>
                    </div>
                  </div>
                  <Tab.Panels as={Fragment}>
                    {navigation.categories.map((category) => (
                      <Tab.Panel
                        key={category.name}
                        className="px-4 py-6 space-y-10 "
                      >
                        <div className="grid grid-cols-2 gap-x-4">
                          {category.featured.map((item) => (
                            <div
                              key={item.name}
                              className="relative text-sm font-semibold group"
                            >
                              <Link to={item.href}>
                                <div className="flex justify-center pb-2">
                                  <img
                                    src={item.brand_logo}
                                    alt={item.imageAlt}
                                    className="object-cover object-center"
                                  />
                                </div>

                                <div className="mb-2 overflow-hidden rounded-lg aspect-w-1 aspect-h-1 group-hover:opacity-75">
                                  <img
                                    src={item.imageSrc}
                                    alt={item.imageAlt}
                                    className="object-cover object-center"
                                  />
                                </div>
                              </Link>
                            </div>
                          ))}
                        </div>
                      </Tab.Panel>
                    ))}
                  </Tab.Panels>
                </Tab.Group>
                <div className="pb-10 bg-white group lg:hidden">
                  <div className="" onClick={() => setOpen(false)}>
                    {navigation.all.map((page) => (
                      <div key={page.name} className="flow-root px-2 lg:px-6 ">
                        <Link
                          to={page.to}
                          className="px-2 py-2 block lg:hover:bg-[#00000018]  border-b border-b-[#00000042] group-hover:border-b-gray-200 group-hover:rounded-lg  lg:hover:shadow-xl "
                        >
                          {page.name}
                        </Link>
                      </div>
                    ))}
                  </div>
                  <div className="px-2 lg:px-6 ">
                    <a
                      href="https://www.spatial.io/s/Saboo-RKS-N-E-X-A-6322f4f7955236000112849b?share=3965153526388753240"
                      className="px-2 py-2 lg:py-2.5 block hover:bg-[#0000001b]   group-hover:rounded-xl hover:px-8  duration-500"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Metaverse"
                    >
                      Metaverse
                    </a>
                  </div>
                </div>

                <div className="relative hidden h-screen max-w-md text-2xl bg-white shadow-xl lg:block group">
                  <div className="p-6 px-10">
                    <Link to="/" className="">
                      <img
                        className={`h-10  `}
                        src={require("../../assets/others/logo_color.png")}
                        alt="logo"
                      />
                    </Link>
                  </div>
                  <div className="mt-6 text-gray-500 ">
                    <Link to="/about">
                      <div
                        onMouseEnter={() => setOnHover(-4)}
                        onMouseLeave={() => setOnHover(0)}
                        className="flex items-center justify-between w-full px-10 py-4 border-b cursor-pointer hover:text-black hover:bg-slate-50"
                      >
                        <p>About Us</p>
                        <FiArrowUpRight
                          className={` ${
                            onHover === -4 ? "block mr-3" : "hidden"
                          }`}
                        />
                      </div>
                    </Link>
                    <Link to="/accessories" className="overflow-hidden">
                      <div
                        onMouseEnter={() => setOnHover(-3)}
                        onMouseLeave={() => setOnHover(0)}
                        className="flex items-center justify-between w-full px-10 py-4 border-b cursor-pointer hover:text-black hover:bg-slate-50"
                      >
                        <p>Accessories</p>
                        <FiArrowUpRight
                          className={` ${
                            onHover === -3 ? "block mr-3" : "hidden"
                          }`}
                        />
                      </div>
                    </Link>
                    <Link
                      to="/maruti-suzuki-driving-school"
                      className="overflow-hidden"
                    >
                      <div
                        onMouseEnter={() => setOnHover(-2)}
                        onMouseLeave={() => setOnHover(0)}
                        className="flex items-center justify-between w-full px-10 py-4 border-b cursor-pointer hover:text-black hover:bg-slate-50"
                      >
                        <p>Driving School</p>
                        <FiArrowUpRight
                          className={` ${
                            onHover === -2 ? "block mr-3" : "hidden"
                          }`}
                        />
                      </div>
                    </Link>
                    <div
                      onMouseEnter={() => setOnHover(1)}
                      //onMouseLeave={() => setOnHover(0)}
                      className={`flex justify-between gap-2 py-4 pl-10 pr-10 border-b cursor-pointer hover:text-black ${
                        onHover === 1 && "bg-slate-50"
                      } `}
                    >
                      Services{" "}
                      <IoIosArrowForward
                        className={`duration-500 ${
                          onHover === 1
                            ? " mr-0 text-black"
                            : "mr-3 text-gray-300"
                        }`}
                      />
                    </div>
                    <div
                      onMouseEnter={() => setOnHover(2)}
                      //onMouseLeave={() => setOnHover(0)}
                      className={`flex justify-between gap-2 py-4 pl-10 pr-10 border-b cursor-pointer hover:text-black ${
                        onHover === 2 && "bg-slate-50"
                      } `}
                    >
                      CNG{" "}
                      <IoIosArrowForward
                        className={`duration-500 ${
                          onHover === 2
                            ? " mr-0 text-black"
                            : "mr-3 text-gray-300"
                        }`}
                      />
                    </div>
                    <div
                      onMouseEnter={() => setOnHover(3)}
                      //onMouseLeave={() => setOnHover(0)}
                      className={`flex justify-between gap-2 py-4 pl-10 pr-10 border-b cursor-pointer hover:text-black ${
                        onHover === 3 && "bg-slate-50"
                      } `}
                    >
                      Outlets{" "}
                      <IoIosArrowForward
                        className={`duration-500 ${
                          onHover === 3
                            ? " mr-0 text-black"
                            : "mr-3 text-gray-300"
                        }`}
                      />
                    </div>
                    <div
                      onMouseEnter={() => setOnHover(4)}
                      //onMouseLeave={() => setOnHover(0)}
                      className={`flex justify-between gap-2 py-4 pl-10 pr-10 border-b cursor-pointer hover:text-black ${
                        onHover === 4 && "bg-slate-50"
                      } `}
                    >
                      More{" "}
                      <IoIosArrowForward
                        className={`duration-500 ${
                          onHover === 4
                            ? " mr-0 text-black"
                            : "mr-3 text-gray-300"
                        }`}
                      />
                    </div>
                    <Link to="/contact-us" className="overflow-hidden">
                      <div
                        onMouseEnter={() => setOnHover(-1)}
                        onMouseLeave={() => setOnHover(0)}
                        className="flex items-center justify-between w-full px-10 py-4 border-t cursor-pointer hover:text-black hover:bg-slate-50"
                      >
                        <p>Contact Us</p>
                        <FiArrowUpRight
                          className={` ${
                            onHover === -1 ? "block mr-3" : "hidden"
                          }`}
                        />
                      </div>
                    </Link>
                  </div>
                  <div
                    className={`absolute  top-0 right-0 h-screen max-w-md px-10 pb-10  overflow-hidden text-gray-500 duration-1000 bg-[#F8F8F8] w-80  -z-10   text-xl pt-32 ${
                      onHover > 0 ? "translate-x-full " : "-translate-x-full "
                    }`}
                    onMouseLeave={() => setOnHover(0)}
                  >
                    {onHover === 1 && (
                      <div className="space-y-8">
                        <h3 className="cursor-pointer hover:text-black">
                          <Link to="/book-online-maruti-nexa-car-service">
                            Book A Service
                          </Link>
                        </h3>
                        <h3 className="cursor-pointer hover:text-black">
                          <Link to="/maruti-suzuki-24/7-service-in-hyderabad">
                            24/7 Services
                          </Link>
                        </h3>
                        <h3 className="cursor-pointer hover:text-black">
                          <Link to="/maruti-car-insurance">Insurance</Link>
                        </h3>
                        <h3 className="cursor-pointer hover:text-black">
                          <Link to="/maruti-car-finance">finance</Link>
                        </h3>
                        <h3 className="cursor-pointer hover:text-black">
                          <Link to="/corporate">Corporate</Link>
                        </h3>
                        <h3 className="cursor-pointer hover:text-black">
                          <Link to="/subscribe">Subscribe</Link>
                        </h3>
                      </div>
                    )}
                    {onHover === 2 && (
                      <div className="space-y-8">
                        <h3 className="cursor-pointer hover:text-black">
                          <Link to="/cng">All</Link>
                        </h3>
                        <h3 className="cursor-pointer hover:text-black">
                          <Link to="/grand-vitara-cng">Grand Vitara</Link>
                        </h3>
                        <h3 className="cursor-pointer hover:text-black">
                          <Link to="/baleno-cng">Baleno</Link>
                        </h3>
                        <h3 className="cursor-pointer hover:text-black">
                          <Link to="/xl6-cng">XL6</Link>
                        </h3>
                        <h3 className="cursor-pointer hover:text-black">
                          <Link to="/fronx-cng">Fronx</Link>
                        </h3>
                      </div>
                    )}
                    {onHover === 3 && (
                      <div className="space-y-8">
                        <h3 className="cursor-pointer hover:text-black">
                          <Link to="/maruti-nexa-showroom-outlets-in-hyderabad">
                            Showrooms
                          </Link>
                        </h3>
                        <h3 className="cursor-pointer hover:text-black">
                          <Link to="/maruti-nexa-truevalue-outlets-in-hyderabad">
                            Truevalue
                          </Link>
                        </h3>
                        <h3 className="cursor-pointer hover:text-black">
                          <Link to="/maruti-nexa-workshop-outlets-in-hyderabad">
                            Workshop
                          </Link>
                        </h3>
                      </div>
                    )}
                    {onHover === 4 && (
                      <div className="space-y-8">
                        <h3 className="cursor-pointer hover:text-black">
                          <Link to="/awards">Awards</Link>
                        </h3>
                        <h3 className="cursor-pointer hover:text-black">
                          <Link to="/maruti-nexa-latest-news">Blogs</Link>
                        </h3>
                        {/* <h3 className="cursor-pointer hover:text-black">
                          <Link to="/corporate">Corporate</Link>
                        </h3> */}
                        <h3 className="cursor-pointer hover:text-black">
                          <Link to="/career">Careers</Link>
                        </h3>
                        <h3 className="cursor-pointer hover:text-black">
                          <Link to="/compare">Compare</Link>
                        </h3>
                        <h3 className="cursor-pointer hover:text-black">
                          <Link to="/gallery">Gallery</Link>
                        </h3>
                        {/* <h3 className="cursor-pointer hover:text-black">
                          <a
                            href="https://saboogroup.co.in/saboo-rks-service-feedback2/test"
                            target="_blank"
                            rel="noreferrer"
                            className=""
                          >
                            Service Feedback
                          </a>
                        </h3> */}
                        <h3 className="cursor-pointer hover:text-black">
                          <Link to="/testimonials">Testimonials</Link>
                        </h3>
                        <h3 className="cursor-pointer hover:text-black">
                          <Link to="/privacy-policy">Privacy Policy</Link>
                        </h3>
                        <h3 className="cursor-pointer hover:text-black">
                          <Link to="/terms-and-condition">Terms & Conditions</Link>
                        </h3>
                        <h3 className="cursor-pointer hover:text-black">
                          <a
                            href="https://www.spatial.io/s/Saboo-RKS-N-E-X-A-6322f4f7955236000112849b?share=3965153526388753240"
                            target="_blank"
                            rel="noreferrer"
                            className=""
                            aria-label="Metaverse"
                          >
                            Metaverse
                          </a>
                        </h3>
                      </div>
                    )}
                  </div>
                </div>
                <div
                  className={` absolute cursor-pointer ${
                    scrollTop < 6 ? "top-[70px]" : "top-8"
                  }  right-16 w-full ${
                    open ? "opacity-100 delay-1000" : "opacity-0"
                  } container mx-auto -translate-x-10 flex justify-end`}
                >
                  <div
                    onClick={() => {
                      setOpen(false);
                      setOnHover(0);
                    }}
                    className="p-1 bg-red-500 rounded-full"
                  >
                    <IoClose className="text-3xl text-white" />
                  </div>
                </div>
              </div>
            </Transition.Child>
          </Dialog>
        </Transition.Root>
      </div>

      {/* Desktop, Tab Menu */}

      <div
        className={`fixed scroll-smooth z-40 backdrop-blur-sm  ${
          col && scrollTop < 6 ? "text-black" : "text-white"
        }  ${
          scrollTop > 6 && "bg-[#0c0c0ce8] sm:-translate-y-[55px] duration-700 "
        } w-full `}
      >
        {/* <div
        className={`fixed scroll-smooth  ${navbar?"top-0":"md:top-14 "}  z-20  bg-[#0c0c0ce8]  w-full  shadow-2xl drop-shadow-2xl`}
      > */}

        <div className={`hidden bg-[#0c0c0ce8] sm:block text-white`}>
          <div className="container flex flex-wrap items-center justify-between py-3 pl-6 pr-4 mx-auto">
            <div className="">
              Hyderabad’s <span className="">#1</span> Preferred Maruti Suzuki
              Nexa Dealer
            </div>
            <div className="">
              <a href="tel:+919848898488" className="flex items-center gap-2 cursor-pointer">
                <span className="">
                  <MdPhone />
                </span>{" "}
                98488 98488
              </a>
            </div>
          </div>
        </div>
        <header className="container relative mx-auto ">
          {/* <nav aria-label='Top' className='container mx-auto '> */}
          <nav className="">
            <div className="border-gray-200">
              <div className="flex items-center justify-between h-16 px-3 pt-2 lg:h-20">
                {/* Logo */}
                <div className="ml-2 select-none lg:ml-0">
                  <Link to="/">
                    {col && scrollTop < 6 ? (
                      <img
                        className={`h-8 md:h-9 xl:h-10 `}
                          src={require("../../assets/others/logo_color.png")}
                        alt="Saboo Nexa Color Logo"
                      />
                    ) : (
                      <img
                        className={`h-12 md:h-12 xl:h-16 $`}  
                       src={require("../../assets/others/logo_color.png")}
                        alt="Saboo Nexa White Logo "
                      />
                    )}
                  </Link>
                </div>

                <button
                  type="button"
                  className={`px-2 rounded-md  lg:hidden`}
                  onClick={() => setOpen(true)}
                  aria-label="Open menu"
                >
                  <span className="sr-only">Open menu</span>
                  <MenuIcon className="w-6 h-6" aria-hidden="true" />
                </button>

                <div className="hidden transition-all lg:flex ">
                  {carLinks.map((car, index) => (
                    // <div
                    //   key={index}
                    //   className='group'
                    //   // onClick={() => setVeh(!veh)}
                    //   // onMouseEnter={() => setVeh(true)}
                    //   // onMouseLeave={() => setVeh(false)}
                    // >
                    <Link
                      key={index}
                      className={`py-3 px-3 group  ${
                        scrollTop > 6
                          ? "hover:bg-[#4d4d4d7a]"
                          : col && scrollTop < 6
                          ? " hover:bg-[#4d4d4d7a]"
                          : "hover:bg-[#0d0d0d] "
                      }  rounded-md text-base`}
                      to={car.link}
                    >
                      {car.name}
                    </Link>

                    //  </div>
                  ))}
                  {/* <Link
                    className="py-4 px-3 hover:bg-[#2a2b697a]  rounded-md "
                    to="/maruti-suzuki-24/7-service-in-hyderabad"
                  >
                    27/4 Service
                  </Link>
                  <Link
                    className="py-4 px-3 hover:bg-[#d849497a]  rounded-md "
                    to="/nexa-car-offers-in-hyderabad"
                  >
                    Offers
                  </Link> */}
                </div>
                <div className="items-center hidden lg:flex ">
                  <div className="relative">
                    {sessionStorage.getItem("popup") === "true" && (
                      <div
                        onClick={() => setOpen2(true)}
                        className="relative px-3 cursor-pointer animate-shake"
                      >
                        <IoMail className="text-lg " />
                        <div className="absolute top-0 w-2.5 h-2.5 bg-red-600 rounded-full right-2 animate-pulse"></div>
                      </div>
                    )}
                  </div>
                  <div className="relative py-3 cursor-pointer group">
                    <div
                      className={`py-3 px-3 rounded-md  ${
                        scrollTop > 6
                          ? "hover:bg-[#4d4d4d7a]"
                          : col && scrollTop < 6
                          ? " hover:bg-[#4d4d4d7a]"
                          : "hover:bg-[#0d0d0d] "
                      } text-base `}
                    >
                      Services
                    </div>
                    <div className="absolute top-16  border-b-2  border-gray-200 rounded-lg bg-[#4d4d4d] hidden group-hover:block ">
                      <div className="flex justify-center pt-1 mx-1 whitespace-nowrap">
                        <Link
                          className=" hover:bg-[#0c0b0b] text-white p-3 rounded-md "
                          to="/book-online-maruti-nexa-car-service"
                        >
                          Book a service
                        </Link>
                      </div>
                      <div className="flex justify-center pb-1 ">
                        <Link
                          className=" hover:bg-[#0c0b0b] text-white p-3 w-full mx-1 rounded-md "
                          to="/maruti-suzuki-24/7-service-in-hyderabad"
                        >
                          24/7 Services
                        </Link>
                      </div>
                    </div>
                  </div>
                  <Link
                    className={`py-3 px-3  ${
                      scrollTop > 6
                        ? "hover:bg-[#4d4d4d7a]"
                        : col && scrollTop < 6
                        ? " hover:bg-[#4d4d4d7a]"
                        : "hover:bg-[#0d0d0d] "
                    }  rounded-md  text-base`}
                    to="/nexa-car-offers-in-hyderabad"
                  >
                    Offers
                  </Link>
                  <button
                    className={` ${
                      scrollTop > 6
                        ? "hover:bg-[#4d4d4d7a] "
                        : col && scrollTop < 6
                        ? " hover:bg-[#4d4d4d7a]"
                        : "hover:bg-[#0d0d0d] "
                    } p-3 transition-colors duration-100 rounded-md`}
                    onClick={() => setOpen(!open)}
                    aria-label="Open menu"
                  >
                    {/* Menu */}
                    <span className="sr-only">Menu button</span>
                    <MenuIcon className="w-8 h-8 " aria-hidden="true" />
                  </button>
                  {/* <Link
                    className={`py-3 px-3 hover:bg-[#171c8f] ${
                      col && scrollTop < 6 && " hover:text-white "
                    }  rounded-md  text-base`}
                    to="/maruti-suzuki-driving-school"
                  >
                    <span className="hidden xl:block">Driving School</span>
                    <span className="xl:hidden">MSDS</span>
                  </Link> */}
                </div>
              </div>
            </div>
          </nav>
        </header>
        <div
          className=" bg-red-600 flex justify-end h-0.5 md:h-1  shadow-xl shadow-white "
          style={{ width: `${scrollTop}%` }}
        ></div>
      </div>
    </div>
  );
}

Header.defaultProps = {
  col: false,
};

export default Header;
