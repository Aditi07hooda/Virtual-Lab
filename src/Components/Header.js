import React from 'react';
import Vlab from "./Virtual.svg";

export default function About() {
  return (
    <>
      <div className=" bg-blue-900 py-5 flex pl-5">
        <img src={Vlab} className=" h-24 border-none max-w-full rounded-xl" alt="logo" />
        <h1 className="text-white font-bold text-6xl flex justify-center ml-9 mt-3 cursor-default">
          CMR Institute of Technology
        </h1>
      </div>
      <div className="flex bg-gradient-to-b from-blue-900 from-1% to-yellow-300 to-40% py-3">
        <div className="mx-4 text-2xl font-semibold flex space-x-8 list-none pt-3">
          <li className="cursor-pointer"><a href="/">Home</a></li>
          <li className="cursor-pointer">About</li>
          <li className="cursor-pointer">Contact Us</li>
        </div>
      </div>
    </>
  );
}
