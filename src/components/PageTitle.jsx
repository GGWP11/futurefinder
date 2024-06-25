import Container from 'react-bootstrap/Container';
import { Row } from 'react-bootstrap';

import styled from 'styled-components'
import Theme from '../Theme.js';

const Margin = styled(Row)`
  margin: 40px 0;
`;

const Title = styled.p`
    font-size: ${props => props.theme.fontSizes.medium};
    font-weight: ${props => props.theme.fontWeights.black};
    font-family: ${props => props.theme.fonts};
    color: ${props => props.theme.colors.grape};
    text-align: "left";

    display: flex;
    justify-content: flex-start;
    align-items: center;

  ${props => props.theme.breakpoints.down('lg')} {
    font-size: ${props => props.theme.fontSizes.medium};
  }
`;

const Line = styled.div`
  border: 4px solid ${props => props.theme.colors.orange};
  width: 50%;
`;

const PageTitle = ({title}) =>  {
    return (
      <Theme>
        <Container>
          <Margin>
            <Title>{title}</Title>
            <Line />
          </Margin>
        </Container>
      </Theme>
    );
  }

export default PageTitle;