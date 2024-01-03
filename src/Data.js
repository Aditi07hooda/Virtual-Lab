import React, { useState } from "react";
import "./data.css";
import Vlab from "./Virtual.svg";
import cmr from "./CMRIT.svg";
import { MdVerticalAlignTop } from "react-icons/md";

export default function Content(props) {
  const mystyle = {
    width: "100vh",
    height: "1387px",
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
        <div className="bg-blue-900 flex h-[1167px] w-min pr-5">
          <div
            className="border-none rounded-2xl bg-[url('https://i.pinimg.com/474x/8b/0f/2c/8b0f2c1ad43fb72f22d72308cee114f0.jpg')] bg-no-repeat  py-5 px-3 my-5 ml-5"
            style={{ backgroundSize: "1830px 1265px" }}
            id="bgImg"
          >
            <div>
              <h1 className="text-4xl text-blue-900 font-semibold cursor-default">
                {props.dep}
              </h1>
            </div>
            <p className="font-extrabold text-blue-900 cursor-default">
              __________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________
            </p>
            <div className="mt-6 flex ">
              <h1 className="underline text-blue-900 text-4xl font-semibold cursor-default ml-4">
                {props.lab}
              </h1>
            </div>
            <div className="mt-4 flex justify-center">
              <h1 className="underline text-blue-900 text-5xl font-semibold cursor-default">
                {props.exp}
              </h1>
            </div>
            <div>
              <div className="grid grid-flow-col gap-0">
                <div>
                  <div
                    className="flex-col list-none text-xl font-normal space-y-2 border-r-4 border-blue-900 w-fit ml-4 mt-20"
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
                        fontSize: "30px",
                        marginRight: "6px",
                        width: "200px",
                        cursor: "pointer",
                      }}
                      role="tab"
                      aria-controls="panel-1"
                    >
                      Aim
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
                        fontSize: "30px",
                        marginRight: "6px",
                        width: "200px",
                        cursor: "pointer",
                      }}
                    >
                      Theory
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
                        fontSize: "30px",
                        marginRight: "6px",
                        width: "200px",
                        cursor: "pointer",
                      }}
                    >
                      Algorithm
                    </li>
                    <li
                      id="Intro2"
                      className={toggle === 4 ? "active-tab" : "tabs"}
                      onClick={() => toggleTab(4)}
                      role="tab"
                      aria-controls="panel-4"
                      style={{
                        paddingBottom: "10px",
                        paddingLeft: "10px",
                        paddingTop: "12px",
                        fontWeight: "400",
                        fontSize: "30px",
                        marginRight: "6px",
                        width: "200px",
                        cursor: "pointer",
                      }}
                    >
                      Program
                    </li>
                    <li
                      id="Intro2"
                      className={toggle === 5 ? "active-tab" : "tabs"}
                      onClick={() => toggleTab(5)}
                      role="tab"
                      aria-controls="panel-5"
                      style={{
                        paddingBottom: "10px",
                        paddingLeft: "10px",
                        paddingTop: "12px",
                        fontWeight: "400",
                        fontSize: "30px",
                        marginRight: "6px",
                        width: "200px",
                        cursor: "pointer",
                      }}
                    >
                      Pre-test
                    </li>
                    <li
                      id="Intro3"
                      className={toggle === 6 ? "active-tab" : "tabs"}
                      onClick={() => toggleTab(6)}
                      role="tab"
                      aria-controls="panel-6"
                      style={{
                        paddingBottom: "10px",
                        paddingLeft: "10px",
                        paddingTop: "12px",
                        fontWeight: "400",
                        fontSize: "30px",
                        marginRight: "6px",
                        width: "200px",
                        cursor: "pointer",
                      }}
                    >
                      Simulation
                    </li>
                    <li
                      id="Intro4"
                      className={toggle === 7 ? "active-tab" : "tabs"}
                      onClick={() => toggleTab(7)}
                      role="tab"
                      aria-controls="panel-7"
                      style={{
                        paddingBottom: "10px",
                        paddingLeft: "10px",
                        paddingTop: "12px",
                        fontWeight: "400",
                        fontSize: "30px",
                        marginRight: "6px",
                        width: "200px",
                        cursor: "pointer",
                      }}
                    >
                      Post-test
                    </li>
                    <li
                      id="Intro4"
                      className={toggle === 8 ? "active-tab" : "tabs"}
                      onClick={() => toggleTab(8)}
                      role="tab"
                      aria-controls="panel-8"
                      style={{
                        paddingBottom: "10px",
                        paddingLeft: "10px",
                        paddingTop: "12px",
                        fontWeight: "400",
                        fontSize: "30px",
                        marginRight: "6px",
                        width: "200px",
                        cursor: "pointer",
                      }}
                    >
                      Viva Q & A
                    </li>
                    <li
                      id="Intro5"
                      className={toggle === 9 ? "active-tab" : "tabs"}
                      onClick={() => toggleTab(9)}
                      role="tab"
                      aria-controls="panel-9"
                      style={{
                        paddingBottom: "10px",
                        paddingLeft: "10px",
                        paddingTop: "12px",
                        fontWeight: "400",
                        fontSize: "30px",
                        marginRight: "6px",
                        width: "200px",
                        cursor: "pointer",
                      }}
                    >
                      References
                    </li>
                  </div>
                  <div>
                    <button>
                      <MdVerticalAlignTop
                        className="text-5xl ml-9 mt-[150px] block relative mb-4 bg-blue-700 text-white border-2 border-black hover:bg-blue-900 cursor-pointer rounded-lg py-1 px-1"
                        onClick={top}
                      />
                    </button>
                  </div>
                </div>
                <div className="ml-10 mr-5 my-20 flex">
                  <div id="content">
                    <div
                      className={toggle === 1 ? "active-content" : "content"}
                      id="panel-1"
                    >
                      {props.Aim}
                    </div>
                    <div
                      id="panel-2"
                      className={toggle === 2 ? "active-content" : "content"}
                    >
                      <h5>{props.Theory}</h5>
                    </div>
                    <div
                      id="panel-3"
                      className={toggle === 3 ? "active-content" : "content"}
                    >
                      <h5>{props.Algorithm}</h5>
                    </div>
                    <div
                      id="panel-4"
                      className={toggle === 4 ? "active-content" : "content"}
                    >
                      <h4>{props.Program}</h4>
                    </div>
                    <div
                      id="panel-5"
                      className={toggle === 5 ? "active-content" : "content"}
                    >
                      <h4>{props.PreTest}</h4>
                    </div>
                    <div
                      id="panel-6"
                      className={toggle === 6 ? "active-content" : "content"}
                    >
                      <h3>{props.Simulation}</h3>
                    </div>
                    <div
                      id="panel-7"
                      className={toggle === 7 ? "active-content" : "content"}
                    >
                      <h3>{props.PostTest}</h3>
                    </div>
                    <div
                      id="panel-8"
                      className={toggle === 8 ? "active-content" : "content"}
                    >
                      <h2>{props.Viva}</h2>
                    </div>
                    <div
                      id="panel-9"
                      className={toggle === 9 ? "active-content" : "content"}
                    >
                      <h1>{props.References}</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
