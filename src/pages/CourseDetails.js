import React from 'react'
import { GoBack, Header, PageTitle, Footer, ProfileContent} from '../components';
import './pages.css';
import { useParams } from 'react-router-dom';
import Course from "./Course"
import { Container, Row, Col, Button} from "react-bootstrap";
import {Link} from "react-router-dom";
import styled from 'styled-components'
import Theme from '../Theme.js';

const Image = styled.img`
  height: 300px;
  padding: 30px;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Rating = styled.h2`
  padding: 40px 0;
`;

const Line = styled.div`
  border: 2px solid ${props => props.theme.colors.orange};
`;

const Wrap = styled(Row)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin:50px;
`;

const But = styled(Button)`
  background-color: ${props => props.theme.colors.orange};
  color: ${props => props.theme.colors.black};
  font-family: ${props => props.theme.fonts[0]};
  font-size: 20px;
  font-weight: ${props => props.theme.fontWeights.bold} !important;
  border: ${props => props.theme.colors.orange};
  padding: 15px;
  width: 100%;
  text-decoration: none !important;
  border-radius: 5px !important;

  &:hover, &:active {
    background-color: ${props => props.theme.colors.black} !important;
    color: ${props => props.theme.colors.orange} !important;
    border: ${props => props.theme.colors.black} !important;
  }
`;


const CourseDetails = () => {
    const { id } = useParams();
    const profile = Course.find(p => p.id === Number(id));
    const filledStars = Math.round(profile.ratingScore);
    const emptyStars = 5 - filledStars;

    const starIcon = "★";
    const filledStarsString = starIcon.repeat(filledStars);
    const emptyStarsString = starIcon.repeat(emptyStars).replace(/./g, "☆");

  return (
    <Theme>
      <div className="Page">
        <Header />
        <PageTitle title="Course Details"/>
        <GoBack route="/coursePage"/>
        <Wrapper>
          <Image variant="top" src={profile.image} />
          <h2>{profile.title}</h2>
          <h2>{profile.professional}</h2>
        </Wrapper>
        <Container>
          <Rating>Maximum Participants ({profile.maxparticipants})</Rating>
          <Line></Line>
        </Container>
        <ProfileContent title="Introduction" description={profile.intro}/>
        <ProfileContent title="Date" description={profile.date}/>
        <ProfileContent title="Time" description={profile.time}/>
        <Wrap>
          <Col md={3}>
            <But>Register</But>
          </Col>
      </Wrap>
      <Footer />
      </div>
    </Theme>
  )
}

export default CourseDetails;
