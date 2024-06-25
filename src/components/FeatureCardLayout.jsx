import React from 'react';
import { Container, Row } from 'react-bootstrap';
import FeatureCard from './FeatureCard';

// import styled from 'styled-components'
// import Theme from '../Theme.js';

const data = [
  {
    index: 1,
    title: 'AI Mock Interview',
    description: 'Practice your next interview with an AI',
    route: '/mockCover'
  },
  {
    index: 2,
    title: 'Chat With Professional',
    description: 'Get valuable advises from industry professional',
    route: '/professional'
  },
  {
    index: 3,
    title: 'Upcoming Courses',
    description: 'Join courses offered this month by our professionals',
    route: '/coursePage'
  },
  {
    index: 4,
    title: 'FuturePath Partner Program',
    description: 'Gain experience in different fields',
    route: '/programPage'
  }
]

const FeatureCardLayout = () => {
  return (
    <Container>
      <Row>
        {data.map(card => (
          <FeatureCard
            index = {(card.index%2)}
            title={card.title}
            description={card.description}
            route={card.route}
          />
        ))}
      </Row>
    </Container>
  );
}

export default FeatureCardLayout;