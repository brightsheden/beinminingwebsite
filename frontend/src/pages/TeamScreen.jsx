import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listTeams } from '../state/Actions';
import { Alert, Spinner } from 'flowbite-react';

export default function Teams() {
  // Assuming you have a Redux state for team members
  const teamMembers = useSelector((state) => state.teams);
  const {teams,isRequest,isSuccess,errorMessage} = teamMembers

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listTeams());
  }, [dispatch]);

  return (
    <div>
      {/* Hero Section 1 */}
      <div
        className="bg-[url('https://img.freepik.com/free-photo/african-american-logistics-managers-team-dicussing-goods-distribution-warehouse-reception-post-office-men-woman-workers-planning-stock-supply-while-chatting-counter-desk_482257-59698.jpg?w=740&t=st=1702903566~exp=1702904166~hmac=b0d1e66b46b5b1f0a60a88e232362605940c4ba9873e89cd8d57f3be1e2a835d')] 
                   bg-cover bg-center h-[300px] bg-gray-700 bg-blend-darken object-cover text-center 
                   flex flex-col items-center justify-center text-white"
      >
        <h1 className="text-4xl font-bold">Our Amazing Team</h1>
        <p className="text-lg">Meet the talented individuals behind our success.</p>
      </div>

      {/* Team Member Section */}
      <div className="container mx-auto my-8">
        <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
      </div>

      {/* Hero Section 2 */}
      <div
        className="bg-[url('https://img.freepik.com/free-photo/african-american-logistics-managers-team-dicussing-goods-distribution-warehouse-reception-post-office-men-woman-workers-planning-stock-supply-while-chatting-counter-desk_482257-59698.jpg?w=740&t=st=1702903566~exp=1702904166~hmac=b0d1e66b46b5b1f0a60a88e232362605940c4ba9873e89cd8d57f3be1e2a835d')] 
                   bg-cover bg-center h-[300px] text-center flex flex-col items-center justify-center text-white"
      >
        <h1 className="text-4xl font-bold">Join Our Team</h1>
        <p className="text-lg">We're always looking for talented individuals. Apply now!</p>
      </div>

      {/* Contact Us Section */}
      <div className="bg-gray-100 py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
          <div className="flex justify-center items-center mb-2">
            <img
              src={
                'https://img.freepik.com/free-vector/flat-design-illustration-customer-support_23-2148887720.jpg?w=740&t=st=1702903817~exp=1702904417~hmac=1cc37094a9b467437aab5e830c7af888e793a133ffb176c4a521cff2835ec94a'
              }
              alt="Contact Us"
              className="w-1/4 h-auto mr-4"
            />
            <div className="flex flex-col gap-8">
              <p className="text-gray-700">
                Have questions or want to get in touch? Feel free to reach out to us. We're here to help!
              </p>
              <div className="text-center">
                <a href="mailto:info@bmcminingltd.com">
                  <button className="bg-blue-500 w-64 text-white px-6 py-3 rounded-full">Contact Us</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
