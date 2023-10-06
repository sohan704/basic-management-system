import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div className="font-Lato mx-auto  w-full">
        <Outlet></Outlet>
    </div>
  );
};

export default Root;