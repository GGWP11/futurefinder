import React from 'react';
import { Container, Col, Button } from 'react-bootstrap';
import styled from 'styled-components'
import Theme from '../Theme.js';
import { Link } from "react-router-dom";

const Navigation = styled(Button)`
  background-color: ${props => props.theme.colors.orange};
  color: ${props => props.theme.colors.black};
  font-family: ${props => props.theme.fonts[0]};
  font-size: 20px;
  font-weight: ${props => props.theme.fontWeights.bold} !important;
  border: ${props => props.theme.colors.orange} !important;
  padding: 10px 40px;
  text-decoration: none !important;
  border-radius: 5px !important;

  &:hover, &:active {
    background-color: ${props => props.theme.colors.black} !important;
    color: ${props => props.theme.colors.orange} !important;
    border: ${props => props.theme.colors.black} !important;
  }
`;


const GoBack = ({route}) => {
  return (
    <Theme>
      <Container>
        <Col>
        <Navigation as={Link} to={route}>
            Go Back
          </Navigation>
        </Col>
      </Container>
    </Theme>
  );
}

export default GoBack;
