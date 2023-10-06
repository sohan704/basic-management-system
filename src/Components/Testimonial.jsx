import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Testimonial = ({card}) => {
  const {image, say,name,company} = card;
  

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div data-aos="zoom-in" data-aos-duration="1500" className="space-y-4 border-2 border-gray-200 rounded-3xl p-5">
          <img className="h-[100px] w-[100px] object-contain rounded-full" src={image} alt="" />
          <p className="font-light"> {say}</p>
          <div className="text-xl font-semibold">
            {name}
          </div>
          <div className="text-xl font-bold">
            - {company}
          </div>

    </div>
  );
};

export default Testimonial;