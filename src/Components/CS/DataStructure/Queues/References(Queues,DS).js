import React from "react";

export default function intro() {
  return (
    <div>
      <pre className="text-2xl font-normal font-sans -mt-[750px] overflow-auto space-y-3 flex-wrap flex-col">
        <p>
          Textbook: Ellis Horowitz and Sartaj Sahni, Fundamentals of Data
          Structures in C, 2nd Ed, Universities Press, 2014
          <br />
        </p>
        <p>Website: Quene (Data Structures) - javatpoint</p>
        <br />
        <p>
          YouTube:{" "}
          <a
            href="https://youtu.be/zp6pBNbUB2U"
            className="hover:underline hover:text-blue-700"
          >
            https://youtu.be/zp6pBNbUB2U
          </a>
          <br />
          {"              "}:{" "}
          <a
            href="https://youtu.be/yzj0Ch01Exo"
            className="hover:underline hover:text-blue-700"
          >
            https://youtu.be/yzj0Ch01Exo
          </a>
          <br />
        </p>
      </pre>
    </div>
  );
}
