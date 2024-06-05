import './App.css';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import AdminSidebar from './app/layout/AdminSidebar';
import ModalContainer from './app/layout/ModalContainer';
import MainPage from './features/MainPage';
import FavoritesPage from './features/FavoritesPage';
import DogDetails from './features/DogDetails';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <>
      <ToastContainer position="bottom-right" hideProgressBar />
      <ModalContainer />
      <Routes>
        <Route path="/" element={<AdminSidebar />}>
          {/* <Route path="/dashboard" element={<Dashboard />} /> */}
          <Route path='/mainPage' element={<MainPage />} />
          <Route path='/favoritesPage' element={<FavoritesPage />} />
          <Route path='/dogDetails/:id' element={<DogDetails/>} />

        </Route>
      </Routes>
    </>
  );
}

export default App;
