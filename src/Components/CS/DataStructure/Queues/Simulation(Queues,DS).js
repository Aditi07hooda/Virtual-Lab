import React from "react";

export default function intro() {
  const queue = [];
  // const queueElement = document.querySelector('.queue');
  const ref = React.createRef();

  function renderQueue() {
    ref.current.innerHTML = "";
    queue.forEach((item) => {
      const div = document.createElement("div");
      div.classList.add("queue-item");
      div.textContent = item;
      div.style.color = "white";
      div.style.backgroundColor = "rgb(96 165 250)";
      div.style.borderWidth = "2px";
      div.style.width = "100px";
      div.style.borderColor = "black";
      div.style.paddingTop = "2px";
      div.style.paddingBottom = "2px";
      div.style.paddingLeft = "34px";
      div.style.paddingRight = "4px";
      div.style.fontSize = "50px";
      div.style.fontWeight = "500";
      div.style.borderRadius = "10px";
      div.style.marginLeft = "5px";
      div.style.marginRight = "5px";
      ref.current.appendChild(div);
    });
  }
  function enqueue() {
    var newItem = prompt("Enter the element");
    //const newItem = Math.floor(Math.random() * 100);
    queue.push(newItem);
    renderQueue();
  }
  function dequeue() {
    queue.shift();
    renderQueue();
  }

  return (
    <>
      <div className="-mt-[700px] mr-44 h-max w-[1250px]">
        <div className="container my-5">
          {/* <h2>Queue</h2> */}
          <div className="queue flex justify-center mb-20" ref={ref}></div>
          <div className="flex justify-around ">
            <button
              className="text-2xl bg-blue-700 border-2 border-black rounded-lg px-2 py-1 text-white transition ease-in-out delay-1500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-800 duration-300"
              onClick={enqueue}
            >
              Enqueue
            </button>
            <button
              className="text-2xl bg-blue-700 border-2 border-black rounded-lg px-2 py-1 text-white transition ease-in-out delay-1500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-800 duration-300"
              onClick={dequeue}
            >
              Dequeue
            </button>
          </div>
        </div>
        <div className="flex justify-between mt-32">
          <p className="text-xl font-medium cursor-default hover:underline">
            FRONT END
          </p>
          <p className="text-xl font-medium cursor-default hover:underline">
            REAR END
          </p>
        </div>
      </div>
    </>
  );
}
