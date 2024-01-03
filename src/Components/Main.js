import React, { useState, useEffect } from "react";
import { MdVerticalAlignTop } from "react-icons/md";
import { BiArrowFromLeft } from "react-icons/bi";
import { BiArrowFromRight } from "react-icons/bi";
import { RxDotFilled } from "react-icons/rx";
import cs from "./cs.svg";
import aids from "./aids.svg";
import aiml from "./aiml.svg";
import science from "./science.svg";
import ece from "./ece.svg";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const images = [
  {
    url: "https://getmyuni-assets.s3.ap-south-1.amazonaws.com/reviews/22772__875/1475920511dept_physics.jpg",
  },
  {
    url: "https://www.cmrit.ac.in/wp-content/uploads/2021/06/computer-science-engineering.jpg",
  },
  { url: "https://www.cmrit.ac.in/wp-content/uploads/2021/07/eee.jpg" },
  {
    url: "https://www.cmrit.ac.in/wp-content/uploads/2021/06/about_overview.jpg",
  },
];
let count = 0;

export default function Main() {
  const [index, setindex] = useState(0);

  const handleOnNextClick = () => {
    const isLastSlide = index === images.length - 1;
    count = isLastSlide ? 0 : index + 1;
    setindex(count);
  };

  const handleOnPrevClick = () => {
    const isFirstSlide = index === 0;
    count = isFirstSlide ? images.length - 1 : index - 1;
    setindex(count);
  };

  const goToSlide = (slideIndex) => {
    setindex(slideIndex);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      if (index === 3) {
        setindex(0);
      } else {
        setindex(index + 1);
      }
    }, 3000);
    return () => clearTimeout(timer);
  }, [index]);

  const top = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      <Header />
      <div
        className="bg-[url('https://i.pinimg.com/474x/8b/0f/2c/8b0f2c1ad43fb72f22d72308cee114f0.jpg')] bg-no-repeat flex"
        style={{ backgroundSize: "1830px 1564px" }}
      >
        <div>
          <div className="select-none w-full relative flex justify-center pt-14">
            <div className="transition-all">
              <img
                src={images[index].url}
                alt="cmr"
                className="rounded-md mx-4"
                style={{ width: "1800px", height: "550px" }}
              />
            </div>
            <div className=" absolute top-1/2 transform -translate-y-1/2 py-3 w-[95%] flex justify-between items-center space-x-36">
              <button
                onClick={handleOnPrevClick}
                className="text-6xl text-blue-900"
              >
                <BiArrowFromRight />
              </button>
              <button
                onClick={handleOnNextClick}
                className="text-6xl text-blue-900"
              >
                <BiArrowFromLeft />
              </button>
            </div>
          </div>
          <div className="flex justify-center text-4xl text-blue-500">
            {images.map((slide, slideIndex) => (
              <div key={slideIndex} onClick={() => goToSlide(slideIndex)}>
                <RxDotFilled className="cursor-pointer" id="dot" />
              </div>
            ))}
          </div>
          <div className="flex-col justify-center py-8">
            <h1 className="underline text-4xl text-blue-900 flex justify-center cursor-default">
              Objective
            </h1>
            <div className="flex-col justify-center align-middle items-center mt-4 mx-7 ml-14">
              <p className="text-black text-xl">
                1. To provide remote-access to simulation-based Labs in various
                disciplines of Science and Engineering.
              </p>
              <p className="text-black text-xl">
                2. To enthuse students to conduct experiments by arousing their
                curiosity. This would help them in learning basic and advanced
                concepts through remote experimentation.
              </p>
              <p className="text-black text-xl">
                3. To provide a complete Learning Management System around the
                Virtual Labs where the students/ teachers can avail the various
                tools for learning, including additional web-resources,
                video-lectures, animated demonstrations and self-evaluation.
              </p>
            </div>
          </div>
          <div className="mx-28">
            <h1 className="underline text-4xl text-blue-900 flex justify-center cursor-default">
              Programs
            </h1>
            <div className="flex-col justify-center ml-6 mt-8 pb-7">
              <div className="flex space-x-4 justify-center ml-2.5">
                <img
                  src={science}
                  alt="V lab"
                  className="w-28 h-24 rounded-lg border-none cursor-pointer"
                />
                <div className="cursor-pointer">
                  <h4 className="text-2xl font-medium">Basic Science</h4>
                  <p>
                    Physics lab, Chemistry lab, EV lab, C programming lab,
                    Electrical lab
                  </p>
                </div>
              </div>
              <div className="flex space-x-4 justify-center mr-20">
                <Link
                  to={"/CS/Computer"}
                  className="flex space-x-4 justify-center text-black no-underline"
                >
                  <img
                    src={cs}
                    alt="V lab"
                    className="w-28 h-28 rounded-lg border-none cursor-pointer"
                  />
                  <div className="pt-3 cursor-pointer">
                    <h4 className="text-2xl font-medium">
                      Computer Science And Engineering
                    </h4>
                    <p>DS lab, ADE lab, DAA lab, Java Lab</p>
                  </div>
                </Link>
              </div>
              <div className="flex space-x-4 pb-2 justify-center mr-1 ml-2.5">
                <img
                  src={aiml}
                  alt="V lab"
                  className="w-28 h-24 rounded-lg border-none cursor-pointer"
                />
                <div className="pt-2 cursor-pointer">
                  <h4 className="text-2xl font-medium">
                    Artificial Intelligence And Machine Learning
                  </h4>
                  <p>Prolog lab, Python lab </p>
                </div>
              </div>
              <div className="flex space-x-4 justify-center mr-14 ml-2">
                <img
                  src={aids}
                  alt="V lab"
                  className="w-28 h-24 rounded-lg border-none cursor-pointer"
                />
                <div className="cursor-pointer">
                  <h4 className="text-2xl font-medium">
                    Artificial Intelligence And Data Science
                  </h4>
                  <p>R programming lab, Prolog programming lab</p>
                </div>
              </div>
              <div className="flex space-x-4 justify-center ml-3 mr-0">
                <img
                  src={ece}
                  alt="V lab"
                  className="w-28 h-28 rounded-lg border-none cursor-pointer"
                />
                <div className="pt-2 cursor-pointer">
                  <h4 className="text-2xl font-medium">
                    Electronics And Communication Engineering
                  </h4>
                  <p>VLSI/DSP Lab, Microwave and optical communications Lab</p>
                </div>
              </div>
            </div>
            <button>
              <MdVerticalAlignTop
                className="text-5xl -ml-10 mb-4 bg-blue-700 text-white border-2 border-black hover:bg-blue-900 cursor-pointer rounded-lg py-1 px-1"
                onClick={top}
              />
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
