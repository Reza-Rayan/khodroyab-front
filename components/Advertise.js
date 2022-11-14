import React from "react";

const Advertise = () => {
  const close = () => {
    let x = document.getElementById("advertise");
    x.style.height = 0;
    x.style.padding = 0;
    x.style.transitionDuration = "0.4s";
    let y = document.getElementById("ad-text");
    y.style.display = "none";
  };

  return (
    <div id="advertise" className="primary-bg text-center py-2 top-1">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-5 h-5 absolute left-2"
        onClick={close}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 18L18 6M6 6l12 12"
          className="text-white cursor-pointer"
        />
      </svg>
      <span id="ad-text" className="text-white">
        محل تبلیغات
      </span>
    </div>
  );
};

export default Advertise;
