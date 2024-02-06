import { StyleSheet, Text, View,SafeAreaView,ScrollView } from 'react-native'
import React from 'react'
import { RouteProp, NavigationProp } from '@react-navigation/native';
import MyHeader from '../components/TabNavigation/MyHeader'
type ProductScreenProps = {
  route: RouteProp<Record<string, object | undefined>, string>;
  navigation: NavigationProp<any>;
};
const  Sales_Reports = ({ route, navigation }: ProductScreenProps) =>  {
  return (
    <SafeAreaView>
     <View>
     <MyHeader
     back
     onPressBack={() => navigation.goBack()}
     title={route.name}
     right="more-vertical"
     onRightPress={() => navigation.navigate('profile')}
     style={styles.headerWithShadow}
   />
     </View>
     <ScrollView>
     <View style={styles.contentContainer}>
     <Text>
      Sales Report of Each Seller
     </Text>
     </View>
     </ScrollView>
    </SafeAreaView>
  )
}

export default Sales_Reports

const styles = StyleSheet.create({
  headerWithShadow: {
    height:80,
    shadowColor: 'rgba(0, 0, 0, 0.3)',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 6, 
  },
  contentContainer: {
    paddingTop: 5,
  },
})