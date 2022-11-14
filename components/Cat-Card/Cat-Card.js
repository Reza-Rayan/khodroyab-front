import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./CatCard.module.css";

const CatCard = ({ image, text }) => {
  return (
    <Link href={"/"} className="md:w-3/4 sm:w-1/2 ">
      <Image src={image} className="mx-auto object-contain " width={200}  />
        <span className="text-center block w-3/5 mx-auto primary-bg py-2 rounded-md mt-0">
          {text}
        </span>
    </Link>
  );
};

export default CatCard;
