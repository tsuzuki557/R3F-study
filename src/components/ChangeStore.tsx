import React from "react";
import { useStore } from "./useStore";

export function ChangeStore() {
  //console.log(useStore);
  const id = useStore((state) => {
    return state.id;
  });
  const age = useStore((state) => state.age);

  const increasePopulation = useStore((state) => state.increasePopulation);

  // const plus = () => {
  //   const sum = id + 1;
  //   console.log(id);
  //   return sum;
  // };

  return (
    <>
      <p>id: {id}</p>
      <p>年齢: {age}</p>
      <button onClick={increasePopulation}>idをプラス</button>
    </>
  );
}

export function ChangeStore02() {
  //console.log(useStore);
  const id = useStore((state) => {
    return state.id;
  });

  return (
    <>
      <p>id2: {id}</p>
    </>
  );
}
