import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import item1 from '../assets/carousel1.png';
import { Link } from 'react-router-dom';

import workshop from '../pages/Workshop'
import styled from 'styled-components'
import Theme from '../Theme.js';

const Margin = styled(Carousel)`
  margin: 40px 0;
`;

function WorkshopCarousel() {
  return (
    <Theme>
      <Container>
        <Margin>
          <Carousel.Item>
            <Link to = "workshop">
            <img
              className="d-block w-100"
              style={{cursor:'pointer'}}
              src={item1}
              alt="First slide"
            />
            </Link>
          </Carousel.Item>
          <Carousel.Item>
          <Link to = "workshop">
            <img
              className="d-block w-100"
              src={item1}
              alt="Second slide"
            />
            </Link>
          </Carousel.Item>
          <Carousel.Item>
          <Link to = "workshop">
            <img
              className="d-block w-100"
              src={item1}
              alt="Third slide"
            />
            </Link>
          </Carousel.Item>
        </Margin>
      </Container>
    </Theme>
  );
}

export default WorkshopCarousel;