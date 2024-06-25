import React from 'react';
import { Container, Row } from 'react-bootstrap';
import PackageCard from './PackageCard';

// import styled from 'styled-components'
// import Theme from '../Theme.js';

const data = [
  {
    title: 'Basic',
    description: ['Resume Writing', 'Interview Techniques', 'Career Path Analysis', 'Online Workshop', 'Career Path Information'],
    button: "Sign Up",
    route: '/signup'
  },
  {
    title: 'Budget',
    description: ['1 Session Of AI-based Mock Interview', 'OR', '1 Session Of Chatting With Industrial Professional'],
    button: "Subscribe Now",
    route: '/Plan'
  },
  {
    title: 'Premium',
    description: ['AI-based Mock Interview','Chat With Industrial Professional','Group Coaching'],
    button: "Subscribe Now",
    route: '/Plan'
  }
]

const PackageCardLayout = () => {
  return (
    <Container>
      <Row className="justify-content-md-center my-5">
        {data.map(card => (
          <PackageCard
            title={card.title}
            description={card.description}
            route={card.route}
            button={card.button}
          />
        ))}
      </Row>
    </Container>
  );
}

export default PackageCardLayout;