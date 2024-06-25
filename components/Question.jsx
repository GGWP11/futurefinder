import React from "react";
import { Container, Col } from 'react-bootstrap';

import styled from 'styled-components'
import Theme from '../Theme.js';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  input[type="radio"] {
    appearance: none;
  }

  input#strongly-agree,
  input#strongly-disagree  {
    height: 70px;
    width: 70px;
  }

  input#agree, 
  input#disagree {
    height: 50px;
    width: 50px;
  }

  input#neutral {
    height: 30px;
    width: 30px;
  }

  input#strongly-agree,
  input#agree {
    border: 5px solid ${props => props.theme.colors.pink};
  }

  input#neutral {
    border: 5px solid ${props => props.theme.colors.rackley};
  }

  input#disagree,
  input#strongly-disagree {
    border: 5px solid ${props => props.theme.colors.grape};
  }

  input#strongly-disagree:checked,
    input#disagree:checked,
    input#strongly-disagree:hover,
    input#disagree:hover{
        background: ${props => props.theme.colors.grape};
    }

    input#neutral:checked,
    input#neutral:hover{
        background: ${props => props.theme.colors.rackley};
    }

    input#strongly-agree:hover,
    input#agree:hover,
    input#strongly-agree:checked,
    input#agree:checked{
        background: ${props => props.theme.colors.pink};
    }
`;

const Title = styled.p`
    font-size: 25px;
    font-weight: ${props => props.theme.fontWeights.semiBold};
    font-family: ${props => props.theme.fonts};
    color: ${props => props.theme.colors.grape};
    padding: 30px 0 0 10px;
    text-align: center;

    display: flex;
    justify-content: center;
    align-items: center;

    ${props => props.theme.breakpoints.down('lg')} {
    font-size: ${props => props.theme.fontSizes.medium};
    }
`;

const Line = styled.div`
  border: 3px solid ${props => props.theme.colors.orange};
  margin: 40px 0;
`;

const Label = styled.h5`
    font-size: 25px;
    font-weight: ${props => props.theme.fontWeights.semiBold};
    font-family: ${props => props.theme.fonts};
    text-align: center;
`;

const Agree = styled(Label)`
  color: ${props => props.theme.colors.pink};
`;

const Disagree = styled(Label)`
  color: ${props => props.theme.colors.grape};
`;


const Question = ({ question }) => {
  return (
    <Theme>
        <Container>
        <div>
            <Title>{question}</Title>
            <form>
               <Wrapper>
                <Col md={2} className="form-check form-check-inline">
                        <Agree>Agree</Agree>
                    </Col>
                    <Col md={1} className="form-check form-check-inline">
                        <Wrapper>
                        <input className="form-check-input" type="radio" name="answer" id="strongly-agree" value="strongly-agree" />
                        </Wrapper>
                    </Col>
                    <Col md={1} className="form-check form-check-inline">
                        <Wrapper>
                            <input className="form-check-input" type="radio" name="answer" id="agree" value="agree" />
                        </Wrapper>
                    </Col>
                    <Col md={1} className="form-check form-check-inline">
                        <Wrapper>
                            <input className="form-check-input" type="radio" name="answer" id="neutral" value="neutral" />
                        </Wrapper>
                    </Col>
                    <Col md={1} className="form-check form-check-inline">
                        <Wrapper>
                        <input className="form-check-input" type="radio" name="answer" id="disagree" value="disagree" />  
                        </Wrapper>  
                    </Col>
                    <Col md={1} className="form-check form-check-inline">
                        <Wrapper>
                        <input className="form-check-input" type="radio" name="answer" id="strongly-disagree" value="strongly-disagree" />
                        </Wrapper>
                    </Col>
                    <Col md={2} className="form-check form-check-inline">
                        <Disagree>Disagree</Disagree>
                    </Col>
               </Wrapper>
            </form>
            <Line></Line>
            </div>
        </Container>
    </Theme>
  );
};

export default Question;
