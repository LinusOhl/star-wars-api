import React from "react";
import { Link } from "react-router-dom";
import { SWAPI_Starship } from "../types";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

interface IStarshipCardProps {
  starship: SWAPI_Starship;
}

const StarshipCard: React.FC<IStarshipCardProps> = ({ starship }) => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{starship.name}</Card.Title>
        <Card.Text>
          <em>{starship.manufacturer}</em>
        </Card.Text>
        <p>
          <strong>Cost:</strong> {starship.cost_in_credits} credits
          <br />
          <strong>Crew:</strong> {starship.crew}
        </p>
      </Card.Body>
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Pilots</Accordion.Header>
          <Accordion.Body>
            <ListGroup className="list-group-flush">
              {starship.pilots.map((pilot) => (
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
              {starship.films.map((film) => (
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

export default StarshipCard;
