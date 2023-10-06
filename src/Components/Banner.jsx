import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Banner = () => {

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div className="h-[100vh] bg-gray-100 flex justify-center items-center">
   
      <div className="space-y-4 flex justify-between text-center">

        <div>
          <div className='text-5xl  lg:text-7xl font-semibold'>
            WELCOME
          </div>

          <div
            
             className='text-5xl lg:text-7xl my-5 text-red-600 font-semibold'>
            TO TECH <br />
            EDUCATION
          </div>

          <div className='text-xl lg:text-3xl'>
              Learning for Innovation
          </div>

          
        </div>

      </div>

    </div>
  );
};

export default Banner;