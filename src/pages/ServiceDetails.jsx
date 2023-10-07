import { useLoaderData, useParams } from "react-router-dom";
import Navbar from "../Components/Navbar";


const ServiceDetails = () => {

  const { id } = useParams();
  const data = useLoaderData();

  const theData = data.find(item => item.id == id);
  console.log(theData);
  const { image, name, long_description, Enrollment_starts, Enrollment_ends } = theData;
  return (
    <div>
      <Navbar></Navbar>
      <div className="mx-auto my-10">
        <img className="mx-auto h-[250px] w-4/12 shadow-lg rounded-xl object-contain border-2 border-gray-100" src={image} alt="" />
      </div>
      <div className="text-5xl text-center my-10 font-semibold text-gray-700">

        Welcome to <span className="text-red-600">{name}</span>

      </div>
      <div>
        <h2 className="text-4xl my-10 text-center font-semibold">Why join {name} ?</h2>
      </div>
      <div className="text-center font-md text-xl w-6/12 mx-auto leading-8">
        <p>{long_description}</p>
      </div>

      <div className="my-20 font-semibold text-2xl text-center space-y-5">
        <div>
          Enrollment Starts :- <span className="text-red-500">{Enrollment_starts}</span>
        </div>
        <div>
          Enrollment Ends :- <span className="text-red-500">{Enrollment_ends}</span>
        </div>
      </div>

      <div className="flex justify-center my-10">
        <button
         className="p-4 text-xl rounded-xl bg-red-500 font-semibold text-white">
          Enroll Now
          </button>
      </div>
    </div>
  );
};

export default ServiceDetails;