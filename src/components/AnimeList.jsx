import React, { useState, useEffect } from 'react';

function Anime() {
  const [animeList, setAnimeList] = useState([]);

  useEffect(() => {
    fetch('https://kitsu.io/api/edge/anime')
      .then(response => response.json())
      .then(data => setAnimeList(data.data));
  }, []);

  return (
    <div>
      <h1>List of Animes</h1>
      <ul>
        {animeList.map(anime => (
          <li key={anime.id}>
            <h2>{anime.attributes.titles.en}</h2>
            <p>{anime.attributes.synopsis}</p>
            <img src={anime.attributes.posterImage.medium} alt={anime.attributes.titles.en} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Anime;
