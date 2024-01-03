import React from 'react'
import Data from "./Data(Dbs).svg";
import { Link } from 'react-router-dom';

export default function List() {
  return (
    <div>
        <div>
        <div className="w-48 h-60 flex-col justify-center border-2 border-black rounded-lg cursor-pointer">
            <Link to={"/Dbs/13/data"}>
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
