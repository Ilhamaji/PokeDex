import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Body() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    async function Api() {
      await axios
        .get(`https://pokeapi.co/api/v2/pokemon?offset=1000&limit=99999`)
        .then((res) => {
          let arr = [res.data.results];
          setPokemons(...arr);
        });
    }
    Api();
  }, []);

  return (
    <>
      <div className="px-10">
        <div className="grid grid-cols-10 gap-4 place-content-center w-100">
          {pokemons.map((pokemon) => {
            return (
              <div
                key={pokemon.name}
                className="card w-full h-20 mx-auto bg-slate-200"
              >
                {/* {pokemon.sprites.front_default} */}
                {pokemon.name}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
