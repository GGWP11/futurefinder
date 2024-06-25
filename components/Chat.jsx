import { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import styled from 'styled-components'
import Theme from '../Theme.js';

// Styles for chat messages
const ChatBox = styled.div`
  background-color: ${props => props.theme.colors.rhythm};
  border-radius: 5px;
  margin: 20px;
  border: white;
  max-width: 100%;
  align-self: ${props => props.isMe ? "flex-end" : "flex-start"};
`;

const ChatHeader = styled.div`
  background-color: white;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: ${props => props.theme.colors.rhythm};
  font-size: 14px;
  font-weight: ${props => props.theme.fontWeights.bold};
  padding: 10px;
`;

const ChatMessage = styled.p`
  margin: 10px;
  overflow-wrap: break-word;
  border-radius: 5px;
  color: ${props => props.theme.colors.bubbles};
  font-family: ${props => props.theme.fonts};
  font-size: ${props => props.theme.fontSizes.small};
`;

const TextBox = styled(Form.Group)`
  width: 100%;
`;

const Send = styled(Button)`
  background-color: ${props => props.theme.colors.rhythm};
  font-family: ${props => props.theme.fonts};
  font-size: 15px;
  padding: 0 30px;
  font-weight: ${props => props.theme.fontWeights.bold} !important;
  border: ${props => props.theme.colors.rhythm};

  &:hover, &:active{
    background-color: ${props => props.theme.colors.pink} !important;
    border: ${props => props.theme.colors.pink} !important;
  }
`;

const Chat = () => {
  const [chatMessages, setChatMessages] = useState([
    { name: 'Me', isMe:true, message: "Hi, I'm interested in learning more about the software development industry. Can you tell me a little bit about your experience?", time: '12:30 PM' },
    { name: 'Bob Johnson', isMe:false, message: "Sure, I've been working in the software development industry for over 15 years now. I've worked on a variety of projects, from building mobile apps to developing enterprise software.", time: '12:31 PM' },
    { name: 'Me', isMe:true, message: "Wow, that's TRYing too beee! What do you think are the most important skills for a software developer to have?", time: '12:32 PM' },
    { name: 'Bob Johnson', isMe:false, message: "I think there are a few key skills that every developer should have. Firstly, you need to be able to write clean, well-structured code. This is important because it makes it easier for other developers to read and understand your code. Secondly, you need to have good problem-solving skills. As a developer, you'll often come across complex problems that require creative solutions. Finally, you need to be able to work well in a team. Software development is rarely a solo activity, so being able to collaborate with others is essential.", time: '12:33 PM' },
    { name: 'Me', isMe:true, message: "That makes sense. What programming languages do you think are the most important to learn?", time: '12:34 PM' },
    { name: 'Bob Johnson', isMe:false, message: "There are a lot of programming languages out there, and the answer to this question really depends on what you want to do. However, I would say that some of the most important languages to learn include Java, Python, and JavaScript. Java is used heavily in enterprise development, Python is great for scientific computing and data analysis, and JavaScript is the language of the web.", time: '12:35 PM' },
    { name: 'Me', isMe:true, message: "Thanks for sharing your insights. Do you have any advice for someone who is just starting out in the industry?", time: '12:36 PM' },
    { name: 'Bob Johnson', isMe:false, message: "My advice would be to never stop learning. The software development industry is constantly evolving, so it's important to stay up-to-date with the latest technologies and trends. Don't be afraid to ask questions, and don't be afraid to make mistakes. The best way to learn is by doing, so don't be afraid to get your hands dirty and start building things. Finally, find a mentor or a community of developers who can help guide you and provide support along the way.", time: '12:37 PM' },
  ]);

  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setChatMessages([
      ...chatMessages,
      { name: 'Me', isMe: true, message: message, time: getTime() },
    ]);
    setMessage('');
  };

  const getTime = () => {
    const date = new Date();
    const hours = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
    const minutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
    return hours + ':' + minutes + (hours >= 12 ? ' PM' : ' AM');
  };

  return (
   <Theme>
     <Container>
      <Row>
        <Col>
          {chatMessages.map((chat, index) => (
               <Col md={{ span: 6, offset: chat.isMe ? 6 : 0 }}>
                <ChatBox key={index} isMe={chat.isMe}>
                <ChatHeader>{chat.name}, {chat.time}</ChatHeader>
                <ChatMessage>{chat.message}</ChatMessage>
                </ChatBox>
               </Col>
          ))}
          <Form onSubmit={handleSubmit} className="d-flex">
            <TextBox>
              <Form.Control
                type="text"
                placeholder="Type your message here"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </TextBox>
            <Send type="submit">
              Send
            </Send>
          </Form>
        </Col>
      </Row>
    </Container>
   </Theme>
  );
};

export default Chat;