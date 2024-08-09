import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

interface ISearchProps {
  onHandleSubmit: (searchInput: string) => void;
}

const Search: React.FC<ISearchProps> = ({ onHandleSubmit }) => {
  const [searchInput, setSearchInput] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!searchInput.trim().length) {
      return;
    }

    onHandleSubmit(searchInput);
  };

  return (
    <>
      <Form className="mb-3" onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="searchQuery">
          <Form.Label>Search Query</Form.Label>
          <Form.Control
            onChange={(e) => setSearchInput(e.target.value)}
            placeholder="Enter search query..."
            required
            type="text"
            value={searchInput}
          />
        </Form.Group>

        <div className="d-flex justify-content-end">
          <Button
            variant="primary"
            type="submit"
            disabled={!searchInput.trim().length}
          >
            Search
          </Button>
        </div>
      </Form>
    </>
  );
};

export default Search;
