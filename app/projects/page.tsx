"use client"
import { useState } from "react"

export default function Projects() {
  const [openBox, setOpenBox] = useState(0);
  const buttonClass = "bg-[#ccc9cd] px-2 rounded-2xl shadow hover:bg-[#bdbcbd] border border-black";
  const boxClass = "bg-white rounded-md p-4 border border-[#bdbcbd] border-[2px] cursor-pointer"
  return (
    <div className="p-8">
    <div onClick={() => openBox === 6 ? setOpenBox(0) : setOpenBox(6)} className={boxClass}>
        <h1 className="text-3xl font-bold ">Cosmic Checklist</h1>
        <p className="text-lg pb-2">September 2024</p>
        <div className={`${openBox === 6 ? "visibility: visible" : "visibility: hidden"}`}>
          <hr className="pt-2"></hr>
            <p> As part of HackMIT, I worked with a team to create a task manager platform using Convex. Our project includes 
                both a website and a Chrome extension. Users can click on a button in the Chrome extension to get to the website 
                that lists all of their tasks. On the website, tasks are sorted based on priority, and users can add and delete tasks.
            </p>
            <div className="space-x-2 pt-2">
            <button type="button" className={buttonClass}>
                <a href="https://github.com/gpalmer27/hackmit_2024" target="blank" >
                    View on GitHub
                </a>
            </button>
            <button type="button" className={buttonClass}>
                <a href="https://youtu.be/idmPPXNHtlE" target="blank" >
                    Watch demo
                </a>
            </button>
            </div>
        </div>
    </div>
    <div onClick={() => openBox === 5 ? setOpenBox(0) : setOpenBox(5)} className={boxClass}>
        <h1 className="text-3xl font-bold ">Stocks Program</h1>
        <p className="text-lg pb-2">June 2024</p>
        <div className={`${openBox === 5 ? "visibility: visible" : "visibility: hidden"}`}>
        <hr className="pt-2"></hr>
            <p>As part of my Object-Oriented Design course, I worked with a partner to develop a stock simulation in Java using the
                Model-View-Controller structure. In our program, the user can choose between viewing a text-based interface 
                or a graphical interface. Both options allow the user to create a portfolio of stocks in which they can add 
                and remove stocks, and they can also see the value of that portfolio on a specified date. 
            </p>
            <div className="space-x-2 pt-2">
            <button type="button" className={buttonClass}>
                <a href="https://github.com/gpalmer27/Stocks-Program" target="blank" >
                    View on GitHub
                </a>
            </button>
            <button type="button" className={buttonClass}>
                <a href="https://youtu.be/T-V6LDUEiL0" target="blank" >
                    Watch demo
                </a>
            </button>
            </div>
        </div>
    </div>
    <div onClick={() => openBox === 4 ? setOpenBox(0) : setOpenBox(4)} className={boxClass}>
        <h1 className="text-3xl font-bold ">Husky Laundry</h1>
        <p className="text-lg pb-2">January 2024 - April 2024</p>
        <div className={`${openBox === 4 ? "visibility: visible" : "visibility: hidden"}`}>
        <hr className="pt-2"></hr>
            <p>As part of Northeastern&apos;s Oasis software development club, I worked with a group to design a website that tracks
                laundry usage across Northeastern&apos;s on-campus housing. We were inspired by the Laundry View website that is used 
                across colleges, but we wanted to make the interface more user-friendly and visually appealing.
            </p>
            <div className="space-x-2 pt-2">
            <button type="button" className={buttonClass}>
                <a href="https://github.com/Oasis-NEU/s24-group9" target="blank" >
                    View on GitHub
                </a>
            </button>
            <button type="button" className={buttonClass}>
                <a href="https://youtu.be/HEy-jaS8oxU" target="blank" >
                    Watch demo
                </a>
            </button>
            </div>
        </div>
    </div>
    <div onClick={() => openBox === 3 ? setOpenBox(0) : setOpenBox(3)} className={boxClass}>
        <h1 className="text-3xl font-bold ">Maze Game</h1>
        <p className="text-lg pb-2">April 2024</p>
        <div className={`${openBox === 3 ? "visibility: visible" : "visibility: hidden"}`}>
        <hr className="pt-2"></hr>
            <p>As a part of my Fundamentals of Computer Science II course, I worked with a partner to make an interactive maze game in 
                Java. To make this project, we used our knowledge of Kruskal&apos;s Algorithm, Breadth-First Search, and Depth-First Search 
                to animate the creation of the maze and the process of solving the maze.</p>
                <div className="space-x-2 pt-2">
            <button type="button" className={buttonClass}>
                <a href="https://github.com/gpalmer27/Maze-Game" target="blank" >
                    View on GitHub
                </a>
            </button>
            <button type="button" className={buttonClass}>
                <a href="https://youtube.com/shorts/ClL5drd1pCs" target="blank" >
                    Watch demo
                </a>
            </button>
            </div>
        </div>
    </div>
    <div onClick={() => openBox === 2 ? setOpenBox(0) : setOpenBox(2)} className={boxClass}>
        <h1 className="text-3xl font-bold ">Seam Carver</h1>
        <p className="text-lg pb-2">March 2024</p>
        <div className={`${openBox === 2 ? "visibility: visible" : "visibility: hidden"}`}>
        <hr className="pt-2"></hr>
            <p>As part of my Fundamentals of Computer Science II course, I worked with a partner to write a Seam Carver program,
                where the path with least significance is calculated using Dijkstra&apos;s Algorithm and is removed from the 
                image on every tick.
            </p>
            <div className="space-x-2 pt-2">
            <button type="button" className={buttonClass}>
                <a href="https://github.com/gpalmer27/Seam-Carver" target="blank" >
                    View on GitHub
                </a>
            </button>
            <button type="button" className={buttonClass}>
                <a href="https://youtu.be/4PlOGvya1ck" target="blank" >
                    Watch demo
                </a>
            </button>
            </div>
        </div>
    </div>
    <div onClick={() => openBox === 1 ? setOpenBox(0) : setOpenBox(1)} className={boxClass}>
        <h1 className="text-3xl font-bold ">Productivity Under the Sea</h1>
        <p className="text-lg pb-2">February 2024</p>
        <div className={`${openBox === 1 ? "visibility: visible" : "visibility: hidden"}`}>
        <hr className="pt-2"></hr>
            <p>At HackBeanpot 2024, I worked with a group of four people to create a Chrome extension meant to improve productivity.
               There is a time limit that users can be on unproductive websites, and a water animation indicates how much time the 
               user has remaining on those unproductive sites. Once the time limit runs out, the unproductive sites can no longer be used.
               To make this project, my group used HTML, CSS, and JavaScript.
            </p>
            <div className="space-x-2 pt-2">
            <button type="button" className={buttonClass}>
                <a href="https://github.com/sanjana-singhania/hbp-spring24" target="blank" >
                    View on GitHub
                </a>
            </button>
            <button type="button" className={buttonClass}>
                <a href="https://youtu.be/5d3Sh5a6WIE" target="blank" >
                    Watch demo
                </a>
            </button>
            <button type="button" className={buttonClass}>
                <a href="Hackbeanpot.pdf" target="blank" >
                    View slides
                </a>
            </button>
            </div>
        </div>
    </div>
    </div>
        )
}