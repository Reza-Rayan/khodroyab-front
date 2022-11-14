import Link from "next/link";
//adding components
import Logo from "../Logo";
import NavItem from "../Nav-Item";
import MbHeader from "./Mb-Header";
import Advertise from "../Advertise";

const Header = () => {
  return (
    <div>
      <Advertise />
      <header className=" w-full borderr py-3 shadow-lg bg-white">
        <MbHeader />
        <div className=" container mx-auto flex header">
          {/* first col */}
          <div className="flex-1  w-[63%]">
            <Logo />
            <ul className="inline-block mx-5">
              <NavItem text={"اجـاره خودرو"} />
              <NavItem text={"خریـد خودرو"} />
              <NavItem text={"دربـاره ما بدانـید "} />
            </ul>
          </div>
          {/* second col */}
          <div className="flex-1   mt-2 text-sm text-end w-[37%]">
            <Link
              href={"/add-advertise"}
              className="primary-bg px-4 py-2 transition-all rounded-md shadow-md ml-2 secondary-bg-hover"
            >
              <strong className="text-white font-medium text-xl mx-1">+</strong>
              ثبت آگهی
            </Link>
            <Link
              href={"/add-advertise"}
              className=" px-4 py-2 transition-all rounded-md border border-transparent hover:border-gray-200 hover:bg-gray-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 inline-block ml-1 mb-1 hover:text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                />
              </svg>
              ورود/ثبت نام
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
