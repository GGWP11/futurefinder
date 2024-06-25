import Container from 'react-bootstrap/Container';
import { Row } from 'react-bootstrap';

import styled from 'styled-components'
import Theme from '../Theme.js';

const Margin = styled(Row)`
  margin: 20px 0;
  
`;

const Title = styled.p`
    font-size: ${props => props.theme.fontSizes.medium};
    font-weight: ${props => props.theme.fontWeights.black};
    font-family: ${props => props.theme.fonts};
    color: ${props => props.theme.colors.grape};
    text-align: "left";

  ${props => props.theme.breakpoints.down('lg')} {
    font-size: ${props => props.theme.fontSizes.small};
  }
`;

const Description = styled.p`
    font-size: 20px;
    font-weight: ${props => props.theme.fontWeights.medium};
    font-family: ${props => props.theme.fonts};
    color: ${props => props.theme.colors.rackley};
    text-align: "left";

  ${props => props.theme.breakpoints.down('lg')} {
    font-size: ${props => props.theme.fontSizes.smallMedium};
  }
`;

const Line = styled.div`
  border: 2px solid ${props => props.theme.colors.orange};
`;

const StyledLi = styled.li`
  font-size: 20px;
  font-weight: ${props => props.theme.fontWeights.medium};
  font-family: ${props => props.theme.fonts};
  color: ${props => props.theme.colors.rackley};
  text-align: "left";

  ${props => props.theme.breakpoints.down('lg')} {
    font-size: ${props => props.theme.fontSizes.smallMedium};
  }
`;

const UnorderedList = styled.ul`
  list-style-type: disc;
  margin-left: 1.5rem;
`;

const ProfileContent = ({title, description}) =>  {
    return (
    <Theme>
        <Container>
          <Margin>
            <Title>{title}</Title>
            {title === 'Experience' && Array.isArray(description) ? (
              description.map(exp => (
                <Description key={exp.year}>
                  {exp.year} - {exp.profession}
                </Description>
              ))
            ) : title === 'Area of Expertise' && Array.isArray(description) ? (
                <UnorderedList>
                {description.map((skill) => (
                  <StyledLi key={skill}>{skill}</StyledLi>
                ))}
              </UnorderedList>
            ) : title === 'Reviews' && Array.isArray(description) ? (
              <UnorderedList>
              {description.map((review) => (
                <StyledLi key={review.id}>{review.comment}</StyledLi>
              ))}
              </UnorderedList>
            ) : (
              <Description>{description}</Description>
            )}
            <Line></Line>
          </Margin>
        </Container>
      </Theme>
    );
  }


export default ProfileContent;