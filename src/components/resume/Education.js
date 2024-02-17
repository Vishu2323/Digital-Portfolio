import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2017-2024</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="B-TECH (Information Technology)"
            subTitle="ABES ENGINEERING COLLEGE (2020-2024)"
            result="6.8 CGPA"
            des=""
          />
          <ResumeCard
            title="12th (Non-Medical)"
            subTitle="CH. CHHABIL DASS PUBLIC SCHOOL (2019 - 2020)"
            result="81.2%"
            des=""
          />
          <ResumeCard
            title="10TH"
            subTitle="CH. CHHABIL DASS PUBLIC SCHOOL (2017 - 2018)"
            result="75%"
            des=""
          />
        </div>
      </div>
      
    </motion.div>
  );
}

export default Education