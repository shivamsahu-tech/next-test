import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className=" absolute top-0 left-0 w-full z-100 ">
      <div className="flex justify-between place-items-center px-16 py-4">
        <Link href={"/"}>
          <Image src={"/logo.png"} alt="Inxtinct" width={150} height={30} />
        </Link>
        <button className=" bg-primary bg-red hover:bg-primary/80 rounded-full px-8 py-2 cursor-pointer ">
          Contact Uswdq
        </button>
      </div>
    </div>
  );
};

export default Header;
