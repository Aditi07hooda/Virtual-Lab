import React from "react";
import Algorithm from "./Algorithm.svg";
import C from "./c.svg";
import Python from "./python.svg";
import Database from "./DataBase.svg";
import Analog from "./Analog.svg";
import Data from "./Data.svg";
import Graphics from "./Graphics.svg";
import Java from "./Java.svg";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { MdVerticalAlignTop } from "react-icons/md";

export default function Computer() {
  const top = () =>{
    window.scrollTo(0,0)
  }
  return (
    <>
      <Header />
      <div
        className="bg-[url('https://i.pinimg.com/474x/8b/0f/2c/8b0f2c1ad43fb72f22d72308cee114f0.jpg')] bg-no-repeat flex-col"
        style={{ backgroundSize: "1830px 885px" }}
      >
        <div className="pt-4 flex-col flex-wrap ml-9">
          <h1 className="underline text-blue-800 text-4xl cursor-default">
            Computer Science And Engineering
          </h1>
          <center>
          <h2 className="underline text-blue-800 text-4xl cursor-default mt-10">
            Courses
          </h2>
          </center>
        </div>
        <div className="pt-20 pb-6">
          <div className="flex justify-evenly mb-3">
            <div className="w-48 h-60 flex-col justify-center border-2 border-black rounded-lg cursor-pointer">
              
              <Link
                to={"/DataStructure/Content"} 
                className="no-underline"
              >
                <img
                  src={Data}
                  alt="Data Structure"
                  className="w-44 h-40 border-none rounded-lg ml-1.5 -top-2"
                />
                <h2 className="flex justify-center px-2 items-center ml-1">
                  Data Structure
                </h2>
              </Link>
            </div>
            <div className="w-48 h-60 flex-col justify-center border-2 border-black rounded-lg cursor-pointer">
              <Link to={"/Java/Content"} className="no-underline">
              <img
                src={Java}
                alt="Java"
                className="w-48 h-44 border-none rounded-lg"
              />
              <h2 className="flex justify-center px-2 items-center mr-0.5 pt-2">
                Java
              </h2>
              </Link>
            </div>
            <div className="w-48 h-60 flex-col justify-center border-2 border-black rounded-lg cursor-pointer">
            <Link to={"/Python/Content"} className="no-underline">
              <img
                src={Python}
                alt="Python"
                className="w-44 h-40 border-none rounded-lg ml-1.5 mt-1"
              />
              <h2 className="flex justify-center px-2 items-center mr-0.5 mt-2 pt-2">
                Python
              </h2>
            </Link>
            </div>
            <div className="w-48 h-60 flex-col justify-center border-2 border-black rounded-lg cursor-pointer">
            <Link to={"/Dbs/Content"} className="no-underline">
              <img
                src={Database}
                alt="Database Management System"
                className="w-40 h-32 border-none rounded-lg ml-3.5"
              />
              <h3 className="flex justify-center px-2">
                Database Management System
              </h3>
            </Link>
            </div>
          </div>
          <div className="flex justify-evenly my-11">
            <div className="w-48 flex-col justify-center border-2 border-black rounded-lg cursor-pointer">
              <Link to={"/Ade/Content"} className="no-underline">
              <img
                src={Analog}
                alt="Analog and digital"
                className="w-44 h-36 border-none rounded-lg ml-1.5 mt-2"
              />
              <h3 className="flex justify-center px-2 items-center ml-1.5 pt-3">
                Analog And Digital Engineering
              </h3>
              </Link>
            </div>
            <div className="w-48 flex-col justify-center border-2 border-black rounded-lg cursor-pointer">
              <Link to={"/DAA/Content"} className="no-underline">
              <img
                src={Algorithm}
                alt="Design and Analysis of Algorithm"
                className="w-40 h-40 border-none rounded-lg ml-3.5 mt-2"
              />
              <h3 className="flex justify-center px-2 items-center ml-2 pt-2">
                Design and Analysis of Algorithm
              </h3>
              </Link>
            </div>
            <div className="w-48 flex-col justify-center border-2 border-black rounded-lg cursor-pointer">
            <Link to={"/C/Content"} className="no-underline">
              <img
                src={C}
                alt="C programming"
                className="w-48 h-40 border-none rounded-lg pt-2"
              />
              <h3 className="flex justify-center px-2 pt-3">
                Computer Programming Lab
              </h3>
            </Link>
            </div>
            <div className="w-48 flex-col justify-center border-2 border-black rounded-lg cursor-pointer">
            <Link to={"/Graphics/Content"} className="no-underline">
              <img
                src={Graphics}
                alt="Computer Graphics Laboratory"
                className="w-40 h-36 border-none rounded-lg ml-3.5 mt-2"
              />
              <h3 className="flex justify-center px-1">
                Computer Graphics And Image Processing
              </h3>
            </Link>
            </div>
          </div>
      <button><MdVerticalAlignTop className="text-5xl ml-[1700px] bg-blue-700 text-white border-2 border-black hover:bg-blue-900 cursor-pointer rounded-lg py-1 px-1" onClick={top}/></button>
        </div>
      </div>
      <Footer />
    </>
  );
}
