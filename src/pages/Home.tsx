import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import Slider from 'react-slick';
import axios from 'axios';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ArrowRight } from 'lucide-react';
import miningImg from '../assets/gold mining.jpeg';

const Home: React.FC = () => {
  const [randomImages, setRandomImages] = useState<string[]>([]);

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

  useEffect(() => {
    // Fetch random images from Pexels or Pinterest API
    const fetchImages = async () => {
      try {
        // Replace 'YOUR_PEXELS_API_KEY' with your actual Pexels API key
        const response = await axios.get('https://api.pexels.com/v1/search', {
          headers: {
            Authorization: 'ieVrTnAvAfjI9xRUXnRqMKd4l2uiX2zfUC8G0ycqX4GhuFjQ5SLjlw9z',
          },
          params: {
            query: 'minerals', // Change to your search term
            per_page: 2,        // Fetch two images
          },
        });

        // Extract image URLs from the response
        const images = response.data.photos.map((photo: any) => photo.src.large);
        setRandomImages(images);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchImages();
  }, []);

  return (
    <animated.div style={fadeIn}>
      <div className="relative">
        <video
          autoPlay
          loop
          muted
          className="w-full h-screen object-cover"
        >
          <source src="/home.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">Ministry of Solid Minerals</h1>
            <p className="text-xl mb-8">Unlocking Nigeria's Mineral Wealth</p>
            <a href="#main-content" className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
              Explore More
            </a>
          </div>
        </div>
      </div>

      <div id="main-content" className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Latest News and Highlights</h2>
        <Slider {...sliderSettings}>
          {/* First Slide with the locally imported image */}
          <div className="px-4">
            <img src={miningImg} alt="Mining operations" className="w-full h-64 object-cover rounded-lg mb-4" />
            <h3 className="text-xl font-semibold mb-2">New Mining Project Launched in Plateau State</h3>
            <p className="mb-4">The Ministry of Solid Minerals has inaugurated a new mining project in Plateau State, aimed at boosting the local economy and creating jobs.</p>
            <a href="#" className="text-green-600 hover:text-green-700 font-semibold flex items-center">
              Read More <ArrowRight className="ml-2" />
            </a>
          </div>

          {/* Random images fetched from the API */}
          {randomImages.map((imageUrl, index) => (
            <div className="px-4" key={index}>
              <img src={imageUrl} alt={`Random mineral ${index + 1}`} className="w-full h-64 object-cover rounded-lg mb-4" />
              <h3 className="text-xl font-semibold mb-2">Investment Opportunities in Nigeria's Mineral Sector</h3>
              <p className="mb-4">Discover the vast investment potential in Nigeria's growing mineral sector, with opportunities across various minerals and regions.</p>
              <a href="#" className="text-green-600 hover:text-green-700 font-semibold flex items-center">
                Learn More <ArrowRight className="ml-2" />
              </a>
            </div>
          ))}
        </Slider>
      </div>

      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Mission</h2>
          <p className="text-xl text-center max-w-3xl mx-auto">
            To develop Nigeria's solid minerals sector, promote sustainable mining practices, and position Nigeria as a leading mining destination in Africa.
          </p>
        </div>
      </div>

      <div className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Quick Links</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-semibold mb-4">Projects</h3>
              <p className="mb-4">Explore our ongoing and upcoming mining initiatives across Nigeria.</p>
              <a href="/projects" className="text-green-600 hover:text-green-700 font-semibold flex items-center">
                View Projects <ArrowRight className="ml-2" />
              </a>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-semibold mb-4">Policies</h3>
              <p className="mb-4">Learn about our policies aimed at promoting sustainable mining practices.</p>
              <a href="/laws-regulations" className="text-green-600 hover:text-green-700 font-semibold flex items-center">
                Read Policies <ArrowRight className="ml-2" />
              </a>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-semibold mb-4">Investment Opportunities</h3>
              <p className="mb-4">Discover investment prospects in Nigeria's thriving mineral sector.</p>
              <a href="/invest" className="text-green-600 hover:text-green-700 font-semibold flex items-center">
                Explore Opportunities <ArrowRight className="ml-2" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </animated.div>
  );
};

export default Home;
