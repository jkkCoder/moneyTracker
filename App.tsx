import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Statistic from './src/screens/statistics';
import Transaction from './src/screens/transaction';
import AddExpense from './src/screens/add-expense';
import TransactionMonthly from './src/screens/transaction/transaction-monthly';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const TopTab = createMaterialTopTabNavigator();

const TopTabs = () => {
  return (
    <TopTab.Navigator>
      <TopTab.Screen name="Daily" component={Transaction} />
      <TopTab.Screen name="Monthly" component={TransactionMonthly} />
    </TopTab.Navigator>
  );
}

const TransactionStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown:false
      }}
    >
      <Stack.Screen name="transaction" component={TopTabs} />
      <Stack.Screen name="addExpense" component={AddExpense} />
    </Stack.Navigator>
  )
}

const StatisticStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown:false
      }}
    >
      <Stack.Screen name="statistic" component={Statistic} />
    </Stack.Navigator>
  )
}

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown:false,
          tabBarLabelPosition: "beside-icon",
          tabBarLabelStyle: {
            fontWeight: "700",
            fontSize: 15
          },
          tabBarIconStyle: { display: "none" },
        }}
      >
        <Tab.Screen 
          options={{title: "Trans"}} 
          name="transactionStack" 
          component={TransactionStack} 
        />
        <Tab.Screen 
          options={
            {
              title: "Stats",
            }
          } 
          name="statisticStack" 
          component={StatisticStack} 
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}


export default App