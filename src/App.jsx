import './App.css';
import { Routes, Route } from "react-router-dom"
import Pokemonpage from './pages/Pokemonpage';

function App() {
  return (
    <>
      <Pokemonpage />

      {/* <Routes>
        <Route path='/' element={ <Pokemonpage/> } />
      </Routes> */}
    </>
  );
}

export default App;
