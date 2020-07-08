import React, { useState, useEffect } from 'react';
import { ActivityIndicator } from 'react-native';

import api from '~/services/api';

import ProblemItem from '~/components/ProblemItem';

import {
  Container,
  Box,
  Content,
  Header,
  Title,
  ProblemsList,
  BoxNoProblems,
  NoProblemsText,
} from './styles';

const ViewProblems = ({ route, navigation }) => {
  const deliveryId = route.params ? route.params.id : null;

  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [problems, setProblems] = useState([]);

  async function loadProblems(shouldRefresh = false) {
    setLoading(true);

    const response = await api.get(`delivery/${deliveryId}/problems`);

    setProblems(shouldRefresh ? [...problems, response.data] : response.data);

    setLoading(false);
  }

  useEffect(() => {
    loadProblems();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function refresh() {
    setRefreshing(true);

    await loadProblems(true);

    setRefreshing(false);
  }

  return (
    <Container>
      <Box />

      <Content>
        <Header>
          <Title>{deliveryId ? `Encomenda ${deliveryId}` : ''}</Title>
        </Header>
        {loading ? (
          <ActivityIndicator size="small" color="#7d40e7" />
        ) : problems.length === 0 ? (
          <BoxNoProblems>
            <NoProblemsText>
              Não há registro de problemas com essa encomenda
            </NoProblemsText>
          </BoxNoProblems>
        ) : (
          <ProblemsList
            data={problems}
            keyExtractor={(item) => String(item.id)}
            refreshing={refreshing}
            onRefresh={refresh}
            renderItem={({ item }) => (
              <ProblemItem item={item} navigation={navigation} />
            )}
          />
        )}
      </Content>
    </Container>
  );
};

export default ViewProblems;
