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
import { useLocation, useParams } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { getCountryImage } from '../../shared/functions/getCountryImage';
import { auth } from '../../firebase';
import { formatTime } from '../../shared/functions/formatTime';
import { useDispatch } from 'react-redux';
import { addMessage } from '../../redux/roomActions';

const Room = () => {
  const location = useLocation();
  const isMyRoomsRoute = location.pathname.includes('myRooms');
  const chatBodyRef = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch();
  const currentUser = auth.currentUser;
  const { id } = useParams<{ id: string }>();
  const [typedMessage, setTypedMessage] = useState('');

  const actualRoom = useSelector((state: { rooms: IRoom[] }) =>
    state.rooms.find((room) => room.id === Number(id))
  );

  const handleSendMessage = () => {
    if (id && typedMessage.trim() !== '') {
      const currentTime = new Date();
      const newMessage = {
        username: currentUser?.displayName as string,
        email: currentUser?.email as string,
        message: typedMessage,
        time: currentTime,
      };

      dispatch(addMessage({ roomId: Number(id), message: newMessage }));
      setTypedMessage('');
    }
  };

  useEffect(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
    }
  }, [actualRoom?.messages]);

  return (
    <>
      {!!actualRoom && (
        <Wrapper>
          <GoBackButton returnTo={isMyRoomsRoute ? 'myRooms' : 'public'} dark />
          <ChatWrapper>
            <ChatHeader>
              <LeftSide>
                <ImageDiv>
                  <StyledImage src={actualRoom.image} alt='chatImage' />
                </ImageDiv>
                <TextsDiv>
                  <h1>{actualRoom.name}</h1>
                  <div>
                    <h3>{actualRoom.category}</h3>
                    <img src={getCountryImage(actualRoom.country)} alt='flag' />
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
            <ChatBody ref={chatBodyRef}>
              {actualRoom.messages.map((message) => {
                if (currentUser?.email === message.email) {
                  return (
                    <MessageDiv ownMessage key={message.id}>
                      <Message ownMessage>
                        <div>
                          <p>{message.message}</p>
                          <TimeDiv>
                            <p>{formatTime(message.time)}</p>
                          </TimeDiv>
                        </div>
                      </Message>
                    </MessageDiv>
                  );
                } else {
                  return (
                    <MessageDiv key={message.id}>
                      <FaUserCircle size={35} color='#9bfffa66' />
                      <Message>
                        <UsernameDiv>
                          <p>{message.username}</p>
                          <p>{formatTime(message.time)}</p>
                        </UsernameDiv>
                        <div>
                          <p>{message.message}</p>
                        </div>
                      </Message>
                    </MessageDiv>
                  );
                }
              })}
            </ChatBody>
            <ChatBottom>
              <TextInput
                type='text'
                placeholder='Type your message...'
                value={typedMessage}
                onChange={(e) => setTypedMessage(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    e.preventDefault();
                    handleSendMessage();
                  }
                }}
              />
              <SendMessageButton onClick={handleSendMessage}>
                <IoIosSend size={30} color='#FFFFFF' />
              </SendMessageButton>
            </ChatBottom>
          </ChatWrapper>
        </Wrapper>
      )}
    </>
  );
};

export default Room;
