import React, { useState, useEffect, useRef } from 'react'
import { Header, PageTitle, Footer} from '../components';
import { Link } from "react-router-dom";
import './pages.css';
import './MockInterview.css'
import styled from 'styled-components'
import Theme from '../Theme.js';
import close from '../assets/close.png';
import { Container, Row, Col, Button } from 'react-bootstrap';
import placeholderImage from '../assets/nocam.png';

const Img = styled.img`
  width: 100%;
  height: 100%;
  position: relative;
  ${props => props.theme.breakpoints.down('lg')} {
    height: 300px;
  }
`;

const Video = styled.video`
  width: 100%;
  border-radius: 5px;
  height: 100%;
  position: relative;
  ${props => props.theme.breakpoints.down('lg')} {
    height: 300px;
  }
`;

const Result = styled(Button)`
  background-color: ${props => props.theme.colors.orange};
  color: ${props => props.theme.colors.black};
  font-family: ${props => props.theme.fonts[0]};
  font-size: 20px;
  font-weight: ${props => props.theme.fontWeights.bold} !important;
  border: ${props => props.theme.colors.orange};
  padding: 10px 40px;

  &:hover, &:active {
    background-color: ${props => props.theme.colors.black} !important;
    color: ${props => props.theme.colors.orange} !important;
    border: ${props => props.theme.colors.black} !important;
  }
`;

const Camscreen = styled.div`
  position: relative;
  width: 90%;
  height: 70vh;
  background: #D9D9D9;
  margin: 0 auto;

  #result-button {
    position: absolute;
  }
`;

const Wrapper = styled(Row)`
  margin: 0;
  border-radius: 0;
`;

const Qna = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background-color: white;
  padding: 20px;
  font-family: 'Montserrat';
  font-style: normal;
  width: 30%;
  font-weight: 500;
  font-size: 20px;
`;

const MockInterviewPage = () => {
  const videoRef = useRef(null);
  const [isStreaming, setIsStreaming] = useState(false);

  useEffect(() => {
    let stream;
  
    if (isStreaming) {
      navigator.mediaDevices
        .getUserMedia({ video: true, audio: true })
        .then((newStream) => {
          stream = newStream;
          videoRef.current.srcObject = stream;
          videoRef.current.play();
        })
        .catch((error) => {
          console.error('Error accessing webcam', error);
        });
    } else {
      if (videoRef.current) {
        stream = videoRef.current.srcObject;
        if (stream) {
          const tracks = stream.getTracks();
          tracks.forEach((track) => {
            track.stop();
          });
          videoRef.current.srcObject = null;
        }
      }
    }
  
    return () => {
      if (stream) {
        stream.getTracks().forEach((track) => track.stop());
      }
    };
  }, [isStreaming]);
  
  const handleToggleStream = () => {
    setIsStreaming(!isStreaming);
  };
  
  return (
    <Theme>
      
    <div className='Page'>
        <Header />
       <Container>
       <PageTitle title="Mock Interview"/>
        <Camscreen>
        {isStreaming ? (
                <Video ref={videoRef} muted autoPlay></Video>
              ) : (
                <Img src={placeholderImage} alt="Placeholder" />
              )}
        <Qna>
          <p>Question 1:</p>
          <p>Why do you want this job?</p>
          <br />
          <p>Question 2:</p>
          <p>What makes you the best person for this job?</p>
        </Qna>
        <Wrapper>
            <Button variant={isStreaming ? 'danger' : 'success'} onClick={handleToggleStream}>
                    {isStreaming ? 'Stop Camera' : 'Start Camera'}
                  </Button>
        </Wrapper>
      <div className='timer'>
        <h4>15:00</h4>
      </div>
      <Link to="/mockResult" style={{textDecoration:'none'}}>
          <Result id="result-button">Result</Result>
        </Link>
      </Camscreen>
       </Container>
       
    <Footer />
    </div>
    </Theme>
  )
}

export default MockInterviewPage
