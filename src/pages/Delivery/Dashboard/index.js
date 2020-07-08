/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useCallback } from 'react';
import { ActivityIndicator } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useIsFocused } from '@react-navigation/native';

import DeliveryItem from '~/components/DeliveryItem';

import api from '~/services/api';

import { signOut } from '~/store/module/auth/actions';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  Header,
  Avatar,
  Info,
  Message,
  Name,
  ButtonLogout,
  Left,
  BoxHeader,
  Title,
  BoxButton,
  PendingButton,
  PendingText,
  HandedOutButton,
  HandedOutText,
  DeliveryList,
} from './styles';

const Dashboard = ({ navigation }) => {
  const [activePending, setActivePending] = useState(true);
  const [activeHandedOut, setActiveHandedOut] = useState(false);
  const [deliveries, setDeliveries] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(1);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const isFocused = useIsFocused();

  const loadDeliveries = useCallback(
    async (
      pg = 1,
      query = activePending ? 'pending' : 'handedOut',
      shouldRefresh = false
    ) => {
      if (total + 1 === pg) {
        return;
      }

      setLoading(true);

      const response = await api.get('historic/deliveries', {
        params: {
          page: pg,
          id: user.id,
          query,
        },
      });

      setDeliveries(
        shouldRefresh
          ? [...deliveries, ...response.data.deliveries]
          : response.data.deliveries
      );
      setTotal(Math.ceil(response.data.total / 4));
      setPage(pg);
      setLoading(false);
    },
    [user, deliveries, total, activePending]
  );

  useEffect(() => {
    if (isFocused) {
      loadDeliveries();
    }
  }, [isFocused]);

  function refresh() {
    setRefreshing(true);
    setDeliveries([]);
    setPage(1);
    loadDeliveries(1, activePending ? 'pending' : 'handedOut', false);
    setRefreshing(false);
  }

  function loadPage() {
    loadDeliveries(page + 1, activePending ? 'pending' : 'handedOut', true);
  }

  function handlePending() {
    setActivePending(true);
    setActiveHandedOut(false);

    setDeliveries([]);
    setPage(1);
    loadDeliveries(page, 'pending');
  }

  function handleHanded() {
    setActivePending(false);
    setActiveHandedOut(true);

    setDeliveries([]);
    setPage(1);
    loadDeliveries(page, 'handedOut');
  }

  return (
    <Container>
      <Header>
        <Left>
          <Avatar
            source={{
              uri: user.avatar
                ? user.avatar.url
                : `https://ui-avatars.com/api/?color=A28FD0&background=F4EFFC&bold=true&format=png&size=140&rounded=true&name=${user.name}`,
            }}
          />
          <Info>
            <Message>Bem vindo de volta</Message>
            <Name>{user.name}</Name>
          </Info>
        </Left>
        <ButtonLogout
          onPress={() => {
            dispatch(signOut());
          }}
        >
          <Icon name="exit-to-app" size={30} color="#e74040" />
        </ButtonLogout>
      </Header>

      <BoxHeader>
        <Title>Entregas</Title>
        <BoxButton>
          <PendingButton onPress={handlePending}>
            <PendingText active={activePending}>Pendentes</PendingText>
          </PendingButton>

          <HandedOutButton onPress={handleHanded}>
            <HandedOutText active={activeHandedOut}>Entregues</HandedOutText>
          </HandedOutButton>
        </BoxButton>
      </BoxHeader>

      <DeliveryList
        data={deliveries}
        keyExtractor={(item) => String(item.id)}
        refreshing={refreshing}
        onEndReachedThreshold={0.1}
        onEndReached={loadPage}
        onRefresh={refresh}
        ListFooterComponent={
          loading && <ActivityIndicator size="small" color="#7d40e7" />
        }
        renderItem={({ item }) => (
          <DeliveryItem delivery={item} navigation={navigation} />
        )}
      />
    </Container>
  );
};

export default Dashboard;
