
import { Inter } from 'next/font/google'
import React, { useState } from 'react';
import Lottie from 'lottie-react';
import animationData from '../public/elephant.json';
import { motion, spring } from 'framer-motion';
import Button from '@/public/components/Button';
import { link } from 'fs';
import { LinkProps } from 'next/link';
import Link from 'next/link';


const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const [isFirstDivVisible, setFirstDivVisible] = useState(true);

  const handleToggleClick = () => {
    setFirstDivVisible(!isFirstDivVisible);
  };

  const gridData = [
    { index:1 ,text: 'Hey', colSpan: 1, rowSpan: 1 , href: '/chat' },
    { index:2 ,text: 'Chat to Assist', colSpan: 2, rowSpan: 1 , href: '/chat' },
    { index:3 ,text: 'Discover', colSpan: 1, rowSpan: 1, href: '/chat' },
    { index:4 ,text: 'To Stay', colSpan: 2, rowSpan: 1, href: '/chat'  },
    { index:5 ,text: 'Pricing', colSpan: 1, rowSpan: 2, href: '/chat'  },
    { index:6 ,text: 'Best Packages', colSpan: 1, rowSpan: 1, href: '/chat'  },
    { index:7 ,text: 'Travelling', colSpan: 1, rowSpan: 1, href: '/chat'  },
    { index:8 ,text: 'Free Guide', colSpan: 1, rowSpan: 1 , href: '/chat' },
    { index:9 ,text: 'About Us', colSpan: 1, rowSpan: 1, href: '/chat'  },
  ];

  const GridItem = ({ index , text, colSpan, rowSpan , href}) => {
    return (
      <motion.button
        key={index}
        variants={fadeInAnimation}
        initial="initial"
        whileInView='animate'
        viewport={{once:true}}
        custom={index}
        whileHover={{scale:1.1 , transition:{duration:0.1}}}
        

      
        className={`item rounded-2xl bg-green-200 flex items-center justify-center h-full text-xl font-bold p-10 shadow-xl
         ${ index === 2 ? 'col-span-2 row-span-1' : '' }
         ${ index === 4 ? 'col-span-2 row-span-1' : '' }
         ${ index === 5 ? 'col-span-1 row-span-2' : '' }
         ${ index === 2 ? 'col-span-2 row-span-1' : '' }
         ${ index === 2 ? 'col-span-2 row-span-1' : '' }
         ${ index === 2 ? 'col-span-2 row-span-1' : '' }
        }`}
      >
        <Link href={href}>{text}</Link>
      </motion.button>
    );
  };
  const fadeInAnimation = {
    initial: {
      opacity: 0,
      y: 100,
      scale: 0.3
    },
    animate: (index) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: index * 0.1,
        type: 'spring',
        damping: 10,
        stiffness: 50,
        duration: 1
      }
    })

  }

  return (
    <main>
      <div
          className="background-image animated-gradient"
            style={{
              // backgroundImage: 'url("/flat.avif")', // 
              backgroundSize: 'cover sm:fetch',
              backgroundRepeat: 'no-repeat',
              height: '100%', // Set height as needed
              
            }}
          >

          <header className="p-4 shadow-xl bg-green-400 bg-opacity-30">
            <div className="container mx-auto">
              <div className="flex items-center justify-between rounded-xl">
                <div className="text-2xl px-8 font-bold">Your Logo</div>

                <nav className="space-x-4 text-white px-8">
                  <a href="#" className="hover:underline">Home</a>
                  <a href="#" className="hover:underline">About</a>
                  <a href="#" className="hover:underline">Services</a>
                  <a href="#" className="hover:underline">Contact</a>
                </nav>
              </div>
            </div>
          </header>

          <div className="flex flex-col sm:flex-row">
            <div className="w-full sm:w-1/2 p-4 px-3">
              <div className='pt-20  px-8'>
                <h1 className="text-5xl p-4 font-bold">Welcoe to the <span className=" text-green-100 stroke-slate-800">World's</span> </h1>
                <h1 className='text-8xl pl-4 font-bold'> <span className=' text-green-100 stroke-slate-800'>Cutest </span> Island</h1>
              </div>
              <p className=" pt-14 px-8 text-black max-w font-bold">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur explicabo incidunt quos sed ratione ipsum voluptatibus sunt tempore eaque. Numquam nihil eligendi, necessitatibus minus neque, exercitationem nemo maiores iusto ducimus ad blanditiis facere illum ex enim? Dolorem a odio voluptas praesentium voluptatibus possimus, ut, minima culpa facere nemo modi aliquid?
              </p>
              <div className=" space-x-5 pt-16 px-16 ">
                <motion.button className="bg-green-400 rounded-full p-5 px-8 font-bold" whileHover={{scale:1.3}} transition={{type:spring}}> Log In </motion.button>
                <motion.button className="bg-purple-400 rounded-full p-5 px-8 font-bold"whileHover={{scale:1.3}} transition={{type:spring}}> Sign Up </motion.button>
              </div>
            </div>   
            {/* for_button py-0 pt-20 sm:pt-4 sm:px-16 space-y-2 sm:space-y-0 sm:space-x-6 flex flex-col sm:flex-row */}
            <div className="w-full sm:w-1/2 p-4">
              <div className="bg-opacity-30 content-center text-center justify-center pt-4">
                <div>
                  {/* Toggle button */}
                  <motion.button onClick={handleToggleClick} className=" bg-transparent text-black text-3xl font-extrabold rounded-2 pybg-2 px-4 " whileHover={{scale:2}} transition={{type:"spring" , stiffness:200}} whileTap={{translateX:10}}>
                    {isFirstDivVisible ? 'Get Started' : ''}
                  </motion.button>

                  {/* Render content based on visibility state */}
                  {isFirstDivVisible ? (
                    <div>
                      <Lottie animationData={animationData} />
                    </div>

                  ) : (

                    <div className=''>
                      <div className='right rounded grid grid-cols-4 h-3/4 py-10 p-4 gap-2'>
                        {gridData.map((item, index) => (
                          <GridItem key={index} {...item}
                          />
                        ))}
                      </div>
                      <motion.p className='p-4 text-black rounded-2xl max-w font-bold' 
                      variants={fadeInAnimation}
                      initial="initial"
                      whileInView='animate'
                      viewport={{once:true}}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, sint optio perspiciatis quod quae id explicabo. Ipsum veniam autem quos ipsam molestiae natus vitae exercitationem optio placeat saepe eaque dolore repellendus pariatur debitis quasi, quas, odio aut. Blanditiis rem molestias illum dolore cum aliquam porro magnam nisi aliquid, consequuntur accusamus.
                      </motion.p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          <footer className=" text-white bg-slate-500 bg-opacity-50 justify-center">
            <div className="container mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* About Us Section */}
                <div className='justify-between content-center text-center'>
                  <h2 className="text-2xl font-bold mb-4">About Us</h2>
                  <p className="text-gray-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>

                {/* Contact Information */}
                <div className='justify-between content-center text-center'>
                  <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
                  <p className="text-gray-300">
                    Email: contact@example.com<br />
                    Phone: +1 234 567 890<br />
                    Address: 123 Main St, Cityville
                  </p>
                </div>

                {/* Purpose of the Web Application */}
                <div className='justify-between content-center text-center'>
                  <h2 className="text-2xl font-bold mb-4">Our Purpose</h2>
                  <p className="text-gray-300">We aim to provide [describe the purpose of your web application] to [target audience]. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
              </div>
            </div>
          </footer>
      </div>
    </main>
  )
}
