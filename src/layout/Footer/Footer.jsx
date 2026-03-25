import { BsFacebook, BsTwitter, BsYoutube } from "react-icons/bs";
const Footer = () => {
  return (
    <footer className="footer footer-horizontal footer-center bg-gray-800 text-white  p-10">
      <nav className="grid grid-flow-col gap-4">
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </nav>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <a>
            <BsFacebook />
          </a>
          <a>
            <BsTwitter />
          </a>
          <a>
            <BsYoutube />
          </a>
        </div>
      </nav>
      <aside className="flex ">
        <p>Copyright © {new Date().getFullYear()} - All right reserved by </p>

        <p
          className="font-bold  bg-linear-to-br from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent
                "
        >
          Hero.io
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
