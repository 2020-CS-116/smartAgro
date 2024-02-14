import { StyleSheet, Text, View,TouchableOpacity,Image } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon1 from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/FontAwesome';
const Sales_Summary = () => {
  return (
    <View>
    
 <View style={styles.allcardContainer}>
 <View style={styles.mainFeatureContainer}>
   <View>
   <Text style={styles.mainText}>Overall Sales</Text>
   <Text style={styles.subText}>Sales Summary</Text>
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
     <TouchableOpacity style={styles.cardContainer1}>
       <View style={styles.logoContainer}>
         <Image
           source={require('../assets/sale1.png')} 
        //    style={styles.logo}
         />
       </View>
       <Text style={styles.price} >$1k</Text>
       <Text style={styles.total} >Total Sales</Text>
       <Text style={styles.text} >+8% from yesterday</Text>
     </TouchableOpacity>

     {/* Card2 */}
     <TouchableOpacity style={styles.cardContainer2}>
       <View style={styles.logoContainer}>
         <Image
           source={require('../assets/sale2.png')} 
        //    style={styles.logo}
         />
       </View>
       <Text style={styles.price} >300</Text>
       <Text style={styles.total} >Total Order</Text>
       <Text style={styles.text} >+8% from yesterday</Text>
     </TouchableOpacity>
   </View>

   {/* Second Row */}
   <View style={styles.cardRow}>
     {/* Third Card */}
     <TouchableOpacity style={styles.cardContainer3}>
       <View style={styles.logoContainer}>
         <Image
           source={require('../assets/sale3.png')} 
        //    style={styles.logo}
         />
       </View>
       <Text style={styles.price} >5</Text>
       <Text style={styles.total} >Product Sold</Text>
       <Text style={styles.text} >+8% from yesterday</Text>
     </TouchableOpacity>

     {/* Fourth Card */}
     <TouchableOpacity style={styles.cardContainer4}>
       <View style={styles.logoContainer}>
         <Image
           source={require('../assets/sale4.png')} 
        //    style={styles.logo}
         />
       </View>
       <Text style={styles.price} >8</Text>
       <Text style={styles.total} >New Customers</Text>
       <Text style={styles.text} >+8% from yesterday</Text>
     </TouchableOpacity>
    
   </View>
   <View style={styles.cardRow}>
 {/* Fifth Card */}
 <TouchableOpacity style={styles.cardContainer5}>
       <View style={styles.logoContainer1}>
       <Icon name="truck" size={20} color="#FFF" />
       </View>
       <Text style={styles.price} >67</Text>
       <Text style={styles.total} >Shipped Orders</Text>
       <Text style={styles.text} >+8% from yesterday</Text>
     </TouchableOpacity>
     {/* Sixth Card */}
 <TouchableOpacity style={styles.cardContainer6}>
       <View style={styles.logoContainer2}>
       <Icon1 name="clock-o" size={20} color="#FFF" />
       </View>
       <Text style={styles.price} >67</Text>
       <Text style={styles.total} >Pending Orders</Text>
       <Text style={styles.text} >+8% from yesterday</Text>
     </TouchableOpacity>
   </View>
   <View style={styles.cardRow}>
   <TouchableOpacity style={styles.cardContainer7}>
       <View style={styles.logoContainer3}>
       <Icon2 name="plus-circle" size={20} color="#FFF" />
       </View>
       <Text style={styles.price} >67</Text>
       <Text style={styles.total} >New Orders</Text>
       <Text style={styles.text} >+8% from yesterday</Text>
     </TouchableOpacity>
   </View>
   {/* Add more card rows here */}
   {/* <View style={styles.cardRow}>
     {/* Fifth Card */}
   {/* ... Your card code */}
   {/* </View> */}
 </View>
    </View>
  )
}

export default Sales_Summary

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
      cardContainer5: {
        width: 150,
        height: 165,
        flexShrink: 0,
        borderRadius: 15,
        backgroundColor: '#E0F8FF',
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
        backgroundColor: '#FCEBD5',
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
        backgroundColor: '#E1E0FF',
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
      logoContainer1: {
        width: 39,
        height: 39,
        backgroundColor: 'green',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10, // Adjust the spacing as needed
      },
      logoContainer2: {
        width: 39,
        height: 39,
        backgroundColor: 'orange',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10, // Adjust the spacing as needed
      },
      logoContainer3: {
        width: 39,
        height: 39,
        backgroundColor: 'blue',
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