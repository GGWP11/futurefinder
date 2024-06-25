
import { Container} from 'react-bootstrap';
import styled from 'styled-components'
import Theme from '../Theme.js';
import { Header, GoBack, Chat, Footer} from '../components';

const Wrapper = styled.div`
  background-color: white;
  border:5px;
  margin: 30px 0;
  padding: 20px 0;
`;

const Padding = styled.div`
  padding-top: 130px;
`;

const ChatPage = () => {
  return (
    <Theme>
      <Padding className='Page'>
        <Container>
          <Header />
          <GoBack route="/professional" />
          <Wrapper>
            <Chat />
          </Wrapper>
        </Container>
        <Footer />
      </Padding>
    </Theme>
  );
};

export default ChatPage;
