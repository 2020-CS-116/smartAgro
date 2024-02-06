import React,{useState} from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, ScrollView,Linking } from 'react-native';
import Styles from '../components/TabNavigation/Styles';
import MyHeader from '../components/TabNavigation/MyHeader';
import { RouteProp, NavigationProp } from '@react-navigation/native';
import { responsiveHeight } from 'react-native-responsive-dimensions';
import Carousel from './Carousal';
import AntDesign from 'react-native-vector-icons/AntDesign'
import FloatingButton from './FloatingButton';
import Sales_Summary from './Sales_Summary';
import VisitorInsights from './VisitorInsights';
import Products from './Products';
import TopProducts from './TopProducts';
import Total_Revenue from './Total_Revenue';
type HomeScreenProps = {
  route: RouteProp<Record<string, object | undefined>, string>;
  navigation: NavigationProp<any>;
};


const HomeScreen = ({ route, navigation }: HomeScreenProps) => {
  
   return(
    <View style={Styles.container}>
    <MyHeader
     back
     onPressBack={() => navigation.goBack()}
     title={route.name}
     right="more-vertical"
     onRightPress={() => navigation.navigate('profile')}
     style={styles.headerWithShadow}
   />
   <ScrollView nestedScrollEnabled={true}>
  <View style={styles.contentContainer}>
 <View style={styles.carousal}>
   <Carousel />
   
 </View>
 <Sales_Summary/>
 {/* News Feed Component */}
 <VisitorInsights/>
   {/* News Recommended Product Component */}
   <View style={styles.newsFeedContainer}>
     <Text style={styles.topProductsText}>
     Top Products
     </Text>
   <TopProducts route={route} navigation={navigation}/>
   </View>
    {/* News Help and Customer Suport Component */}
    <View style={styles.newsFeedContainer}>
     <Text style={styles.newsText}>
   Total Revenue
     </Text>
    <View style={styles.HelpContainer}>
   <Total_Revenue/>
    </View>
   </View>
  
 </View>
 
</ScrollView>
   {/* floating action Component */}
   <FloatingButton  route={route} navigation={navigation} />
  {/* end of floating action Component */}
</View>
   )
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  headerContainer: {
    
  },
  headerWithShadow: {
    height:80,
    shadowColor: 'rgba(0, 0, 0, 0.3)',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 6, // Add elevation for Android shadow
  },
  contentContainer: {
    paddingTop: 5, // Add top padding to start content below the header
  },
  carousal: {
    width: '100%',
    height: responsiveHeight(30),
    backgroundColor: '#fff',
  },
  allcardContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    marginTop:25,
  },
  cardRow: {
    flexDirection: 'row',
    marginTop: 10,
  },
  cardContainer1: {
    width: 150,
    height: 165,
    flexShrink: 0,
    borderRadius: 15,
    backgroundColor: '#FFE2E5',
    paddingLeft:15,
    margin: 10, 
    
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2, 
    shadowRadius: 4,
    elevation: 4, 
  },
  cardContainer2: {
    width: 150,
    height: 165,
    flexShrink: 0,
    borderRadius: 15,
    backgroundColor: '#FFF4DE',
    paddingLeft:15,
    margin: 10, 
   
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2, 
    shadowRadius: 4,
    elevation: 4, 
  },
  cardContainer3: {
    width: 150,
    height: 165,
    flexShrink: 0,
    borderRadius: 15,
    backgroundColor: '#DCFCE7',
    paddingLeft:15,
    margin: 10, 
   
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2, 
    shadowRadius: 4,
    elevation: 4, 
  },
  cardContainer4: {
    width: 150,
    height: 165,
    flexShrink: 0,
    borderRadius: 15,
    backgroundColor: '#F3E8FF',
    paddingLeft:15,
    margin: 10, 
   
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2, 
    shadowRadius: 4,
    elevation: 4, 
  },
  logoContainer: {
    width: 40,
    height: 35,
    backgroundColor: '#FFF',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10, // Adjust the spacing as needed
  },
  logo: {
    width: 35, // Width of the image
    height: 35, // Height of the image
    flexShrink: 0, // Prevent image from shrinking
    tintColor: '#4BA26A', // Color of the image
  },
  text: {
    flexShrink: 0,
    color: '#4079ED',
  
    fontFamily: 'PT Sans',
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: '700',
    letterSpacing: 1,
    marginTop: 10,
  },
  price: {
    flexShrink: 0,
    color: '#151D48',
  
    fontFamily: 'PT Sans',
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: '700',
    letterSpacing: 1,
    marginTop: 20,
  },
  total: {
    flexShrink: 0,
    color: '#425166',
 
    fontFamily: 'PT Sans',
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: '700',
    letterSpacing: 1,
    marginTop: 10,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',
    justifyContent:'space-between',
    height: 30,
    flexShrink: 0,
    backgroundColor: '#4BA26A',
    marginTop: 10, // Adjust the spacing as needed
    borderRadius: 5,
   
  },
  buttonText: {
    color: '#FFF',
    textAlign: 'center',
    fontFamily: 'PT Sans',
    fontSize: 10,
    fontStyle: 'normal',
    fontWeight: '700',
    letterSpacing: 1,
    marginLeft:5,
  },
  rectangle: {
    width: 24,
    height: 18,
    flexShrink: 0,

    marginRight:5,
 
  },
  mainFeatureContainer: {
    width: '100%',
    height: 30,
    flexShrink: 0,
    marginLeft: 0,
    marginTop: '7%',
    marginBottom:'3%'
  },
  mainText: {
    color: '#000',
    fontFamily: 'PT Sans',
    fontSize: 24,
    fontStyle: 'normal',
    fontWeight: '700',
     marginLeft:"10%",

  },
  subText:{
    color: '#000',
    fontFamily: 'PT Sans',
    fontSize: 10,
    fontStyle: 'normal',
    fontWeight: '400',
     marginLeft:"10%",
     marginTop:10,
 
  },
  newsFeedContainer:{
      marginTop:30,
      // marginLeft:10,
  },
  topProductsText:{
    color: '#000',
    fontFamily: 'Alatsi',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: 'bold',
      marginLeft:20,
      marginBottom:10,

  },
  newsText:{
    color: '#000',
    fontFamily: 'Alatsi',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: 'bold',
      marginLeft:20,
      marginBottom:10,
  },
  HelpContainer:{
       display:"flex",
       justifyContent:'center',
       alignItems:'center',
  },
  icon: {
    width: 16.75,
    height: 27.586,
    color: '#FFF',
    marginRight:0,
    marginTop:10,
      marginLeft:10,
  },
  
});
