import React from "react";
import { Link } from "react-router-dom";
import { SWAPI_Film } from "../types";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

interface IFilmCardProps {
  film: SWAPI_Film;
}

const FilmCard: React.FC<IFilmCardProps> = ({ film }) => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>
          STAR WARS: Episode {film.episode_id} - {film.title}
        </Card.Title>
        <Card.Text>
          <em>{film.opening_crawl}</em>
        </Card.Text>
        <p>
          <strong>Director:</strong> {film.director}
          <br />
          <strong>Producer(s):</strong> {film.producer}
        </p>

        <span className="small text-muted">Released {film.release_date}</span>
      </Card.Body>
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Characters</Accordion.Header>
          <Accordion.Body>
            <ListGroup className="list-group-flush">
              {film.characters.map((character) => (
                <ListGroup.Item key={character.id}>
                  <Link to={`/people/${character.id}`}>{character.name}</Link>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1">
          <Accordion.Header>Planets</Accordion.Header>
          <Accordion.Body>
            <ListGroup className="list-group-flush">
              {film.planets.map((planet) => (
                <ListGroup.Item key={planet.id}>
                  <Link to={`/planets/${planet.id}`}>{planet.name}</Link>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2">
          <Accordion.Header>Starships</Accordion.Header>
          <Accordion.Body>
            <ListGroup className="list-group-flush">
              {film.starships.map((starship) => (
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
              {film.vehicles.map((vehicle) => (
                <ListGroup.Item key={vehicle.id}>
                  <Link to={`/vehicles/${vehicle.id}`}>{vehicle.name}</Link>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="4">
          <Accordion.Header>Species</Accordion.Header>
          <Accordion.Body>
            <ListGroup className="list-group-flush">
              {film.species.map((specie) => (
                <ListGroup.Item key={specie.id}>
                  <Link to={`/species/${specie.id}`}>{specie.name}</Link>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Card>
  );
};

export default FilmCard;
