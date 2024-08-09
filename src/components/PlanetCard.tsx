import React from "react";
import { Link } from "react-router-dom";
import { SWAPI_Planet } from "../types";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

interface IPlanetCardProps {
  planet: SWAPI_Planet;
}

const PlanetCard: React.FC<IPlanetCardProps> = ({ planet }) => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{planet.name}</Card.Title>
        <Card.Text>
          <em>{planet.population} people</em>
        </Card.Text>
        <p>
          <strong>Terrain:</strong> {planet.terrain}
          <br />
          <strong>Climate:</strong> {planet.climate}
        </p>
      </Card.Body>
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Residents</Accordion.Header>
          <Accordion.Body>
            <ListGroup className="list-group-flush">
              {planet.residents.map((resident) => (
                <ListGroup.Item key={resident.id}>
                  <Link to={`/people/${resident.id}`}>{resident.name}</Link>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1">
          <Accordion.Header>Films</Accordion.Header>
          <Accordion.Body>
            <ListGroup className="list-group-flush">
              {planet.films.map((film) => (
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

export default PlanetCard;
