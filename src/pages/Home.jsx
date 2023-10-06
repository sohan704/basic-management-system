import { useLoaderData } from "react-router-dom";
import Banner from "../Components/Banner";
import Navbar from "../Components/Navbar";
import Services from "../Components/Services";
import Testimonials from "../Components/Testimonials";
import Benefits from "../Components/Benefits";
import Footer from "../Components/Footer";

const Home = () => {
  
  const data = useLoaderData();
  console.log(data);
  return (
    <div>
        <Navbar></Navbar>
        <Banner></Banner>
        <Services data={data}></Services>
        <Testimonials></Testimonials>
        <Benefits></Benefits>
        <Footer></Footer>
    </div>
  );
};

export default Home;