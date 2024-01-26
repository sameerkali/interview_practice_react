import { useState, useEffect } from "react";
import { imgData } from "../constants/Constant";
import { Link } from "react-router-dom";

const Corousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const handlePrev = () => {
    setCurrentIndex(currentIndex - 1);
    currentIndex === 0 && setCurrentIndex(imgData.length - 1);
  };
  const handleNext = () => {
    setCurrentIndex(currentIndex + 1);
    currentIndex === imgData.length - 1 && setCurrentIndex(0);
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      handleNext();
    }, 1500);
    return () => {
      clearTimeout(timer);
    };
  }, [currentIndex]);
  return (
    <>
      <div>
        <h1>hii i am image Corousel</h1>
        <Link to={`/form`}>
          <button className="pr-3 pl-3 pt-1 pb-1 bg-cyan-300 text-white m-2">
            Form
          </button>
        </Link>
        <Link to={`/todo`}>
          <button className="pr-3 pl-3 pt-1 pb-1 bg-cyan-300 text-white m-2">
            Todo
          </button>
        </Link>
        <Link to={`/api`}>
          <button className="pr-3 pl-3 pt-1 pb-1 bg-cyan-300 text-white m-2">
            Api
          </button>
        </Link>
        <Link to={`/`}>
          <button className="pr-3 pl-3 pt-1 pb-1 bg-cyan-300 text-white m-2">
            Home
          </button>
        </Link>
        <Link to={`/query`}>
          <button className="pr-3 pl-3 pt-1 pb-1 bg-cyan-300 text-white m-2">
            query
          </button>
        </Link>
      </div>
      <div className="flex justify-center">
        <button className="p-2 m-10 font-bold" onClick={handlePrev}>
          prev
        </button>
        {/* we use map here because, it will not call url again and again after every rerender */}
        {imgData.map((url, i) => (
          <img
            key={url}
            src={url}
            alt="images"
            className={
              "w-[30rem] h-[30rem] object-contain " +
              (currentIndex === i ? "" : "hidden")
            }
          />
        ))}

        <button className="p-2 m-10 font-bold" onClick={handleNext}>
          next
        </button>
      </div>
    </>
  );
};

export default Corousel;
