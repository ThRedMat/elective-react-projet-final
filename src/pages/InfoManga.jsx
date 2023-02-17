import '../App.css';
import Navbar from "../components/Navbar";
import MangaInfos from "../components/MangaInfos";
import {Provider} from "react-redux";
import store from "../states/store";
import React from 'react';

const InfoManga = () => {

    /* const { mangaId } = useParams();
    console.log(mangaId) */

    


    /* const { userId } = useParams();
    const { Manga } = fetchMangas */
    return (
        <div>
        <Provider store={store}>
            <Navbar />
            <MangaInfos />

        </Provider>
        </div>
    );
}

export default InfoManga;