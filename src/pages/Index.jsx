import '../App.css';
import Navbar from "../components/Navbar";
import MangasList from "../components/MangasList";
import {Provider} from "react-redux";
import store from "../states/store";
import Footer from '../components/Footer';
import Filter from '../components/Filter';
const Index = () => {
  return (
    <div>
      <Provider store={store}>
        <Navbar />

        <div className="container">
         <Filter />
          <MangasList />
        </div>
        <Footer />
      </Provider>
    </div>
  );
}

export default Index;