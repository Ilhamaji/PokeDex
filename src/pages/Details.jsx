import React, { useContext, useEffect, useState } from "react";
import { NameContext } from "../contexts/Main";
import axios from "axios";

export default function Details() {
  const name = useContext(NameContext);
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`).then((res) => {
      let arr = [res.data];
      setPokemon(...arr);
    });
  }, [name]);

  return (
    <>
      <h1>{pokemon.name}</h1>
    </>
  );
}
