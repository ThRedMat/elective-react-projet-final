import React from 'react';
import { Link } from 'react-router-dom';

const MangaItem = ({ manga }) => {
  return (
    <Link to={`manga/${manga.mal_id}`}>
      <div className="relative w-full max-w-sm mx-auto rounded-md overflow-hidden shadow-md group">
        <div className="absolute inset-0 transition-all duration-500 ease-out bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-70"></div>
        <img className="w-full h-64 object-cover object-center transition-all duration-500 ease-out group-hover:transform group-hover:scale-110" src={IfImageNotFound(manga)} alt={manga.title} />
        <div className="absolute bottom-0 w-full py-3 bg-white bg-opacity-70 transition-all duration-500 ease-out group-hover:bg-opacity-100">
          <h2 className="text-gray-800 font-medium px-4">{manga.title}</h2>
        </div>
      </div>
    </Link>
  );
};

const IfImageNotFound = (manga) => {
  let image = manga.images.jpg.image_url
  if (image == "https://cdn.myanimelist.net/images/manga/3/54525.jpg") {
      return "https://cdn1.booknode.com/book_cover/498/full/monster-tome-1-herr-doktor-tenma-498116.jpg"
  } else {
      return image
  }
}

export default MangaItem;
