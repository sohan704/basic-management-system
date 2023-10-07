import Service from "./Service";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Services = ({data}) => {
   
  useEffect(() => {
    AOS.init();
  }, [])
 
  return (
    <div className="w-11/12 mx-auto mt-36 mb-32">
        <div className="text-5xl mb-36 font-semibold text-gray-800 text-center">
           Our Services
        </div>
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4 lg:gap-3">
          {
            data?.map(card => <Service key={card.id} card={card}></Service>)
          }
       </div>
    </div>
  );
};

export default Services;