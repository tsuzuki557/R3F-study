import { MouseEvent } from "react";
import { create } from 'zustand';
import uniqid from 'uniqid';

interface HumanState {
  uuId: string
  id: number
  age: number
  increasePopulation: (id: MouseEvent<HTMLElement>) => void
  removeAllBears: (id: number) => void
}

export const useStore = create<HumanState>((set) => {

  console.log("uniqid", uniqid());
  
  return {
    uuId: uniqid(),
    id: 0,
    age: 20,
    increasePopulation: () => set((state) => ({ id: state.id + 1 })),
    removeAllBears: () => set({ id: 0 }),
  }
})