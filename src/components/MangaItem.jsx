import React from 'react';
import { Link } from 'react-router-dom';

const MangaItem = ({ manga }) => {
  return (
    <Link to={`manga/${manga.mal_id}`}>
      <div className="card manga-item" style={{width: '18rem'}}>
        <img src={IfImageNotFound(manga)} className="card-img-top" alt="" />
          <div className="card-body">
            <h5 className="card-title">{manga.title}</h5>
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