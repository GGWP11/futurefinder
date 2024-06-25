import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Header, PageTitle, Footer } from '../components'

import Theme from '../Theme.js';
import './pages.css'
import './OfferLetterVerification.css'

const OfferLetterVerification = () => {
  return (
    <Theme>
        <div className='Page'>
            <Header />
            <PageTitle title="Offer Letter Verification" />
            <Container className='verification-body'>
                <Row>
                    <Col>
                        <p><button style={{ border:'none', background:'none', color: 'blue', fontWeight: 'bold', textDecoration: 'underline' }}>DROP YOUR OFFER LETTER</button> from this company to verify you are one of the employees before leaving a review to <span style={{ fontWeight: 'bolder' }}>GAIN 2 POINTS!</span></p>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </div>
    </Theme>
  )
}

export default OfferLetterVerification
