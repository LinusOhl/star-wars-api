import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { SWAPI_Specie } from "../types/index";
import Alert from "react-bootstrap/Alert";
import * as SWAPI from "../services/SWAPI";
import SpecieCard from "../components/SpecieCard";

const SpeciePage = () => {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [specie, setSpecie] = useState<SWAPI_Specie | null>(null);
  const { id } = useParams();
  const specieId = Number(id);

  const getSpecie = async (id: number) => {
    setError(null);
    setLoading(true);
    setSpecie(null);

    try {
      const data = await SWAPI.getSpecie(id);
      setSpecie(data);
    } catch (err: any) {
      setError(err.message);
    }

    setLoading(false);
  };

  useEffect(() => {
    getSpecie(specieId);
  }, [specieId]);

  return (
    <>
      <h1>SPECIE</h1>

      {loading && <p>Loading...</p>}

      {error && <Alert variant="warning">{error}</Alert>}

      {specie && <SpecieCard specie={specie} />}
    </>
  );
};

export default SpeciePage;
