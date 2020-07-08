import React from 'react';
import { format, parseISO } from 'date-fns';

import { Container, Content, Description, Date } from './styles';

export default function ProblemItem({ item, navigation }) {
  return (
    <Container>
      <Content onPress={() => navigation.navigate('ReportProblem', { item })}>
        <Description>
          {item.description.length > 35
            ? `${item.description.substr(0, 35)}...`
            : item.description}
        </Description>
        <Date>{format(parseISO(item.created_at), "dd'/'MM'/'yyyy")}</Date>
      </Content>
    </Container>
  );
}
