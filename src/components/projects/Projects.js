import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Gpt-3 UI Design"
          des="An Ultimate UI/UX design"
          src={projectOne}
        />
        <ProjectsCard
          title="Crypto Hunters"
          des=" It is a Crpto Dashboard where user can find the all the details of crypto currencies including real
          time prices and news related to them. Data is fetched using Coin Gecko API. &    
         Worked On-ReactJS, Bootstrap, API integration"
          src={projectTwo}
        />
        <ProjectsCard
          title="Travel Advisor App"
          des=" Travel Advisor App is a platform where you can get the list of Hotels, Resturants and Attractions
          in your favourate city. &
          Worked On-ReactJS, API integration"
          src={projectThree}
        />
    
      </div>
    </section> 
  );
}

export default Projects