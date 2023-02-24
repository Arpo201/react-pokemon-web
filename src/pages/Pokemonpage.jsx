import { useEffect, useState } from "react"
import axios from "axios"
import PokemonCard from "../components/PokemonCard"

const Pokemonpage = () => {
  const [pokemons, setPokemons] = useState({})
  const [isRender, setIsRender] = useState(false)

  useEffect (() => {
    // fetch("shiba.com")) // test = a,b,c
    const getPokemons = async () => {
      setPokemons(await axios.get("https://pokeapi.co/api/v2/pokemon"))
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
      {isRender && pokemons?.data?.results?.map((poke, index) => (
        <PokemonCard name={poke.name} api={poke.url} />
      ))}
    </>
  )
}

export default Pokemonpage
