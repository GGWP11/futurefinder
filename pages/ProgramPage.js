import React, { useState } from 'react'
import { Container, Row, Col, Dropdown, Card, Button } from 'react-bootstrap'
import { Header, PageTitle, Footer } from '../components'
import { Link } from 'react-router-dom'
import Program from './Program'

import styled from 'styled-components'
import Theme from '../Theme.js'

const Image = styled(Card.Img)`
  height: 300px;
  padding: 30px;
`

const CardText = styled(Card.Text)`
  font-size: 20px;
  font-weight: ${(props) => props.theme.fontWeights.medium};
`

const Individual = styled(Card)`
  background-color: ${(props) => props.theme.colors.bubbles};
  border: 5px solid ${(props) => props.theme.colors.rackley};
`

const View = styled(Button)`
  background-color: ${(props) => props.theme.colors.orange};
  color: ${(props) => props.theme.colors.black};
  font-family: ${(props) => props.theme.fonts[0]};
  font-size: 15px;
  font-weight: ${(props) => props.theme.fontWeights.bold} !important;
  border: ${(props) => props.theme.colors.orange};
  padding: 10px 40px;

  &:hover,
  &:active {
    background-color: ${(props) => props.theme.colors.black} !important;
    color: ${(props) => props.theme.colors.orange} !important;
    border: ${(props) => props.theme.colors.black} !important;
  }
`

const Filter = styled(Dropdown.Toggle)`
  background-color: ${(props) => props.theme.colors.rhythm};
  font-family: ${(props) => props.theme.fonts};
  font-size: 20px;
  font-weight: ${(props) => props.theme.fontWeights.bold} !important;
  border: ${(props) => props.theme.colors.rhythm};

  &:hover,
  &:active {
    background-color: ${(props) => props.theme.colors.pink} !important;
    border: ${(props) => props.theme.colors.pink} !important;
  }
`

const DropDownItem = styled(Dropdown.Item)`
  color: ${(props) => props.theme.colors.black} !important;
  font-family: ${(props) => props.theme.fonts};
  font-size: 16px;
  font-weight: ${(props) => props.theme.fontWeights.bold} !important;
  text-decoration: none;
  border: none;
  display: block;
  width: 100%;
  white-space: nowrap;
  padding: 4px 16px;

  &:hover,
  &:active,
  &:visited {
    background-color: ${(props) => props.theme.colors.pink};
    color: ${(props) => props.theme.colors.white} !important;
  }
`

const Content = styled.p`
  font-size: 25px;
  font-weight: ${(props) => props.theme.fontWeights.medium};
  line-height: 1.5;
  margin-bottom: 5rem;  
  margin-left: 7rem;
`;

const CompanyPage = () => {
  const [selectedIndustry, setSelectedIndustry] = useState('')

  const handleIndustrySelect = (eventKey) => {
    setSelectedIndustry(eventKey)
  }

  const filteredCompany = selectedIndustry
    ? Program.filter((Program) => {
        return Program.industry === selectedIndustry
      })
    : Program

  return (
    <Theme>
      <div className="Page">
        <Header />
        <PageTitle title="FuturePath Partner Program" />
        <div className="content">
          <Content>
            FuturePath Partner Program is a program to explore the potential and enhance the career options for students
          </Content>
        </div>

        <Container>
          <Row>
            <Col>
              <Dropdown onSelect={handleIndustrySelect}>
                <Filter variant="primary" id="profession-filter">
                  {selectedIndustry ? selectedIndustry : 'Filter by Industry'}
                </Filter>

                <Dropdown.Menu>
                  <DropDownItem eventKey="">All</DropDownItem>
                  <DropDownItem eventKey="Law">Law</DropDownItem>
                  <DropDownItem eventKey="Manufacturing">
                    Manufacturing
                  </DropDownItem>
                  <DropDownItem eventKey="Logistics">Logistics</DropDownItem>
                  <DropDownItem eventKey="Accounting">Accounting</DropDownItem>
                  <DropDownItem eventKey="Information Technology">
                    Information Technology
                  </DropDownItem>
                </Dropdown.Menu>
              </Dropdown>
            </Col>
          </Row>
          <Row>
            {filteredCompany.map((Company) => (
              <Col key={Company.id} xs={6} lg={4} xl={3} className="my-3">
                <Individual>
                  <Image variant="top" src={Company.image} />
                  <Card.Body>
                    <Card.Title>{Company.programme}</Card.Title>
                    <CardText>{Company.industry}</CardText>
                    <Link to={`/programProfile/${Company.id}`}>
                      <View>View Details</View>
                    </Link>
                  </Card.Body>
                </Individual>
              </Col>
            ))}
          </Row>
        </Container>
        <Footer />
      </div>
    </Theme>
  )
}

export default CompanyPage
