import React from "react";
import { AiOutlineDown } from "react-icons/ai";
import photo from "./question.svg";
// import { AiOutlineRight } from "react-icons/ai";

export default function Algorithm() {
  // const ref = React.createRef();
  const ref5 = React.createRef();
  const ref4 = React.createRef();
  const ref3 = React.createRef();
  const ref2 = React.createRef();
  const ref1 = React.createRef();

  return (
    <div className="-mt-[400px] overflow-auto h-[770px]">
      <div className="overflow-scroll">
        <div
          id="pre7"
          className="font-sans font-normal text-xl mb-3"
          style={{ display: "block" }}
        >
          <div className="font-sans font-semibold text-xl ">
            the time complexity of enqueue operation is - <br />
            <ul className="list-none grid grid-rows-2 grid-flow-col ml-14">
              <div className="flex">
                <button
                  type="button"
                  className="rounded-full border-black border-2 w-[15px] h-[15px] mt-2 hover:bg-blue-600"
                  onClick={() => {
                    let pre7 = document.getElementById("answer7");
                    ref1.current.innerHTML = "";
                    pre7.style.display = "block";
                    ref1.current.innerHTML = "Your answer is not correct!!!";
                    ref1.current.style.color = "Red";
                  }}
                ></button>
                <pre>{"  "}O(n)</pre>
              </div>
              <div className="flex">
                <button
                  type="button"
                  className="rounded-full border-black border-2 w-[15px] h-[15px] mt-2 hover:bg-blue-600"
                  onClick={() => {
                    let pre7 = document.getElementById("answer7");
                    ref1.current.innerHTML = "";
                    pre7.style.display = "block";
                    ref1.current.innerHTML = "Your answer is correct!!!";
                    ref1.current.style.color = "Green";
                  }}
                ></button>
                <pre>{"  "}O(1)</pre>
              </div>
              <div className="flex">
                <button
                  type="button"
                  className="rounded-full border-black border-2 w-[15px] h-[15px] mt-2 hover:bg-blue-600"
                  onClick={() => {
                    let pre7 = document.getElementById("answer7");
                    ref1.current.innerHTML = "";
                    pre7.style.display = "block";
                    ref1.current.innerHTML = "Your answer is not correct!!!";
                    ref1.current.style.color = "Red";
                  }}
                ></button>
                <pre>{"  "}O(log n)</pre>
              </div>
              <div className="flex">
                <button
                  type="button"
                  className="rounded-full border-black border-2 w-[15px] h-[15px] mt-2 hover:bg-blue-600"
                  onClick={() => {
                    let pre7 = document.getElementById("answer7");
                    ref1.current.innerHTML = "";
                    pre7.style.display = "block";
                    ref1.current.innerHTML = "Your answer is not correct!!!";
                    ref1.current.style.color = "Red";
                  }}
                ></button>
                <pre>{"  "}O(n log n)</pre>
              </div>
            </ul>
          </div>
          <button
            className="py-1 px-3 text-2xl bg-gradient-to-r from-indigo-700 to-purple-500 text-white font-sans border-none rounded-xl"
            onClick={() => {
              let pre7 = document.getElementById("answer7");
              if (pre7.style.display === "none") {
                pre7.style.display = "block";
              } else {
                pre7.style.display = "none";
              }
            }}
          >
            <pre className="flex font-sans font-normal text-xl">
              Show answer <AiOutlineDown className="mt-1" />
            </pre>
          </button>
          <pre
            id="answer7"
            style={{ display: "none" }}
            className="font-sans font-normal text-xl"
          >
            <div ref={ref1}></div>
            Answer: O(1)
            <br />
          </pre>
        </div>

        <div
          id="pre8"
          className="font-sans font-normal text-xl mb-3"
          style={{ display: "block" }}
        >
          <pre className="font-sans font-semibold text-xl">
            which of the following data structure implement the Queue
            <br />
            <list className="list-none grid grid-rows-2 grid-flow-col ml-14">
              <div className="flex">
                <button
                  type="button"
                  className="rounded-full border-black border-2 w-[15px] h-[15px] mt-2 hover:bg-blue-600"
                  onClick={() => {
                    let pre8 = document.getElementById("answer8");
                    ref2.current.innerHTML = "";
                    pre8.style.display = "block";
                    ref2.current.innerHTML = "Your answer is correct!!!";
                    ref2.current.style.color = "Green";
                  }}
                ></button>
                <pre> Stack</pre>
              </div>
              <div className="flex">
                <button
                  type="button"
                  className="rounded-full border-black border-2 w-[15px] h-[15px] mt-2 hover:bg-blue-600"
                  onClick={() => {
                    let pre8 = document.getElementById("answer8");
                    ref2.current.innerHTML = "";
                    pre8.style.display = "block";
                    ref2.current.innerHTML = "Your answer is correct!!!";
                    ref2.current.style.color = "Green";
                  }}
                ></button>
                <pre>{"  "}Array</pre>
              </div>
              <div className="flex">
                <button
                  type="button"
                  className="rounded-full border-black border-2 w-[15px] h-[15px] mt-2 hover:bg-blue-600"
                  onClick={() => {
                    let pre8 = document.getElementById("answer8");
                    ref2.current.innerHTML = "";
                    pre8.style.display = "block";
                    ref2.current.innerHTML = "Your answer is correct!!!";
                    ref2.current.style.color = "Green";
                  }}
                ></button>
                <pre>{"  "}LinkedList</pre>
              </div>
              <div className="flex">
                <button
                  type="button"
                  className="rounded-full border-black border-2 w-[15px] h-[15px] mt-2 hover:bg-blue-600"
                  onClick={() => {
                    let pre8 = document.getElementById("answer8");
                    ref2.current.innerHTML = "";
                    pre8.style.display = "block";
                    ref2.current.innerHTML = "Your answer is not correct!!!";
                    ref2.current.style.color = "Red";
                  }}
                ></button>
                <pre>{"  "}none of the above</pre>
              </div>
            </list>
            <button
              className="py-1 px-3 text-2xl bg-gradient-to-r from-indigo-700 to-purple-500 text-white font-sans border-none rounded-xl"
              onClick={() => {
                let pre8 = document.getElementById("answer8");
                if (pre8.style.display === "none") {
                  pre8.style.display = "block";
                } else {
                  pre8.style.display = "none";
                }
              }}
            >
              <pre className="flex font-sans font-normal text-xl">
                Show answer <AiOutlineDown className="mt-1" />
              </pre>
            </button>
          </pre>
          <pre
            id="answer8"
            style={{ display: "none" }}
            className="font-sans font-normal text-xl"
          >
            <div ref={ref2}></div>
            correct answer is Arrays, Stack and Linked list <br />
          </pre>
        </div>
        <center>
          <img src={photo} alt="queue" className=" my-4" />
        </center>
        <div
          id="pre9"
          className="font-sans font-normal text-xl mb-3"
          style={{ display: "block" }}
        >
          <pre className="font-sans font-semibold text-xl">
            Find out the element that is deleted first
            <br />
            <list className="list-none grid grid-rows-2 grid-flow-col ml-14">
              <div className="flex">
                <button
                  type="button"
                  className="rounded-full border-black border-2 w-[15px] h-[15px] mt-2 hover:bg-blue-600"
                  onClick={() => {
                    let pre9 = document.getElementById("answer9");
                    ref3.current.innerHTML = "";
                    pre9.style.display = "block";
                    ref3.current.innerHTML = "Your answer is not correct!!!";
                    ref3.current.style.color = "Red";
                  }}
                ></button>
                <pre> 32</pre>
              </div>
              <div className="flex">
                <button
                  type="button"
                  className="rounded-full border-black border-2 w-[15px] h-[15px] mt-2 hover:bg-blue-600"
                  onClick={() => {
                    let pre9 = document.getElementById("answer9");
                    ref3.current.innerHTML = "";
                    pre9.style.display = "block";
                    ref3.current.innerHTML = "Your answer is not correct!!!";
                    ref3.current.style.color = "Red";
                  }}
                ></button>
                <pre> 12</pre>
              </div>
              <div className="flex">
                <button
                  type="button"
                  className="rounded-full border-black border-2 w-[15px] h-[15px] mt-2 hover:bg-blue-600"
                  onClick={() => {
                    let pre9 = document.getElementById("answer9");
                    ref3.current.innerHTML = "";
                    pre9.style.display = "block";
                    ref3.current.innerHTML = "Your answer is correct!!!";
                    ref3.current.style.color = "Green";
                  }}
                ></button>
                <pre>{"  "}21</pre>
              </div>
              <div className="flex">
                <button
                  type="button"
                  className="rounded-full border-black border-2 w-[15px] h-[15px] mt-2 hover:bg-blue-600"
                  onClick={() => {
                    let pre9 = document.getElementById("answer9");
                    ref3.current.innerHTML = "";
                    pre9.style.display = "block";
                    ref3.current.innerHTML = "Your answer is not correct!!!";
                    ref3.current.style.color = "Red";
                  }}
                ></button>
                <pre>{"  "}93</pre>
              </div>
            </list>
            <button
              className="py-1 px-3 text-2xl bg-gradient-to-r from-indigo-700 to-purple-500 text-white font-sans border-none rounded-xl mt-0"
              onClick={() => {
                let pre9 = document.getElementById("answer9");
                if (pre9.style.display === "none") {
                  pre9.style.display = "block";
                } else {
                  pre9.style.display = "none";
                }
              }}
            >
              <pre className="flex font-sans font-normal text-xl">
                Show answer <AiOutlineDown className="mt-1" />
              </pre>
            </button>
          </pre>
          <pre
            id="answer9"
            style={{ display: "none" }}
            className="font-sans font-normal text-xl"
          >
            <div ref={ref3}></div>
            correct answer is 21
            <br />
          </pre>
        </div>

        <div
          id="pre10"
          className="font-sans font-normal text-xl mb-3"
          style={{ display: "block" }}
        >
          <pre className="font-sans font-semibold text-xl">
            Find out the element that is deleted 3rd
            <br />
            <list className="list-none grid grid-rows-2 grid-flow-col ml-14">
              <div className="flex">
                <button
                  type="button"
                  className="rounded-full border-black border-2 w-[15px] h-[15px] mt-2 hover:bg-blue-600"
                  onClick={() => {
                    let pre10 = document.getElementById("answer10");
                    ref4.current.innerHTML = "";
                    pre10.style.display = "block";
                    ref4.current.innerHTML = "Your answer is correct!!!";
                    ref4.current.style.color = "Green";
                  }}
                ></button>
                <pre>{"  "}4</pre>
              </div>
              <div className="flex">
                <button
                  type="button"
                  className="rounded-full border-black border-2 w-[15px] h-[15px] mt-2 hover:bg-blue-600"
                  onClick={() => {
                    let pre10 = document.getElementById("answer10");
                    ref4.current.innerHTML = "";
                    pre10.style.display = "block";
                    ref4.current.innerHTML = "Your answer is not correct!!!";
                    ref4.current.style.color = "Red";
                  }}
                ></button>
                <pre>{"  "}21</pre>
              </div>
              <div className="flex">
                <button
                  type="button"
                  className="rounded-full border-black border-2 w-[15px] h-[15px] mt-2 hover:bg-blue-600"
                  onClick={() => {
                    let pre10 = document.getElementById("answer10");
                    ref4.current.innerHTML = "";
                    pre10.style.display = "block";
                    ref4.current.innerHTML = "Your answer is not correct!!!";
                    ref4.current.style.color = "Red";
                  }}
                ></button>
                <pre>{"  "}33</pre>
              </div>
              <div className="flex">
                <button
                  type="button"
                  className="rounded-full border-black border-2 w-[15px] h-[15px] mt-2 hover:bg-blue-600"
                  onClick={() => {
                    let pre10 = document.getElementById("answer10");
                    ref4.current.innerHTML = "";
                    pre10.style.display = "block";
                    ref4.current.innerHTML = "Your answer is not correct!!!";
                    ref4.current.style.color = "Red";
                  }}
                ></button>
                <pre>{"  "}93</pre>
              </div>
            </list>
            <button
              className="py-1 px-3 text-2xl bg-gradient-to-r from-indigo-700 to-purple-500 text-white font-sans border-none rounded-xl"
              onClick={() => {
                let pre10 = document.getElementById("answer10");
                if (pre10.style.display === "none") {
                  pre10.style.display = "block";
                } else {
                  pre10.style.display = "none";
                }
              }}
            >
              <pre className="flex font-sans font-semibold text-xl">
                Show answer <AiOutlineDown className="mt-1" />
              </pre>
            </button>
          </pre>
          <pre
            id="answer10"
            style={{ display: "none" }}
            className="font-sans font-normal text-xl"
          >
            <div ref={ref4}></div>
            correct answer is 4
            <br />
          </pre>
        </div>

        <div
          id="pre11"
          className="font-sans font-normal text-xl mb-3"
          style={{ display: "block" }}
        >
          <pre className="font-sans font-semibold text-xl">
            Find out the element that is inserted last -
            <br />
            <list className="list-none grid grid-rows-2 grid-flow-col ml-14">
              <div className="flex">
                <button
                  type="button"
                  className="rounded-full border-black border-2 w-[15px] h-[15px] mt-2 hover:bg-blue-600"
                  onClick={() => {
                    let pre11 = document.getElementById("answer11");
                    ref5.current.innerHTML = "";
                    pre11.style.display = "block";
                    ref5.current.innerHTML = "Your answer is not correct!!!";
                    ref5.current.style.color = "Red";
                  }}
                ></button>
                <pre>{"  "}78</pre>
              </div>
              <div className="flex">
                <button
                  type="button"
                  className="rounded-full border-black border-2 w-[15px] h-[15px] mt-2 hover:bg-blue-600"
                  onClick={() => {
                    let pre11 = document.getElementById("answer11");
                    ref5.current.innerHTML = "";
                    pre11.style.display = "block";
                    ref5.current.innerHTML = "Your answer is correct!!!";
                    ref5.current.style.color = "Green";
                  }}
                ></button>
                <pre>{"  "}93</pre>
              </div>
              <div className="flex">
                <button
                  type="button"
                  className="rounded-full border-black border-2 w-[15px] h-[15px] mt-2 hover:bg-blue-600"
                  onClick={() => {
                    let pre11 = document.getElementById("answer11");
                    ref5.current.innerHTML = "";
                    pre11.style.display = "block";
                    ref5.current.innerHTML = "Your answer is not correct!!!";
                    ref5.current.style.color = "Red";
                  }}
                ></button>
                <pre>{"  "}67</pre>
              </div>
              <div className="flex">
                <button
                  type="button"
                  className="rounded-full border-black border-2 w-[15px] h-[15px] mt-2 hover:bg-blue-600"
                  onClick={() => {
                    let pre11 = document.getElementById("answer11");
                    ref5.current.innerHTML = "";
                    pre11.style.display = "block";
                    ref5.current.innerHTML = "Your answer is not correct!!!";
                    ref5.current.style.color = "Red";
                  }}
                ></button>
                <pre>{"  "}21</pre>
              </div>
            </list>
            <button
              className="py-1 px-3 text-2xl bg-gradient-to-r from-indigo-700 to-purple-500 text-white font-sans border-none rounded-xl"
              onClick={() => {
                let pre11 = document.getElementById("answer11");
                if (pre11.style.display === "none") {
                  pre11.style.display = "block";
                } else {
                  pre11.style.display = "none";
                }
              }}
            >
              <pre className="flex font-sans font-normal text-xl">
                Show answer <AiOutlineDown className="mt-1" />
              </pre>
            </button>
          </pre>
          <pre
            id="answer11"
            style={{ display: "none" }}
            className="font-sans font-normal text-xl"
          >
            <div id="correctAnswerss" ref={ref5}></div>
            correct answer is 93
            <br />
          </pre>
        </div>
      </div>
    </div>
  );
}
