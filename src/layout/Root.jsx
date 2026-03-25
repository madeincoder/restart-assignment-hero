import { Outlet } from "react-router";
import Navbar from "./NavBar/Navbar";
import Footer from "./Footer/Footer";

const Root = () => {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <div className="shadow">
        <Navbar></Navbar>
      </div>
      <Outlet />
      <Footer></Footer>
    </div>
  );
};

export default Root;
