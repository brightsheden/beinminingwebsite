import { FaMapMarkerAlt, FaGlobe, FaEnvelope, FaPhone } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between">
        {/* Contact Information */}
        <div className="mb-4 md:mb-0">
          <h2 className="text-lg font-semibold mb-2">Contact Information</h2>
          <ul className="list-disc pl-4">
            <li className="flex items-center mb-2">
              <FaMapMarkerAlt className="text-blue-500 mr-2" />
              Visit us at our Bauchi Road office, opposite Total Filling Station, Jos Plateau State.
            </li>
            <li className="flex items-center mb-2">
              <FaGlobe className="text-blue-500 mr-2" />
              Website: <a href="http://www.bmcminingltd.com" className="underline" target="_blank" rel="noopener noreferrer">www.bmcminingltd.com</a>
            </li>
            <li className="flex items-center mb-2">
              <FaEnvelope className="text-blue-500 mr-2" />
              Email: <a href="mailto:info@bmcminingltd.com" className="underline">info@bmcminingltd.com</a>
            </li>
            <li className="flex items-center">
              <FaPhone className="text-blue-500 mr-2" />
              Phone: 08065625822
            </li>
          </ul>
        </div>

        {/* Navigation Links */}
        <div>
          <h2 className="text-lg font-semibold mb-2">Quick Links</h2>
          <ul className="flex flex-col md:flex-row gap-4">
            <li><Link to="/" className="underline">Home</Link></li>
            <li><Link to="/about" className="underline">About Us</Link></li>
            <li><Link to="/projects" className="underline">Projects</Link></li>
            <li><Link to="/teams" className="underline">Teams</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
