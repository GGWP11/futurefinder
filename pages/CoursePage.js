import React, { useState } from "react";
import { Container, Row, Col, Dropdown, Card, Button } from "react-bootstrap";
import { Header, PageTitle, Footer, GoBack} from '../components';
import { Link } from "react-router-dom";
import Course from "./Course"

import styled from 'styled-components'
import Theme from '../Theme.js';

const Image = styled(Card.Img)`
  height: 300px;
  padding: 30px;
`;

const CardText = styled(Card.Text)`
  font-size: 20px;
  font-weight: ${props => props.theme.fontWeights.medium}
`;

const Individual = styled(Card)`
  background-color: ${props => props.theme.colors.bubbles};
  border: 5px solid ${props => props.theme.colors.rackley};
`;


const View = styled(Button)`
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

const Filter = styled(Dropdown.Toggle)`
  background-color: ${props => props.theme.colors.rhythm};
  font-family: ${props => props.theme.fonts};
  font-size: 20px;
  font-weight: ${props => props.theme.fontWeights.bold} !important;
  border: ${props => props.theme.colors.rhythm};

  &:hover, &:active{
    background-color: ${props => props.theme.colors.pink} !important;
    border: ${props => props.theme.colors.pink} !important;
  }
`;

const DropDownItem = styled(Dropdown.Item)`
  color: ${props => props.theme.colors.black} !important;
  font-family: ${props => props.theme.fonts};
  font-size: 16px;
  font-weight: ${props => props.theme.fontWeights.bold} !important;
  text-decoration: none;
  border: none;
  display: block;
  width: 100%;
  white-space: nowrap;
  padding: 4px 16px;

  &:hover, &:active, &:visited {
    background-color: ${props => props.theme.colors.pink};
    color: ${props => props.theme.colors.white} !important;
  }
`;

const CoursePage = () => {  
    const [selectedCourse, setSelectedCourse] = useState("");
  
    const filteredCourses = selectedCourse
      ? Course.filter((Course) => {
          return Course.profession === selectedCourse;
        })
      : Course;

  return (
    <Theme>
        <div className="Page">
        <Header />
        <PageTitle title="Upcoming Courses" />
        <Container>
      <Row>
      {filteredCourses.map((Course) => (
          <Col key={Course.id} xs={6} lg={4} xl={3} className="my-3">
            <Individual>
              <Image variant="top" src={Course.image} />
              <Card.Body>
                <Card.Title>{Course.title}</Card.Title>
                <CardText>{Course.professional}</CardText>
                <Link to={`/courseDetails/${Course.id}`}>
                <View>View Details</View>
                </Link>
              </Card.Body>
            </Individual>
          </Col>
        ))}
      </Row>
    </Container>
      <Footer />
    </div>
    </Theme>
  );
};

export default CoursePage;
