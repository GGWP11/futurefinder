import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import logo1 from '../assets/logo1.png';
import logo2 from '../assets/logo2.png';
import logo3 from '../assets/logo3.png';
import logo4 from '../assets/logo4.png';
import logo5 from '../assets/logo5.png';
import logo6 from '../assets/logo6.png';

import styled from 'styled-components'
import Theme from '../Theme.js';

const logos = [logo1, logo2, logo3, logo4, logo5, logo6];

const Logo = styled.img`
  width: 300px;

  ${props => props.theme.breakpoints.down('lg')} {
    width: 200px;
  }
`;

const Section = styled(Col)`
  padding: 40px 20px;
`;

const FeatureCardLayout = () => {
  return (
    <Theme>
        <Container>
            <Row>
                {logos.map((logo, index) => (
                <Section key={index} xs={12} sm={6} md={4} className="text-center">
                    <Logo src={logo} alt={`Logo ${index}`}/>
                </Section>
                ))}
            </Row>
        </Container>
    </Theme>
  );
}

export default FeatureCardLayout;