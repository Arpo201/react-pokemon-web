import { useState, useEffect } from "react"
import axios from "axios"

// import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const PokemonCard = ({name, api}) => {
  const [pokeinfo, setPokeinfo] = useState({})
  const [isRender, setIsRender] = useState(false)

  useEffect (() => {
    const getData = async () => {
      setPokeinfo(await axios.get(api))
    }
    getData()
  },[api])

  useEffect (() => {
    // null, undefined, '' | if have data
    if(!!pokeinfo){ 
      // console.log(pokeinfo)
      setIsRender(true)
    }
  },[pokeinfo])
  if (!isRender) return <></>
  return (
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="300"
            image={ pokeinfo?.data?.sprites?.front_default }
            alt={ name }
          />
          <CardContent>
            <Typography gutterBottom variant="h4" component="div" textAlign={"center"}>
              { name }
            </Typography>
            {/* <Typography variant="body2" color="text.secondary">
              { api }
            </Typography> */}
          </CardContent>
        </CardActionArea>
      </Card>
  )
}
//optional chaning เช็คว่าตัวแปรเป็น null, undefined, '' หรือไม่ | จะทำเมื่อมีข้อมูลจริงๆ เช็คว่ามีข้อมูลจริงๆ
export default PokemonCard
