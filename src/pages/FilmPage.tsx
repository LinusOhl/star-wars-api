import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { SWAPI_Film } from "../types/index";
import Alert from "react-bootstrap/Alert";
import * as SWAPI from "../services/SWAPI";
import FilmCard from "../components/FilmCard";

const FilmPage = () => {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [film, setFilm] = useState<SWAPI_Film | null>(null);
  const { id } = useParams();
  const filmId = Number(id);

  const getFilm = async (id: number) => {
    setError(null);
    setLoading(true);
    setFilm(null);

    try {
      const data = await SWAPI.getFilm(id);
      setFilm(data);
    } catch (err: any) {
      setError(err.message);
    }

    setLoading(false);
  };

  useEffect(() => {
    getFilm(filmId);
  }, [filmId]);

  return (
    <>
      <h1>FILM</h1>

      {loading && <p>Loading...</p>}

      {error && <Alert variant="warning">{error}</Alert>}

      {film && <FilmCard film={film} />}
    </>
  );
};

export default FilmPage;
