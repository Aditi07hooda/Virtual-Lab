import React, { useState } from "react";
import "./scroll.css";

let i;
export default function Simulation() {
  const [input, setInput] = useState(0);

  const handleOnChange = (e) => {
    setInput(e.target.value);
  };

  const createTable = (e) => {
    let inputText = { input };
    let text = inputText.input;
    let table = document.getElementById("student_table");
    let headerRow = table.insertRow(0);
    headerRow.style.fontWeight = "bold";
    headerRow.style.fontSize = "20px";
    headerRow.style.backgroundColor = "rgb(30 64 175)";
    headerRow.style.color = "rgb(255 255 255)";
    let USN = headerRow.insertCell(0);
    USN.innerHTML = "USN";
    let Name = headerRow.insertCell(1);
    Name.innerHTML = "Name";
    let Branch = headerRow.insertCell(2);
    Branch.innerHTML = "Branch";
    let Phonenumber = headerRow.insertCell(3);
    Phonenumber.innerHTML = "Phone number";
    for (i = 1; i <= text; i++) {
      let row = table.insertRow(i);
      let USNCell = row.insertCell(0);
      USNCell.innerHTML = prompt("Enter the USN for student" + i);
      let NameCell = row.insertCell(1);
      NameCell.innerHTML = prompt("Enter Name for student " + i);
      let BranchCell = row.insertCell(2);
      BranchCell.innerHTML = prompt("Enter branch for student " + i);
      let PhonenumberCell = row.insertCell(3);
      PhonenumberCell.innerHTML = prompt("Enter phone number for student " + i);
    }
  };

  return (
    <>
      <div className="-mt-[800px] mr-56 h-max">
        <h3 id="array" className="font-semibold text-[72px] mb-4">
          Size of Array
        </h3>
        <div className="hi grid grid-flow-col justify-center space-x-8 mt-9">
          <label htmlFor="num_students" className="text-2xl">
            Enter the number of students:
          </label>
          <input
            type="number"
            id="num_students"
            className="h-10 border-2 border-black pl-2"
            value={input}
            onChange={handleOnChange}
          />
          <button
            onClick={createTable}
            className="-mt-1 text-2xl border-2 bg-blue-500 h-fit px-2 py-1 rounded-lg hover:bg-blue-900 text-white border-black"
          >
            Submit
          </button>
          <br />
          <br />
          <br />
        </div>
        <table id="student_table" className="ml-56 mt-5 w-[844px] pr-0 -space-x-5 rounded-lg border-none"></table>
      </div>
    </>
  );
}
