import { FaMapMarkerAlt, FaGlobe, FaEnvelope, FaPhone, FaWhatsapp } from 'react-icons/fa';

function ContactUs() {
  return (
    <div id='contact' className="container mx-auto my-8 p-8 bg-gray-100">
        <div className='text-center'> <h1 className="text-4xl font-bold mb-4">Contact Us</h1></div>
     

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Information */}
        <div>
          <h2 className="text-2xl font-semibold mb-2">Contact Information</h2>
          <ul className="list-disc pl-4">
            <li className="flex items-center mb-2">
              <FaMapMarkerAlt className="text-blue-500 mr-2" />
              Visit us at our Bauchi Road office, opposite Total Filling Station, Jos Plateau State.
            </li>
            <li className="flex items-center mb-2">
              <FaGlobe className="text-blue-500 mr-2" />
              Website: <a href="http://www.bmcminingltd.com" className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">www.bmcminingltd.com</a>
            </li>
            <li className="flex items-center mb-2">
              <FaEnvelope className="text-blue-500 mr-2" />
              Email: <a href="mailto:info@bmcminingltd.com" className="text-blue-500 underline">info@bmcminingltd.com</a>
            </li>
            <li className="flex items-center mb-2">
              <FaPhone className="text-blue-500 mr-2" />
              Phone: 08065625822
            </li>
            <li className="flex items-center">
              <FaWhatsapp className="text-green-500 mr-2" />
              WhatsApp: 08098565381
            </li>
          </ul>
        </div>

        {/* Map Section */}
        <div>
          {/* You can embed a map here, for example using Google Maps iframe */}
          {/* Replace the following iframe with your map embed code */}
          <iframe
            title="Company Location"
            className="w-full h-64 md:h-auto"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3879.098180831308!2d9.921746914299997!3d8.89154369361043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104c9a740f0cf1fb%3A0x650f7bfc610db5f8!2sYour%20Company%20Name%20Here!5e0!3m2!1sen!2sng!4v1647329141237!5m2!1sen!2sng"
            width="600"
            height="450"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
