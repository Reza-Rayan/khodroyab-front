import React from "react";

const SearchBox = () => {
  return (
    <form className="bg-white  mx-10    mb-2  p-8 rounded-lg shadow-lg ">
      <h3 className="primary-color text-xl">
        با خودرویاب به راحتی ماشین اجاره کن
      </h3>
      <p className="text-sm mt-4 font-bold"> خودروی مورد نظر را جسجو کنید </p>
      <div className="primary-border py-2 px-3 rounded-md text-sm mt-4  border-2 ">
        <input type="text" placeholder=" نام خودرو ... " />
      </div>
      <div className="primary-border  py-2 px-3 rounded-md text-sm mt-4  border-2">
      <select for="cars"  className="w-full form-select border-none outline-none">
            <option className=" outline-0 w-full text-md border-none"> خودروی لوکس </option>
            <option  className=" outline-0 w-full text-md border-none"> خودروی مسافرتی </option>
            <option  className=" outline-0 w-full text-md border-none"> خودروی تشریفاتی </option>
          </select>
      </div>
      <div className="grid grid-cols-2 ">
        <div className="primary-border  py-2 px-3 rounded-md text-sm mt-4 ml-3 border-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-5 h-5 inline-block ml-2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
            />
          </svg>

          <input type="text" placeholder="محل تحویل خودرو" />
        </div>
        <div className="primary-border border-2  py-2 px-3 rounded-md text-sm mt-4 mr-3">
          <select for="cars" className="w-full form-select border-none outline-none">
            <option className=" outline-0 w-full text-md border-none"  selected> وضعیت راننده </option>
            <option className=" outline-0 w-full text-md border-none"> دارد </option>
            <option className=" outline-0 w-full text-md border-none"> ندارد </option>
          </select>
        </div>
      </div>
      <button className="mt-4 w-full secondary-bg py-2 rounded-md shadow-lg primary-bg-hover transition-all">
        جستجوی خودرو
      </button>
    </form>
  );
};

export default SearchBox;
