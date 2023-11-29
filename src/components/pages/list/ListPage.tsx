// @ts-nocheck
import React from "react";
import { useEffect, useState } from "react";

export default function ListPage() {
  const [list, setList] = useState([]);
  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
      .then((res) => res.json())
      .then((data) => {
        setList(data.results);
      });
  }, []);

  return (
    <div>
      {list.map((item) => (
        <p>
          {item.name} <a href={item.url}>view</a>
        </p>
      ))}
    </div>
  );
}
