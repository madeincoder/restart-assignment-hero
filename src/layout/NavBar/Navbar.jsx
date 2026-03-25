import { Link, NavLink } from "react-router";
import logo from "../../assets/logo.png";
import { BsGithub } from "react-icons/bs";
import { IoAppsOutline, IoHomeOutline } from "react-icons/io5";
import { MdOutlineInstallDesktop } from "react-icons/md";

const Navbar = () => {
  const navlist = (
    <>
      <li>
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            `active:text-[#9F62F2] active:bg-white font-semibold ${isActive ? " font-semibold  text-[#9F62F2]" : ""}`
          }
        >
          <IoHomeOutline />
          Home
        </NavLink>
      </li>

      <li>
        <NavLink
          to={"/apps"}
          className={({ isActive }) =>
            `active:text-[#9F62F2] active:bg-white font-semibold ${isActive ? "font-semibold  text-[#9F62F2]" : ""}`
          }
        >
          <IoAppsOutline />
          Apps
        </NavLink>
      </li>

      <li>
        <NavLink
          to={"/myinstallation"}
          className={({ isActive }) =>
            `active:text-[#9F62F2] active:bg-white font-semibold ${isActive ? "font-semibold  text-[#9F62F2]" : ""}`
          }
        >
          <MdOutlineInstallDesktop />
          My Installation
        </NavLink>
      </li>
    </>
  );

  return (
    <div>
      <div className="navbar bg-base-100 px-10 ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {navlist}
            </ul>
          </div>
          <Link className="flex items-center gap-1">
            <img className="w-8" src={logo} alt="" />
            <p
              className="font-bold text-xl bg-linear-to-br from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent
                    "
            >
              Hero.io
            </p>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navlist}</ul>
        </div>
        <div className="navbar-end ">
          <Link
            to={"https://github.com/madeincoder/restart-assignment-hero"}
            target="true"
            className="btn bg-linear-to-br from-[#632EE3] to-[#9F62F2] text-white"
          >
            <BsGithub />
            Contribute
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
