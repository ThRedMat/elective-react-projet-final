import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchMangas} from "../states/mangasSlice";
import { useParams } from 'react-router-dom';

const MangaInfos = () => { 
    const { mangas, loading } = useSelector((store) => store.mangas);
    const { mangaId } = useParams();
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(fetchMangas());
    }, [])

    
    if (loading) {
        return (
            <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        );
    }
        

    return (
        <div className="mangas-list">
            {mangas.find(manga => manga.mal_id === parseInt(mangaId)).title}
            <img src={
                IfImageNotFound(mangas, mangaId)
                } alt="image" />
            <p>nombres de volumes publiés : {mangas.find(manga => manga.mal_id === parseInt(mangaId)).volumes}</p>
            <p>nombres de chapitres publiés : {mangas.find(manga => manga.mal_id === parseInt(mangaId)).chapters}</p>
            <p>{mangas.find(manga => manga.mal_id === parseInt(mangaId)).status}</p>
            <p>Première publication le {mangas.find(manga => manga.mal_id === parseInt(mangaId)).published.string}</p>
            <p>{mangas.find(manga => manga.mal_id === parseInt(mangaId)).synopsis}</p>
            <p>Auteur : {mangas.find(manga => manga.mal_id === parseInt(mangaId)).authors[0].name}</p>

        </div>
    );

    
}

const IfImageNotFound = (mangas, mangaId) => {
    let image = mangas.find(manga => manga.mal_id === parseInt(mangaId)).images.jpg.image_url
    if (image == "https://cdn.myanimelist.net/images/manga/3/54525.jpg") {
        return "https://cdn1.booknode.com/book_cover/498/full/monster-tome-1-herr-doktor-tenma-498116.jpg"
    } else {
        return image
    }
}

export default MangaInfos;
