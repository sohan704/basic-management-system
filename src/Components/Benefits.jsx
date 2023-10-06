import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Benefits = () => {
  
  useEffect(() => {
    AOS.init();
  }, [])



  return (
    <div  className="flex justify-center items-center my-20">
      <div className="text-center">
        <h2 className="text-6xl font-semibold">Membership</h2>
        <div data-aos="fade-up" data-aos-duration="3000" 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 ">
          <div className="p-8 mx-auto my-10 text-xl font-semibold bg-yellow-200 rounded-3xl">
          <h2 className="text-5xl my-4 font-semibold">MONTHLY</h2>
            <ul className="space-y-4">
            <li>80% discount at all courses</li>
              <li>Special Guidelines</li>
              <li>Special Support</li>
              <li>Free Hosting for 5 years</li>
            </ul>
          </div>
          <div className="p-8 mx-auto my-10 text-xl font-semibold bg-yellow-300 rounded-3xl">
          <h2 className="text-5xl my-4 font-semibold">LIFETIME</h2>
            <ul className="space-y-4">
              <li>Access to all courses</li>
              <li>Job Hunting Support</li>
              <li>Weekly Special Support</li>
              <li>Free Cloud Computing</li>
              <li>Free Hosting forever</li>
            </ul>
          </div>
          <div className="p-8 mx-auto my-10 text-xl font-semibold bg-yellow-100 rounded-3xl">
          <h2 className="text-5xl my-4 font-semibold">WEEKLY</h2>
            <ul className="space-y-4">
              <li>40% discount at all courses</li>
              <li>Resume Guidelines</li>
              <li>Monthly QnA session</li>
              <li>Free Hosting for a year</li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Benefits;