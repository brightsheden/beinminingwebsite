import { Footer } from 'flowbite-react';
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaWhatsapp } from 'react-icons/fa';

function Footerr() {
  return (
    <Footer container className='bg-[#42383b] text-white mt-8'>
      <div className="w-full text-center">
        <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
       <div><h2 className='text-4xl md:text-4xl'>BMMC</h2></div>
          <Footer.LinkGroup className='text-white text-xl space-x-2'>
            <Footer.Link href='/' className='text-white'>Home</Footer.Link>
            <Footer.Link href='#/aboutus' className='text-white'>About Us</Footer.Link>
            <Footer.Link href='#/teams' className='text-white'>Teams</Footer.Link>
            <Footer.Link href='#/projects' className='text-white'>Projects</Footer.Link>
            <Footer.Link href='#/blogs' className='text-white'>Blog/News</Footer.Link>
            {/* Add more navigation links as needed */}
          </Footer.LinkGroup>
        </div>
        <Footer.Divider />
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <div className="flex items-center">
            <FaMapMarkerAlt className="text-xl mr-2" />
            <span>Visit us at our Bauchi Road office, opposite Total Filling Station, Jos Plateau State.</span>
          </div>
          <div className="flex items-center">
            <FaEnvelope className="text-xl mr-2" />
            <span>Email: info@bmcminingltd.com</span>
          </div>
          <div className="flex items-center">
            <FaPhone className="text-xl mr-2" />
            <span>Phone: 08065625822</span>
          </div>
          <div className="flex items-center">
            <FaWhatsapp className="text-xl mr-2" />
            <span>WhatsApp: 08098565381</span>
          </div>
        </div>
        <Footer.Divider />
        <Footer.Copyright href="#" by="bmc™" year={2023} />
      </div>
    </Footer>
  );
}

export default Footerr;
