import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { SWAPI_Vehicle } from "../types/index";
import Alert from "react-bootstrap/Alert";
import * as SWAPI from "../services/SWAPI";
import VehicleCard from "../components/VehicleCard";

const VehiclePage = () => {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [vehicle, setVehicle] = useState<SWAPI_Vehicle | null>(null);
  const { id } = useParams();
  const vehicleId = Number(id);

  const getVehicle = async (id: number) => {
    setError(null);
    setLoading(true);
    setVehicle(null);

    try {
      const data = await SWAPI.getVehicle(id);
      setVehicle(data);
    } catch (err: any) {
      setError(err.message);
    }

    setLoading(false);
  };

  useEffect(() => {
    getVehicle(vehicleId);
  }, [vehicleId]);

  return (
    <>
      <h1>VEHICLE</h1>

      {loading && <p>Loading...</p>}

      {error && <Alert variant="warning">{error}</Alert>}

      {vehicle && <VehicleCard vehicle={vehicle} />}
    </>
  );
};

export default VehiclePage;
