import Navbar from "../Components/Navbar";

const Error = () => {
  return (
     <div>

      <Navbar></Navbar>
         
      <div className="mt-10">
        <img className="mx-auto" src="https://i.ibb.co/3rvHR0X/reddit404d.png" alt="" />
      </div>

      <div className="mt-10 text-red-500 text-center text-4xl font-semibold">
        Page not found
        </div>
      <div className="mt-5 text-red-500 text-center text-xl font-md">
        The page you requested does not exist
        </div>
     </div>
    
  );
};

export default Error;