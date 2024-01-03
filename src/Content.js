import React, { useState } from "react";
import "./content.css";
import Vlab from "./Virtual.svg";
import cmr from "./CMRIT.svg";
import { MdVerticalAlignTop } from "react-icons/md";

export default function Content(props) {
  const mystyle = {
    width: "1830px",
    height: "1465px",
  };

  const [toggle, settoggle] = useState(1);
  const toggleTab = (index) => {
    settoggle(index);
  };
  const top = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      <div style={mystyle}>
        <div
          className=" bg-blue-900 py-5 flex px-5 justify-between"
          style={{ width: "1830px" }}
        >
          <img
            src={Vlab}
            className="h-28 border-none max-w-full rounded-xl"
            alt="logo"
          />
          <img
            src={cmr}
            alt="CMRIT"
            className=" h-32 border-none max-w-full rounded-xl"
          />
        </div>
        <div className="flex bg-blue-900 pb-3" style={{ width: "1830px" }}>
          <div className="bg-gradient-to-b from-blue-900 from-0.5% to-yellow-300 to-40% py-3 mx-5 w-full rounded-3xl">
            <div className="mx-4 text-2xl font-semibold flex space-x-8 list-none pt-3">
              <li className="cursor-pointer hover:underline">
                <a href="/">Home</a>
              </li>
              <li className="cursor-pointer hover:underline">About</li>
              <li className="cursor-pointer hover:underline">Contact Us</li>
            </div>
          </div>
        </div>
        <div
          className="bg-blue-900 flex w-min pr-5"
          style={{ height: "1235px" }}
        >
          <div
            className="border-none rounded-2xl bg-[url('https://i.pinimg.com/474x/8b/0f/2c/8b0f2c1ad43fb72f22d72308cee114f0.jpg')] bg-no-repeat  py-5 px-3 my-5 ml-5"
            style={{ backgroundSize: "1830px 1365px" }}
          >
            <div>
              <h1 className="text-4xl text-blue-900 font-bold cursor-default">
                {props.department}
              </h1>
            </div>
            <p className="font-extrabold text-blue-900 cursor-default">
              __________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________
            </p>
            <div className="mt-6 flex justify-center">
              <h1 className="underline text-blue-900 text-5xl font-semibold cursor-default">
                {props.lab}
              </h1>
            </div>
            <div>
              <div className="grid grid-flow-col gap-0">
                <div
                  className="flex-col list-none text-2xl font-normal space-y-6 border-r-4 border-blue-900 w-fit ml-7 mt-20 h-fit"
                  id="menu"
                  role="tablist"
                >
                  <li
                    id="Intro"
                    className={toggle === 1 ? "active-tab" : "tabs"}
                    onClick={() => toggleTab(1)}
                    style={{
                      paddingBottom: "10px",
                      paddingLeft: "10px",
                      paddingTop: "12px",
                      fontWeight: "400",
                      fontSize: "32px",
                      marginRight: "6px",
                      width: "220px",
                      cursor: "pointer",
                    }}
                    role="tab"
                    aria-controls="panel-1"
                  >
                    Introduction
                  </li>
                  <li
                    id="Intro1"
                    className={toggle === 2 ? "active-tab" : "tabs"}
                    onClick={() => toggleTab(2)}
                    role="tab"
                    aria-controls="panel-2"
                    style={{
                      paddingBottom: "10px",
                      paddingLeft: "10px",
                      paddingTop: "12px",
                      fontWeight: "400",
                      fontSize: "32px",
                      marginRight: "6px",
                      width: "220px",
                      cursor: "pointer",
                    }}
                  >
                    Objective
                  </li>
                  <li
                    id="Intro2"
                    className={toggle === 3 ? "active-tab" : "tabs"}
                    onClick={() => toggleTab(3)}
                    role="tab"
                    aria-controls="panel-3"
                    style={{
                      paddingBottom: "10px",
                      paddingLeft: "10px",
                      paddingTop: "12px",
                      fontWeight: "400",
                      fontSize: "32px",
                      marginRight: "6px",
                      width: "220px",
                      cursor: "pointer",
                    }}
                  >
                    Manual
                  </li>
                  <li
                    id="Intro3"
                    className={toggle === 4 ? "active-tab" : "tabs"}
                    onClick={() => toggleTab(4)}
                    role="tab"
                    aria-controls="panel-4"
                    style={{
                      paddingBottom: "10px",
                      paddingLeft: "10px",
                      paddingTop: "12px",
                      fontWeight: "400",
                      fontSize: "32px",
                      marginRight: "6px",
                      width: "220px",
                      cursor: "pointer",
                    }}
                  >
                    List of Experiment
                  </li>
                  <li
                    id="Intro4"
                    className={toggle === 5 ? "active-tab" : "tabs"}
                    onClick={() => toggleTab(5)}
                    role="tab"
                    aria-controls="panel-5"
                    style={{
                      paddingBottom: "10px",
                      paddingLeft: "10px",
                      paddingTop: "12px",
                      fontWeight: "400",
                      fontSize: "32px",
                      marginRight: "6px",
                      width: "220px",
                      cursor: "pointer",
                    }}
                  >
                    Course Alignment
                  </li>
                  <li
                    id="Intro5"
                    className={toggle === 6 ? "active-tab" : "tabs"}
                    onClick={() => toggleTab(6)}
                    role="tab"
                    aria-controls="panel-6"
                    style={{
                      paddingBottom: "10px",
                      paddingLeft: "10px",
                      paddingTop: "12px",
                      fontWeight: "400",
                      fontSize: "32px",
                      marginRight: "6px",
                      width: "220px",
                      cursor: "pointer",
                    }}
                  >
                    Feedback
                  </li>
                </div>
                <div className="mx-10 my-20 flex">
                  <div id="content">
                    <div
                      className={toggle === 1 ? "active-content" : "content"}
                      id="panel-1"
                    >
                      {props.Intro}
                    </div>
                    <div
                      id="panel-2"
                      className={toggle === 2 ? "active-content" : "content"}
                    >
                      <h5>{props.Objective}</h5>
                    </div>
                    <div
                      id="panel-3"
                      className={toggle === 3 ? "active-content" : "content"}
                    >
                      <h4>{props.Manual}</h4>
                    </div>
                    <div
                      id="panel-4"
                      className={toggle === 4 ? "active-content" : "content"}
                    >
                      <h3>{props.ListofExperiment}</h3>
                    </div>
                    <div
                      id="panel-5"
                      className={toggle === 5 ? "active-content" : "content"}
                    >
                      <h2>{props.CourseAllignment}</h2>
                    </div>
                    <div
                      id="panel-6"
                      className={toggle === 6 ? "active-content" : "content"}
                    >
                      <h1>{props.Feedback}</h1>
                    </div>
                  </div>
                </div>
              </div>
                <button>
                  <MdVerticalAlignTop
                    className="text-5xl ml-[1700px] mb-4 -mt-[25px] bg-blue-700 text-white border-2 border-black hover:bg-blue-900 cursor-pointer rounded-lg py-1 px-1"
                    onClick={top}
                  />
                </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
