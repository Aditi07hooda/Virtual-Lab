import React from "react";
import { AiOutlineDown } from "react-icons/ai";
// import { AiOutlineRight } from "react-icons/ai";

export default function Algorithm() {
  const ref = React.createRef();
  const ref5 = React.createRef();
  const ref4 = React.createRef();
  const ref3 = React.createRef();
  const ref2 = React.createRef();
  const ref1 = React.createRef();

  return (
    <div className="-mt-[800px] overflow-auto h-[820px]">
      <div className="overflow-scroll">
        <div
          id="pre1"
          className="font-sans font-normal text-xl mb-3"
          style={{ display: "block" }}
        >
          <pre className="font-sans font-semibold text-xl ">
            Which of the following is advantage of array - <br />
            <ul className="list-none grid grid-rows-2 grid-flow-col ml-14">
              <div className="flex">
                <button
                  type="button"
                  className="rounded-full border-black border-2 w-[15px] h-[15px] mt-2 hover:bg-blue-600"
                  onClick={() => {
                    let pre1 = document.getElementById("answer1");
                    ref1.current.innerHTML = "";
                    pre1.style.display = "block";
                    ref1.current.innerHTML = "Your answer is correct!!!";
                    ref1.current.style.color = "Green";
                  }}
                ></button>
                {"  "}implementation of stack and Queue
              </div>
              <div className="flex">
                <button
                  type="button"
                  className="rounded-full border-black border-2 w-[15px] h-[15px] mt-2 hover:bg-blue-600"
                  onClick={() => {
                    let pre1 = document.getElementById("answer1");
                    ref1.current.innerHTML = "";
                    pre1.style.display = "block";
                    ref1.current.innerHTML = "Your answer is correct!!!";
                    ref1.current.style.color = "Green";
                  }}
                ></button>
                {"  "}Elements can be accessed Sequentially
              </div>
              <div className="flex">
                <button
                  type="button"
                  className="rounded-full border-black border-2 w-[15px] h-[15px] mt-2 hover:bg-blue-600"
                  onClick={() => {
                    let pre1 = document.getElementById("answer1");
                    ref1.current.innerHTML = "";
                    pre1.style.display = "block";
                    ref1.current.innerHTML = "Your answer is not correct!!!";
                    ref1.current.style.color = "Red";
                  }}
                ></button>
                {"  "}None of the these
              </div>
              <div className="flex">
                <button
                  type="button"
                  className="rounded-full border-black border-2 w-[15px] h-[15px] mt-2 hover:bg-blue-600"
                  onClick={() => {
                    let pre1 = document.getElementById("answer1");
                    ref1.current.innerHTML = "";
                    pre1.style.display = "block";
                    ref1.current.innerHTML = "Your answer is not correct!!!";
                    ref1.current.style.color = "Red";
                  }}
                ></button>
                {"  "}both a and b
              </div>
            </ul>
            <button
              className="py-1 px-3 text-2xl bg-gradient-to-r from-indigo-700 to-purple-500 text-white font-sans border-none rounded-xl"
              onClick={() => {
                let pre1 = document.getElementById("answer1");
                if (pre1.style.display === "none") {
                  pre1.style.display = "block";
                } else {
                  pre1.style.display = "none";
                }
              }}
            >
              <pre className="flex font-sans font-normal text-xl">
                Show answer <AiOutlineDown className="mt-1" />
              </pre>
            </button>
          </pre>
          <pre
            id="answer1"
            style={{ display: "none" }}
            className="font-sans font-normal text-xl"
          >
            <div ref={ref1}></div>
            Answer: implementation of stack and Queue and Elements can be
            accessed Sequentially
            <br />
            Explanation: using array we can implement stack and queue data
            structure, the accessing of elements can occur sequentially
          </pre>
        </div>

        <div
          id="pre2"
          className="font-sans font-normal text-xl mb-3"
          style={{ display: "block" }}
        >
          <pre className="font-sans font-semibold text-xl">
            which of the following are linear data structure
            <br />
            <list className="list-none grid grid-rows-2 grid-flow-col ml-14">
              <div className="flex">
                <button
                  type="button"
                  className="rounded-full border-black border-2 w-[15px] h-[15px] mt-2 hover:bg-blue-600"
                  onClick={() => {
                    let pre2 = document.getElementById("answer2");
                    ref2.current.innerHTML = "";
                    pre2.style.display = "block";
                    ref2.current.innerHTML = "Your answer is correct!!!";
                    ref2.current.style.color = "Green";
                  }}
                ></button>
                {"  "}Arrays
              </div>
              <div className="flex">
                <button
                  type="button"
                  className="rounded-full border-black border-2 w-[15px] h-[15px] mt-2 hover:bg-blue-600"
                  onClick={() => {
                    let pre2 = document.getElementById("answer2");
                    ref2.current.innerHTML = "";
                    pre2.style.display = "block";
                    ref2.current.innerHTML = "Your answer is correct!!!";
                    ref2.current.style.color = "Green";
                  }}
                ></button>
                {"  "}Stack
              </div>
              <div className="flex">
                <button
                  type="button"
                  className="rounded-full border-black border-2 w-[15px] h-[15px] mt-2 hover:bg-blue-600"
                  onClick={() => {
                    let pre2 = document.getElementById("answer2");
                    ref2.current.innerHTML = "";
                    pre2.style.display = "block";
                    ref2.current.innerHTML = "Your answer is correct!!!";
                    ref2.current.style.color = "Green";
                  }}
                ></button>
                {"  "}Queue
              </div>
              <div className="flex">
                <button
                  type="button"
                  className="rounded-full border-black border-2 w-[15px] h-[15px] mt-2 hover:bg-blue-600"
                  onClick={() => {
                    let pre2 = document.getElementById("answer2");
                    ref2.current.innerHTML = "";
                    pre2.style.display = "block";
                    ref2.current.innerHTML = "Your answer is not correct!!!";
                    ref2.current.style.color = "Red";
                  }}
                ></button>
                {"  "}Graphs
              </div>
            </list>
            <button
              className="py-1 px-3 text-2xl bg-gradient-to-r from-indigo-700 to-purple-500 text-white font-sans border-none rounded-xl"
              onClick={() => {
                let pre2 = document.getElementById("answer2");
                if (pre2.style.display === "none") {
                  pre2.style.display = "block";
                } else {
                  pre2.style.display = "none";
                }
              }}
            >
              <pre className="flex font-sans font-normal text-xl">
                Show answer <AiOutlineDown className="mt-1" />
              </pre>
            </button>
          </pre>
          <pre
            id="answer2"
            style={{ display: "none" }}
            className="font-sans font-normal text-xl"
          >
            <div ref={ref2}></div>
            correct answer is Arrays, Stack and Queue <br />
            Explanation: trees and graphs are nonlinear data structure
          </pre>
        </div>

        <div
          id="pre3"
          className="font-sans font-normal text-xl mb-3"
          style={{ display: "block" }}
        >
          <pre className="font-sans font-semibold text-xl">
            If the elements “P”, “Q”, “R” and “S” are placed in a queue and are
            deleted one at a time, in what order will they be removed?
            <br />
            <list className="list-none grid grid-rows-2 grid-flow-col ml-14">
              <div className="flex">
                <button
                  type="button"
                  className="rounded-full border-black border-2 w-[15px] h-[15px] mt-2 hover:bg-blue-600"
                  onClick={() => {
                    let pre3 = document.getElementById("answer3");
                    ref3.current.innerHTML = "";
                    pre3.style.display = "block";
                    ref3.current.innerHTML = "Your answer is correct!!!";
                    ref3.current.style.color = "Green";
                  }}
                ></button>
                {"  "}PQRS
              </div>
              <div className="flex">
                <button
                  type="button"
                  className="rounded-full border-black border-2 w-[15px] h-[15px] mt-2 hover:bg-blue-600"
                  onClick={() => {
                    let pre3 = document.getElementById("answer3");
                    ref3.current.innerHTML = "";
                    pre3.style.display = "block";
                    ref3.current.innerHTML = "Your answer is not correct!!!";
                    ref3.current.style.color = "Red";
                  }}
                ></button>
                {"  "}PRSQ
              </div>
              <div className="flex">
                <button
                  type="button"
                  className="rounded-full border-black border-2 w-[15px] h-[15px] mt-2 hover:bg-blue-600"
                  onClick={() => {
                    let pre3 = document.getElementById("answer3");
                    ref3.current.innerHTML = "";
                    pre3.style.display = "block";
                    ref3.current.innerHTML = "Your answer is not correct!!!";
                    ref3.current.style.color = "Red";
                  }}
                ></button>
                {"  "}SRQP
              </div>
              <div className="flex">
                <button
                  type="button"
                  className="rounded-full border-black border-2 w-[15px] h-[15px] mt-2 hover:bg-blue-600"
                  onClick={() => {
                    let pre3 = document.getElementById("answer3");
                    ref3.current.innerHTML = "";
                    pre3.style.display = "block";
                    ref3.current.innerHTML = "Your answer is not correct!!!";
                    ref3.current.style.color = "Red";
                  }}
                ></button>
                {"  "}PSQR
              </div>
            </list>
            <button
              className="py-1 px-3 text-2xl bg-gradient-to-r from-indigo-700 to-purple-500 text-white font-sans border-none rounded-xl mt-0"
              onClick={() => {
                let pre3 = document.getElementById("answer3");
                if (pre3.style.display === "none") {
                  pre3.style.display = "block";
                } else {
                  pre3.style.display = "none";
                }
              }}
            >
              <pre className="flex font-sans font-normal text-xl">
                Show answer <AiOutlineDown className="mt-1" />
              </pre>
            </button>
          </pre>
          <pre
            id="answer3"
            style={{ display: "none" }}
            className="font-sans font-normal text-xl"
          >
            <div ref={ref3}></div>
            correct answer is PQRS
            <br />
            Explanation: Queue follows FIFO concept.
          </pre>
        </div>

        <div
          id="pre4"
          className="font-sans font-normal text-xl mb-3"
          style={{ display: "block" }}
        >
          <pre className="font-sans font-semibold text-xl">
            A queue follows __________
            <br />
            <list className="list-none grid grid-rows-2 grid-flow-col ml-14">
              <div className="flex">
                <button
                  type="button"
                  className="rounded-full border-black border-2 w-[15px] h-[15px] mt-2 hover:bg-blue-600"
                  onClick={() => {
                    let pre4 = document.getElementById("answer4");
                    ref4.current.innerHTML = "";
                    pre4.style.display = "block";
                    ref4.current.innerHTML = "Your answer is correct!!!";
                    ref4.current.style.color = "Green";
                  }}
                ></button>
                {"  "}FIFO (First In First Out) principle
              </div>
              <div className="flex">
                <button
                  type="button"
                  className="rounded-full border-black border-2 w-[15px] h-[15px] mt-2 hover:bg-blue-600"
                  onClick={() => {
                    let pre4 = document.getElementById("answer4");
                    ref4.current.innerHTML = "";
                    pre4.style.display = "block";
                    ref4.current.innerHTML = "Your answer is not correct!!!";
                    ref4.current.style.color = "Red";
                  }}
                ></button>
                {"  "}LIFO (Last In First Out) principle
              </div>
              <div className="flex">
                <button
                  type="button"
                  className="rounded-full border-black border-2 w-[15px] h-[15px] mt-2 hover:bg-blue-600"
                  onClick={() => {
                    let pre4 = document.getElementById("answer4");
                    ref4.current.innerHTML = "";
                    pre4.style.display = "block";
                    ref4.current.innerHTML = "Your answer is not correct!!!";
                    ref4.current.style.color = "Red";
                  }}
                ></button>
                {"  "}Ordered array
              </div>
              <div className="flex">
                <button
                  type="button"
                  className="rounded-full border-black border-2 w-[15px] h-[15px] mt-2 hover:bg-blue-600"
                  onClick={() => {
                    let pre4 = document.getElementById("answer4");
                    ref4.current.innerHTML = "";
                    pre4.style.display = "block";
                    ref4.current.innerHTML = "Your answer is not correct!!!";
                    ref4.current.style.color = "Red";
                  }}
                ></button>
                {"  "}Linear tree
              </div>
            </list>
            <button
              className="py-1 px-3 text-2xl bg-gradient-to-r from-indigo-700 to-purple-500 text-white font-sans border-none rounded-xl"
              onClick={() => {
                let pre4 = document.getElementById("answer4");
                if (pre4.style.display === "none") {
                  pre4.style.display = "block";
                } else {
                  pre4.style.display = "none";
                }
              }}
            >
              <pre className="flex font-sans font-semibold text-xl">
                Show answer <AiOutlineDown className="mt-1" />
              </pre>
            </button>
          </pre>
          <pre
            id="answer4"
            style={{ display: "none" }}
            className="font-sans font-normal text-xl"
          >
            <div ref={ref4}></div>
            correct answer is FIFO
            <br />
            Explanation: the element which are added first in the queue will be
            deleted first
          </pre>
        </div>

        <div
          id="pre5"
          className="font-sans font-normal text-xl mb-3"
          style={{ display: "block" }}
        >
          <pre className="font-sans font-semibold text-xl">
            A normal queue, if implemented using an array of size MAX_SIZE, gets
            full when?
            <br />
            <list className="list-none grid grid-rows-2 grid-flow-col ml-14">
              <div className="flex">
                <button
                  type="button"
                  className="rounded-full border-black border-2 w-[15px] h-[15px] mt-2 hover:bg-blue-600"
                  onClick={() => {
                    let pre5 = document.getElementById("answer5");
                    ref5.current.innerHTML = "";
                    pre5.style.display = "block";
                    ref5.current.innerHTML = "Your answer is correct!!!";
                    ref5.current.style.color = "Green";
                  }}
                ></button>
                {"  "}Rear = MAX_SIZE – 1
              </div>
              <div className="flex">
                <button
                  type="button"
                  className="rounded-full border-black border-2 w-[15px] h-[15px] mt-2 hover:bg-blue-600"
                  onClick={() => {
                    let pre5 = document.getElementById("answer5");
                    ref5.current.innerHTML = "";
                    pre5.style.display = "block";
                    ref5.current.innerHTML = "Your answer is not correct!!!";
                    ref5.current.style.color = "Red";
                  }}
                ></button>
                {"  "}Front = (rear + 1) mod MAX_SIZE
              </div>
              <div className="flex">
                <button
                  type="button"
                  className="rounded-full border-black border-2 w-[15px] h-[15px] mt-2 hover:bg-blue-600"
                  onClick={() => {
                    let pre5 = document.getElementById("answer5");
                    ref5.current.innerHTML = "";
                    pre5.style.display = "block";
                    ref5.current.innerHTML = "Your answer is not correct!!!";
                    ref5.current.style.color = "Red";
                  }}
                ></button>
                {"  "}Front = rear + 1
              </div>
              <div className="flex">
                <button
                  type="button"
                  className="rounded-full border-black border-2 w-[15px] h-[15px] mt-2 hover:bg-blue-600"
                  onClick={() => {
                    let pre5 = document.getElementById("answer5");
                    ref5.current.innerHTML = "";
                    pre5.style.display = "block";
                    ref5.current.innerHTML = "Your answer is not correct!!!";
                    ref5.current.style.color = "Red";
                  }}
                ></button>
                {"  "}Rear = front
              </div>
            </list>
            <button
              className="py-1 px-3 text-2xl bg-gradient-to-r from-indigo-700 to-purple-500 text-white font-sans border-none rounded-xl"
              onClick={() => {
                let pre5 = document.getElementById("answer5");
                if (pre5.style.display === "none") {
                  pre5.style.display = "block";
                } else {
                  pre5.style.display = "none";
                }
              }}
            >
              <pre className="flex font-sans font-normal text-xl">
                Show answer <AiOutlineDown className="mt-1" />
              </pre>
            </button>
          </pre>
          <pre
            id="answer5"
            style={{ display: "none" }}
            className="font-sans font-normal text-xl"
          >
            <div id="correctAnswerss" ref={ref5}></div>
            correct answer is Rear=MAX_SIZE-1
            <br />
            Explanation: its shows overflow condition (Queue is full).
          </pre>
        </div>

        <div
          id="pre6"
          className="font-sans font-normal text-xl mb-3"
          style={{ display: "block" }}
        >
          <pre className="font-sans font-semibold text-xl">
            Insertion and Deletion operation in Queue is called is
            <br />
            <list className="list-none grid grid-rows-2 grid-flow-col ml-14">
              <div className="flex">
                <button
                  type="button"
                  className="rounded-full border-black border-2 w-[15px] h-[15px] mt-2 hover:bg-blue-600"
                  onClick={() => {
                    let pre6 = document.getElementById("answer6");
                    ref.current.innerHTML = "";
                    pre6.style.display = "block";
                    ref.current.innerHTML = "Your answer is not correct!!!";
                    ref.current.style.color = "Red";
                  }}
                ></button>
                {"  "}Push and Pop
              </div>
              <div className="flex">
                <button
                  type="button"
                  className="rounded-full border-black border-2 w-[15px] h-[15px] mt-2 hover:bg-blue-600"
                  onClick={() => {
                    let pre6 = document.getElementById("answer6");
                    ref.current.innerHTML = "";
                    pre6.style.display = "block";
                    ref.current.innerHTML = "Your answer is correct!!!";
                    ref.current.style.color = "Green";
                  }}
                ></button>
                {"  "}Enqueue and Dequeue
              </div>
              <div className="flex">
                <button
                  type="button"
                  className="rounded-full border-black border-2 w-[15px] h-[15px] mt-2 hover:bg-blue-600"
                  onClick={() => {
                    let pre6 = document.getElementById("answer6");
                    ref.current.innerHTML = "";
                    pre6.style.display = "block";
                    ref.current.innerHTML = "Your answer is not correct!!!";
                    ref.current.style.color = "Red";
                  }}
                ></button>
                {"  "}Insert and Delete
              </div>
              <div className="flex">
                <button
                  type="button"
                  className="rounded-full border-black border-2 w-[15px] h-[15px] mt-2 hover:bg-blue-600"
                  onClick={() => {
                    let pre6 = document.getElementById("answer6");
                    ref.current.innerHTML = "";
                    pre6.style.display = "block";
                    ref.current.innerHTML = "Your answer is not correct!!!";
                    ref.current.style.color = "Red";
                  }}
                ></button>
                {"  "}both a and b
              </div>
            </list>
            <button
              className="py-1 px-3 text-2xl bg-gradient-to-r from-indigo-700 to-purple-500 text-white font-sans border-none rounded-xl"
              onClick={() => {
                let pre6 = document.getElementById("answer6");
                if (pre6.style.display === "none") {
                  pre6.style.display = "block";
                } else {
                  pre6.style.display = "none";
                }
              }}
            >
              <pre className="flex font-sans font-normal text-xl">
                Show answer <AiOutlineDown className="mt-1" />
              </pre>
            </button>
          </pre>
          <pre
            id="answer6"
            style={{ display: "none" }}
            className="font-sans font-normal text-xl"
          >
            <div id="correctAnswers" ref={ref}></div>
            correct answer is Enqueue and Dequeue
            <br />
            Explanation: Insertion of element in Queue is known as Enqueue and
            deletion of element in Queue are known as dequeue.
          </pre>
        </div>
      </div>
    </div>
  );
}
