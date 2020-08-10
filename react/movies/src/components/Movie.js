import React from 'react';
import {
  Link
} from 'react-router-dom';
import styled from 'styled-components';
// import Button from 'react-bootstrap/Button';
import { Card, Button } from 'react-bootstrap';
// import './Movie.css';

// CSS-in-JS
const Container = styled.div`
  width: 500px;
  border: 1px solid #333;
  border-radius: 5px;
  display: ${props => props.hidden ? 'none' : 'block'};

  @media screen and (min-width: 600px) {
    width: 100%;
    background: beige;
  }
`;

const StyledLink = styled(Link)`
  color: blueviolet;
  text-decoration: none;
  font-size: 20px;
`;

function Movie({ movie }) {
  // const classes = ['Movie'];

  // if(hidden) {
  //   classes.push('hidden')
  // }

  // if(hidden) {
  //   return 'hidden'
  // } else {
  //   return ''
  // }

  // `Movie ${hidden ? 'hidden' : ''}`

  // 'Movie hidden'

  // 'Movie '

  // const styles = {
  //   container: {
  //     width: 500,
  //     border: '1px solid #333',
  //     borderRadius: 5,
  //     display: hidden ? 'none' : 'block'
  //   },
  //   title: {
  //     fontSize: 32,
  //   }
  // };

  const buttonSize = 'lg';

  return (
    // <div className={`Movie ${hidden ? 'hidden' : ''}`}>
    // <div
    //   className="Movie"
    //   style={styles.container}
    // >
    <Container>
      <img
        width="200px"
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        alt="poster"
      />
      <h2
        // style={styles.title}
      >
        {movie.original_title}
      </h2>
      <p>{movie.overview}</p>
      <Button size={buttonSize} variant="primary">Primary</Button>
      <StyledLink to="/about">ver detalles</StyledLink>
      <Card>
        <Card.Header>Featured</Card.Header>
        <Card.Body>
          <Card.Title>Special title treatment</Card.Title>
          <Card.Text>
            With supporting text below as a natural lead-in to additional content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </Container>
    // </div>
  );
}

export { Movie };
