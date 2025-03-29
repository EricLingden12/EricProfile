import React from "react";
import Image from "next/image";
import aboutData from "../../public/assets/aboutData";
import { IoCodeSlash, IoBookSharp } from "react-icons/io5";

const About = () => {
  return (
    <div className="container mx-auto h-screen pt-30 text-center pb-30">
      <p className="md:text-lg text-md font-medium">Introduction</p>
      <h1 className="text-3xl sm:text-5xl font-semibold mt-3 gap-2 font-ovo text-center">
        About me
      </h1>
      <div className="mt-8 lg:w-[80%] w-[95%] mx-auto md:flex grid items-start gap-8">
        <div className="md:w-[30%] md:mx-0 w-[80%] mx-auto">
          <Image
            src="/assets/IMG_2097.JPG"
            alt="Profile picture"
            width={350}
            height={350}
            className="rounded-xl lg:w-[350px] w-[400px] mx-auto"
          />
        </div>
        <div className="md:w-[70%] w-[100%] text-lg font-medium text-start px-7">
          <p className="text-justify">{aboutData.description}</p>
          <div className="mt-5 grid gap-5">
            <div className="border border-gray-300 p-5 rounded-lg flex items-center gap-5 hover:shadow-2xl lightHover">
              <IoCodeSlash className="text-5xl" />
              <div className="grid gap-[1px]">
                <p className="text-md font-bold">Languages</p>
                <p className="font-medium text-sm">{aboutData.language}</p>
              </div>
            </div>

            <div className="border border-gray-300 p-5 rounded-lg flex items-center gap-5 hover:shadow-2xl lightHover mb-10">
              <IoBookSharp className="text-5xl" />
              <div className="grid gap-1 leading-5">
                <p className="text-md font-bold">Education</p>
                <p className="font-medium text-sm">{aboutData.education}</p>
                <p className="font-medium text-sm">
                  {aboutData.schoolEducation}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
