import React from 'react';
import { Col, Button, Row } from 'react-bootstrap';
import { Link } from "react-router-dom";

import styled from 'styled-components'
import Theme from '../Theme.js';

const Card = styled.div`
  background-color: ${props => props.theme.colors.rackley};
  color: ${props => props.theme.colors.white};
  font-family: ${props => props.theme.fonts};
  box-shadow: 16px -17px 0px rgb(255 94 124);
`;

const Title = styled.h5`
    font-size: 25px;
    font-weight: ${props => props.theme.fontWeights.black};
    font-family: ${props => props.theme.fonts};
    text-align: center;
`;

const Description = styled.p`
    font-size: 15px;
    font-weight: ${props => props.theme.fontWeights.semiBold};
    font-family: ${props => props.theme.fonts};
    text-align: center;
    margin-bottom: 0;
`;

const HeadOver = styled(Button)`
  background-color: ${props => props.theme.colors.orange};
  color: ${props => props.theme.colors.black};
  font-family: ${props => props.theme.fonts[0]};
  font-size: 15px;
  font-weight: ${props => props.theme.fontWeights.bold} !important;
  border: ${props => props.theme.colors.orange};
  padding: 10px 40px;

  &:hover, &:active {
    background-color: ${props => props.theme.colors.black} !important;
    color: ${props => props.theme.colors.orange} !important;
    border: ${props => props.theme.colors.black} !important;
  }
`;

const FeatureCard = ({ index, title, description, route }) => {
  return (
    <Theme>
        <Col lg={index === 0 ? { span: 6, offset: 4 } : { span: 6, offset: 2 }} 
        md={12}
        className="mb-5">
        <Card className="card h-100">
            <Row noGutters>
                <Col md={8}>
                    <div className="card-body">
                    <Title>{title}</Title>
                    <Description>{description}</Description>
                    </div>
                </Col>
                <Col md={4}>
                    <Link to={route} className="card-body d-flex justify-content-center align-items-center"
                    style={{textDecoration:'none'}}>
                        <HeadOver>Head Over</HeadOver>
                    </Link>
                </Col>
            </Row>
        </Card>
        </Col>
    </Theme>
  );
};

export default FeatureCard;
