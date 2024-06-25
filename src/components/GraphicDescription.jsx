import Container from 'react-bootstrap/Container';
import { Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import Theme from '../Theme.js';

const Img = styled.img`
  width: 800px;

  ${props => props.theme.breakpoints.down('lg')} {
    width: 600px;
  }
`;

const Line = styled.div`
  border: 10px solid ${props => props.theme.colors.orange};
  margin: 40px 0;
`;

const Title = styled.p`
  font-size: ${props => props.theme.fontSizes.xlarge};
  font-weight: ${props => props.theme.fontWeights.black};
  font-family: ${props => props.theme.fonts};
  color: ${props => props.theme.colors.grape};
  text-align: ${props => props.imagePosition === 'left' ? 'right' : 'left'};

  ${props => props.theme.breakpoints.down('lg')} {
    font-size: ${props => props.theme.fontSizes.medium};
    text-align: center;
  }
`;

const Description = styled.p`
  font-size: 25px;
  text-align: center;
  font-weight: ${props => props.theme.fontWeights.semiBold};
  color: ${props => props.theme.colors.rhythm};
  text-align: ${props => props.imagePosition === 'left' ? 'right' : 'center'};
`;

const Desp = styled(Col)`
  padding: 30px;
`;

const Register = styled(Button)`
  background-color: ${props => props.theme.colors.orange};
  color: ${props => props.theme.colors.black};
  font-family: ${props => props.theme.fonts[0]};
  font-size: 20px;
  font-weight: ${props => props.theme.fontWeights.bold} !important;
  border: ${props => props.theme.colors.orange};
  padding: 10px 40px;
  border-radius: 5px !important;
  text-decoration: none;

  &:hover, &:active {
    background-color: ${props => props.theme.colors.black} !important;
    color: ${props => props.theme.colors.orange} !important;
    border: ${props => props.theme.colors.black} !important;
  }
`;

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
}
`;

const GraphicDescription = ({imageSrc, title, description, imagePosition}) =>  {
    return (
      <Theme>
        <Container>
          <Row>
            {imagePosition === 'left' ? (
              <>
                <Col md={7}>
                  <Img src={imageSrc} alt="graphic image" />
                </Col>
                <Col md={5}>
                  <Title imagePosition={imagePosition}>{title}</Title>
                  <Line></Line>
                  <Description imagePosition={imagePosition}>{description}</Description>
                </Col>
              </>
            ) : (
              <>
                <Desp md={5}>
                  <Title imagePosition={imagePosition}>{title}</Title>
                  <Description imagePosition={imagePosition}>{description}</Description>
                  <Wrapper>
                    <Register as={Link} to="/signup">Sign Up</Register>
                  </Wrapper>
                </Desp>
                <Col md={7}>
                  <Img src={imageSrc} alt="graphic image" />
                </Col>
              </>
            )}
          </Row>
        </Container>
      </Theme>
    );
  }

export default GraphicDescription;