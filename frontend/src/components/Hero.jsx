
import { Link } from 'react-router-dom';
import Closeup from '../assets/images/machinery7.jpg';
import Mt from '../assets/images/machinery7.jpg';

const Herot = () => {

    const backgroundImageStyle = {
        background: `url(${Closeup}) center no-repeat`,
        backgroundBlendMode: 'multiply',
        backgroundColor: '#707070', // Set your desired background color
        backgroundSize: 'cover', // Adjust as needed
      };
  return (
    <section style={backgroundImageStyle} className={`bg-center bg-no-repeat bg-[url(${Mt})] bg-gray-700 bg-blend-multiply`}>
      <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56 transition-transform transform translate-y-0 hover:translate-y-2">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
          Welcome to Bein Muhammad Mining and Construction Company Limited
        </h1>
        <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
       
Welcome to Bein Muhammad Mining and Construction Company Limited, where innovation meets excellence. Established on March 17, 2021, initially as Bein Muhammad, we have evolved into a dynamic force in the mining and construction industry. Later, we rebranded and re-registered as Bein Muhammad Mining and Construction Company Limited, with a total share capital of one million naira only (1,000,000).
        </p>
        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
          
          <Link to="/aboutus" className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400">
            Learn more
          </Link>  
        </div>
      </div>
   
    </section>
  );
}

export default Herot;
