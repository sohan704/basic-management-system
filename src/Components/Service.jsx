import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';


const Service = ({ card }) => {

 const navigate = useNavigate();

  const {id, image,name,price, short_description } = card;

  useEffect(() => {
    AOS.init();
  }, [])

  const handleBuyNow = () => {
     navigate(`/services/${id}`);
  }

  return (
    <div data-aos="zoom-in" data-aos-duration="2000" className='space-y-3 h-[500px] rounded-lg justify-end p-5 border-gray-300 border-2 w-9/12 mx-auto flex flex-col'>
      <div>
      <img className='h-[130px] my-2 object-contain mx-auto' src={image} alt="" />
      <div className='text-xl lg:text-2xl font-semibold'><p>{name}</p></div>
      <div className='text-sm lg:text-lg font-medium'>{short_description}</div>
      <div className='text-xl my-2 text-red-600 font-bold'>${price}</div>
      </div>
      <div className='flex-grow'>
        <button onClick={handleBuyNow}
        className='bg-gray-800 text-lg p-2 rounded-md text-white'>
        Details</button>
      </div>
    </div>
  );
};

export default Service;