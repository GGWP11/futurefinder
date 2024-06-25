import React from 'react'
import { Container, Row, Col, Button, Card } from 'react-bootstrap'
import { Header, PageTitle, Footer } from '../components'
import { Link } from 'react-router-dom'
import './pages.css'
import Theme from '../Theme.js';
import styled from 'styled-components'
import './ResumePage.css'
import img1 from '../assets/resumeimg1.png'
import img2 from '../assets/resumeimg2.png'
import img3 from '../assets/resumeimg3.png'
import img4 from '../assets/resumeimg4.png'

const Change = styled(Button)`
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

const Image = styled(Card.Img)`
  height: 400px;
  width:100%;
  border-radius: 30px 30px 0 0;
`;

const Text = styled(Card.Text)`
  font-size: 25px;
  font-weight: ${props => props.theme.fontWeights.semiBold};
  color: white;
`;

const Individual = styled(Card)`
  background-color: ${props => props.theme.colors.rackley};
  height: 500px;
  border-radius: 30px;
  cursor: pointer;
`;

const data = [
  {
    title: "Crafting the Perfect Resume: Tips for Standing Out to Employers",
    image: img1
  },
  {
    title: "The Dos and Don'ts of Resume Writing: Common Mistakes to Avoid",
    image: img2
  },
  {
    title: 'Maximizing Your Impact: How to Tailor Your Resume to Each Job Application',
    image: img3
  },
  {
    title: 'From Skills to Success: Highlighting Your Achievements on Your Resume',
    image: img4
  }
]

const ResumePage = () => {
  return (
    <Theme>
    <div className='Page'>
  <Header />
    <PageTitle title="Resume Writing"/>
  <Container>
    <Row>
        <Col>
        <Link to="/interviewWritingPage">
            <Change className='resumebtn'>Read Interview Techniques</Change>
        </Link>
        </Col>
    </Row>
    
    <Row>
        {data.map((article) => (
          <Col key={article.id} xs={12} sm={12} md={6} lg={6} className='my-3'>
            <Individual>
              <Image variant="top" src={article.image} />
              <Card.Body>
                <Text>{article.title}</Text>
              </Card.Body>
            </Individual>
          </Col>
        ))}
      </Row>
  </Container>
  <Footer />
</div>
</Theme>
  )
}

export default ResumePage
