import React from "react";
import { Link } from "react-router-dom";
import { SWAPI_Person } from "../types";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

interface IPersonCardProps {
  person: SWAPI_Person;
}

const PersonCard: React.FC<IPersonCardProps> = ({ person }) => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{person.name}</Card.Title>
        <Card.Text>
          <em>
            <Link to={`/planets/${person.homeworld.id}`}>
              {person.homeworld.name}
            </Link>
          </em>
        </Card.Text>
        <p>
          <strong>Skin:</strong> {person.skin_color}
          <br />
          <strong>Hair:</strong> {person.hair_color}
        </p>
      </Card.Body>
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Films</Accordion.Header>
          <Accordion.Body>
            <ListGroup className="list-group-flush">
              {person.films.map((film) => (
                <ListGroup.Item key={film.id}>
                  <Link to={`/films/${film.id}`}>{film.title}</Link>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1">
          <Accordion.Header>Species</Accordion.Header>
          <Accordion.Body>
            <ListGroup className="list-group-flush">
              {person.species.map((specie) => (
                <ListGroup.Item key={specie.id}>
                  <Link to={`/species/${specie.id}`}>{specie.name}</Link>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2">
          <Accordion.Header>Starships</Accordion.Header>
          <Accordion.Body>
            <ListGroup className="list-group-flush">
              {person.starships.map((starship) => (
                <ListGroup.Item key={starship.id}>
                  <Link to={`/starships/${starship.id}`}>{starship.name}</Link>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="3">
          <Accordion.Header>Vehicles</Accordion.Header>
          <Accordion.Body>
            <ListGroup className="list-group-flush">
              {person.vehicles.map((vehicle) => (
                <ListGroup.Item key={vehicle.id}>
                  <Link to={`/vehicles/${vehicle.id}`}>{vehicle.name}</Link>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Card>
  );
};

export default PersonCard;
