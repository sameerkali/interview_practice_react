// MantrasList.js
import React from "react";
import useMantras from "./useMantras";

const MantrasList = () => {
  const { isLoading, isError, data } = useMantras();

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching data</div>;

  return (
    <div>
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
              <p>Album: {mantra.album}</p>
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
