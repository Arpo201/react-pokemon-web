import { useEffect, useState } from 'react';
import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'

import PokemonCardsBox from "../components/PokemonCardsBox";
import axios from 'axios';

const Pokemonpage = () => {
  const [pokeNum, setPokeNum] = useState(0)
  const [pokeOffset, setPokeOffset ] = useState(0)
  const pokeLimit = 12
  const [isRender, setIsRender] = useState(false)
  const [page, setPage] = useState(1)
  const [pageCount, setPageCount] = useState(0)
  const handleChange = (event, value) => {
    setPage(value)
    setPokeOffset((value-1)*pokeLimit)
  }
  
  useEffect (() => {
    const getData = async () => {
      setPokeNum((await axios.get("https://pokeapi.co/api/v2/pokemon?offset=0&limit=1")).data.count)
    }
    getData()
  },[])

  useEffect (() => {
    if(!!pokeNum){ 
      setPageCount(Math.ceil(pokeNum/pokeLimit))
      setIsRender(true)
    }
  },[pokeNum])

  if (isRender) return (
    <Stack spacing={3}>
      <Pagination count={pageCount} page={page} onChange={handleChange} color="primary" />
      <PokemonCardsBox offset={pokeOffset} limit={pokeLimit} />
      <Pagination count={pageCount} page={page} onChange={handleChange} color="primary" />
    </Stack> 
  )
}

export default Pokemonpage
