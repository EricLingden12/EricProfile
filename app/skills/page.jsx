// Example using Tailwind CSS + Icons
import { FaReact, FaHtml5, FaCss3Alt, FaJs } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiBootstrap } from "react-icons/si";

const Skills = () => {
  return (
    <div
      id="skills"
      className="container mx-auto h-screen pt-25 text-center pb-30 "
    >
      <p className="md:text-lg text-md font-medium">What I Offer</p>
      <h2 className="text-3xl sm:text-5xl font-semibold mt-3 gap-2 font-ovo text-center">
        My Skills
      </h2>

      <div className="flex flex-wrap items-start justify-center md:gap-20 gap-10 mt-10">
        <div className="grid gap-4 border border-gray-300 p-5 rounded-lg shadow-xl w-[300px] h-[300px]">
          <h3 className="text-xl font-bold">Frontend Fundamentals</h3>
          <div className="flex gap-2 items-center">
            <FaHtml5 className="text-5xl text-[#E34F26]" />
            <p className="text-2xl font-bold">HTML</p>
          </div>
          <div className="flex gap-2 items-center">
            <FaCss3Alt className="text-5xl text-[#1572B6]" />
            <p className="text-2xl font-bold">CSS</p>
          </div>
          <div className="flex gap-2 items-center">
            <FaJs className="text-5xl text-[#F7DF1E]" />
            <p className="text-2xl font-bold">Java Script</p>
          </div>
        </div>
        <div className="grid gap-4 border border-gray-300 p-5 rounded-lg shadow-xl w-[300px] h-[300px]">
          <h3 className="text-xl font-bold">Frameworks & Libraries</h3>
          <div className="flex gap-2 items-center">
            <FaReact className="text-5xl text-[#61DAFB]" />
            <p className="text-2xl font-bold">React</p>
          </div>
          <div className="flex gap-2 items-center">
            <SiNextdotjs className="text-5xl text-[#000]" />
            <p className="text-2xl font-bold">Next.js</p>
          </div>
        </div>

        <div className="grid gap-4 border border-gray-300 p-5 rounded-lg shadow-xl w-[300px] h-[300px] mb-10">
          <h3 className="text-xl font-bold">CSS & Styling</h3>
          <div className="flex gap-2 items-center">
            <SiTailwindcss className="text-5xl text-[#38B2AC]" />
            <p className="text-2xl font-bold">Tailwind</p>
          </div>
          <div className="flex gap-2 items-center ">
            <SiBootstrap className="text-5xl text-[#7952B3]" />
            <p className="text-2xl font-bold">Bootstrap</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
