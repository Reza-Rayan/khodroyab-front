import Link from "next/link";
import React from "react";

const MbHeader = () => {
  return (
    <div className="mb-header w-full fixed bottom-0 py-3 text-center shadow-md primary-bg rounded-t-md ">
      <div className="grid grid-cols-4 container mx-auto text-sm">
        <div className="text-center">
          <Link href={'/'} className="text-white hover:bg-gray-400 hover:text-gray-700 rounded-md transition-all  py-1 px-3"> اجاره خودرو </Link>
        </div>
        <div className="text-center">
          <Link href={'/'} className="text-white hover:bg-gray-400 hover:text-gray-700 rounded-md transition-all py-1 px-3"> خرید خودرو </Link>
        </div>
        <div className="text-center">
          <Link href={'/'} className="text-white hover:bg-gray-400 hover:text-gray-700 rounded-md transition-all py-1 px-3"> داشبورد </Link>
        </div>
        <div className="text-center">
          <Link href={'/'} className="text-white hover:bg-gray-400 hover:text-gray-700 rounded-md transition-all py-1 px-3"> ارتباط با ما </Link>
        </div>
      </div>
    </div>
  );
};

export default MbHeader;
