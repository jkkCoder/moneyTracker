import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Statistic from './src/screens/statistics';
import Transaction from './src/screens/transaction';
import AddExpense from './src/screens/add-expense';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const TransactionStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown:false
      }}
    >
      <Stack.Screen name="transaction" component={Transaction} />
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
          headerShown:false
        }}
      >
        <Tab.Screen 
          options={{title: "Trans"}} 
          name="transaction" 
          component={TransactionStack} 
        />
        <Tab.Screen 
          options={
            {
              title: "Stats",
            }
          } 
          name="statistic" 
          component={StatisticStack} 
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}


export default App