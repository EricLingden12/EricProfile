import React from "react";
import Image from "next/image";

const projects = () => {
  const projectsData = [
    {
      Image: "/assets/marowear_black.png",
      title: "Marowear",
      description:
        "A clothing store website built with React and Tailwind CSS.",
      link: "https://e-commerce-gamma-five-89.vercel.app/",
    },
    {
      Image: "/assets/d8a347b41db1ddee634e2d67d08798c102ef09ac.jpg",
      title: "NYC Times clone",
      description:
        "A clone website of Newyork Times built with HTML and Tailwind CSS.",
      link: "https://nyc-times.vercel.app/",
    },
    {
      Image: "/assets/NIKE-LOGO-SOLE-MECHANICS.webp",
      title: "Nike Store Clone",
      description: "A clone website of Nike Store built with HTML and CSS.",
      link: "https://nikenepal.vercel.app/",
    },
  ];
  return (
    <div className="container mx-auto h-screen pt-30 text-center pb-30 ">
      <p className="md:text-lg text-md font-medium">Portfolio</p>
      <h1 className="text-3xl sm:text-5xl font-semibold mt-3 gap-2 font-ovo text-center">
        My Projects
      </h1>
      <p className="md:w-[60%] w-[90%] mx-auto mt-2 text-lg font-medium">
        Welcome to my web development portfolio! Explore a collection of
        projects showcasing my skills and experience in web development.
      </p>
      <div className="flex flex-wrap items-start justify-center gap-10 mt-10">
        {projectsData.map((project, index) => (
          <div
            key={index}
            className="border-2 border-gray-400 p-5 rounded-lg w-[300px] h-[350px] box-shadow mb-10"
          >
            <div className="w-[150px] h-[150px] mx-auto">
              <Image
                src={project.Image}
                alt="Project Image"
                width={100}
                height={100}
                className="mx-auto w-[100px]"
              />
            </div>
            <div>
              <h3 className="text-xl font-bold mt-2">{project.title}</h3>
              <p className="text-md font-medium mt-2">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="text-blue-500 mt-2"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default projects;
