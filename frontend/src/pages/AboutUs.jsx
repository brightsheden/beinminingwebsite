import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listTeams } from '../state/Actions';
import { Alert, Spinner } from 'flowbite-react';

const AboutUs = () => {
  const certificates = [
    'Cooperate Affairs Certificate (C.A.C)6914010',
    'Special Control Unit Against Money Laundering (SCUML)',
    'Tax Clearance Certificate',
    'Nigeria Export Promotional Council',
    'Attestation of non-conviction of any criminal offense',
    'Letter of reference from United Bank of Africa',
    'Mining and Possess License',
  ];

  const teamMembers = useSelector((state) => state.teams);
  const {teams,isRequest,isSuccess,errorMessage} = teamMembers

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listTeams());
  }, [dispatch]);

  return (
    <div className="bg-gray-100">
      <header className="bg-gray-800 text-white text-center py-8">
        <h1 className="text-4xl font-bold">About Us</h1>
      </header>

      <section className="max-w-4xl mx-auto bg-white shadow-lg p-6 mt-8 rounded-lg">
        <div className="flex flex-col-reverse md:flex-row gap-4 items-center">
          <div className="md:w-1/2">
            <h2 className="text-2xl font-bold mb-4">Our Story</h2>
            <div className="space-y-5">
              <p className="text-justify">
                Welcome to Bein Muhammad Mining and Construction Company Limited, where innovation meets excellence.
                Established on March 17, 2021, initially as Bein Muhammad, we have evolved into a dynamic force in
                the mining and construction industry. Later, we rebranded and re-registered as Bein Muhammad Mining
                and Construction Company Limited, with a total share capital of one million naira only (1,000,000).
              </p>

              <p className="text-justify">
                At Bein Muhammad Mining and Construction Company Limited, we specialize in both mineral extraction and
                infrastructure construction. We seamlessly integrate our efforts to provide essential materials and
                equipment for construction projects, ensuring a comprehensive solution for our clients.
              </p>
            </div>
          </div>
          <img
            src="https://img.freepik.com/free-photo/worker-from-dressed-work-clothes-observing-some-excavators-construction-site-ai-generative_123827-23542.jpg?w=740&t=st=1703254523~exp=1703255123~hmac=5b19e81f798bdc523efadf8ba6aa22b1c226797f9685bdb40617ec61962e80af"
            alt="Company Image"
            className="md:w-1/2 rounded-lg"
            style={{ maxWidth: '300px' }}
          />
        </div>
      </section>

      <section className="max-w-4xl mx-auto bg-white shadow-lg p-6 mt-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-4 text-center">Our Team</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {/* ... (unchanged) ... */}

          {errorMessage && (<Alert>{errorMessage}</Alert>)}

          {isRequest? (<Spinner></Spinner>): (
            <div>
                {teams.map((member) => (
            <div key={member.id} className="bg-white rounded-lg overflow-hidden shadow-md">
              <img src={member.image} alt={member.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            </div>
          ))}

            </div>
          ) }
        
        </div>
      </section>

      <section className="max-w-4xl mx-auto bg-white shadow-lg p-6 mt-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-4 text-center">Financial Structure</h2>
        <span className="text-sm font-semibold text-gray-500">
          Our financial inclusion is achieved through partnerships with contractors and investors, aligning with our
          company's partnership agreements.
        </span>

        <div className="my-4">
          <h1 className="text-center text-2xl">Bank Details</h1>
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-4 md:mb-0">
              <span className="text-xl font-bold">Stanbic IBTC Bank</span>
              <ul className="list-disc list-inside">
                <li>Domiciliary Account: 0050011584</li>
                <li>Naira Current Account: 0050011460</li>
              </ul>
            </div>

            <div>
              <span className="text-xl font-bold">United Bank of Africa</span>
              <ul className="list-disc list-inside">
                <li>Naira Current Account: 1026346143</li>
                <li>Domiciliary Account: 3004143276</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto bg-white shadow-lg p-6 mt-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-4 text-center">Possession of Registered Certificates</h2>
        <div>
          <ul className="list-disc pl-6">
            {certificates.map((certificate, index) => (
              <li key={index} className="mb-2">
                {certificate}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
