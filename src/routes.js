/* eslint-disable react/no-unstable-nested-components */
import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import Home from './pages/Home/home';
import SingIn from './pages/Singin';
import SingUp from './pages/Singup';
import Feed from './pages/Feed';
import Orders from './pages/Orders';

import Icon from 'react-native-vector-icons/SimpleLineIcons';
import Marketplace from './pages/Marketplace';
import Category from './pages/Marketplace/category';
import Product from './pages/Marketplace/product';
import Cart from './pages/Cart';


import {colors} from './styles/theme.json';
import { Text, Title } from './components';


const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const CustomDrawerComponent = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <Title bold color="light" variant="normal" hasPadding>LOOKAPP</Title>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};

const DrawerComponent = () => {
  return (
    /* colocar o Feed como initialRouteName */
      <Drawer.Navigator initialRouteName="Orders"
      drawerContent={props => <CustomDrawerComponent  {...props} />}
      screenOptions={{
        headerShow: false,
        drawerStyle: {
          backgroundColor: colors.black,

          width: 240,
        },
        drawerActiveBackgroundColor: `${colors.primary}`,
        drawerActiveTintColor: colors.light,
        drawerInactiveTintColor:`${colors.light}60`,
      }}>
        <Drawer.Screen name="Feed" component={Feed} options={{
          headerShown: false,
          drawerIcon: ({color, size}) => (
            <Icon name="people" color={color} size={size}/>
          ),
          }} />
        <Drawer.Screen name="Marketplace" component={Marketplace} options={{
           headerShown: false,
           drawerIcon: ({color, size}) => (
             <Icon name="tag" color={color} size={size}/>
           ),
        }} />
        <Drawer.Screen name="Orders" component={Orders} options={{
           headerShown: false,
           drawerIcon: ({color, size}) => (
             <Icon name="basket" color={color} size={size} />
           ),
        }}/>
      </Drawer.Navigator>
  );
};

const Routes = () => {
    return (
       <NavigationContainer>
        <Stack.Navigator initialRouteName="Feed">
            <Stack.Screen options={{
                headerShown: false,
            }} name="Home" component={Home}/>
             <Stack.Screen options={{
                headerShown: false,
            }} name="SingIn" component={SingIn}/>
             <Stack.Screen options={{
                headerShown: false,
            }} name="SingUp" component={SingUp}/>
            <Stack.Screen options={{
                headerShown: false,
            }} name="Feed" component={DrawerComponent}/>
             <Stack.Screen options={{
                headerShown: false,
            }} name="Category" component={Category}/>
             <Stack.Screen options={{
                headerShown: false,
            }} name="Product" component={Product}/>
            <Stack.Screen options={{
                headerShown: false,
            }} name="Cart" component={Cart}/>
        </Stack.Navigator>

       </NavigationContainer>
    );
};


export default Routes;
