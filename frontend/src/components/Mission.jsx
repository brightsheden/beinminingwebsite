
import MissionVisionImage from '../assets/images/heavy-excavator-digging-day-light.jpg'; // Replace with the correct path

const MissionVisionSection = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <img
          src={MissionVisionImage}
          alt="Mission and Vision"
          className="w-full max-w-2xl mb-8 rounded-lg shadow-md"
        />
        <div className="text-center">
          <h2 className="text-3xl font-extrabold mb-4">Our Mission and Vision</h2>
          <p className="text-lg text-gray-700 mb-8">
            Our mission is to become a major global contractor and supplier of various mineral resources, emphasizing quality materials.
            We aim to foster strong relationships with our customers, encouraging a sense of humanity in all our endeavors.
          </p>
        </div>
      </div>
    </section>
  );
}

export default MissionVisionSection;
