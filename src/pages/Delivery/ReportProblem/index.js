import React, { useState, useEffect } from 'react';
import { Alert, ActivityIndicator } from 'react-native';
import { useSelector } from 'react-redux';

import api from '~/services/api';

import {
  Container,
  Box,
  Form,
  AreaText,
  SubmitButton,
  TextButton,
} from './styles';

export default function ReportProblem({ route, navigation }) {
  const deliveryId = route.params ? route.params.id : null;
  const { id } = useSelector((state) => state.auth.user);

  const [problem, setProblem] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    function loadProblems() {
      route.params.item
        ? setProblem(route.params.item.description)
        : setProblem('');
    }

    loadProblems();
  }, [route.params.item]);

  async function handleSubmit() {
    try {
      if (!deliveryId) {
        return;
      }

      setLoading(true);

      await api.post(`delivery/${deliveryId}/problems`, {
        description: problem,
        deliveryman_id: id,
      });
      setProblem('');
      setLoading(false);

      Alert.alert(
        'Problema registrado',
        'A cetral já foi informada do problema ocorrido.'
      );
    } catch (err) {
      Alert.alert(
        'Algo deu errado!',
        'Não foi possível registrar o problema. Tente mais tarde.'
      );
      navigation.navigate('Dashboard');
    }
  }

  return (
    <Container>
      <Box />

      <Form>
        <AreaText
          value={problem}
          autoCompleteType="off"
          autoCorrect={false}
          autoCapitalize="none"
          onChangeText={setProblem}
          placeholder="Inclua aqui o problema que ocorreu na entrega."
          returnKeyType="send"
          onSubmitEditing={handleSubmit}
          editable={route.params.item ? false : true}
        />

        <SubmitButton onPress={handleSubmit} disabled={route.params.item}>
          {loading ? (
            <ActivityIndicator size="small" color="#fff" />
          ) : (
            <TextButton>Enviar</TextButton>
          )}
        </SubmitButton>
      </Form>
    </Container>
  );
}
