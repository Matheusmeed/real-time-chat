import { rooms } from '../../shared/util/rooms';
import { FaPhoneVolume, FaMagnifyingGlass } from 'react-icons/fa6';
import { IoVideocam } from 'react-icons/io5';
import { IoIosSend } from 'react-icons/io';

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
} from './styles';
import GoBackButton from '../../shared/components/GoBackButton';

const Room = () => {
  return (
    <Wrapper>
      <GoBackButton returnTo='public' />
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
        <ChatBody></ChatBody>
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
