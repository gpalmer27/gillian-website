"use client";

import { useState } from "react";

export default function Experience() {
  const [openBox, setOpenBox] = useState(0);
  const boxClass =
    "bg-white dark:bg-[#6f6e70] dark:text-slate-300 rounded-md p-4 border border-[#bdbcbd] dark:border-slate-800 border-[2px] cursor-pointer";
  return (
    <div className="p-8">
      <div
        onClick={() => (openBox === 5 ? setOpenBox(0) : setOpenBox(5))}
        className={boxClass}
      >
        <h1 className="text-3xl font-bold">Software Developer at Sandbox</h1>
        <p className="text-lg pb-2">August 2024 - Present</p>
        <div
          className={`${openBox === 5 ? "visibility: visible" : "visibility: hidden"}`}
        >
          <hr className="pt-2 dark:border-slate-800"></hr>
          <p>
            At Sandbox, I am currently working with a group of developers and
            designers on Cooper, which is a full-stack co-op review platform for
            Northeastern students. I also attend weekly stand-ups with my group
            and participate in code reviews.
          </p>
        </div>
      </div>
      <div
        onClick={() => (openBox === 4 ? setOpenBox(0) : setOpenBox(4))}
        className={boxClass}
      >
        <h1 className="text-3xl font-bold">CoSMO Outreach Committee</h1>
        <p className="text-lg pb-2">August 2024 - Present</p>
        <div
          className={`${openBox === 4 ? "visibility: visible" : "visibility: hidden"}`}
        >
          <hr className="pt-2 dark:border-slate-800"></hr>
          <p>
            As a member of the outreach committee for Northeastern&apos;s
            Computer Science Mentoring Organization (CoSMO), I help plan club
            events and reach out to other organizations to organize joint
            events. Most recently, I organized a technical interview prep
            workshop with Sandbox.
          </p>
        </div>
      </div>
      <div
        onClick={() => (openBox === 3 ? setOpenBox(0) : setOpenBox(3))}
        className={boxClass}
      >
        <h1 className="text-3xl font-bold">Teaching Assistant</h1>
        <p className="text-lg pb-2">August 2024 - December 2024</p>
        <div
          className={`${openBox === 3 ? "visibility: visible" : "visibility: hidden"}`}
        >
          <hr className="pt-2 dark:border-slate-800"></hr>
          <p>
            I was a teaching assistant for CS1800 (Discrete Structures). As a
            TA, I held weekly office hours and helped lead recitations. I also
            graded 200+ student assignments every week and provided the students
            with personalized feedback on their assignments.
          </p>
        </div>
      </div>
      <div
        onClick={() => (openBox === 2 ? setOpenBox(0) : setOpenBox(2))}
        className={boxClass}
      >
        <h1 className="text-3xl font-bold">Knack Peer Tutor</h1>
        <p className="text-lg pb-2">Febrary 2024 - December 2024</p>
        <div
          className={`${openBox === 2 ? "visibility: visible" : "visibility: hidden"}`}
        >
          <hr className="pt-2 dark:border-slate-800"></hr>
          <p>
            As a Knack tutor, I helped Northeastern students understand key
            concepts in the courses that they were taking. During my time as a
            Knack tutor, I tutored students in Discrete Structures, Linear
            Algebra, and Fundamentals of Computer Science 1 & 2.
          </p>
        </div>
      </div>
      <div
        onClick={() => (openBox === 1 ? setOpenBox(0) : setOpenBox(1))}
        className={boxClass}
      >
        <h1 className="text-3xl font-bold">Mathnasium Instructor</h1>
        <p className="text-lg pb-2">December 2021 - August 2024</p>
        <div
          className={`${openBox === 1 ? "visibility: visible" : "visibility: hidden"}`}
        >
          <hr className="pt-2 dark:border-slate-800"></hr>
          <p>
            At Mathnasium, I guided students in foundational math concepts
            through personalized instruction. I taught approximately 12 students
            per week, grades 2 to 11, and I taught students both in-person and
            online.
          </p>
        </div>
      </div>
    </div>
  );
}
