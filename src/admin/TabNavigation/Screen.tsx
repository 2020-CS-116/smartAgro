import React from 'react';
import { Linking, StyleSheet, Text, View } from 'react-native';
import Styles from './Styles';
import Colors from './Colors';
import MyHeader from './MyHeader';
import { Button } from 'react-native-paper';
import { RouteProp, NavigationProp } from '@react-navigation/native';

type ScreenProps = {
  route: RouteProp<Record<string, object | undefined>, string>;
  navigation: NavigationProp<any>;
};

export default function Screen({ route, navigation }: ScreenProps) {
  return (
    <View style={Styles.container}>
      <MyHeader
        back
        onPressBack={() => navigation.goBack()}
        title={route.name}
        right="more-vertical"
        onRightPress={() => console.log('right')}
      />
    </View>
  );
}
