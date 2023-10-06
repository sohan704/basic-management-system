import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from "react";
import Testimonial from './Testimonial';

const Testimonials = () => {
 
  const [testimonials, setTestimonials] = useState([]);
  useEffect(() => {
    AOS.init();
  }, [])


  useEffect(() => {
    // Define a function to fetch the data
    const fetchData = async () => {
      try {
        const response = await fetch('./Testimonials.json');
        const result = await response.json();
        setTestimonials(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    // Call the fetch function
    fetchData();
  }, []); 

  return (
    <div className="mt-36 mx-auto w-10/12">
      <div className="text-center text-3xl md:text-4xl lg:text-6xl font-semibold">
          <p>Testimonials</p>
      </div>
       <div className='mt-16 gap-3 grid grid-cols-1 md:grid-cols-2'>
         {
          testimonials.map(card => 
          <Testimonial key={card.id} card={card}>

          </Testimonial>)
         }
       </div>
    </div>
  );
};

export default Testimonials;