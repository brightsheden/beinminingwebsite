
//import Coal from '../assets/images/vertical-shot-malachite-mineral-isolated-white-background.jpg'
import image1 from '../assets/images/closeup.jpg'
import image2 from '../assets/images/services-7-370x230.jpg'
import image3 from '../assets/images/yellow-excavator-digging-ore-rich-rock-open-pit-mine.jpg'
import image4 from '../assets/images/machinery6.jpg'

const Offer = () => {
  const servicesData = [
    { number: '01', title: 'Coal Mining', description: 'Our company is one of the most reliable providers of coal mining services.', image:'https://img.freepik.com/free-photo/3d-rendering-abstract-black-white-background_23-2150913973.jpg?t=st=1703254083~exp=1703257683~hmac=a43a1845af5a9de81888575b27b85067dece523dc21d80d5abb5f290a215a2dc&w=826' },
    { number: '02', title: 'Mining Equipment', description: 'We offer a wide variety of professional mining equipment and machinery.', image:`${image1}` },
    { number: '03', title: 'Experienced Team', description: 'We employ the best industry experts who help us provide unique mining solutions.', image:`${image2}` },
    { number: '04', title: 'Modern Technology', description: 'Our company uses top-notch technology to make mining safer and more productive.', image:`${image3}` },
    { number: '05', title: 'Quality Materials', description: 'High-quality materials we use are the absolute guarantee of our customers’ satisfaction.', image:`${image4}` },
    { number: '06', title: 'Mineral Production', description: 'We explore, develop, and produce various minerals at mines all over the world.', image:'https://img.freepik.com/free-photo/large-truck-carrying-sand-platinum-mining-site-africa_181624-60189.jpg?w=900&t=st=1703254181~exp=1703254781~hmac=ea6816d356f61032c7ac0b62304ac1616a13568ab167724f1f5733281944ebee' },
  ];

  return (
    <section>

        <div className='text-center'>
            <h1 className='text-4xl'>WHAT WE OFFER</h1>
        </div>






       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
     
     {servicesData.map((service, index) => (
       <div key={index} className="relative bg-white p-6 rounded-lg shadow-md overflow-hidden">
         <img src={service.image} alt={`Service ${index + 1}`} className="w-full h-auto" />
         <div className="absolute top-0 left-0 bg-gray-200 rounded-full w-12 h-12 flex items-center justify-center">
           <span className="text-xl font-semibold">{service.number}</span>
         </div>
         <div className=" absolute  bottom-0 left-0 w-full p-8  bg-white">
           <h2 className="text-2xl font-semibold mb-2">{service.title}</h2>
           <p className="text-gray-700">{service.description}</p>
         </div>
       </div>
     ))}
   </div>
    </section>

 
  );
}

export default Offer;
