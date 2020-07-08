import React from 'react';

import { format, parseISO } from 'date-fns';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  Box,
  Content,
  BoxInfo,
  Header,
  Title,
  BoxLabel,
  Label,
  Value,
  BoxDate,
  BoxButton,
  Button,
  TextButton,
} from './styles';

export default function Details({ route, navigation }) {
  const delivery = route.params ? route.params.delivery : null;

  return (
    <Container>
      <Box />

      <Content>
        <BoxInfo>
          <Header>
            <Icon name="local-shipping" size={30} color="#7d40e7" />
            <Title>Informações da entrega</Title>
          </Header>

          <BoxLabel>
            <Label>DESTINATÁRIO</Label>
            <Value>
              {delivery.recipient
                ? delivery.recipient.name
                : 'Dados insuficientes'}
            </Value>
          </BoxLabel>

          <BoxLabel>
            <Label>ENDEREÇE DE ENTREGA</Label>
            <Value>
              {delivery.recipient
                ? `${delivery.recipient.street}, ${delivery.recipient.number}, ${delivery.recipient.city} - ${delivery.recipient.state}, ${delivery.recipient.zip_code}`
                : 'Dados Insuficientes'}
            </Value>
          </BoxLabel>

          <BoxLabel>
            <Label>PRODUTO</Label>
            <Value>{delivery.product}</Value>
          </BoxLabel>
        </BoxInfo>

        <BoxInfo>
          <Header>
            <Icon name="event" size={30} color="#7d40e7" />
            <Title>Situação da entrega</Title>
          </Header>

          <BoxLabel>
            <Label>STATUS</Label>
            <Value>
              {delivery.end_date === null ? 'PENDENTE' : 'ENTREGUE'}
            </Value>
          </BoxLabel>

          <BoxDate>
            <BoxLabel>
              <Label>DATA DA RETIRADA</Label>
              <Value>
                {delivery.start_date === null
                  ? '--/--/----'
                  : format(parseISO(delivery.start_date), "dd'/'MM'/'yyyy")}
              </Value>
            </BoxLabel>

            <BoxLabel>
              <Label>DATA DA ENTREGA</Label>
              <Value>
                {delivery.end_date === null
                  ? '--/--/----'
                  : format(parseISO(delivery.start_date), "dd'/'MM'/'yyyy")}
              </Value>
            </BoxLabel>
          </BoxDate>
        </BoxInfo>

        <BoxButton>
          <Button
            onPress={() =>
              navigation.navigate('ReportProblem', { id: delivery.id })
            }
            disabled={false}
          >
            <Icon name="clear" color="#e74040" size={30} />
            <TextButton>Informar problema</TextButton>
          </Button>

          <Button
            onPress={() =>
              navigation.navigate('ViewProblems', { id: delivery.id })
            }
          >
            <Icon name="priority-high" color="#E7BA40" size={30} />
            <TextButton>Vizualizar problemas</TextButton>
          </Button>

          <Button
            onPress={() =>
              navigation.navigate('ConfirmDelivery', { id: delivery.id })
            }
          >
            <Icon name="done" color="#7D40E7" size={30} />
            <TextButton>Confirmar entrega</TextButton>
          </Button>
        </BoxButton>
      </Content>
    </Container>
  );
}
