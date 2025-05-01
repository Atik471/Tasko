import { Outlet } from "react-router";
import homeBg from "../assets/img/home.png";
import Navbar from "../components/Navbar";

const MainLayout = () => {
  return (
    <div className="">
      <div
        className="md:px-[4%] bg-top-right bg-cover bg-no-repeat h-[40vh] w-full bg-amber-300"
        style={{ backgroundImage: `url(${homeBg})` }}
      >
        <Navbar />
        <div className="mt-6">
          <p className="text-primary-green font-bold text-2xl pb-2">Hi Atik.</p>
          <h1 className="text-4xl font-bold text-white">
            Welcome to Dashboard
          </h1>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default MainLayout;
