import React from "react";
import { Link } from "react-router-dom";
import { SWAPI_Vehicle } from "../types";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

interface IVehicleCardProps {
  vehicle: SWAPI_Vehicle;
}

const VehicleCard: React.FC<IVehicleCardProps> = ({ vehicle }) => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{vehicle.name}</Card.Title>
        <Card.Text>
          <em>{vehicle.manufacturer}</em>
        </Card.Text>
        <p>
          <strong>Cost:</strong> {vehicle.cost_in_credits} credits
          <br />
          <strong>Passengers:</strong> {vehicle.passengers}
        </p>
      </Card.Body>
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Pilots</Accordion.Header>
          <Accordion.Body>
            <ListGroup className="list-group-flush">
              {vehicle.pilots.map((pilot) => (
                <ListGroup.Item key={pilot.id}>
                  <Link to={`/people/${pilot.id}`}>{pilot.name}</Link>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1">
          <Accordion.Header>Films</Accordion.Header>
          <Accordion.Body>
            <ListGroup className="list-group-flush">
              {vehicle.films.map((film) => (
                <ListGroup.Item key={film.id}>
                  <Link to={`/films/${film.id}`}>{film.title}</Link>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Card>
  );
};

export default VehicleCard;
