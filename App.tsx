import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Statistic from './src/screens/statistics';
import Transaction from './src/screens/transaction';
import AddExpense from './src/screens/add-expense';
import TransactionMonthly from './src/screens/transaction/transaction-monthly';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { scale } from './src/common/utils';

const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();
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
        activeColor="blue"
        barStyle={{ backgroundColor: '#4682B4', height: scale(44), alignItems:'center', justifyContent:'center' }}
      >
        <Tab.Screen 
          options={{
            tabBarLabel: "Trans",
            tabBarIcon: () => (
              <MaterialIcons name="money" size={20} color="orange"/>
            )
          }} 
          name="transactionStack" 
          component={TransactionStack} 
        />
        <Tab.Screen 
          options={{
            tabBarLabel: "Stats",
            tabBarIcon: () => (
              <MaterialIcons name="query-stats" size={20} color="orange"/>
            )
          }} 
          name="statisticStack" 
          component={StatisticStack} 
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}


export default App