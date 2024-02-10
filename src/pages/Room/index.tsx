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
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getCountryImage } from '../../shared/functions/getCountryImage';
import { auth } from '../../firebase';
import { formatTime } from '../../shared/functions/formatTime';

const Room = () => {
  const currentUserEmail = auth.currentUser?.email;
  const rooms = useSelector((state: { rooms: IRoom[] }) => state.rooms);
  const { id } = useParams<{ id: string }>();
  const [room, setRoom] = useState<IRoom>();

  useEffect(() => {
    rooms.forEach((room) => {
      if (room.id === Number(id)) {
        setRoom(room);
      }
    });
  }, [id, rooms]);

  return (
    <>
      {!!room && (
        <Wrapper>
          <GoBackButton returnTo='public' dark />
          <ChatWrapper>
            <ChatHeader>
              <LeftSide>
                <ImageDiv>
                  <StyledImage src={room.image} alt='chatImage' />
                </ImageDiv>
                <TextsDiv>
                  <h1>{room.name}</h1>
                  <div>
                    <h3>{room.category}</h3>
                    <img src={getCountryImage(room.country)} alt='flag' />
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
              {room.messages.map((message) => {
                if (currentUserEmail === message.email) {
                  <MessageDiv ownMessage key={message.email}>
                    <Message ownMessage>
                      <div>
                        <p>{message.message}</p>
                        <TimeDiv>
                          <p>{formatTime(message.time)}</p>
                        </TimeDiv>
                      </div>
                    </Message>
                  </MessageDiv>;
                } else {
                  return (
                    <MessageDiv key={message.email}>
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
              <TextInput type='text' placeholder='Type your message...' />
              <SendMessageButton>
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
