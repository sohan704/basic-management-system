import { useParams } from "react-router-dom";
import Navbar from "../Components/Navbar";


const ServiceDetails = () => {
  
  const {id} = useParams();
  console.log(id);

  return (
    <div>
      <Navbar></Navbar>
    </div>
  );
};

export default ServiceDetails;