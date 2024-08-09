import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { SWAPI_Planets } from "../types";
import * as SWAPI from "../services/SWAPI";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Pagination from "../components/Pagination";
import Search from "../components/Search";

const PlanetsPage = () => {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [searchResult, setSearchResult] = useState<SWAPI_Planets | null>(null);
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get("search");
  const pageParam = searchParams.get("page");

  const searchSWAPIPlanets = async (searchQuery: string, searchPage = 1) => {
    setError(null);
    setLoading(true);
    setSearchResult(null);

    try {
      const res = await SWAPI.searchPlanets(searchQuery, searchPage);
      setSearchResult(res.data);
    } catch (err: any) {
      setError(err.message);
    }

    setLoading(false);
  };

  const handleSubmit = (searchInput: string) => {
    setSearchParams({ search: searchInput, page: "1" });
  };

  useEffect(() => {
    searchSWAPIPlanets(query ? query : "", Number(pageParam));
  }, [query, pageParam]);

  return (
    <>
      <h1>PLANETS</h1>

      <Search onHandleSubmit={handleSubmit} />

      {loading && <p>Loading...</p>}

      {error && <Alert variant="warning">{error}</Alert>}

      {searchResult && (
        <>
          {query && (
            <p>
              Showing {searchResult.total} results for "{query}"...
            </p>
          )}

          <Row xs={1} md={2} className="g-4 mb-3">
            {searchResult.data.map((planet) => (
              <Col key={planet.id}>
                <Card>
                  <Card.Body>
                    <Card.Title>{planet.name}</Card.Title>
                    <Card.Text>
                      Population: {planet.population}
                      <br />
                      Terrain: {planet.terrain}
                    </Card.Text>

                    <Link to={`/planets/${planet.id}`}>
                      <Button variant="primary" className="btn-card float-end">
                        Read more
                      </Button>
                    </Link>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>

          <Pagination
            page={searchResult.current_page}
            totalPages={searchResult.last_page}
            hasPreviousPage={Number(pageParam) > 1}
            hasNextPage={Number(pageParam) < searchResult.last_page}
            onPreviousPage={() => {
              setSearchParams({
                search: query ? query : "",
                page: String(Number(pageParam) - 1),
              });
            }}
            onNextPage={() => {
              setSearchParams({
                search: query ? query : "",
                page: String(Number(pageParam) + 1),
              });
            }}
          />
        </>
      )}
    </>
  );
};

export default PlanetsPage;
