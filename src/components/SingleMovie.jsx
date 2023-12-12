import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { NavLink, useParams } from "react-router-dom";

const API = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}`;

const SingleMovie = () => {
  const { id } = useParams();

  const [movie, setMovie] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const getMovies = async (url) => {
    try {
      const res = await axios.get(url);
      const data = await res.data;
      setIsLoading(false);
      setMovie(data);
      console.log(data);
    } catch (error) {
      console.log(Error);
    }
  };

  useEffect(() => {
    let timeOut = setTimeout(() => {
      getMovies(`${API}&i=${id}`);
    }, 300);
    return () => clearTimeout(timeOut);
  }, [id]);

  return (
    <>
      {isLoading ? (
        <div className="text-center">
          <h2>Loading...</h2>
        </div>
      ) : (
        <div>
          <Container className="py-5">
            <Row
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Col xs="12" lg="8" span="2">
                <Card className="p-3">
                  <Row>
                    <Col xs="12" lg="6">
                      <figure>
                        <img src={movie.Poster} alt="" srcset="" />
                      </figure>
                    </Col>
                    <Col xs="12" lg="6">
                      <h2>{movie.Title}</h2>
                      <h4>{movie.Released}</h4>
                      <p>{movie.Genre}</p>
                      <p>{movie.imdbRating} / 10</p>
                      <p>{movie.Plot} / 10</p>
                      <NavLink to="/">
                        <button className="btn btn-secondary">Back</button>
                      </NavLink>
                    </Col>
                  </Row>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      )}
    </>
  );
};

export default SingleMovie;
