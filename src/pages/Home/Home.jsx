import { Link } from "react-router";
import TrandingApp from "../TrandingApp/TrandingApp";
import Banner from "./Banner/Banner";
import State from "./State/State";
import { useContext } from "react";
import AppContext from "../../contextApp/AppContextSepareted";
import { Hourglass, Oval } from "react-loader-spinner";

const Home = () => {
  const { appData, spinner } = useContext(AppContext);

  // console.log(allApps)
  return (
    <div className="space-y-20 mb-5">
      <div>
        <Banner></Banner>
        <State></State>
        <div>
          <div className="max-w-3xl mx-auto text-center py-10 px-6">
            <h2 className="text-5xl  font-bold mb-6 mt-10">Trending Apps</h2>
            <p className="text-gray-500">
              Stay ahead of the curve with the most popular apps right now.
              We’ve done the curating so you can focus on what matters: getting
              things done and having a blast.
            </p>
          </div>
          <div className="flex justify-center">
            {spinner && (
              <span className=" my-10  ">
                <Oval
                  visible={true}
                  height="80"
                  width="80"
                  color="#4fa94d"
                  ariaLabel="oval-loading"
                  wrapperStyle={{}}
                  wrapperClass=""
                />
              </span>
            )}
          </div>
          <div className="max-w-360 mx-auto grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 py-5 px-10">
            {appData
              .sort((p, c) => c.downloads - p.downloads)
              .slice(0, 8)
              .map((app) => (
                <TrandingApp key={app.id} app={app}></TrandingApp>
              ))}
          </div>
          {!spinner && (
            <div className="flex justify-center">
              <Link
                to={"/apps"}
                target="true"
                className="btn bg-linear-to-br from-[#632EE3] to-[#9F62F2] text-white px-10 py-4 mt-10 mb-8"
              >
                {" "}
                Show All
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
