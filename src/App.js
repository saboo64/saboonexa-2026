import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import About from './screens/about/About';
import Contact from './screens/contact/Contact';
import Home from './screens/home/Home';
import Accessories from './screens/more/Accessories';
import Awards from './screens/more/Awards';
import Gallery from './screens/more/Gallery';
import Testimonial from './screens/more/Testimonial';
import Showrooms from './screens/outlets/Showrooms';
import Workshops from './screens/outlets/Workshops';
import Truevalue from './screens/outlets/Truevalue';
import Insurance from './screens/services/Insurance';
import Finance from './screens/services/Finance';
import Baleno from './screens/cars/Baleno';
// import Scross from './screens/cars/Scross';
import Ciaz from './screens/cars/Ciaz';
import Ignis from './screens/cars/Ignis';
import Offers from './screens/more/Offers';
import BookAService from './screens/more/BookAService';
import PageNotFound from './screens/more/PageNotFound';
// import colorLogo from "./assets/others/logo_color.webp";

import { Bounce, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Thankyou from './screens/more/Thankyou';
import XL from './screens/cars/XL';
import PrivacyPolicy from './screens/more/PrivacyPolicy';
// import NewProduct from "./screens/more/NewProduct";
import GrandVitara from './screens/cars/GrandVitara';
import Fronx from './screens/cars/Fronx';
import Jimny from './screens/cars/Jimny';
// import Compare from "./screens/Compare";

import Compare from './Compare';
import Corporate from './screens/services/Corporate';
import VitaraIHE from './components/Vitara/Versions/VitaraIHE';
import VitaraAG from './components/Vitara/Versions/VitaraAG';
import VitaraAT from './components/Vitara/Versions/VitaraAT';
import VitaraMT from './components/Vitara/Versions/VitaraMT';
import BlogPage from './components/Home/BlogPage';
import NexaCNG from './screens/more/CNG/NexaCNG';
import GrandVitaraCNG from './screens/more/CNG/GrandVitaraCNG';
import BalenoCNG from './screens/more/CNG/BalenoCNG';
import XL6CNG from './screens/more/CNG/XL6CNG';
import NexaPriceList from './screens/more/NexaPriceList';
import Invicto from './screens/cars/Invicto';
import Service24x7 from './screens/services/Service24x7';
import CallButton from './components/Footer/CallButton';
import FronxCNG from './screens/more/CNG/FronxCNG';
import Career from './screens/more/Career';
import Dashboard from './screens/more/Dashboard/Dashboard';
import DrivingSchool from './components/DrivingSchool/DrivingSchool';

import Subscribe from './screens/services/Subscribe';
import TermsAndCond from './screens/more/TermsAndCond';
import EVitara from './screens/cars/EVitara';

function App() {
  const [selected, setSelected] = useState(0);

  const location = useLocation();

  const isAdminRoute =
    location.pathname === '/maruti-suzuki-24/7-service-in-hyderabad' ||
    location.pathname === '/dashboard';

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div>
      {/* <div onContextMenu={(e) => e.preventDefault()} > */}
      {/* onContextMenu={(e) => e.preventDefault()} to remove right click */}
      {/* {location.pathname !== "/dashboard" && <Popup2 />} */}
      <Routes>
        <Route path='/nexa-evitara-on-road' element={<EVitara />} />

        <Route path='/' element={<Home setSelected={setSelected} />} />
        <Route path='/about' element={<About />} />

        {/* Vehicles */}

        <Route path='/nexa-xl6-on-road-price-in-hyderabad' element={<XL />} />
        {/* <Route
          path='/nexa-scross-petrol-on-road-price-in-hyderabad'
          element={<Scross />}
        /> */}
        <Route
          path='/nexa-ciaz-on-road-price-in-hyderabad'
          element={<Ciaz />}
        />
        <Route
          path='/new-maruti-baleno-price-in-hyderabad'
          element={<Baleno />}
        />
        <Route
          path='/nexa-ignis-on-road-price-in-hyderabad'
          element={<Ignis />}
        />

        <Route
          path='/grand-vitara-on-road-price-in-hyderabad'
          element={<GrandVitara />}
        />
        <Route
          path='/grand-vitara-features-intelligent-electric-hybrid'
          element={<VitaraIHE />}
        />
        <Route path='/grand-vitara-allgrip' element={<VitaraAG />} />
        <Route
          path='/grand-vitara-6-speed-automatic-transmission-price'
          element={<VitaraAT />}
        />
        <Route
          path='/grand-vitara-5-speed-manual-transmission-price'
          element={<VitaraMT />}
        />
        <Route
          path='/maruti-invicto-price-in-hyderabad'
          element={<Invicto />}
        />
        <Route path='/maruti-fronx-price-in-hyderabad' element={<Fronx />} />
        <Route path='/maruti-jimny-price-in-hyderabad' element={<Jimny />} />
        {/* services */}
        <Route path='/maruti-car-insurance' element={<Insurance />} />
        <Route path='/maruti-car-finance' element={<Finance />} />
        <Route
          path='/maruti-suzuki-24/7-service-in-hyderabad'
          element={<Service24x7 />}
        />
        {/* outlets */}
        <Route
          path='/maruti-nexa-showroom-outlets-in-hyderabad'
          element={<Showrooms />}
        />
        <Route
          path='/maruti-nexa-latest-news'
          element={<BlogPage selected={selected} setSelected={setSelected} />}
        />

        <Route
          path='/maruti-nexa-workshop-outlets-in-hyderabad'
          element={<Workshops />}
        />
        <Route
          path='/maruti-nexa-truevalue-outlets-in-hyderabad'
          element={<Truevalue />}
        />
        {/* more screen */}
        <Route path='/testimonials' element={<Testimonial />} />
        <Route path='/cng' element={<NexaCNG />} />
        <Route path='/awards' element={<Awards />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/accessories' element={<Accessories />} />
        <Route path='/nexa-car-offers-in-hyderabad' element={<Offers />} />
        <Route path='/offers' element={<Offers />} />
        <Route path='/pricelist' element={<NexaPriceList />} />

        <Route
          path='/book-online-maruti-nexa-car-service'
          element={<BookAService />}
        />
        <Route path='/thank-you' element={<Thankyou />} />
        <Route path='/terms-and-condition' element={<TermsAndCond />} />
        <Route path='/privacy-policy' element={<PrivacyPolicy />} />
        {/* <Route path="/compare" element={<Compare />} /> */}
        <Route path='/compare' element={<Compare />} />
        <Route path='/corporate' element={<Corporate />} />
        {/* CNG Cars */}

        <Route path='/grand-vitara-cng' element={<GrandVitaraCNG />} />
        <Route path='/baleno-cng' element={<BalenoCNG />} />
        <Route path='/xl6-cng' element={<XL6CNG />} />
        <Route path='/fronx-cng' element={<FronxCNG />} />

        {/*ev car */}
        <Route path='/e-' element={<EVitara />} />

        {/* Contact */}
        <Route path='/contact-us' element={<Contact />} />
        <Route path='/career' element={<Career />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/subscribe' element={<Subscribe />} />
        <Route
          path='/maruti-suzuki-driving-school'
          element={<DrivingSchool />}
        />
        {/* PageNotFound */}
        <Route path='*' element={<PageNotFound />} />
      </Routes>
      <CallButton />

      <ToastContainer
        position='top-right'
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        limit={3}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        theme='light'
        transition={Bounce}
      />
      {!isAdminRoute && <Footer />}
    </div>
  );
}

export default App;
