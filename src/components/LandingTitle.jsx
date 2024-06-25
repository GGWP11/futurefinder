import Container from 'react-bootstrap/Container';
import { Row } from 'react-bootstrap';

import styled from 'styled-components'
import Theme from '../Theme.js';

const Line = styled.div`
  border: 10px solid ${props => props.theme.colors.orange};
  
  ${props => props.theme.breakpoints.down('lg')} {
    border: 5px solid ${props => props.theme.colors.orange};
  }
`;

const Margin = styled(Row)`
  margin: 40px 0;
  
`;

const Title = styled.p`
    font-size: ${props => props.theme.fontSizes.large};
    font-weight: ${props => props.theme.fontWeights.black};
    font-family: ${props => props.theme.fonts};
    color: ${props => props.theme.colors.grape};
    text-align: "center";

  ${props => props.theme.breakpoints.down('lg')} {
    font-size: ${props => props.theme.fontSizes.medium};
  }
`;

const LandingTitle = ({title}) =>  {
    return (
      <Theme>
        <Container>
          <Margin>
            <Title>{title}</Title>
            <Line></Line>
          </Margin>
        </Container>
      </Theme>
    );
  }

export default LandingTitle;