import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { SWAPI_Planet } from "../types/index";
import Alert from "react-bootstrap/Alert";
import * as SWAPI from "../services/SWAPI";
import PlanetCard from "../components/PlanetCard";

const PlanetPage = () => {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [planet, setPlanet] = useState<SWAPI_Planet | null>(null);
  const { id } = useParams();
  const planetId = Number(id);

  const getPlanet = async (id: number) => {
    setError(null);
    setLoading(true);
    setPlanet(null);

    try {
      const data = await SWAPI.getPlanet(id);
      setPlanet(data);
    } catch (err: any) {
      setError(err.message);
    }

    setLoading(false);
  };

  useEffect(() => {
    getPlanet(planetId);
  }, [planetId]);

  return (
    <>
      <h1>PLANET</h1>

      {loading && <p>Loading...</p>}

      {error && <Alert variant="warning">{error}</Alert>}

      {planet && <PlanetCard planet={planet} />}
    </>
  );
};

export default PlanetPage;
