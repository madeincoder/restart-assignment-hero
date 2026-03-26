import { BsFacebook, BsTwitter, BsYoutube } from "react-icons/bs";
import logo from "../../assets/logo.png";
import { Link } from "react-router";
const Footer = () => {
  return (
    <>
      <footer className="bg-gray-900 text-gray-300 px-6 py-10">
        <div className="max-w-360 mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16">
            {/* Brand */}
            <div>
              <Link to={"/"} className="flex items-center gap-3 mb-4">
                <img src={logo} alt="Logo" className="w-14 mb-4" />
                <span className="text-2xl font-bold bg-linear-to-br from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent mb-3">
                  Hero.io
                </span>
              </Link>
              <p className="text-sm leading-6">
                Discover and manage your favorite apps easily. Fast, simple, and
                user-friendly experience for every device.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-3">
                Quick Links
              </h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="/" className="hover:text-white transition">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/apps" className="hover:text-white transition">
                    Apps
                  </a>
                </li>
                <li>
                  <a href="/about" className="hover:text-white transition">
                    About
                  </a>
                </li>
                <li>
                  <a href="/contact" className="hover:text-white transition">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-3">Support</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="/help" className="hover:text-white transition">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="/privacy" className="hover:text-white transition">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="/terms" className="hover:text-white transition">
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a href="/faq" className="hover:text-white transition">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>

            {/* Newsletter / Contact */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-3">
                Stay Connected
              </h3>
              <p className="text-sm mb-4">
                Get updates about new apps and features.
              </p>

              <form className="flex flex-col sm:flex-row lg:flex-col gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-2 rounded-md bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-blue-500 w-full"
                />
                <button
                  type="submit"
                  className="btn px-4 py-2 bg-linear-to-br from-[#632EE3] to-[#9F62F2] text-white hover:bg-linear-to-br hover:from-[#9F62F2] hover:to-[#632EE3] rounded-md transition border-0"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          {/* Bottom */}
          <div className="border-t border-gray-800 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <p>© {new Date().getFullYear()} Hero.io - All rights reserved.</p>

            <div className="flex gap-4">
              <a href="#" className="hover:text-white transition">
                Facebook
              </a>
              <a href="#" className="hover:text-white transition">
                Twitter
              </a>
              <a href="#" className="hover:text-white transition">
                LinkedIn
              </a>
              <a href="#" className="hover:text-white transition">
                YouTube
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
