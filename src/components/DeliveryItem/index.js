import React from 'react';
import { parseISO, format } from 'date-fns';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  Header,
  TextId,
  PanelStatus,
  Frame,
  Status,
  Label,
  Line,
  Footer,
  BoxFooter,
  BoxLabel,
  BoxValue,
  DetailsButton,
  ButtonText,
} from './styles';

export default function DeliveryItem({ delivery, navigation }) {
  return (
    <Container>
      <Header>
        <Icon name="local-shipping" size={30} color="#7d40e7" />
        <TextId>{`Encomenda ${delivery.id}`}</TextId>
      </Header>

      <PanelStatus>
        <Line />
        <Frame>
          <Status complete />
          <Label>Aguardando retirada</Label>
        </Frame>

        <Frame>
          <Status complete={delivery.start_date ? true : false} />
          <Label>Retirada</Label>
        </Frame>

        <Frame>
          <Status complete={delivery.end_date ? true : false} />
          <Label>Entregue</Label>
        </Frame>
      </PanelStatus>

      <Footer>
        <BoxFooter>
          <BoxLabel>Ultima atualização</BoxLabel>
          <BoxValue>
            {format(parseISO(delivery.updatedAt), "dd'/'MM'/'yyyy")}
          </BoxValue>
        </BoxFooter>

        <BoxFooter>
          <BoxLabel>Cidade</BoxLabel>
          <BoxValue>
            {delivery.recipient
              ? delivery.recipient.city
              : 'Dados Insuficientes'}
          </BoxValue>
        </BoxFooter>

        <DetailsButton
          onPress={() => navigation.navigate('Details', { delivery })}
        >
          <ButtonText>Ver detalhes</ButtonText>
        </DetailsButton>
      </Footer>
    </Container>
  );
}
