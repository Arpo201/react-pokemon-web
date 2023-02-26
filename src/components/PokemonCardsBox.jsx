import axios from "axios"
import { useEffect, useState } from "react"
import Grid2 from '@mui/material/Unstable_Grid2' // Grid version 2

import PokemonCard from "./PokemonCard"

const PokemonCardsBox = ({offset, limit}) => {
    const [pokemons, setPokemons] = useState({})
    const [isRender, setIsRender] = useState(false)
  
    useEffect (() => {
      const getData = async () => {
        setPokemons(await axios.get("https://pokeapi.co/api/v2/pokemon?offset="+offset+"&limit="+limit))
      }
      getData()
    },[offset, limit])
  
    useEffect (() => {
      if(!!pokemons){ 
        setIsRender(true)
      }
    },[pokemons])
  
    return (
      <> 
        <Grid2 container spacing={4}>
          {isRender && pokemons?.data?.results?.map((poke, index) => (
            <Grid2 md={4} key={index} >
              <PokemonCard name={poke.name} api={poke.url} />
            </Grid2>
          ))}
        </Grid2>
      </>
    )
}

export default PokemonCardsBox