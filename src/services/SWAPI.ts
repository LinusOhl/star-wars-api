import axios from "axios";
import {
  SWAPI_Film,
  SWAPI_Films_SearchResponse,
  SWAPI_Person,
  SWAPI_People_SearchResponse,
  SWAPI_Planet,
  SWAPI_Planets_SearchResponse,
  SWAPI_Specie,
  SWAPI_Species_SearchResponse,
  SWAPI_Starship,
  SWAPI_Starships_SearchResponse,
  SWAPI_Vehicle,
  SWAPI_Vehicles_SearchResponse,
} from "../types";

const BASE_URL = "https://swapi.thehiveresistance.com/api";

/**
 * Films, SWAPI
 */
// Get a single film
export const getFilm = async (id: number) => {
  const res = await axios.get(`${BASE_URL}/films/${id}`);
  return res.data as SWAPI_Film;
};

// Search films-content
export const searchFilms = async (query = "", page = 1) => {
  return (await axios.get(
    `${BASE_URL}/films?search=${query}&page=${page}`
  )) as SWAPI_Films_SearchResponse;
};

/**
 * People, SWAPI
 */
// Get a single person
export const getPerson = async (id: number) => {
  const res = await axios.get(`${BASE_URL}/people/${id}`);
  return res.data as SWAPI_Person;
};

// Search people-content
export const searchPeople = async (query: string, page = 1) => {
  return (await axios.get(
    `${BASE_URL}/people?search=${query}&page=${page}`
  )) as SWAPI_People_SearchResponse;
};

/**
 * Planets, SWAPI
 */
// Get a single planet
export const getPlanet = async (id: number) => {
  const res = await axios.get(`${BASE_URL}/planets/${id}`);
  return res.data as SWAPI_Planet;
};

// Search planets-content
export const searchPlanets = async (query: string, page = 1) => {
  return (await axios.get(
    `${BASE_URL}/planets?search=${query}&page=${page}`
  )) as SWAPI_Planets_SearchResponse;
};

/**
 * Species, SWAPI
 */
// Get a single specie
export const getSpecie = async (id: number) => {
  const res = await axios.get(`${BASE_URL}/species/${id}`);
  return res.data as SWAPI_Specie;
};

// Search species-content
export const searchSpecies = async (query: string, page = 1) => {
  return (await axios.get(
    `${BASE_URL}/species?search=${query}&page=${page}`
  )) as SWAPI_Species_SearchResponse;
};

/**
 * Starships, SWAPI
 */
// Get a single starship
export const getStarship = async (id: number) => {
  const res = await axios.get(`${BASE_URL}/starships/${id}`);
  return res.data as SWAPI_Starship;
};

// Search starships-content
export const searchStarships = async (query: string, page = 1) => {
  return (await axios.get(
    `${BASE_URL}/starships?search=${query}&page=${page}`
  )) as SWAPI_Starships_SearchResponse;
};

/**
 * Vehicles, SWAPI
 */
// Get a single vehicle
export const getVehicle = async (id: number) => {
  const res = await axios.get(`${BASE_URL}/vehicles/${id}`);
  return res.data as SWAPI_Vehicle;
};

// Search vehicles-content
export const searchVehicles = async (query: string, page = 1) => {
  return (await axios.get(
    `${BASE_URL}/vehicles?search=${query}&page=${page}`
  )) as SWAPI_Vehicles_SearchResponse;
};
