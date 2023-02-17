import '../App.css';
import Navbar from "../components/Navbar";
import MangasList from "../components/MangasList";
import {Provider} from "react-redux";
import store from "../states/store";
import FlitreStatus from '../components/FilterStatus';
import FlitreOrder from '../components/FilterOrder';

const Index = () => {
  return (
    <div>
      <Provider store={store}>
        <Navbar />

        <div className="container">
          <FlitreOrder />
          <FlitreStatus />
          <MangasList />
        </div>
      </Provider>
    </div>
  );
}

export default Index;