import React, { useState } from 'react';
import { ActivityIndicator } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { signInRequest } from '~/store/module/auth/actions';

import logo from '~/assets/logo.png';

import {
  Container,
  Logo,
  Form,
  Input,
  SubmitButton,
  TextButton,
} from './styles';

const SignIn = () => {
  const [id, setId] = useState('');
  const dispatch = useDispatch();

  const { loading } = useSelector((state) => state.auth);

  function handleSubmit() {
    dispatch(signInRequest(id));
  }

  return (
    <Container>
      <Logo source={logo} />
      <Form>
        <Input
          autoCapitalize="none"
          autoCorrect={false}
          returnKeyType="send"
          placeholder="Informe seu ID de cadastro"
          value={id}
          onChangeText={setId}
          onSubmitEditing={handleSubmit}
        />

        <SubmitButton onPress={handleSubmit}>
          {loading ? (
            <ActivityIndicator size="small" color="#fff" />
          ) : (
            <TextButton>Entrar no sistema</TextButton>
          )}
        </SubmitButton>
      </Form>
    </Container>
  );
};

export default SignIn;
