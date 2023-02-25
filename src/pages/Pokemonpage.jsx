import { useEffect, useState } from "react"
import Grid2 from '@mui/material/Unstable_Grid2'; // Grid version 2
import axios from "axios"
import PokemonCard from "../components/PokemonCard"

const Pokemonpage = () => {
  const [pokemons, setPokemons] = useState({})
  const [isRender, setIsRender] = useState(false)

  useEffect (() => {
    // fetch("shiba.com")) // test = a,b,c
    const getPokemons = async () => {
      const params = { 
        offset: 0,
        limit: 50
      }
      setPokemons(await axios.get("https://pokeapi.co/api/v2/pokemon?offset=0&limit=50"))
    }
    getPokemons()
  },[])

  useEffect (() => {
    // null, undefined, ''
    // ข้อมูลมีค่า
    if(!!pokemons){ 
      console.log(pokemons)
      setIsRender(true)
    }
  },[pokemons])

  return (
    <>
      <Grid2 container spacing={4}>
        {isRender && pokemons?.data?.results?.map((poke, index) => (
          <Grid2 md={4}>
            <PokemonCard name={poke.name} api={poke.url} />
          </Grid2>
        ))}
      </Grid2>
    </>
  )
}

export default Pokemonpage
