import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import styled from 'styled-components'
import Theme from '../Theme.js';
// import { Link } from "react-router-dom";

const PageCount = styled(Button)`
  border-radius: 50%;
  height: 25px;
  width: 25px;
  background-color: ${props => props.theme.colors.rackley} !important;
  border: ${props => props.theme.colors.rackley} !important;
  opacity: 1 !important;

  &.active {
    background-color: ${props => props.theme.colors.orange} !important;
    border: ${props => props.theme.colors.orange} !important;
  }
`;

const Navigation = styled(Button)`
  background-color: ${props => props.theme.colors.orange};
  color: ${props => props.theme.colors.black};
  font-family: ${props => props.theme.fonts[0]};
  font-size: 20px;
  font-weight: ${props => props.theme.fontWeights.bold} !important;
  border: ${props => props.theme.colors.orange} !important;
  padding: 10px 40px;

  &:hover, &:active {
    background-color: ${props => props.theme.colors.black} !important;
    color: ${props => props.theme.colors.orange} !important;
    border: ${props => props.theme.colors.black} !important;
  }
`;

const Wrapper = styled(Row)`
  padding: 30px 0;
`;

const MockResultFooter = ({totalPages, currentPage}) => {
  const pageNumbers = [...Array(totalPages).keys()];
  return (
    <Theme>
      <Container>
          <Wrapper className="form-footer">
              <Col>
                <Navigation>
                  <span>Go Back</span>
                </Navigation>
              </Col>
              <Col className="text-center">
                <div className="d-flex justify-content-center align-items-center my-4">
                  {pageNumbers.map((index) => (
                    <PageCount
                      key={index}
                      variant="primary"
                      className={`mx-2 ${index === currentPage ? 'active' : ''}`}
                      disabled
                    ></PageCount>
                  ))}
              </div>
            </Col>
              <Col className="text-end">
                <Navigation>Next</Navigation>
              </Col>
        </Wrapper>
      </Container>
    </Theme>
  );
}

export default MockResultFooter;
