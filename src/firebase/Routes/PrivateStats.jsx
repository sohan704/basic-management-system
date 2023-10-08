import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateStats = ({children}) => {

  const {user,loading} = useContext(AuthContext);
  console.log('inside private route',loading,user);
  if(loading){
    console.log('loading is ', loading);
    return <div className="flex justify-center items-center h-[100vh]">
      <span className="loading loading-bars loading-lg"></span>
    </div>;
   
   }

  if(user){

    return children;
  }

  return (
    <div>
        <Navigate to='/login'></Navigate>
    </div>
  );
};

export default PrivateStats;