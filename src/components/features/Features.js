import React from 'react'
import { FaGlobe,FaCode,FaReact } from "react-icons/fa";
import Title from '../layouts/Title';
import Card from './Card';

const Features = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <Title title="Features" des="What I Do" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
       <Card
          title="Problem Solving"
          des=" Leetcode(120+ Problem Solved) with 50 days badge &
          Hackerrank with 4 stars in Problem Solving and C++"
          icon={< FaCode/>}
        />
         <Card
          title="Web Development"
          des="Worked on many development projects."
          icon={< FaReact/>}
        />
        <Card
          title="Hosting Websites"
          des="Hosted many of my projects"
          icon={<FaGlobe />}
        />
      </div>
    </section>
  );
}

export default Features
        
       