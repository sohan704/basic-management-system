import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

const About = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="text-center w-9/12 mx-auto space-y-5 my-36">
         <h2 className="text-3xl lg:text-5xl w-9/12 mx-auto font-semibold text-gray-900">
         Welcome to Tech Education - Elevating Careers Worldwide!
         </h2>

         <p className="text-xl lg:text-3xl font-md leading-10 text-gray-900">We`re not just trainers, we`re transformers! Our dynamic workshops, webinars, and seminars are meticulously designed to equip you with the skills that big tech companies demand. From Silicon Valley to Singapore, we`ve helped individuals globally land coveted roles. Let`s kickstart your journey to success!</p>

         <h2 className="text-2xl lg:text-4xl w-10/12 mx-auto font-semibold text-red-500">
         JOIN US NOW AND LET`S TURN YOUR TECH DREAMS INTO REALITY!
         </h2>
      </div>
       <Footer></Footer>
    </div>
  );
};

export default About;