import React, { createRef, useState } from 'react';
import { Alert, Platform, ActivityIndicator } from 'react-native';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { RNCamera } from 'react-native-camera';
import Icon from 'react-native-vector-icons/MaterialIcons';
import api from '~/services/api';
import {
  Container,
  Box,
  Content,
  Preview,
  Camera,
  DescartButton,
  DescartText,
  TakePictureButton,
  IconCapture,
  SubmitButton,
  TextButton,
} from './styles';

export default function ConfirmDelivery({ route, navigation }) {
  const id = route.params ? route.params.id : null;
  const user = useSelector((state) => state.auth.user);

  const [image, setImage] = useState(null);
  const [loadingImage, setLoadingImage] = useState(false);
  const [loading, setLoading] = useState(false);

  const camera = createRef();

  async function captureImage() {
    if (camera.current) {
      setLoadingImage(true);
      const options = { quality: 0.3 };
      const data = await camera.current.takePictureAsync(options);
      setImage(data);
      setLoadingImage(false);
    }
  }

  async function handleSubmit() {
    if (!image) {
      Alert.alert(
        'Erro',
        'Você precisa fotografar a assinatura do destinatário para finalizar a entretga'
      );
      return;
    }

    setLoading(true);
    const formData = new FormData();

    formData.append('file', {
      name: image.uri,
      uri:
        Platform.OS === 'android'
          ? image.uri
          : image.uri.replace('file://', ''),
    });

    const response = await api.post('signature', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    if (!response.data.id) {
      Alert.alert(
        'Algo deu errado',
        'Erro ao tentar registrar assinatura do destinatário'
      );
      return;
    }

    await api.post(`deliveryman/${user.id}/delivery/${id}`, {
      signature_id: response.data.id,
    });

    Alert.alert('Sucesso!', 'Entrega finalizada com sucesso!!!');
    setLoading(false);
    navigation.navigate('Dashboard');
  }

  return (
    <Container>
      <Box />
      <Content>
        {image !== null ? (
          <Preview source={{ uri: image.uri }} />
        ) : (
          <Camera
            ref={camera}
            type={RNCamera.Constants.Type.back}
            flashMode={RNCamera.Constants.FlashMode.on}
            androidCameraPermissionOptions={{
              title: 'Permission to use camera',
              message: 'We need your permission to use your camera',
              buttonPositive: 'Ok',
              buttonNegative: 'Cancel',
            }}
            androidRecordAudioPermissionOptions={{
              title: 'Permission to use audio recording',
              message: 'We need your permission to use audio',
              buttonPositive: 'Ok',
              buttonNegative: 'Cancel',
            }}
          />
        )}
        {image ? (
          <DescartButton onPress={setImage(null)}>
            <Icon name="delete" size={26} color="#FFF" />
            <DescartText>Descartar</DescartText>
          </DescartButton>
        ) : (
          <IconCapture>
            <TakePictureButton onPress={captureImage}>
              {loadingImage ? (
                <ActivityIndicator color="#FFF" />
              ) : (
                <Icon name="photo-camera" size={26} color="#FFF" />
              )}
            </TakePictureButton>
          </IconCapture>
        )}
        <SubmitButton onPress={handleSubmit}>
          {loading ? (
            <ActivityIndicator color="#FFF" />
          ) : (
            <TextButton>Enviar</TextButton>
          )}
        </SubmitButton>
      </Content>
    </Container>
  );
}

ConfirmDelivery.propTypes = {
  route: PropTypes.shape().isRequired,
  navigation: PropTypes.shape().isRequired,
};
