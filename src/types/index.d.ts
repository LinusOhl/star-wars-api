// Search Responses - Star Wars API
export type SWAPI_Films_SearchResponse = {
  data: SWAPI_Films;
};

export type SWAPI_People_SearchResponse = {
  data: SWAPI_People;
};

export type SWAPI_Planets_SearchResponse = {
  data: SWAPI_Planets;
};

export type SWAPI_Species_SearchResponse = {
  data: SWAPI_Species;
};

export type SWAPI_Starships_SearchResponse = {
  data: SWAPI_Starships;
};

export type SWAPI_Vehicles_SearchResponse = {
  data: SWAPI_Vehicles;
};

// Films - Star Wars API
export type SWAPI_Films = {
  data: _SWAPI_Film[];
  current_page: number;
  last_page: number;
  total: number;
};

export type _SWAPI_Film = {
  id: number;
  title: string;
  episode_id: string;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: string;
  characters: number;
  planets: number;
  starships: number;
  vehicles: number;
  species: number;
};

export type SWAPI_Film = {
  id: number;
  title: string;
  episode_id: string;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: string;
  characters: SWAPI_Other[];
  planets: SWAPI_Other[];
  starships: SWAPI_Other[];
  vehicles: SWAPI_Other[];
  species: SWAPI_Other[];
};

// People, Star Wars API
export type SWAPI_People = {
  data: _SWAPI_Person[];
  current_page: number;
  last_page: number;
  total: number;
};

export type _SWAPI_Person = {
  id: number;
  name: string;
  birth_year: string;
  eye_color: string;
  hair_color: string;
  height: string;
  mass: string;
  skin_color: string;
  homeworld: SWAPI_Other;
  films_count: number;
  species_count: number;
  starships_count: number;
  vehicles_count: number;
};

export type SWAPI_Person = {
  id: number;
  name: string;
  birth_year: string;
  eye_color: string;
  hair_color: string;
  height: string;
  mass: string;
  skin_color: string;
  homeworld: SWAPI_Other;
  films: SWAPI_Other_Films[];
  species: SWAPI_Other[];
  starships: SWAPI_Other[];
  vehicles: SWAPI_Other[];
};

// Planets, Star Wars API
export type SWAPI_Planets = {
  data: _SWAPI_Planet[];
  current_page: number;
  last_page: number;
  total: number;
};

export type _SWAPI_Planet = {
  id: number;
  name: string;
  rotation_period: string;
  orbital_period: string;
  diameter: string;
  climate: string;
  gravity: string;
  terrain: string;
  surface_water: string;
  population: string;
  residents_count: number;
  films_count: number;
};

export type SWAPI_Planet = {
  id: number;
  name: string;
  rotation_period: string;
  orbital_period: string;
  diameter: string;
  climate: string;
  gravity: string;
  terrain: string;
  surface_water: string;
  population: string;
  residents: SWAPI_Other[];
  films: SWAPI_Other_Films[];
};

// Species, Star Wars API
export type SWAPI_Species = {
  data: _SWAPI_Specie[];
  current_page: number;
  last_page: number;
  total: number;
};

export type _SWAPI_Specie = {
  id: number;
  name: string;
  classification: string;
  designation: string;
  average_height: string;
  average_lifespan: string;
  eye_colors: string;
  hair_colors: string;
  skin_colors: string;
  language: string;
  homeworld: SWAPI_Other | null;
  people_count: number;
  films_count: number;
};

export type SWAPI_Specie = {
  id: number;
  name: string;
  classification: string;
  designation: string;
  average_height: string;
  average_lifespan: string;
  eye_colors: string;
  hair_colors: string;
  skin_colors: string;
  language: string;
  homeworld: SWAPI_Other | null;
  people: SWAPI_Other[];
  films: SWAPI_Other_Films[];
};

// Starships, Star Wars API
export type SWAPI_Starships = {
  data: _SWAPI_Starship[];
  current_page: number;
  last_page: number;
  total: number;
};

export type _SWAPI_Starship = {
  id: number;
  name: string;
  model: string;
  starship_class: string;
  manufacturer: string;
  cost_in_credits: string;
  length: string;
  crew: string;
  passengers: string;
  max_atmosphering_speed: string;
  hyperdrive_rating: string;
  MGLT: string;
  cargo_capacity: string;
  consumables: string;
  pilots_count: number;
  films_count: number;
};

export type SWAPI_Starship = {
  id: number;
  name: string;
  model: string;
  starship_class: string;
  manufacturer: string;
  cost_in_credits: string;
  length: string;
  crew: string;
  passengers: string;
  max_atmosphering_speed: string;
  hyperdrive_rating: string;
  MGLT: string;
  cargo_capacity: string;
  consumables: string;
  pilots: SWAPI_Other[];
  films: SWAPI_Other_Films[];
};

// Vehicles, Star Wars API
export type SWAPI_Vehicles = {
  data: _SWAPI_Vehicle[];
  current_page: number;
  last_page: number;
  total: number;
};

export type _SWAPI_Vehicle = {
  id: number;
  name: string;
  model: string;
  vehicle_class: string;
  manufacturer: string;
  length: string;
  cost_in_credits: string;
  crew: string;
  passengers: string;
  max_atmosphering_speed: string;
  cargo_capacity: string;
  consumables: string;
  pilots_count: number;
  films_count: number;
};

export type SWAPI_Vehicle = {
  id: number;
  name: string;
  model: string;
  vehicle_class: string;
  manufacturer: string;
  length: string;
  cost_in_credits: string;
  crew: string;
  passengers: string;
  max_atmosphering_speed: string;
  cargo_capacity: string;
  consumables: string;
  pilots: SWAPI_Other[];
  films: SWAPI_Other_Films[];
};

// Other, Star Wars API
export type SWAPI_Other = {
  id: number;
  name: string;
};

export type SWAPI_Other_Films = {
  id: number;
  title: string;
};
