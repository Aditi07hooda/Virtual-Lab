import React from 'react'
import Data from "./Data.svg";
import { Link } from 'react-router-dom';

export default function List() {
  return (
    <div>
        <div className='grid grid-flow-row grid-cols-3 gap-y-8'>
        <div className="w-48 h-60 flex-col justify-center border-2 border-black rounded-lg cursor-pointer">
            <Link to={"/DataStructure/Stack/data"}>
                <img
                  src={Data}
                  alt="Data Structure"
                  className="w-44 h-40 border-none rounded-lg ml-1.5 -top-2"
                />
                <h2 className="flex justify-center px-2 items-center ml-1">
                  Stack
                </h2>
            </Link>
         </div>
         <div className="w-48 h-60 flex-col justify-center border-2 border-black rounded-lg cursor-pointer">
            <Link to={"/DataStructure/Queues/data"}>
                <img
                  src={Data}
                  alt="Data Structure"
                  className="w-44 h-40 border-none rounded-lg ml-1.5 -top-2"
                />
                <h2 className="flex justify-center px-2 items-center ml-1">
                  Queues
                </h2>
            </Link>
         </div>
         <div className="w-48 h-60 flex-col justify-center border-2 border-black rounded-lg cursor-pointer">
            <Link to={"/DataStructure/Stack/data"}>
                <img
                  src={Data}
                  alt="Data Structure"
                  className="w-44 h-40 border-none rounded-lg ml-1.5 -top-2"
                />
                <h2 className="flex justify-center px-2 items-center ml-1">
                  Stack
                </h2>
            </Link>
         </div>
         <div className="w-48 h-60 flex-col justify-center border-2 border-black rounded-lg cursor-pointer">
            <Link to={"/DataStructure/Stack/data"}>
                <img
                  src={Data}
                  alt="Data Structure"
                  className="w-44 h-40 border-none rounded-lg ml-1.5 -top-2"
                />
                <h2 className="flex justify-center px-2 items-center ml-1">
                  Stack
                </h2>
            </Link>
         </div>
         <div className="w-48 h-60 flex-col justify-center border-2 border-black rounded-lg cursor-pointer">
            <Link to={"/DataStructure/Stack/data"}>
                <img
                  src={Data}
                  alt="Data Structure"
                  className="w-44 h-40 border-none rounded-lg ml-1.5 -top-2"
                />
                <h2 className="flex justify-center px-2 items-center ml-1">
                  Stack
                </h2>
            </Link>
         </div>
         <div className="w-48 h-60 flex-col justify-center border-2 border-black rounded-lg cursor-pointer">
            <Link to={"/DataStructure/Stack/data"}>
                <img
                  src={Data}
                  alt="Data Structure"
                  className="w-44 h-40 border-none rounded-lg ml-1.5 -top-2"
                />
                <h2 className="flex justify-center px-2 items-center ml-1">
                  Stack
                </h2>
            </Link>
         </div>
         <div className="w-48 h-60 flex-col justify-center border-2 border-black rounded-lg cursor-pointer">
            <Link to={"/DataStructure/Stack/data"}>
                <img
                  src={Data}
                  alt="Data Structure"
                  className="w-44 h-40 border-none rounded-lg ml-1.5 -top-2"
                />
                <h2 className="flex justify-center px-2 items-center ml-1">
                  Stack
                </h2>
            </Link>
         </div>
        </div>
    </div>
  )
}
