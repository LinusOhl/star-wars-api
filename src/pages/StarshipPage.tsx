import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { SWAPI_Starship } from "../types/index";
import Alert from "react-bootstrap/Alert";
import * as SWAPI from "../services/SWAPI";
import StarshipCard from "../components/StarshipCard";

const StarshipPage = () => {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [starship, setStarship] = useState<SWAPI_Starship | null>(null);
  const { id } = useParams();
  const starshipId = Number(id);

  const getStarship = async (id: number) => {
    setError(null);
    setLoading(true);
    setStarship(null);

    try {
      const data = await SWAPI.getStarship(id);
      setStarship(data);
    } catch (err: any) {
      setError(err.message);
    }

    setLoading(false);
  };

  useEffect(() => {
    getStarship(starshipId);
  }, [starshipId]);

  return (
    <>
      <h1>STARSHIP</h1>

      {loading && <p>Loading...</p>}

      {error && <Alert variant="warning">{error}</Alert>}

      {starship && <StarshipCard starship={starship} />}
    </>
  );
};

export default StarshipPage;
