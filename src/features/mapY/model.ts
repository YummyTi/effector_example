import { createEvent, createStore } from "effector";
import { STATIONS } from "./data";

export const setStations = createEvent<any[]>();
export const $stations = createStore<any[]>(STATIONS).on(
  setStations,
  (stations) => stations
);
