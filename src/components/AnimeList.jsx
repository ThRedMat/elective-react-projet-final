import React, { useState, useEffect } from 'react';

function Anime() {
  const [animeList, setAnimeList] = useState([]);

  useEffect(() => {
    fetch('https://kitsu.io/api/edge/anime')
      .then(response => response.json())
      .then(data => setAnimeList(data.data));
  }, []);

  return (
    <div className="">
      <div className="container mx-auto py-10">
        <h1 className="text-3xl font-bold mb-10">List of Animes</h1>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {animeList.map(anime => (
            <li key={anime.id} className="rounded-md overflow-hidden shadow-md">
              <img className="w-full h-56 object-cover" src={anime.attributes.posterImage.medium} alt={anime.attributes.titles.en} />
              <div className="px-4 py-3">
                <h2 className="text-lg font-medium mb-2">{anime.attributes.titles.en}</h2>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Anime;
