import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMangas } from "../states/mangasSlice";
import { useParams } from "react-router-dom";
import "../styles/mangasInfos.css";
import { addFavoriteManga } from "../firebase/firebaseService";

const MangaInfos = () => {
  const { mangas, loading } = useSelector((store) => store.mangas);
  const { mangaId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMangas());
  }, []);

  const handleAddFavorite = () => {
    const manga = mangas.find((manga) => manga.mal_id === parseInt(mangaId));
    addFavoriteManga(manga);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="spinner-border text-green-500" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full flex flex-col items-center justify-center space-y-8">
      <h1 className="text-3xl font-bold">
        {mangas.find((manga) => manga.mal_id === parseInt(mangaId)).title}
      </h1>
      <img
        className="w-64 h-96 object-cover rounded-md shadow-lg"
        src={IfImageNotFound(mangas, mangaId)}
        alt="image"
      />
      <p className="text-lg">
        Nombre de volumes publiés :{" "}
        {mangas.find((manga) => manga.mal_id === parseInt(mangaId)).volumes}
      </p>
      <p className="text-lg">
        Nombre de chapitres publiés :{" "}
        {mangas.find((manga) => manga.mal_id === parseInt(mangaId)).chapters}
      </p>
      <p className="text-lg">
        {mangas.find((manga) => manga.mal_id === parseInt(mangaId)).status}
      </p>
      <p className="text-lg">
        Première publication le{" "}
        { mangas.find((manga) => manga.mal_id === parseInt(mangaId)).published.string}
      </p>
      <p className="text-lg">
        Synopsis :{" "}
        {mangas.find((manga) => manga.mal_id === parseInt(mangaId)).synopsis}
      </p>
      <button
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleAddFavorite}
      >
        Ajouter aux favoris
      </button>
    </div>
  );
};

const IfImageNotFound = (mangas, mangaId) => {
  let image = mangas.find((manga) => manga.mal_id === parseInt(mangaId)).images.jpg.image_url;
  if (image == "https://cdn.myanimelist.net/images/manga/3/54525.jpg") {
    return "https://cdn1.booknode.com/book_cover/498/full/monster-tome-1-herr-doktor-tenma-498116.jpg";
  } else {
    return image;
  }
}

export default MangaInfos;
