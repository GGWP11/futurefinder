import React from 'react'
import { Container, Row, Col, Button, Card } from 'react-bootstrap'
import { Header, PageTitle, Footer } from '../components'
import { Link } from 'react-router-dom'
import './pages.css'
import Theme from '../Theme.js';
import './ResumePage.css'
import a1 from '../assets/a1.png'
import b1 from '../assets/b1.png'
import c1 from '../assets/c1.png'
import d1 from '../assets/d1.png'
import styled from 'styled-components'

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
    title: "Top 10 Interview Mistakes and How to Avoid Them",
    image: a1
  },
  {
    title: 'How to Answer the "Tell Me About Yourself" Question in an Interview',
    image: b1
  },
  {
    title: 'How to Answer the "Tell Me About Yourself" Question in an Interview',
    image: c1
  },
  {
    title: 'Body Language and the Job Interview: How to Use Nonverbal Communication to Ace Your Interview',
    image: d1
  }
]

const InterviewWritingPage = () => {
  return (
    <Theme>
    <div className='Page'>
  <Header />
    <PageTitle title="Interview Techniques"/>
  <Container>
    <Row>
        <Col>
        <Link to="/resumePage">
            <Change className='resumebtn'>Read Resume Writing</Change>
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

export default InterviewWritingPage
