import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Navbar = () => {

  const { signIn, logOut, user, loading } = useContext(AuthContext);

  const navlinks = <>
    <li> <NavLink to="/">Home</NavLink> </li>
    <li> <NavLink to="/about">About</NavLink> </li>
    <li> <NavLink to="/career">Career</NavLink> </li>

    {
      user && <li> <NavLink to="/ranking">Leaderboard</NavLink> </li>
    }
    {
      user && <li> <NavLink to="/stats">Stats</NavLink> </li>
    }

  </>

  const handleLogOut = () => {
    logOut().then().catch();
  }


  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {
              navlinks
            }

          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">Tech Education</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">


          {
            navlinks
          }

        </ul>
      </div>
      <div className="navbar-end">
        {

         <div>
            {
              (user) && <img className="h-[40px] md:h-[70px] w-9/12 rounded-full object-cover mx-2"
                src={(user) ? user.photoURL : ''} alt="" />
            }
          </div>
        }


        {

         <div>
            {
              <p className="mx-3 font-md text-sm md:text-lg">{(user) ? user.displayName : ''}</p>
            }
          </div>
        }



        {

       <div>
            {
              (user) ? <a onClick={handleLogOut} className="btn">LogOut</a> :
                <Link to="/login"><a className="btn">Login</a></Link>

            }
          </div>
        }


      







      </div>
    </div>
  );
};

export default Navbar;