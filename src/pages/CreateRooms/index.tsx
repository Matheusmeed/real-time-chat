import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import GoBackButton from '../../shared/components/GoBackButton';
import {
  CreateRoomButton,
  CustomFileButton,
  CustomFileInput,
  CustomFileInputWrapper,
  FieldsDiv,
  RoomCreationDiv,
  TitleDiv,
  Wrapper,
} from './styles';
import { addRoom } from '../../redux/roomActions';
import { toast } from 'react-toastify';

const CreateRooms = () => {
  const dispatch = useDispatch();
  const [imageSelected, setImageSelected] = useState(false);

  const [roomFormData, setRoomFormData] = useState({
    name: '',
    category: 'SOCCER' as const,
    country: 'BR' as const,
    image: '',
    imageFile: undefined as File | undefined,
    messages: [],
  });

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

  const isFormIncomplete = () => {
    const { name, category, country, imageFile } = roomFormData;
    return !name || !category || !country || !imageFile;
  };

  const handleCreateRoom = () => {
    const { imageFile, ...formData } = roomFormData;

    if (imageFile) {
      const reader = new FileReader();

      reader.onloadend = () => {
        const imageUrl = reader.result as string;
        dispatch(addRoom({ ...formData, image: imageUrl }));
      };

      reader.readAsDataURL(imageFile);
    } else {
      dispatch(addRoom(formData));
    }
    toast.success('Sala criada com sucesso!', {
      style: { background: '#003c10a3', color: '#FFFFFF' },
    });

    setRoomFormData({
      name: '',
      category: 'SOCCER' as const,
      country: 'BR',
      image: '',
      imageFile: undefined,
      messages: [],
    });
    setImageSelected(false);
  };

  return (
    <Wrapper>
      <GoBackButton returnTo='home' dark />
      <TitleDiv>
        <h1>Room</h1>
        <h1>Creation</h1>
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

          <CreateRoomButton
            onClick={handleCreateRoom}
            disabled={isFormIncomplete()}
          >
            Create Room
          </CreateRoomButton>
        </FieldsDiv>
      </RoomCreationDiv>
    </Wrapper>
  );
};

export default CreateRooms;
