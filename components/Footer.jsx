import React from 'react';
import { Container, Row, Col, Navbar} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Theme from '../Theme.js';
import styled from 'styled-components';
import logo from '../assets/logo.png';

const StyledFooter = styled.footer`
background-color: ${props => props.theme.colors.bubbles};
  padding: 20px 0;
  margin-top: 100px;
`;

const StyledLink = styled(Link)`
  font-size: ${props => props.theme.fontSizes.small};
  font-weight: ${props => props.theme.fontWeights.semiBold};
  font-family: ${props => props.theme.fonts};
  color: ${props => props.theme.colors.rhythm};
  text-align: "left";
  text-decoration: none;

  &:hover {
    color: ${props => props.theme.colors.pink};
  }
`;

const Address = styled.address`
  font-size: ${props => props.theme.fontSizes.small};
  font-weight: ${props => props.theme.fontWeights.semiBold};
  font-family: ${props => props.theme.fonts};
  color: ${props => props.theme.colors.rhythm};
  text-align: "left";
  line-height: 2em;
`;

const Logo = styled.img`
  width: 300px;

  ${props => props.theme.breakpoints.down('xxl')} {
    width: 200px;
  }
`;

const Title = styled.p`
    font-size: ${props => props.theme.fontSizes.smallMediun};
    font-weight: ${props => props.theme.fontWeights.black};
    font-family: ${props => props.theme.fonts};
    color: ${props => props.theme.colors.grape};
    text-align: "left";

  ${props => props.theme.breakpoints.down('lg')} {
    font-size: ${props => props.theme.fontSizes.smallMediun};
  }
`;

const Margin = styled(Col)`
  padding: 25px;
  border-right: 2px solid ${props => props.theme.colors.orange};
  display: flex;
  flex-direction: column;
  justify-content: center;

  &:last-child {
    border-right: none;
  }

  ${props => props.theme.breakpoints.down('lg')} {
    border-right: none;
    border-bottom: 2px solid ${props => props.theme.colors.orange};

    &:last-child {
      border-bottom: none;
    }
  }

`;



function Footer() {
  return (
    <Theme>
        
    <StyledFooter>
      <Container>
        <Row>
          <Margin lg={3}>
          <Navbar.Brand as={Link} to='/' className="d-flex justify-content-center">
              <Logo src={logo} alt="Logo" />
            </Navbar.Brand>
          </Margin>
          <Margin lg={6}>
            <Title>Quick Links</Title>
           <Row>
           <Col lg={6}>
            <ul className="list-unstyled">
              <li><StyledLink to="/">Home</StyledLink></li>
              <li><StyledLink to="/analysis">Career Path Analysis</StyledLink></li>
              <li><StyledLink to="/interviewWritingPage">Interview Techniques</StyledLink></li>
              <li><StyledLink to="/resumePage">Resume Writing</StyledLink></li>
              <li><StyledLink to="/coursePage">Upcoming Courses</StyledLink></li>
            </ul>
            </Col>
            <Col lg={6}>
            <ul className="list-unstyled">
            <li><StyledLink to="/professional">Chat With Professional and Group Coaching</StyledLink></li>
              <li><StyledLink to="/mockCover">AI Mock Interview</StyledLink></li>
              <li><StyledLink to="/careerInfo">Career Path Prior Information</StyledLink></li>
              <li><StyledLink to="/workshop">Upcoming Workshop</StyledLink></li>
              <li><StyledLink to="/programPage">FuturePath Partner Program</StyledLink></li>
            </ul>
            </Col>
           </Row>
          </Margin>
          <Margin lg={3}>
            <Title>Contact Us</Title>
            <Address>
              FutureFinder <br />
              Multimedia University<br />
              Jalan Ayer Keroh Lama,<br />
              75450 Bukit Beruang, Melaka<br />
              <br />
            </Address>
          </Margin>
        </Row>
      </Container>
    </StyledFooter>
    </Theme>
  );
}

export default Footer;
