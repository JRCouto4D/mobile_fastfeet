import React from 'react';
import { TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/MaterialIcons';

import SignIn from '~/pages/SignIn';

import Dashboard from '~/pages/Delivery/Dashboard';
import Details from '~/pages/Delivery/Details';
import ViewProblems from '~/pages/Delivery/ViewProblems';
import ConfirmDelivery from '~/pages/Delivery/ConfirmDelivery';
import ReportProblem from '~/pages/Delivery/ReportProblem';

import Profile from '~/pages/Profile';

const Stack = createStackNavigator();
const Tabs = createBottomTabNavigator();

export default function Routes() {
  const { signed } = useSelector((state) => state.auth);

  function Delivery() {
    return (
      <Stack.Navigator
        screenOptions={{
          headerTintColor: '#FFF',
          headerBackTitleVisible: false,
          headerTransparent: true,
          headerLeftContainerStyle: {
            marginLeft: 20,
          },
        }}
      >
        <Stack.Screen
          name="Dashboard"
          component={Dashboard}
          options={{
            headerShown: false,
            gestureEnabled: false,
            animationEnabled: false,
          }}
        />

        <Stack.Screen
          name="Details"
          component={Details}
          options={({ navigation }) => ({
            headerTitleAlign: 'center',
            title: 'Detalhes da encomenda',
            tabBarVisible: false,
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Icon name="chevron-left" size={20} color="#fff" />
              </TouchableOpacity>
            ),
          })}
        />

        <Stack.Screen
          name="ReportProblem"
          component={ReportProblem}
          options={({ navigation, route }) => ({
            headerTitleAlign: 'center',
            title: 'Informar problema',
            tabBarVisible: false,
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Icon name="chevron-left" size={20} color="#fff" />
              </TouchableOpacity>
            ),
          })}
        />

        <Stack.Screen
          name="ViewProblems"
          component={ViewProblems}
          options={({ navigation }) => ({
            headerTitleAlign: 'center',
            title: 'Vizualizar problema',
            tabBarVisible: false,
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Icon name="chevron-left" size={20} color="#fff" />
              </TouchableOpacity>
            ),
          })}
        />

        <Stack.Screen
          name="ConfirmDelivery"
          component={ConfirmDelivery}
          options={({ navigation }) => ({
            headerTitleAlign: 'center',
            title: 'Confirmar entrega',
            tabBarVisible: false,
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Icon name="chevron-left" size={20} color="#fff" />
              </TouchableOpacity>
            ),
          })}
        />
      </Stack.Navigator>
    );
  }

  function BottonTabs() {
    return (
      <Tabs.Navigator
        tabBarOptions={{
          keyboardHidesTabBar: true,
          activeTintColor: '#7d40e7',
          inactiveTintColor: '#999',
          labelStyle: {
            fontSize: 18,
            fontWeight: 'bold',
          },
          style: {
            height: 90,
          },
          tabStyle: {
            padding: 10,
          },
        }}
      >
        <Tabs.Screen
          name="delivery"
          component={Delivery}
          options={{
            tabBarLabel: 'Encomendas',
            tabBarIcon: ({ color }) => (
              <Icon name="reorder" size={40} color={color} />
            ),
          }}
        />

        <Tabs.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarLabel: 'Meu perfil',
            tabBarIcon: ({ color }) => (
              <Icon name="person" size={40} color={color} />
            ),
          }}
        />
      </Tabs.Navigator>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {signed ? (
          <>
            <Stack.Screen
              name="Home"
              component={BottonTabs}
              options={{
                headerShown: false,
                gestureEnabled: false,
                animationEnabled: false,
              }}
            />
          </>
        ) : (
          <>
            <Stack.Screen
              name="SignIn"
              component={SignIn}
              options={{
                headerShown: false,
                gestureEnabled: false,
                animationEnabled: false,
              }}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
