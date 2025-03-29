import React from "react";
import { MdWavingHand } from "react-icons/md";
import {
  HiOutlineArrowDownTray,
  HiOutlineArrowLongRight,
} from "react-icons/hi2";
import Link from "next/link";

const Home = () => {
  return (
    <div className="container mx-auto text-center h-screen flex flex-col justify-center items-center">
      <div
        className=" w-50 h-50 rounded-full bg-gray-300 mx-auto overflow-hidden"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
      >
        <img
          src="/assets/IMG_2097.JPG"
          width="900px"
          className="object-contain ml-0"
        />
      </div>
      <h2 className="flex items-center justify-center text-2xl font-semibold mt-3 gap-2 font-ovo">
        Hi! I'm Eric Lingden
        <span>
          <MdWavingHand className="text-orange-300" />
        </span>
      </h2>
      <div className="my-5 sm:w-full w-[80%]">
        <h1 className="text-3xl sm:text-5xl font-semibold mt-3 gap-2 font-ovo text-center">
          frontend web developer based in Kathmandu.
        </h1>
        <p className="mt-3 text-lg font-medium">
          I am frontend developer from Kathmandu, Nepal. I am looking fro an
          Internship or Job to apply my skills to real-world projects.
        </p>
      </div>
      <div className="sm:flex grid gap-10 items-center mt-5">
        <Link href="/contactme">
          <button className="flex items-center bg-black text-white px-10 py-3 rounded-4xl text-xl font-bold">
            Contact Me
            <HiOutlineArrowLongRight className="text-2xl font-bold ml-3" />
          </button>
        </Link>
        <button className="flex items-center border border-black  text-black px-10 py-3 rounded-4xl text-xl font-bold">
          My Resume
          <HiOutlineArrowDownTray className="text-2xl font-bold ml-3" />
        </button>
      </div>
    </div>
  );
};

export default Home;
