'use client';
import { useEffect, useState } from 'react';
import { set, throttle } from 'lodash';
import Timeline from './components/Timeline';
import TopHeader from './components/TopHeader';


import Expertese from './components/Expertese';
import Head from 'next/head';
const ScrollAnimation = () => {
const [showPopup, setShowPopup] = useState(false);  
const [infoOrWork, setInfoOrWork] = useState('info');

  const [currentImage, setCurrentImage] = useState(1);
  const totalImages = 36;

  const handleScroll = throttle(() => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = window.innerHeight;
  
    const scrollFraction = scrollTop / (scrollHeight - clientHeight);
    
    // Multiply totalImages by 2 to loop twice
    let imageIndex = Math.floor(scrollFraction * totalImages * 2);
    
    // Ensure imageIndex stays within the range of available images
    imageIndex = Math.max(0, imageIndex % totalImages);
  
    // Prevent NaN from being set
    if (!isNaN(imageIndex)) {
      setCurrentImage(imageIndex + 1);
    } else {
      setCurrentImage(1); // Default to the first image if there's an issue
    }
  }, 25);
  
  

useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      handleScroll.cancel();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const [currentWord, setCurrentWord] = useState('engineer');
  const words = ['alter', 'improve', 'simplify', 'design', 'build', 'develop'];

  useEffect(() => {
    let interval;
    const flipWords = () => {
      let index = 0;
      interval = setInterval(() => {
        setCurrentWord(words[index]);
        index = (index + 1) % words.length;
      }, 600); 
    };

    const realityElement = document.getElementById('reality');
    realityElement.addEventListener('mouseover', flipWords);
    realityElement.addEventListener('mouseleave', () => {
      clearInterval(interval);
      setCurrentWord('engineer');
    });

    return () => {
      realityElement.removeEventListener('mouseover', flipWords);
      realityElement.removeEventListener('mouseleave', () => clearInterval(interval));
    };
  }, []);

  return (

<>
  {infoOrWork === 'info' ? (
    <>

    <div
      style={{ fontFamily: 'Fira Code, monospace' }}
      className="relative min-h-[200vh] flex items-center justify-center text-white scroll-smooth"
    >
      <TopHeader infoOrWork={infoOrWork} setInfoOrWork={setInfoOrWork} />
      <div className="fixed top-0 left-0 md:w-1/2 md:h-full flex flex-col items-center justify-center">
        <img
          src={`/images/${currentImage}.webp`}
          alt="Scroll Animation"
          className="object-cover md:ml-[0%] "
        />
        {/* <div className="flex flex-col text-2xl font-bold text-gray-300 w-full text-left border-t-[1px] border-opacity-0 justify-start border-gray-500 min-h-48 pt-2">
          <p className="m2-2 text-base mt-auto">
            Check out §uperline, a distribution platform for experts in various fields.
            <span className="text-2xl animate-pulse"> ⬇</span>
          </p>
          <input
            onKeyPress={async (e) => {
              if (e.key === 'Enter') {
                try {
                  const response = await fetch('https://api.ipify.org?format=json');
                  const data = await response.json();
                  const ip = data.ip;

                  const email = e.target.value;
                  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

                  if (emailRegex.test(email)) {
                    alert(`Valid Email and IP: ${ip} Email: ${email}`);
                    setShowPopup(true);
                  } else {
                    alert('Please enter a valid email address');
                  }
                } catch (error) {
                  console.error('Error fetching IP:', error);
                }
              }
            }}
            title="Enter your email"
            type="email"
            placeholder="Enter email & start session Now NO WAITING!"
            className="w-full p-0 mt-2 text-gray-300 bg-transparent border-b-[1px] border-gray-500 border-opacity-50 text-base"
          />
        </div> */}
      </div>

      <div className="md:w-1/2 mb-auto ml-auto transition-all duration-300 max-w-full mt-24">
        <p
          className="md:text-6xl text-4xl text-gray-500 text-right bg-transparent bg-opacity-50 p-2 rounded z-50 ml-auto mb-auto md:mt-36 mt-[110%] pt-12 mr-12 transition-all duration-200 ease-in-out"
          style={{ fontFamily: 'Fira Code, monospace' }}
        >
          My keystrokes can{' '}
          <span className="text-gray-300 transition-all duration-200 ease-in-out">
            {currentWord}
          </span>{' '}
          your digital{' >'}
          <span
            id="reality"
            className="font-black text-gray-300 cursor-cell transition-all duration-500 ease-in-out"
            style={{ fontFamily: 'Fira Code, monospace' }}
          >
            reality
          </span>{''}
          <span className="text-green-600 font-black animate-pulse">|</span>
        </p>

        <div className="w-full text-right mt-24 flex justify-end px-16 space-x-8 text-gray-300">
          <div className="flex flex-col items-end space-y-2 border-t-[1px] pt-2 border-gray-500 border-opacity-50">
            <a
              href="https://nooffice.no"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg cursor-help"
            >
              Dev Lead @ NoOffice.no
            </a>
            <div className="text-sm text-gray-500">since '22</div>
          </div>
          <div className="flex flex-col items-end space-y-2 border-t-[1px] pt-2 border-gray-500 border-opacity-50">
            <div className="text-lg flex items-center">
              <span role="img" className="grayscale hidden md:flex" aria-label="location">
                📍
              </span>{' '}
              Based in Ålesund, Norway
            </div>
          </div>
        </div>

        <div className="flex flex-col mt-48 h-full " >
          <Expertese />
        </div>
      </div>
    </div>
    </>
  ) : (
    <div
    style={{ fontFamily: 'Fira Code, monospace' }}
    className="h-screen bg-black text-white relative">
      <TopHeader infoOrWork={infoOrWork} setInfoOrWork={setInfoOrWork} />
      <Timeline />
    </div>
  )}
  {showPopup && (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="w-[80vw] h-[80vh] bg-black bg-opacity-30 backdrop-blur border-2 border-gray-600 border-opacity-35 rounded-lg relative flex items-center justify-center">
        <button
          onClick={() => setShowPopup(false)}
          className="absolute top-2 right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-white font-bold"
        >
          X
        </button>
        <div className="text-white">This is the popup content.</div>
      </div>
    </div>
  )}
</>
);
};

export default ScrollAnimation;
