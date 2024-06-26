import { useContext, useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Security/AuthProvider";
const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  console.log(user);

  
  // sign out a user
  const handleLogOut = () => {
    logOut().then().catch();
    navigate("/");
  };
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);
  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  return (
    <div className="navbar bg-violet-800 text-white bg-opacity-75 backdrop-blur-lg p-5 rounded-md shadow-lg  lg:px-28 md:px-10 px-5  fixed z-50 top-0 border-b">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content  bg-violet-950 mt-3 z-[1] p-2 shadow  rounded-box w-52 "
          >
            <li>
              <NavLink to={"/"}>
                {" "}
                <img
                  className="h-8 w-8"
                  src="https://i.ibb.co/hL4n8S1/10473299.png"
                  alt=""
                />
                Home{" "}
              </NavLink>
            </li>
            <li>
              <NavLink to={"/notice"}>
                <img
                  className="h-8 w-8"
                  src="https://i.ibb.co/L0CFmHv/pngtree-red-border-on-yellow-triangle-and-black-exclamation-mark-warning-sign-png-image-2316999-remo.png"
                  alt=""
                />
                Notice{" "}
              </NavLink>
            </li>

            <li>
              <NavLink to={"/exam"}>
                {" "}
                <img
                  className="h-8 w-8"
                  src="https://i.ibb.co/hgDHfwD/5304-png-300-removebg-preview.png"
                  alt=""
                />
                Exam
              </NavLink>
            </li>
            <li>
              <NavLink to={"/assignment"}>
                <img
                  className="h-6 w-6"
                  src="https://i.ibb.co/6Wz9JPS/images.png"
                  alt=""
                />
                Assignment{" "}
              </NavLink>
            </li>
            <li>
              <NavLink to={"/attendance"}>
                <img
                  className="h-8 w-8"
                  src="https://i.ibb.co/vsBYFmg/attendance-icon-18-removebg-preview.png"
                  alt=""
                />
                Attendance{" "}
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="flex justify-center items-center">
          <Link to={"/"}>
            <img className="h-32 w-36" src="https://i.ibb.co/TrX4Vvs/Multicolor-playful-children-art-school-logo-20240405-220208-0000-removebg-preview.png" alt="" />
          </Link>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal items-center px-1 flex gap-4">
          <li>
            <NavLink to={"/"}>
              {" "}
              <img
                className="h-6 w-6"
                src="https://i.ibb.co/hL4n8S1/10473299.png"
                alt=""
              />
              Home{" "}
            </NavLink>
          </li>
          <li>
            <NavLink to={"/notice"}>
              <img
                className="h-6 w-6"
                src="https://i.ibb.co/L0CFmHv/pngtree-red-border-on-yellow-triangle-and-black-exclamation-mark-warning-sign-png-image-2316999-remo.png"
                alt=""
              />
              Notice{" "}
            </NavLink>
          </li>

          <li>
            <NavLink to={"/exam"}>
              <img
                className="h-6 w-6"
                src="https://i.ibb.co/hgDHfwD/5304-png-300-removebg-preview.png"
                alt=""
              />
              Exam{" "}
            </NavLink>
          </li>
          <li>
            <NavLink to={"/assignment"}>
              <img
                className="h-4 w-4"
                src="https://i.ibb.co/6Wz9JPS/images.png"
                alt=""
              />
              Assignment{" "}
            </NavLink>
          </li>
          <li>
            <NavLink to={"/attendance"}>
              <img
                className="h-8 w-8"
                src="https://i.ibb.co/vsBYFmg/attendance-icon-18-removebg-preview.png"
                alt=""
              />
              Attendance{" "}
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <label className="swap swap-rotate mr-5">
          <input
            type="checkbox"
            onChange={handleToggle}
            checked={theme == "light" ? false : true}
          />
          <svg
            className="swap-on fill-current lg:w-10 md:w-10 w-8 lg:h-10 md:h-10 h-8"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
          </svg>

          <svg
            className="swap-off fill-current lg:w-10 md:w-10 w-8 lg:h-10 md:h-10 h-8"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
          </svg>
        </label>
        {/* <Link to="/login">
        <button className="btn p-4 rounded-lg">Login</button>
        </Link> */}


        <div className="items-center">
          {user?.displayName ? (
            <div className="dropdown center">
              <label tabIndex={0}>
                <div>
                  <img
                    className="h-10 w-10 rounded-full"
                    src={user.photoURL}
                    alt=""
                  />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-lg dropdown-content mt-3  right-1  z-[1] p-2  rounded-box w-52"
              >
                <div className="dropdown ">
                  <div
                    tabIndex={0}
                    className="dropdown-content z-[50] card card-compact w-44 p-2 shadow bg-base-100 border text-black"
                  >
                    <figure>
                      <img
                        className="h-20 w-20 rounded-full"
                        src={user?.photoURL}
                        alt=""
                      />
                    </figure>
                    <div className="card-body ">
                      <hr />

                      <NavLink
                        onClick={handleLogOut}
                        className={({ isActive, isPending }) =>
                          isPending
                            ? "pending"
                            : isActive
                            ? "underline mr-5 text-blue-700"
                            : "mr-5 hover:text-gray-100"
                        }
                      >
                        <button className="btn btn-outline border-0 border-[#0165c3] hover:bg-[#0165c3] hover:border-[#0165c3] border-b-4 hover:text-white btn-sm">
                          LogOut
                        </button>
                      </NavLink>
                    </div>
                  </div>
                </div>
              </ul>
            </div>
          ) : (
            <Link to="/login">
              <button className="font-avenir  px-3 py-1 bg-neutral rounded text-white">
                Login
              </button>
            </Link>
          )}
        </div>
      </div>

        
    </div>
  );
};
export default NavBar;
