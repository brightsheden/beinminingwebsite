/* eslint-disable no-unused-vars */
import React from 'react'
import Carousel from '../components/Carousel'
import Carouselc from '../components/Carousel'
import Herot from '../components/Hero'
import Coal from '../assets/images/vertical-shot-malachite-mineral-isolated-white-background.jpg'
import Offer from '../components/Offer'
import View from  '../assets/images/view-ialomitei-cave-bucegi-mountains-romania.jpg'
import MissionVisionSection from '../components/Mission'
import MiningMachinerySection from '../components/Machinery'
import OurProductsSection from '../components/Products'
import Projects from '../components/Projects'
import Teams from '../components/Teams'
import NewsLetter from '../components/NewsLetter'
import LatestBlog from '../components/LatestBlog'
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ContactUs from '../components/Contactus'
import Footer from '../components/NewFooter'

function Home() {

  const { ref: ref1, inView: inView1 } = useInView();
  const controls1 = useAnimation();

  const { ref: ref2, inView: inView2 } = useInView();
  const controls2 = useAnimation();

  const { ref: ref3, inView: inView3 } = useInView();
  const controls3 = useAnimation();

  const { ref: ref4, inView: inView4 } = useInView();
  const controls4 = useAnimation();

  const { ref: ref5, inView: inView5 } = useInView();
  const controls5 = useAnimation();

  const { ref: ref6, inView: inView6 } = useInView();
  const controls6 = useAnimation();

  const { ref: ref7, inView: inView7 } = useInView();
  const controls7 = useAnimation();

  const { ref: ref8, inView: inView8 } = useInView();
  const controls8 = useAnimation();

  const variants = {
    hidden: { opacity: 0, x: '-100vw' },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0 }
  };

  if (window.innerWidth > 768) {
    variants.hidden.x = '-50vw';
  }

  React.useEffect(() => {
    if (inView1) {
      controls1.start('visible');
    } else {
      controls1.start('hidden');
    }
  }, [controls1, inView1]);

  React.useEffect(() => {
    if (inView2) {
      controls2.start('visible');
    } else {
      controls2.start('hidden');
    }
  }, [controls2, inView2]);

  React.useEffect(() => {
    if (inView3) {
      controls3.start('visible');
    } else {
      controls3.start('hidden');
    }
  }, [controls3, inView3]);

  React.useEffect(() => {
    if (inView4) {
      controls4.start('visible');
    } else {
      controls4.start('hidden');
    }
  }, [controls4, inView4]);

  React.useEffect(() => {
    if (inView5) {
      controls5.start('visible');
    } else {
      controls5.start('hidden');
    }
  }, [controls5, inView5]);

  React.useEffect(() => {
    if (inView6) {
      controls6.start('visible');
    } else {
      controls6.start('hidden');
    }
  }, [controls6, inView6]);
  React.useEffect(() => {
    if (inView3) {
      controls3.start('visible');
    } else {
      controls3.start('hidden');
    }
  }, [controls3, inView3]);


  React.useEffect(() => {
    if (inView7) {
      controls7.start('visible');
    } else {
      controls7.start('hidden');
    }
  }, [controls7, inView7]);

  React.useEffect(() => {
    if (inView8) {
      controls8.start('visible');
    } else {
      controls8.start('hidden');
    }
  }, [controls8, inView8]);



  return (
    <div>


        <Herot/>


        <motion.div
             ref={ref1}
             initial="hidden"
             animate={controls1}
             variants={variants}
             transition={{ duration: 1.5 }}
    >
          <section className="bg-gray-100 py-16">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <img
          src={View}
          alt="Mission and Vision"
          className="w-full max-w-2xl mb-8 rounded-lg shadow-md"
        />
        <div className="text-center">
          <h2 className="text-3xl font-extrabold mb-4">About</h2>
          <p className="text-lg text-gray-700 mb-8">
          Welcome to Bein Muhammad Mining and Construction Company Limited, where innovation meets excellence. Established on March 17, 2021, initially as Bein Muhammad, we have evolved into a dynamic force in the mining and construction industry. Later, we rebranded and re-registered as Bein Muhammad Mining and Construction Company Limited, with a total share capital of one million naira only (1,000,000).
          </p>
        </div>
      </div>
    </section>
    </motion.div>


    

        <motion.div
               ref={ref2}
               initial="hidden"
               animate={controls2}
               variants={variants}
               transition={{ duration: 2.5 }}
        
        >

        <section className='my-4'>
          <div className='text-center text-4xl'>
             <h1>OUR VALUES</h1>
          </div>
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 p-8">
      {/* Integrity */}
      <div className="bg-gray-100 p-6 rounded-lg">
        <img src='https://img.freepik.com/free-photo/business-hands-joined-together-teamwork_53876-30575.jpg?w=740&t=st=1702917407~exp=1702918007~hmac=da93ef17a283f074ba472a0641f1b29dd65ca6c784b52397efa5ee0a799b10ea'/>
        <h2 className="text-xl font-semibold mb-4">Integrity</h2>
        <p className="text-gray-700">We have an uncompromising commitment to ethics and zero harm. We care about everyone.</p>
      </div>

      {/* Respect */}
      <div className="bg-gray-100 p-6 rounded-lg">
        <img src='https://img.freepik.com/free-photo/multi-racial-builders-handshaking-outdoors-wearing-uniform-talking-about-new-glass-building-working-poject-city-infrastructure_1157-50877.jpg?w=740&t=st=1702917526~exp=1702918126~hmac=2347bed1d590b22da6482048ae805a639a3ee52f743633c239e0e71ced74402e'/>
        <h2 className="text-xl font-semibold mb-4">Respect</h2>
        <p className="text-gray-700">We hold each other, our customers, and the industries we serve in the highest regard.</p>
      </div>

      {/* Teamwork */}
      <div className="bg-gray-100 p-6 rounded-lg">
        <img src='https://img.freepik.com/free-photo/smiling-architects-looking-blueprint_1098-4065.jpg?w=740&t=st=1702917679~exp=1702918279~hmac=ad0ee58fa67bc4a92068b4bc2df65d321a585e81520544db82e4bd2771a141f8' />
        <h2 className="text-xl font-semibold mb-4">Teamwork</h2>
        <p className="text-gray-700">We work together to achieve results and to solve your toughest challenges.</p>
      </div>

      {/* Diversity */}
      <div className="bg-gray-100 p-6 rounded-lg">
       <img src='https://img.freepik.com/free-photo/three-people-discussing-plan-factory_1303-30624.jpg?w=740&t=st=1702918771~exp=1702919371~hmac=0b3d333d715d1a89cc9983aeefe1bf8d59e459b7ebee46d2061b5d9375a0e80f' />
        <h2 className="text-xl font-semibold mb-4">Diversity</h2>
        <p className="text-gray-700">We appreciate our differences and embrace a broad range of perspectives and cultures.</p>
      </div>
    </section>
        </section>

        </motion.div>
    
        



     

          <motion.div
          
          ref={ref3}
          initial="hidden"
          animate={controls3}
          variants={variants}
          transition={{ duration: 2.5 }}>
                    <section>
                    <Offer/>

                    </section>

             

          </motion.div>
         
     

          <motion.div
        ref={ref4}
        initial="hidden"
        animate={controls4}
        variants={variants}
        transition={{ duration: 2.5 }}
      >
       <section>
          <MissionVisionSection/>
        </section>
      </motion.div>

        

      <motion.div
        ref={ref5}
        initial="hidden"
        animate={controls5}
        variants={variants}
        transition={{ duration: 2.5 }}
      >
          <section>
          <MiningMachinerySection/>
        </section>
      </motion.div>

      <motion.div
        ref={ref6}
        initial="hidden"
        animate={controls6}
        variants={variants}
        transition={{ duration: 2.5 }}
      >
         <section>
          <OurProductsSection/>
        </section>
      </motion.div>


      <motion.div
        ref={ref7}
        initial="hidden"
        animate={controls7}
        variants={variants}
        transition={{ duration: 2.5 }}
      >
        <Projects/>
      </motion.div>

      <motion.div
        ref={ref8}
        initial="hidden"
        animate={controls8}
        variants={variants}
        transition={{ duration: 2.5 }}
      >
        <Teams/>

      </motion.div>

     

    
        <LatestBlog/>

        <ContactUs/>
        <NewsLetter/>

        

 

    </div>
  )
}

export default Home