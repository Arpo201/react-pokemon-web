import './App.css';
import { Routes, Route } from "react-router-dom"
import Container from '@mui/material/Container';
import Pokemonpage from './pages/Pokemonpage';
import Navbar from './components/Navbar'



function App() {
  return (
    <> 
      <Navbar />
      <Container fixed sx={{ mt: 5, mb: 5}}>
        <Routes>
          <Route path='/' element={ <Pokemonpage/> } />
        </Routes>
      </Container>

    </>
  );
}

export default App;
