import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { useLocation, useNavigate } from 'react-router-dom';
import { addRoom, editRoom } from '../../redux/roomActions';
import { auth } from '../../firebase';
import { IRoom } from '../../shared/types/room';
import GoBackButton from '../../shared/components/GoBackButton';
import {
  AdjustRoomButton,
  CustomFileButton,
  CustomFileInput,
  CustomFileInputWrapper,
  FieldsDiv,
  RoomCreationDiv,
  TitleDiv,
  Wrapper,
} from './styles';

const AdjustRoom = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isUpdateRoute = location.pathname.includes('update');
  const initialValues: IRoom | null = location.state;
  const userEmail = auth.currentUser?.email;
  const dispatch = useDispatch();

  const [imageSelected, setImageSelected] = useState(
    isUpdateRoute ? !!initialValues?.image : false
  );

  const {
    name,
    category,
    country,
    image,
    messages,
    userEmail: roomUserEmail,
    id,
  } = initialValues || {};

  const [roomFormData, setRoomFormData] = useState({
    name: name || '',
    category: category || 'SOCCER',
    country: country || 'BR',
    image: image || '',
    imageFile: undefined as File | undefined,
    messages: messages || [],
    userEmail: roomUserEmail || userEmail || '',
    isPrivate: false,
  });

  useEffect(() => {
    setImageSelected(!!initialValues?.image);
  }, [initialValues?.image]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    if (name === 'imageFile' && e.target instanceof HTMLInputElement) {
      const selectedFile = e.target.files && e.target.files[0];
      setRoomFormData((prevData) => ({
        ...prevData,
        imageFile: selectedFile || undefined,
      }));
      setImageSelected(true);
    } else {
      setRoomFormData((prevData) => ({ ...prevData, [name]: value }));
    }
  };

  const handleFileRead = (reader: FileReader) => {
    reader.onloadend = () => {
      const imageUrl = reader.result as string;
      const roomData = { ...roomFormData, image: imageUrl, id };
      dispatch(isUpdateRoute ? editRoom(roomData) : addRoom(roomData));
    };

    reader.readAsDataURL(roomFormData.imageFile!);
  };

  const handleCreateRoom = () => {
    if (roomFormData.imageFile) {
      const reader = new FileReader();
      handleFileRead(reader);
    } else {
      dispatch(addRoom(roomFormData));
    }

    toast.success('Sala criada com sucesso!', {
      style: { background: '#003c10', color: '#FFFFFF' },
    });

    setRoomFormData({
      name: '',
      category: 'SOCCER',
      country: 'BR',
      image: '',
      imageFile: undefined,
      messages: [],
      userEmail: userEmail || '',
      isPrivate: false,
    });

    setImageSelected(false);
    navigate('/myRooms');
  };

  const handleEditRoom = () => {
    if (roomFormData.imageFile) {
      const reader = new FileReader();
      handleFileRead(reader);
    } else {
      dispatch(editRoom({ ...roomFormData, id, isPrivate: false }));
    }

    toast.success('Sala atualizada com sucesso!', {
      style: { background: '#003c10', color: '#FFFFFF' },
    });

    navigate('/myRooms');
  };

  const isFormIncomplete = () => {
    const { name, category, country, imageFile } = roomFormData;

    if (isUpdateRoute) {
      return !name || !category || !country;
    }

    return !name || !category || !country || !imageFile;
  };

  return (
    <Wrapper>
      <GoBackButton returnTo='myRooms' dark />
      <TitleDiv>
        <h1>Room</h1>
        <h1>{isUpdateRoute ? 'Update' : 'Creation'}</h1>
      </TitleDiv>
      <RoomCreationDiv>
        <FieldsDiv>
          <div>
            <h1>Name</h1>
            <input
              type='text'
              name='name'
              value={roomFormData.name}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <h1>Category</h1>
            <select
              name='category'
              value={roomFormData.category}
              onChange={handleInputChange}
            >
              <option value='SOCCER'>Soccer</option>
              <option value='GAMES'>Games</option>
              <option value='MOVIES'>Movies</option>
              <option value='TRAVEL'>Travel</option>
            </select>
          </div>
          <div>
            <h1>Country</h1>
            <select
              name='country'
              value={roomFormData.country}
              onChange={handleInputChange}
            >
              <option value='BR'>Brazil</option>
              <option value='US'>United States</option>
              <option value='PT'>Portugal</option>
              <option value='AR'>Argentina</option>
            </select>
          </div>
          <div>
            <h1>Image</h1>
            <CustomFileInputWrapper>
              <CustomFileInput
                type='file'
                name='imageFile'
                onChange={handleInputChange}
                accept='image/*'
              />
              <CustomFileButton hasImage={imageSelected}>
                {imageSelected ? 'Imagem Selecionada' : 'Escolher Arquivo'}
              </CustomFileButton>
            </CustomFileInputWrapper>
          </div>

          <AdjustRoomButton
            onClick={() => {
              if (isUpdateRoute) {
                handleEditRoom();
              } else {
                handleCreateRoom();
              }
            }}
            disabled={isFormIncomplete()}
          >
            {isUpdateRoute ? 'Update Room' : 'Create Room'}
          </AdjustRoomButton>
        </FieldsDiv>
      </RoomCreationDiv>
    </Wrapper>
  );
};

export default AdjustRoom;
