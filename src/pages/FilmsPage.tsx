import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { SWAPI_Films } from "../types";
import * as SWAPI from "../services/SWAPI";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Pagination from "../components/Pagination";
import Row from "react-bootstrap/Row";
import Search from "../components/Search";

const FilmsPage = () => {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [searchResult, setSearchResult] = useState<SWAPI_Films | null>(null);
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get("search");
  const pageParam = searchParams.get("page");

  const searchSWAPIFilms = async (searchQuery: string, searchPage = 1) => {
    setError(null);
    setLoading(true);
    setSearchResult(null);

    try {
      const res = await SWAPI.searchFilms(searchQuery, searchPage);
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
    searchSWAPIFilms(query ? query : "", Number(pageParam));
  }, [query, pageParam]);

  return (
    <>
      <h1>FILMS</h1>

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
            {searchResult.data.map((film) => (
              <Col key={film.id}>
                <Card>
                  <Card.Body>
                    <Card.Title>
                      STAR WARS: Episode {film.episode_id} - {film.title}
                    </Card.Title>
                    <Card.Text>
                      Director: {film.director}
                      <br />
                      Release date: {film.release_date}
                    </Card.Text>

                    <Link to={`/films/${film.id}`}>
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
            hasNextPage={Number(pageParam) < searchResult.last_page - 1}
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

export default FilmsPage;
