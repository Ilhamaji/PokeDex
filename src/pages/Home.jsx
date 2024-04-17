import React from "react";
import Nav from "../components/Nav";
import Body from "../components/Body";
import { useNavigate } from "react-router-dom";

export default function Home({ setNamePoke }) {
  const navi = useNavigate();
  const namePokeHandler = (e) => {
    e.preventDefault();

    navi("details");
  };

  return (
    <>
      <Nav setNamePoke={setNamePoke} namePokeHandler={namePokeHandler} />
      <Body />
    </>
  );
}
