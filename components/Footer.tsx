import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className=" relative flex justify-between gap-10 px-16 py-20 w-full h-[30em] bg-linear-to-t from-[#40076E] to-[#000000] ">
      <div>
        <Image src={"/logo.png"} alt="Inxtinct" width={150} height={30} />
        <h1 className="text-[0.9em] font-extralight text-white/60 max-w-lg mt-10 ">
          Protect your emails, social accounts, online identity and personal
          data effortlessly with Inxtinct's AI-powered browser extension.
        </h1>
        <Link href="/about-us">
          <button className="  hover:scale-105 transition-all cursor-pointer  rounded-full mt-8 w-fit font-light flex place-items-center gap-2 ">
            More About Us{" "}
            <Image src={"/moreabout.png"} alt="" width={20} height={20} />
          </button>
        </Link>
      </div>
      <div>
        <nav>
          <h1>Solutions</h1>
          <ul className="mt-3 flex flex-col gap-3">
            <li className="text-[0.9em] font-extralight text-white/60">
              <Link href="">Email Security</Link>
            </li>
            <li className="text-[0.9em] font-extralight text-white/60">
              <Link href="">Browser Security</Link>
            </li>
            <li className="text-[0.9em] font-extralight text-white/60">
              <Link href="">Compliance Guidance</Link>
            </li>
            <li className="text-[0.9em] font-extralight text-white/60">
              <Link href="">Cybersecurity Training</Link>
            </li>
            <li className="text-[0.9em] font-extralight text-white/60">
              <Link href="">Password Protection</Link>
            </li>
            <li className="text-[0.9em] font-extralight text-white/60">
              <Link href="">VPN Services</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div>
        <nav>
          <h1>Legal</h1>
          <ul className="mt-3 flex flex-col gap-3">
            <li className="text-[0.9em] font-extralight text-white/60">
              <Link href="">Support</Link>
            </li>
            <li className="text-[0.9em] font-extralight text-white/60">
              <Link href="">EULA</Link>
            </li>
            <li className="text-[0.9em] font-extralight text-white/60">
              <Link href="">Privacy Policy </Link>
            </li>
            <li className="text-[0.9em] font-extralight text-white/60">
              <Link href="">Terms of Service</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div>
        <nav>
          <h1>Get in touch</h1>
          <ul className="mt-3 flex flex-col gap-3">
            <li className="text-[0.9em] font-extralight text-white/60">
              +1 (999) 888-77-66
            </li>
            <li className="text-[0.9em] font-extralight text-white/60">
              <Link href="mailto:contact@inxtinct.co">contact@inxtinct.co</Link>
            </li>
          </ul>
        </nav>
        <nav className=" mt-10 ">
          <h1>Location</h1>
          <ul className="mt-3 flex flex-col gap-3">
            <li className="text-[0.9em] font-extralight text-white/60">
              20-22 Wenlock Road, London
              <br /> N1 7GU
            </li>
          </ul>
        </nav>
      </div>
      <div className=" absolute bottom-5 right-10 text-[0.8em] font-extralight text-white/60 ">
        © {year} Inxtinct Ltd. | All Rights Reserved.
      </div>
    </div>
  );
};

export default Footer;
