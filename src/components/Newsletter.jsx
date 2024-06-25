import React, { useState } from 'react';
import { Container, Form, Button, Col } from 'react-bootstrap';

import styled from 'styled-components'
import Theme from '../Theme.js';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Label = styled(Form.Label)`
    color: ${props => props.theme.colors.black};
    font-family: ${props => props.theme.fonts};
    font-size: 20px;
    font-weight: ${props => props.theme.fontWeights.bold} !important;
`;

const Subscribe = styled(Button)`
  background-color: ${props => props.theme.colors.rhythm};
  font-family: ${props => props.theme.fonts[0]};
  font-size: 20px;
  font-weight: ${props => props.theme.fontWeights.bold} !important;
  border: ${props => props.theme.colors.rhythm};

  &:hover, &:active{
    background-color: ${props => props.theme.colors.pink} !important;
    border: ${props => props.theme.colors.pink} !important;
  }
`;

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle submitting the form
    console.log(`Submitting newsletter sign up for email: ${email}`);
  }

  return (
   <Theme>
     <Container>
        <Form onSubmit={handleSubmit}>
            <Wrapper className='py-5'>
                <Col xs={12} sm={8} md={6}>
                <Form.Group controlId="formEmail">
                    <Label>Sign up for our newsletter</Label>
                    <Form.Control
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    required
                    />
                </Form.Group>
                <Wrapper>
                <Subscribe type="submit" className="w-50 my-3">
                    Subscribe
                </Subscribe>
                </Wrapper>
                </Col>
            </Wrapper>
        </Form>
    </Container>
   </Theme>
  );
};

export default Newsletter;