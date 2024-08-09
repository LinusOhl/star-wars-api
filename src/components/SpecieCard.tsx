import React from "react";
import { Link } from "react-router-dom";
import { SWAPI_Specie } from "../types";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

interface ISpecieCardProps {
  specie: SWAPI_Specie;
}

const SpecieCard: React.FC<ISpecieCardProps> = ({ specie }) => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{specie.name}</Card.Title>
        <Card.Text>
          {specie.homeworld && (
            <em>
              <Link to={`/planets/${specie.homeworld.id}`}>
                {specie.homeworld.name}
              </Link>
            </em>
          )}
        </Card.Text>
        <p>
          <strong>Language:</strong> {specie.language}
          <br />
          <strong>Average lifespans:</strong> {specie.average_lifespan} years
        </p>
      </Card.Body>
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>People</Accordion.Header>
          <Accordion.Body>
            <ListGroup className="list-group-flush">
              {specie.people.map((person) => (
                <ListGroup.Item key={person.id}>
                  <Link to={`/people/${person.id}`}>{person.name}</Link>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1">
          <Accordion.Header>Films</Accordion.Header>
          <Accordion.Body>
            <ListGroup className="list-group-flush">
              {specie.films.map((film) => (
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

export default SpecieCard;
