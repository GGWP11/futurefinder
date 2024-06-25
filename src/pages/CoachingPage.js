import React, { useState, useEffect, useRef } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { Header, PageTitle, Footer, GoBack } from '../components'
import styled from 'styled-components'
import Theme from '../Theme.js'
import image from '../assets/profile1.png'
import placeholderImage from '../assets/nocam.png'

const profiles = []
for (let i = 1; i <= 6; i++) {
  profiles.push(require(`../assets/profile${i}.png`))
}

const Img = styled.img`
  width: 100%;
  height: 500px;
  padding: 20px;

  ${(props) => props.theme.breakpoints.down('lg')} {
    height: 300px;
  }
`

const Participants = styled.img`
  width: 50%;
  height: 150px;
  padding: 20px;

  ${(props) => props.theme.breakpoints.down('lg')} {
    height: 300px;
  }
`

const Wrapper = styled(Row)`
  margin: 20px 0;
  width: 100%;
  height: 500px;
  background-color: ${(props) => props.theme.colors.rackley};
  border-radius: 5px;

  ${(props) => props.theme.breakpoints.down('lg')} {
    height: 300px;
  }
`

const Video = styled.video`
  width: 100%;
  border-radius: 5px;
  height: 500px;

  ${(props) => props.theme.breakpoints.down('lg')} {
    height: 300px;
  }
`

const Pad = styled.h2`
padding: 20px;
`;

const CoachingPage = () => {
  const videoRef = useRef(null)
  const [isStreaming, setIsStreaming] = useState(false)

  useEffect(() => {
    let stream

    if (isStreaming) {
      navigator.mediaDevices
        .getUserMedia({ video: true, audio: true })
        .then((newStream) => {
          stream = newStream
          videoRef.current.srcObject = stream
          videoRef.current.play()
        })
        .catch((error) => {
          console.error('Error accessing webcam', error)
        })
    } else {
      if (videoRef.current) {
        stream = videoRef.current.srcObject
        if (stream) {
          const tracks = stream.getTracks()
          tracks.forEach((track) => {
            track.stop()
          })
          videoRef.current.srcObject = null
        }
      }
    }

    return () => {
      if (stream) {
        stream.getTracks().forEach((track) => track.stop())
      }
    }
  }, [isStreaming])

  const handleToggleStream = () => {
    setIsStreaming(!isStreaming)
  }

  return (
   <Theme>
     <div className='Page'>
      <Header />
      <Container>
        <PageTitle title="Group Coaching" />
        <GoBack route="/professional"/>
        
        <Pad>What You'll Be Expecting in A Junior Software Engineering Role</Pad>
          <Wrapper>
            <Row>
              <Col md={4}>
                <Img src={image} alt="Mentor's video" />
              </Col>
              <Col md={4}>
                {isStreaming ? (
                  <Video ref={videoRef} muted autoPlay></Video>
                ) : (
                  <Img src={placeholderImage} alt="Placeholder" />
                )}
              </Col>
              <Col md={4}>
                {[...Array(6)].map((_, i) => (
                  <Participants key={i} src={profiles[i]} alt="Placeholder" />
                ))}
              </Col>
            </Row>
            <Button
              variant={isStreaming ? 'danger' : 'success'}
              onClick={handleToggleStream}
            >
              {isStreaming ? 'Stop Camera' : 'Start Camera'}
            </Button>
          </Wrapper>
        </Container>
        <Footer />
      </div>
    </Theme>
  )
}

export default CoachingPage
