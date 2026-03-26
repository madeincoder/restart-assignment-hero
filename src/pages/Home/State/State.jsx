import CountUp from "react-countup";

const State = () => {
  return (
    <div className="bg-linear-to-br from-[#632EE3] to-[#9F62F2] lg:p-16 py-10 text-white">
      <h1 className="text-4xl font-bold text-center mb-10">
        Trusted by Millions, Built for You
      </h1>

      <div className="flex justify-center items-center">
        <div className="stats stats-vertical md:stats-horizontal ">
          <div className="stat space-y-2">
            <div className="stat-title text-base text-gray-200 text-center ">
              Total Downloads
            </div>
            <div className="text-center stat-value text-7xl">
              <CountUp end={12} duration={5} />M
            </div>
            <div className="stat-desc text-base text-gray-200 text-center">
              21% more than last month
            </div>
          </div>

          <div className="stat space-y-2">
            <div className="stat-title text-base text-gray-200 text-center">
              Total Reviews
            </div>
            <div className="text-center stat-value text-7xl">
              <CountUp end={300} duration={5} />K
            </div>
            <div className="stat-desc text-base text-gray-200 text-center">
              46% more than last month
            </div>
          </div>

          <div className="stat space-y-2">
            <div className="stat-title text-base text-gray-200 text-center">
              Active Apps
            </div>
            <div className="text-center stat-value text-7xl">
              <CountUp end={20} duration={5} />+
            </div>
            <div className="stat-desc text-base text-gray-200 text-center">
              13 more will Launch
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default State;
