import React from "react";

export default function Nav({ setNamePoke, namePokeHandler }) {
  return (
    <>
      <div className="nav flex justify-between py-6 px-10">
        <ul className="flex">
          <li className="inline my-auto">PokeDex</li>
        </ul>
        <ul className="flex">
          <li className="inline px-3">
            <input
              type="text"
              name="text"
              className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
              placeholder="pikachu"
              onChange={(e) => setNamePoke(e.target.value)}
            />
          </li>
          <li className="inline">
            <button
              className="inline py-3 px-3 duration-300 rounded-md cursor-pointer hover:bg-slate-200"
              onClick={(e) => namePokeHandler(e)}
            >
              Search
            </button>
          </li>
        </ul>
      </div>
    </>
  );
}
