import React from 'react';
import { StyleSheet } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon, { Icons } from '../seller/TabNavigation/Icons';
import Colors from '../seller/TabNavigation/Colors';
import { RouteProp } from '@react-navigation/native';
import HomeScreen from '../admin/HomeScreen';
import UserManagement from './users/UserManagement';
import ProductManagement from './products/ProductManagement';
import OrderManagement from './orders/OrderManagement';
import Feedback from './feedbacks/Feedback';
import { useAppSelector } from '../store/hooks';
const Tab = createMaterialBottomTabNavigator();
interface TabItem {
  route: string;
  label: string;
  type: keyof typeof Icons;
  icon: string;
  component: React.ComponentType<any>;
  tabBarColor: string;
}

const TabArr: TabItem[] = [
  { route: 'Admin', label: 'SmartAgro', type: 'Feather', icon: 'home', component: HomeScreen, tabBarColor: Colors.primary },
  { route: 'Users', label: 'Users', type: 'FontAwesome', icon: 'users', component: UserManagement, tabBarColor: Colors.red },
  { route: 'Products', label: 'Add', type: 'FontAwesome', icon: 'shopping-bag', component: ProductManagement, tabBarColor: Colors.red },
    { route: 'Orders', label: 'Orders', type: 'FontAwesome', icon: 'list-alt', component: OrderManagement, tabBarColor: Colors.green },
  { route: 'Feedbacks', label: 'Sales Report', type: 'FontAwesome', icon: 'star', component: Feedback, tabBarColor: Colors.yellow },
//   { route: 'Messages', label: 'Messages', type: 'Entypo', icon: 'message', component: Messages, tabBarColor: Colors.green },

//   { route: 'Account', label: 'Account', type: 'FontAwesome', icon: 'user-circle-o', component: Accounts, tabBarColor: Colors.purple },
];

type Tab4Props = {
  route: RouteProp<Record<string, object | undefined>, string>;
};

export default function Tab4({ route }: Tab4Props) {
  const cart = useAppSelector((state) => state.cart)
  const getTotalQuantity = () => {
    let total = 0
    cart.forEach((item:any) => {
      total += item.quantity
    })
    return total
  }
  return (
    <Tab.Navigator  barStyle={{ backgroundColor: '#fff' }}  activeColor='#4BA26A'>
      {TabArr.map<React.JSX.Element>((item, index) => {
        return (
          <Tab.Screen  key={index} name={item.route} component={item.component}
            options={{
              tabBarColor: item.tabBarColor,
              tabBarIcon: ({ color }) => (
                <Icon name={item.icon} type={item.type} size={24} color={color} />
              ),
              // tabBarBadge: item.route === 'Orders' ? getTotalQuantity() || 0: undefined,
              
            }}
          />
          
        )
      })}
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabContainer: {
    backgroundColor: 'red',
    color: '#fff',
  }
});
