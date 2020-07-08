import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { format, parseISO } from 'date-fns';

import { signOut } from '~/store/module/auth/actions';

import {
  Container,
  Avatar,
  BoxInfo,
  Label,
  Value,
  LogoutButton,
  TextButton,
  BoxLabel,
} from './styles';

const Profile = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  function handleLogout() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Avatar
        source={{
          uri: user.avatar
            ? user.avatar.url
            : `https://ui-avatars.com/api/?color=A28FD0&background=F4EFFC&bold=true&format=png&size=140&rounded=true&name=${user.name}`,
        }}
      />

      <BoxInfo>
        <BoxLabel>
          <Label>Nome completo</Label>
          <Value>{user.name}</Value>
        </BoxLabel>

        <BoxLabel>
          <Label>Email</Label>
          <Value>{user.email}</Value>
        </BoxLabel>

        <BoxLabel>
          <Label>Data de cadastro</Label>
          <Value>{format(parseISO(user.createdAt), 'dd/MM/yyyy')}</Value>
        </BoxLabel>
      </BoxInfo>

      <LogoutButton onPress={handleLogout}>
        <TextButton>Logout</TextButton>
      </LogoutButton>
    </Container>
  );
};

export default Profile;
