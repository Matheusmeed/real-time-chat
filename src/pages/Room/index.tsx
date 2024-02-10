import { FaPhoneVolume, FaMagnifyingGlass } from 'react-icons/fa6';
import { IoVideocam } from 'react-icons/io5';
import { IoIosSend } from 'react-icons/io';
import { FaUserCircle } from 'react-icons/fa';

import {
  ChatHeader,
  ChatWrapper,
  ImageDiv,
  StyledImage,
  TextsDiv,
  LeftSide,
  Wrapper,
  RightSide,
  ChatBody,
  ChatBottom,
  SendMessageButton,
  TextInput,
  MessageDiv,
  Message,
  UsernameDiv,
  TimeDiv,
} from './styles';
import GoBackButton from '../../shared/components/GoBackButton';
import { useSelector } from 'react-redux';
import { IRoom } from '../../shared/types/room';

const Room = () => {
  const rooms = useSelector((state: { rooms: IRoom[] }) => state.rooms);

  return (
    <Wrapper>
      <GoBackButton returnTo='public' dark />
      <ChatWrapper>
        <ChatHeader>
          <LeftSide>
            <ImageDiv>
              <StyledImage src={rooms[0].image} alt='chatImage' />
            </ImageDiv>
            <TextsDiv>
              <h1>Title</h1>
              <div>
                <h3>Subtitle</h3>
                <img src='/images/flagIcons/br.png' alt='flag' />
              </div>
            </TextsDiv>
          </LeftSide>
          <RightSide>
            <button>
              <FaPhoneVolume color='#FFFFFF' size={23} />
            </button>
            <button>
              <IoVideocam color='#FFFFFF' size={26} />
            </button>
            <button style={{ marginLeft: 30 }}>
              <FaMagnifyingGlass color='#FFFFFF' size={23} />
            </button>
          </RightSide>
        </ChatHeader>
        <ChatBody>
          <MessageDiv ownMessage>
            <Message ownMessage>
              <div>
                <p>Sim, eu consegui fazer!</p>
                <TimeDiv>
                  <p>00:19</p>
                </TimeDiv>
              </div>
            </Message>
          </MessageDiv>
          <MessageDiv>
            <FaUserCircle size={35} color='#9bfffa66' />
            <Message>
              <UsernameDiv>
                <p>Lucas</p> <p>00:39</p>
              </UsernameDiv>
              <div>
                <p>Sim, eu consegui fazer!</p>
              </div>
            </Message>
          </MessageDiv>
        </ChatBody>
        <ChatBottom>
          <TextInput type='text' placeholder='Type your message...' />
          <SendMessageButton>
            <IoIosSend size={30} color='#FFFFFF' />
          </SendMessageButton>
        </ChatBottom>
      </ChatWrapper>
    </Wrapper>
  );
};

export default Room;
