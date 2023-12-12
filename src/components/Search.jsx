import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useMovieContext } from "../context/movieContext";

const Search = () => {
  const { query, setQuery, error } = useMovieContext();

  return (
    <>
      <Container className="py-4">
        <h2>Search Movie Name</h2>
        <Row>
          <Col xs="12" lg="6" span="4">
            <form action="#" onSubmit={(e) => e.preventDefault()}>
              <div>
                <input
                  type="text"
                  placeholder="search movie"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
              </div>
            </form>
            <div>
              <p>{error.show && error.msg}</p>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Search;
