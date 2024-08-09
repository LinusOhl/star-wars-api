import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { SWAPI_Person } from "../types/index";
import Alert from "react-bootstrap/Alert";
import * as SWAPI from "../services/SWAPI";
import PersonCard from "../components/PersonCard";

const PersonPage = () => {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [person, setPerson] = useState<SWAPI_Person | null>(null);
  const { id } = useParams();
  const personId = Number(id);

  const getPerson = async (id: number) => {
    setError(null);
    setLoading(true);
    setPerson(null);

    try {
      const data = await SWAPI.getPerson(id);
      setPerson(data);
    } catch (err: any) {
      setError(err.message);
    }

    setLoading(false);
  };

  useEffect(() => {
    getPerson(personId);
  }, [personId]);

  return (
    <>
      <h1>PERSON</h1>

      {loading && <p>Loading...</p>}

      {error && <Alert variant="warning">{error}</Alert>}

      {person && <PersonCard person={person} />}
    </>
  );
};

export default PersonPage;
