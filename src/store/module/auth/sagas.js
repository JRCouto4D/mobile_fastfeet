import { takeLatest, put, call, all, delay } from 'redux-saga/effects';
import { Alert } from 'react-native';

import api from '~/services/api';

import { signInSuccess, signFailure } from './actions';

export function* sign({ payload }) {
  try {
    const { id } = payload;

    const response = yield call(api.get, `deliverymen/${id}`);

    const user = response.data;

    if (!user) {
      Alert.alert('Algo deu errado', 'Por favor verifique seu ID');
      return;
    }

    delay(3000);

    yield put(signInSuccess(user));
  } catch (err) {
    Alert.alert('Algo deu errado', 'Por favor verifique seu ID');
    yield put(signFailure());
  }
}

export default all([takeLatest('@auth/SIGN_IN_REQUEST', sign)]);
