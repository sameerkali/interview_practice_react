// MantrasList.js
import React from "react";
import useMantras from "./useMantras";
import { Link } from "react-router-dom";

const MantrasList = () => {
  const { isLoading, isError, data } = useMantras();

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching data</div>;

  return (
    <div>
      <div>
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
      <h1 className="text-3xl">Mantras List</h1>
      <ul>
        {data.map((mantra) => (
          <div
            className="flex items-center justify-center mt-10"
            key={mantra.id}
          >
            <img
              src={mantra.artwork}
              alt={mantra.title}
              className="w-32 h-32"
            />
            <div>
              <h2>{mantra.title}</h2>
              <p>Artist: {mantra.artist}</p>
              <p>Album: {mantra.album || "Bhajan"}</p>
            </div>
            <audio controls className="mt-2">
              <source src={mantra.url} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default MantrasList;
