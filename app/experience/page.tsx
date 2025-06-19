"use client";

import { useState } from "react";

export default function Experience() {
  const [openBox, setOpenBox] = useState(0);
  const boxClass =
    "bg-white dark:bg-[#6f6e70] dark:text-slate-300 rounded-md p-4 border border-[#bdbcbd] dark:border-slate-800 border-[2px] cursor-pointer";
  return (
    <div className="p-8">
      <div
        onClick={() => (openBox === 9 ? setOpenBox(0) : setOpenBox(9))}
        className={boxClass}
      >
        <h1 className="text-3xl font-bold">Sandbox Technical Lead</h1>
        <p className="text-lg pb-2">June 2025 - Present</p>
        <div
          className={`${openBox === 9 ? "visibility: visible" : "visibility: hidden"}`}
        >
          <hr className="pt-2 dark:border-slate-800"></hr>
          <p>Incoming tech lead for Cooper in Fall 2025!</p>
        </div>
      </div>
      <div
        onClick={() => (openBox === 8 ? setOpenBox(0) : setOpenBox(8))}
        className={boxClass}
      >
        <h1 className="text-3xl font-bold">CoSMO Co-President</h1>
        <p className="text-lg pb-2">June 2025 - Present</p>
        <div
          className={`${openBox === 8 ? "visibility: visible" : "visibility: hidden"}`}
        >
          <hr className="pt-2 dark:border-slate-800"></hr>
          <p>Incoming Fall 2025!</p>
        </div>
      </div>
      <div
        onClick={() => (openBox === 7 ? setOpenBox(0) : setOpenBox(7))}
        className={boxClass}
      >
        <h1 className="text-3xl font-bold">Software Engineering Internship</h1>
        <p className="text-lg pb-2">June 2025 - Present</p>
        <div
          className={`${openBox === 7 ? "visibility: visible" : "visibility: hidden"}`}
        >
          <hr className="pt-2 dark:border-slate-800"></hr>
          <p>
            I am currently working in the Corporate Financial Systems department
            at Travelers where I am implementing a tool to analyze financial
            documents and extract relevant data using Amazon Textract. I am also
            creating a chatbot feature that utilizes Amazon Bedrock to answer
            questions about financial documents.
          </p>
        </div>
      </div>
      <div
        onClick={() => (openBox === 6 ? setOpenBox(0) : setOpenBox(6))}
        className={boxClass}
      >
        <h1 className="text-3xl font-bold">Software Development Co-op</h1>
        <p className="text-lg pb-2">January 2025 - May 2025</p>
        <div
          className={`${openBox === 6 ? "visibility: visible" : "visibility: hidden"}`}
        >
          <hr className="pt-2 dark:border-slate-800"></hr>
          <p>
            For my first co-op, I worked on Odyssey, an interactive learning
            platform for Khoury College, for my co-op. In this position, I
            participated in daily standups and worked within two-week sprint
            cycles. I worked with Next.js and Tailwind CSS for the frontend and
            Strapi CMS and PostgreSQL for the backend. I also helped transition
            the deployment from EKS to ECS using the AWS console, and I created
            the production deployment using Terraform.
          </p>
        </div>
      </div>
      <div
        onClick={() => (openBox === 5 ? setOpenBox(0) : setOpenBox(5))}
        className={boxClass}
      >
        <h1 className="text-3xl font-bold">Sandbox Head of Community</h1>
        <p className="text-lg pb-2">January 2025 - April 2025</p>
        <div
          className={`${openBox === 5 ? "visibility: visible" : "visibility: hidden"}`}
        >
          <hr className="pt-2 dark:border-slate-800"></hr>
          <p>
            In this role, I organized activities and presentations for members
            of Sandbox, Northeastern&apos;s student-led software consultency,
            and I also planned three collaborative events with other Computer
            Science organizations at Northeastern while managing a budget of
            approximately $2000.
          </p>
        </div>
      </div>
      <div
        onClick={() => (openBox === 4 ? setOpenBox(0) : setOpenBox(4))}
        className={boxClass}
      >
        <h1 className="text-3xl font-bold">CoSMO Outreach Committee</h1>
        <p className="text-lg pb-2">August 2024 - June 2025</p>
        <div
          className={`${openBox === 4 ? "visibility: visible" : "visibility: hidden"}`}
        >
          <hr className="pt-2 dark:border-slate-800"></hr>
          <p>
            As a member of the outreach committee for Northeastern&apos;s
            Computer Science Mentoring Organization (CoSMO), I helped plan club
            events and reached out to other organizations to organize joint
            events.
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
