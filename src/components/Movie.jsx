import React from "react";
import { useMovieContext } from "../context/movieContext";
import { Card, Col, Container, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Movie = () => {
  const { movie, isLoading } = useMovieContext();

  return (
    <>
      {isLoading ? (
        <div className="text-center">
          <h2>Loading....</h2>
        </div>
      ) : (
        <Container className="py-5">
          <Row className="gy-4">
            {movie.map((curElem) => {
              return (
                <Col xs={6} lg={3} className="movieCard" key={curElem.imdbID}>
                  <NavLink to={`/movie/${curElem.imdbID}`}>
                    <Card className="movieCardData">
                      <Card.Img
                        variant="top"
                        src={curElem.Poster}
                        className="img-fluid"
                      />
                      <Card.Body>
                        <Card.Title className="movieTitle">
                          {curElem.Title}
                        </Card.Title>
                      </Card.Body>
                    </Card>
                  </NavLink>
                </Col>
              );
            })}
          </Row>
        </Container>
      )}
    </>
  );
};

export default Movie;
