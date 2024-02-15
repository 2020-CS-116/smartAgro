import { StyleSheet, Text, View,SafeAreaView,TouchableOpacity,Image } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon1 from 'react-native-vector-icons/MaterialIcons';
import { RouteProp, NavigationProp } from '@react-navigation/native';
type AdminSummaryProps = {
    route: RouteProp<Record<string, object | undefined>, string>;
    navigation: NavigationProp<any>;
  };
const AdminSummary  = ({ route, navigation }: AdminSummaryProps) => {
  return (
    <SafeAreaView>
    <View style={styles.allcardContainer}>
    <View style={styles.mainFeatureContainer}>
      <View>
      <Text style={styles.mainText}>Overall Summary</Text>
      </View>
      <View>
       <TouchableOpacity style={styles.exportButton}>
           <Image source={require('../assets/export.png')} style={styles.exportImg}/>
           <Text style={styles.exportButtonText}>Export</Text>
       </TouchableOpacity>
      </View>
    </View>
      <View style={styles.cardRow}>
        {/* Card1 */}
        <TouchableOpacity style={styles.cardContainer1} onPress={()=>navigation.navigate('Users')}>
          <View style={styles.logoContainerUsers}>
          <Icon name="users" size={20} color="#FFF" />
          </View>
          <Text style={styles.price} >1025</Text>
          <Text style={styles.total} >Users</Text>
          <Text style={styles.text} >Last update:2 days ago</Text>
        </TouchableOpacity>
   
        {/* Card2 */}
        <TouchableOpacity style={styles.cardContainer2} onPress={()=>navigation.navigate('Products')}>
          <View style={styles.logoContainerProducts}>
          <Icon name="shopping-bag" size={20} color="#FFF" />
          </View>
          <Text style={styles.price} >300</Text>
          <Text style={styles.total} >Products</Text>
          <Text style={styles.text} >Last update:10 days ago</Text>
        </TouchableOpacity>
      </View>
   
      {/* Second Row */}
      <View style={styles.cardRow}>
        {/* Third Card */}
        <TouchableOpacity style={styles.cardContainer3} onPress={()=>navigation.navigate('Orders')}>
          <View style={styles.logoContainerOrders}>
          <Icon name="list-alt" size={20} color="#FFF" />
          </View>
          <Text style={styles.price} >1025</Text>
          <Text style={styles.total} >Orders</Text>
          <Text style={styles.text} >Last update:1sec ago</Text>
        </TouchableOpacity>
   
        {/* Fourth Card */}
        <TouchableOpacity style={styles.cardContainer4}>
          <View style={styles.logoContainerPayments}>
          <Icon name="list-alt" size={20} color="#FFF" />
          </View>
          <Text style={styles.price} >8</Text>
          <Text style={styles.total} >Payments</Text>
          <Text style={styles.text} >+8% from yesterday</Text>
        </TouchableOpacity>
       
      </View>
      <View style={styles.cardRow}>
    {/* Fifth Card */}
    <TouchableOpacity style={styles.cardContainer5} onPress={()=>navigation.navigate('Feedbacks')}>
          <View style={styles.logoContainer1}>
          <Icon name="star" size={20} color="#FFF" />
          </View>
          <Text style={styles.price} >67</Text>
          <Text style={styles.total} >Feedback & Reviews</Text>
          <Text style={styles.text} >Last update:1 day ago</Text>
        </TouchableOpacity>
        {/* Sixth Card */}
    <TouchableOpacity style={styles.cardContainer6}>
          <View style={styles.logoContainer2}>
          <Icon name="line-chart" size={20} color="#FFF" />
          </View>
          <Text style={styles.price} >67</Text>
          <Text style={styles.total} >Reporting& Analytics</Text>
          <Text style={styles.text} >Last update:1 month ago</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.cardRow}>
      <TouchableOpacity style={styles.cardContainer7}>
          <View style={styles.logoContainer3}>
          <Icon name="comments" size={20} color="#FFF" />
          </View>
          <Text style={styles.price} >67</Text>
          <Text style={styles.total} >Communication & Support</Text>
          <Text style={styles.text} >Last update:now</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cardContainer8}>
          <View style={styles.logoContainer4}>
          <Icon1 name="settings" size={20} color="#FFF" />
          </View>
          <Text style={styles.price} >67</Text>
          <Text style={styles.total} >Customization & Settings</Text>
          <Text style={styles.text} >Last update:now</Text>
        </TouchableOpacity>
      </View>
      {/* Add more card rows here */}
      {/* <View style={styles.cardRow}>
        {/* Fifth Card */}
      {/* ... Your card code */}
      {/* </View> */}
    </View>
  
    </SafeAreaView>
  )
}

export default AdminSummary

const styles = StyleSheet.create({
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
      backgroundColor: '#6BAAFC',
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
      backgroundColor: '#EF5E7A',
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
      backgroundColor: '#D623FE',
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
      backgroundColor: '#90EE90',
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
    cardContainer5: {
      width: 150,
      height: 165,
      flexShrink: 0,
      borderRadius: 15,
      backgroundColor: '#008080',
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
    cardContainer6: {
      width: 150,
      height: 165,
      flexShrink: 0,
      borderRadius: 15,
      backgroundColor: '#6A5ACD',
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
    cardContainer7: {
      width: 150,
      height: 165,
      flexShrink: 0,
      borderRadius: 15,
      backgroundColor: '#808000',
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
    cardContainer8: {
        width: 150,
        height: 165,
        flexShrink: 0,
        borderRadius: 15,
        backgroundColor: '#800000',
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
      height: 40,
      backgroundColor: '#FFF',
      borderRadius: 50,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 10, // Adjust the spacing as needed
    },
    logoContainerUsers:{
      width: 40,
      height: 40,
      backgroundColor: 'green',
      borderRadius: 50,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 10, // Adjust the spacing as needed
    },
    logoContainerProducts:{
        width: 40,
        height: 40,
        backgroundColor: 'orange',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10, // Adjust the spacing as needed
    },
    logoContainerOrders:{
        width: 40,
        height: 40,
        backgroundColor: 'red',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10, // Adjust the spacing as needed
    },
    logoContainerPayments:{
        width: 40,
        height: 40,
        backgroundColor: 'gray',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10, // Adjust the spacing as needed
    },
    logoContainer1: {
      width: 39,
      height: 39,
      backgroundColor: 'cyan',
      borderRadius: 50,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 10, // Adjust the spacing as needed
    },
    logoContainer2: {
      width: 39,
      height: 39,
      backgroundColor: 'brown',
      borderRadius: 50,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 10, // Adjust the spacing as needed
    },
    logoContainer3: {
      width: 39,
      height: 39,
      backgroundColor: 'purple',
      borderRadius: 50,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 10, // Adjust the spacing as needed
    },
    logoContainer4: {
        width: 39,
        height: 39,
        backgroundColor: 'yellow',
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
      color: '#FFF',
    
      fontFamily: 'PT Sans',
      fontSize: 12,
      fontStyle: 'normal',
      fontWeight: '700',
      letterSpacing: 1,
      marginTop: 10,
    },
    price: {
      flexShrink: 0,
      color: '#FFF',
    
      fontFamily: 'PT Sans',
      fontSize: 12,
      fontStyle: 'normal',
      fontWeight: '700',
      letterSpacing: 1,
      marginTop: 20,
    },
    total: {
      flexShrink: 0,
      color: '#FFF',
   
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
      flexDirection:'row',
      justifyContent:'space-between',
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
    newsText:{
      color: '#000',
      fontFamily: 'Alatsi',
      fontSize: 16,
      fontStyle: 'normal',
      fontWeight: 'bold',
        marginLeft:20,
  
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
    exportButton:{
        marginRight:20,
        elevation:1,
        backgroundColor:"#FFFFFF",
        padding:10,
        borderRadius:5,
        flexDirection:'row',
    },
    exportButtonText:{
      color: '#000',
      fontFamily: 'PT Sans',
      fontSize: 16,
      fontStyle: 'normal',
      fontWeight: '700',
    },
    exportImg:{
           width:20,
           height:20,
           marginRight:10,
    }
  })