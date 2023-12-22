
import Machinery1 from '../assets/images/machinery1.jpg'
import Machinery2 from '../assets/images/machinery2.jpg'
import Machinery3 from '../assets/images/machinery3.jpg'
import Machinery4 from '../assets/images/machinery4.jpg'
import Machinery5 from '../assets/images/machinery5.jpg'
import Machinery6 from '../assets/images/machinery6.jpg'
import Machinery7 from '../assets/images/machinery7.jpg'

const MiningMachinerySection = () => {


  return (
    <div className='my-8'>
        <div className='text-center '>

        <h2 className="text-4xl font-extrabold mb-8">Mining Machinery</h2>

        </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="grid gap-4">
        
            <div>
              <img className="h-auto max-w-full rounded-lg" src={Machinery1}  />
            </div>
   
        </div>
        <div className="grid gap-4">
       
            <div >
              <img className="h-auto max-w-full rounded-lg" src={Machinery2}  />
            </div>
 
        </div>
        <div className="grid gap-4">
        
            <div>
              <img className="h-auto max-w-full rounded-lg" src={Machinery3} />
            </div>

        </div>
        <div className="grid gap-4">
          
            <div >
              <img className="h-auto max-w-full rounded-lg" src={Machinery4}/>
            </div>
   
        </div>

        <div className="grid gap-4">
          
          <div >
            <img className="h-auto max-w-full rounded-lg" src={Machinery5}/>
          </div>
 
      </div>

      <div className="grid gap-4">
          
          <div >
            <img className="h-auto max-w-full rounded-lg" src={Machinery6}/>
          </div>
 
      </div>

      <div className="grid gap-4">
          
          <div >
            <img className="h-auto max-w-full rounded-lg" src={Machinery7}/>
          </div>
 
      </div>
      </div>
    </div>
  );
}

export default MiningMachinerySection;
