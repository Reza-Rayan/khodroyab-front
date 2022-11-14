import Link from "next/link";

const NavItem = ({ text, icon }) => {
  return (
    <li className=" list-none py-2 px-6 rounded inline-block primary-color-hover text-sm transition hover:bg-gray-200 ">
      <Link href={"/"}>{text}</Link>
    </li>
  );
};

export default NavItem;
