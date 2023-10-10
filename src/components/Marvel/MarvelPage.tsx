import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const MarvelPage = () => {
  return (
    <Container>
      <h1>Marvel Page</h1>
      <Link to="/marvel-gallery">View Marvel Gallery</Link>
    </Container>
  );
};

const Container = styled.div``;

export default MarvelPage;
