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

  const selectedManga = mangas.find((manga) => manga.mal_id === parseInt(mangaId));

  return (
    <div className="w-full h-full flex flex-col items-center justify-center space-y-8">
      <h1 className="text-3xl font-bold">{selectedManga.title}</h1>
      <img
        className="w-64 h-96 object-cover rounded-md shadow-lg transform hover:scale-110 transition duration-500 ease-in-out"
        src={IfImageNotFound(mangas, mangaId)}
        alt="image"
      />
      <div className="grid grid-cols-2 gap-4 w-full max-w-3xl">
        <div className="flex flex-col space-y-2">
          <div className="bg-gray-100 px-4 py-2 rounded-lg">
            <p className="text-gray-500 font-semibold">
              Nombre de volumes publiés
            </p>
            <p className="text-lg">{selectedManga.volumes}</p>
          </div>
          <div className="bg-gray-100 px-4 py-2 rounded-lg">
            <p className="text-gray-500 font-semibold">
              Nombre de chapitres publiés
            </p>
            <p className="text-lg">{selectedManga.chapters}</p>
          </div>
        </div>
        <div className="flex flex-col space-y-2">
          <div className="bg-gray-100 px-4 py-2 rounded-lg">
            <p className="text-gray-500 font-semibold">Statut</p>
            <p className="text-lg">{selectedManga.status}</p>
          </div>
          <div className="bg-gray-100 px-4 py-2 rounded-lg">
            <p className="text-gray-500 font-semibold">
              Première publication
            </p>
            <p className="text-lg">{selectedManga.published.string}</p>
          </div>
          <div className="bg-gray-100 px-4 py-2 rounded-lg">
            <p className="text-gray-500 font-semibold">Type</p>
            <p className="text-lg">{selectedManga.type}</p>
          </div>
        </div>
      </div>
      <div className="bg-gray-100 px-4 py-2 rounded-lg w-full max-w-3xl">
        <p className="text-gray-500 font-semibold">Synopsis</p>
        <p className="text-lg">{selectedManga.synopsis}</p>
      </div>
      <button
        className="bg-green-500 text-white px-4 py-2 rounded-lg w-full max-w-3xl"
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

