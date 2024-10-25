import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import Slider from 'react-slick';
import axios from 'axios';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ArrowLeft, ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';
import miningImg from '../assets/gold mining.jpeg';
import gold from '../assets/gold mining.jpeg';
import iron from '../assets/iron ore.jpeg';
import bitumen from '../assets/bitumen.jpeg';
import limestone from '../assets/limestone1.jpeg';
import coal from '../assets/coal2.jpeg';
import ministerImg from '../assets/henry.jpeg'; // Add the image of the minister here
import { useLocation, useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
  const [randomImages, setRandomImages] = useState<string[]>([]);
  const [openAccordionIndex, setOpenAccordionIndex] = useState<number | null>(null);
  const [selectedCard, setSelectedCard] = useState<{ title: string; content: string } | null>(null);
  const [showModal, setShowModal] = useState(false);
  const history = useNavigate();
  const location = useLocation();

  const fadeIn = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1000 },
  });

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  // Settings for the mineral names carousel
  const mineralsSliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Number of visible mineral names at once
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get('https://api.pexels.com/v1/search', {
          headers: {
            Authorization: 'ieVrTnAvAfjI9xRUXnRqMKd4l2uiX2zfUC8G0ycqX4GhuFjQ5SLjlw9z',
          },
          params: {
            query: 'minerals',
            per_page: 5,
          },
        });

        const images = response.data.photos.map((photo: any) => photo.src.large);
        setRandomImages(images);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchImages();
  }, []);

  const handleAccordionClick = (index: number) => {
    setOpenAccordionIndex(openAccordionIndex === index ? null : index);
  };

  const handleCardClick = (title: string, content: string) => {
    setSelectedCard({ title, content });
    history(`/news/${title.replace(/\s+/g, '-').toLowerCase()}`);
  };

  const handleBackClick = () => {
    history(-1);
  };

  // Render the News Details if a specific article is selected
  if (location.pathname.startsWith('/news') && selectedCard) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="flex items-center mb-8">
          {/* Back button adjusts for screen size */}
          <button onClick={handleBackClick} className="text-green-600 hover:text-green-700 font-bold flex items-center">
            <ArrowLeft className="mr-2 hidden md:block" />
            <span className="hidden md:inline">Back</span>
            <ArrowLeft className="md:hidden" />
          </button>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold mb-4">{selectedCard.title}</h2>
          <p>{selectedCard.content}</p>
        </div>
      </div>
    );
  }


  return (
    <animated.div style={fadeIn}>
    {/* Hero Section */}
    <div className="relative">
      <video
        autoPlay
        loop
        muted
        className="w-full h-screen object-cover"
      >
        <source src="/hero.mp4" type="video/mp4" />
        {/* <source src="/home.mp4" type="video/mp4" /> */}
        Your browser does not support the video tag.
      </video>

      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Ministry of Solid Minerals Development</h1>
          <p className="text-xl mb-8">Unlocking Nigeria's Mineral Wealth</p>
          <a href="#main-content" className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            Explore More
          </a>
        </div>
      </div>
    </div>

    {/* Mineral Names Carousel */ }
<div className="py-8 bg-gray-100">
  <div className="container mx-auto">
    <h2 className="text-3xl font-bold mb-6 text-center">Discover Nigeria's Rich Minerals</h2>
    <Slider {...mineralsSliderSettings}>
      {[
        { 
          name: 'Gold', 
          img: gold
        },
        { 
          name: 'Iron Ore', 
          img: iron
        },
        { 
          name: 'Limestone', 
          img:limestone
        },
        { 
          name: 'Bitumen', 
          img: bitumen 
        },
        { 
          name: 'Coal', 
          img: coal 
        }
      ].map((mineral, index) => (
        <div key={index} className="px-2">
          <div
            className="relative bg-white rounded-lg shadow-md text-center overflow-hidden"
            style={{ height: '200px' }}
          >
            <img
              src={mineral.img}
              alt={mineral.name}
              className="w-full h-full object-cover"
            />
            {/* Overlay for text */}
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <h3 className="text-xl font-semibold text-white">{mineral.name}</h3>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  </div>
</div>



    {/* Mission & Vision Section */}
    <div id="main-content" className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold mb-8 text-center">Our Mission & Vision</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-gray-100 p-8 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
          <p>
            To exploit the nation’s mineral endowments in an environmentally sustainable manner and establish a vibrant minerals and metals industry for wealth creation, poverty reduction, promotion of economic growth, and significant contribution to the GDP of Nigeria.
          </p>
        </div>
        <div className="bg-gray-100 p-8 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
          <p>
            To facilitate the transformation of the Nigerian Minerals and Metals sector for sustainable Industrial Growth and Economic Surplus.
          </p>
        </div>
      </div>
    </div>

    {/* Honourable Minister Section */}
    <div className="bg-white py-16">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center md:items-start md:space-x-8">
        <img
          src={ministerImg}
          alt="Honourable Minister"
          className="w-full md:w-1/3 rounded-lg shadow-lg mb-8 md:mb-0"
        />
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-bold mb-4">From the Desk of the Honourable Minister</h2>
          <p className="text-xl mb-4 max-w-3xl">
            The Ministry under my stewardship is resolutely committed to implementing the Roadmap for the Growth and Development of the Nigerian Mining Industry, a policy document formulated in 2016 to unlock the various potentials in the sector.
          </p>
          <p className="text-xl mb-4 max-w-3xl">
            We have laid down policy infrastructure that are designed to make the sector more business-friendly and to ensure that investments in the sector are secured.
          </p>
          <p className="text-lg font-semibold">Dr. Oladele Henry Alake</p>
          <p className="text-sm">Honourable Minister of Solid Minerals Development</p>
        </div>
      </div>
    </div>

    {/* Explore Our Technical Departments Section */}
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Explore Our Technical Departments</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: 'Artisanal & Small-Scale Mining (ASM)', content: 'ASM focuses on...' },
            { title: 'Mines Environment Compliance (MEC)', content: 'MEC ensures...' },
            { title: 'Mines Inspectorate (MI)', content: 'MI monitors...' }
          ].map((department, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 cursor-pointer transition-shadow duration-300 hover:shadow-lg">
              <div
                onClick={() => handleAccordionClick(index)}
                className="flex items-center justify-between"
              >
                <h3 className="text-xl font-semibold">{department.title}</h3>
                {openAccordionIndex === index ? <ChevronUp /> : <ChevronDown />}
              </div>
              {openAccordionIndex === index && (
                <div className="mt-4 text-gray-700">
                  <p>{department.content}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* Explore Our Agencies Section */}
    <div className="container mx-auto px-4 py-16 bg-green-50">
      <h2 className="text-3xl font-bold mb-8 text-center">Explore Our Agencies</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div
          className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
          onClick={() => handleCardClick('Gold Mining', 'Nigeria is...')}
        >
          <img src={miningImg} alt="Gold Mining" className="w-full h-56 object-cover" />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center transition-opacity duration-300 opacity-0 hover:opacity-100">
            <p className="text-white text-xl font-semibold">Gold Mining</p>
            <ArrowRight className="text-white ml-2" />
          </div>
        </div>

        <div
          className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
          onClick={() => handleCardClick('The Mineral House', 'Our mining policy...')}
        >
          <img src={ministerImg} alt="The Mineral House" className="w-full h-56 object-cover" />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center transition-opacity duration-300 opacity-0 hover:opacity-100">
            <p className="text-white text-xl font-semibold">The Mineral House</p>
            <ArrowRight className="text-white ml-2" />
          </div>
        </div>

        <div
          className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
          onClick={() => handleCardClick('Exploration in Nigeria', 'The journey...')}
        >
          <img src={miningImg} alt="Exploration in Nigeria" className="w-full h-56 object-cover" />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center transition-opacity duration-300 opacity-0 hover:opacity-100">
            <p className="text-white text-xl font-semibold">Exploration in Nigeria</p>
            <ArrowRight className="text-white ml-2" />
          </div>
        </div>
      </div>
    </div>
  </animated.div>
  );
};

export default Home;
