import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaGithub,  FaLinkedinIn} from "react-icons/fa";
const LeftBanner = () => {
    const [text] = useTypewriter({
      words: ["Coder.", "React Developer.", "Student."],
      loop: true,
      typeSpeed: 20,
      deleteSpeed: 10,
      delaySpeed: 2000,
    });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME TO MY WORLD</h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm <span className="text-designColor capitalize">Vishu Bansal</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
        Dedicated and highly motivated graduate with a strong foundation in C++, data structures, and
web development seeking a challenging role as a Software Developer. I am eager to contribute my
skills in problem-solving, algorithm design, and web technologies to a dynamic development team.
        </p>
      </div>
      <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex gap-4">
          <span className="bannerIcon">
              <FaGithub />
            </span>
          <span className="bannerIcon">
              <FaLinkedinIn />
            </span>
          </div>
        </div>
        <div>
          
        </div>
      </div>
    </div>
  );
}

export default LeftBanner