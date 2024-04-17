import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Body() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/`).then((res) => {
      let arr = [res.data.results];
      setPokemons(...arr);
    });
  }, []);

  return (
    <>
      <div className="px-10">
        <div className="grid grid-cols-10 gap-4 place-content-center w-100">
          {pokemons.map((pokemon) => {
            return (
              <div
                key={pokemon.name}
                className="card w-20 h-20 mx-auto bg-slate-200"
              >
                {pokemon.name}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
