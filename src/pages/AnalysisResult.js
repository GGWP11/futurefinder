import Container from 'react-bootstrap/Container';
import { Row, Col } from 'react-bootstrap';
import { Header, PageTitle, Footer} from '../components';
import styled from 'styled-components'
import Theme from '../Theme.js';
import imageSrc from '../assets/csprofession.png';

const Img = styled.img`
  width: 650px;
`;

const Title = styled.p`
  font-size: ${props => props.theme.fontSizes.large};
  font-weight: ${props => props.theme.fontWeights.black};
  font-family: ${props => props.theme.fonts};
  color: ${props => props.theme.colors.grape};
  text-align: center;

  ${props => props.theme.breakpoints.down('lg')} {
    font-size: ${props => props.theme.fontSizes.medium};
  }
`;

const Description = styled.p`
  font-size: 25px;
  text-align: center;
  font-weight: ${props => props.theme.fontWeights.semiBold};
  color: ${props => props.theme.colors.rhythm};
  text-align: left;
`;

const Bold = styled.b`
  color: ${props => props.theme.colors.pink};
`;

const AnalysisPage = () => {
  return (
    <div className="Page">
      <Header />
      <PageTitle title="Career Path Analysis Result"/>
      <Theme>
        <Container>
          <Row>
            <Col md={6}>
                <Img src={imageSrc} alt="graphic image" />
            </Col>
            <Col md={6}>
    <Title>Software Engineering</Title>
    <Description>
    Based on your answers, our analysis suggests that you have a strong interest in the field of <Bold>Software Engineering</Bold>. 
    Some potential career paths for you could include becoming a <Bold>software engineer, full-stack developer, mobile application developer, software architect, or DevOps engineer</Bold>. 
    You may also want to consider pursuing further education and training in areas such as <Bold>software design patterns, software testing, software development methodologies, version control systems, or cloud computing</Bold>. 
    These areas of study and professions can help you develop the skills and knowledge needed to succeed in the software engineering field.
    </Description>
</Col>
          </Row>
        </Container>
      </Theme>
      <Footer />
    </div>
  )
}

export default AnalysisPage;
