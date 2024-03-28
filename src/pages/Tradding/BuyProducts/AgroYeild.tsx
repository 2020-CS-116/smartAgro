import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image, TouchableWithoutFeedback, Button, Alert } from 'react-native'
import React, { useEffect } from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { RouteProp, NavigationProp } from '@react-navigation/native';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { addProducts } from '../../../store/productSlice';
import data from '../../../api/products';

type BuyProductsProps = {
  route: RouteProp<Record<string, object | undefined>, string>;
  navigation: NavigationProp<any>;
};
const BuyProducts: React.FC<BuyProductsProps> = ({ navigation }) => {
  const products = useAppSelector((state) => state.products);
  const cart = useAppSelector((state) => state.cart)
  const Array=[1,2,3,4,5,6,7,8,9,10]
  // console.log("The products are:",products)

  const dispatch = useAppDispatch()

  useEffect(() => {
    data.map((currentItem) => {
      dispatch(addProducts(currentItem))
    })
  }, [])
  const handlePress = () => {
    navigation.navigate('cart');
  };
  const handleImage = () => {
    // navigation.navigate('detail');
   Alert.alert('Working Successfully1')
  }
  const getTotalQuantity = () => {
    let total = 0
    cart.forEach((item: any) => {
      total += item.quantity
    })
    return total
  }

  return (
    <View style={styles.Container}>

      {/* Upper Container  */}
      <View style={styles.topContainer}>
        <View style={{flexDirection: 'row' , marginLeft: '4%' ,alignItems: 'flex-end' }}>
          <View>
            <AntDesign name='arrowleft' size={23} style={styles.icon} onPress={() => navigation.goBack()} />
          </View>
          <View>
            <Text style={styles.smartText}> Agro Yeilds </Text>
          </View>
        </View>
        <View>
        <TouchableOpacity style={styles.cartContainer} onPress={handlePress} >
          <TouchableWithoutFeedback onPress={() => navigation.navigate('cart')}>
            <Image source={require('../../../assets/cart.png')} />
          </TouchableWithoutFeedback>
          <View style={styles.cartTextCircle}>
            <Text style={styles.cartText}>{getTotalQuantity() || 0}</Text>
          </View>
        </TouchableOpacity>
        
        </View>
      </View>

      {/* Lower Container  */}
      <ScrollView>
        <View style = {styles.cardContainer}>
        {
           Array.map((item:any,index)=>{
            return <>
              <View style={styles.card} key={index}>
                <TouchableOpacity style={styles.img_container} onPress={handleImage}>
                <Image source={require('../../../assets/h_img3.jpg')}  style={{resizeMode: 'contain' , width: '90%' , height: '90%'}} />
                </TouchableOpacity>
                <View style={styles.detils_container}>
                  <Text style= {{color: '#000' , fontWeight: 'bold', fontSize: 18}}> Artal </Text>
                  <Text style= {{color: '#000'}}> Rs: 1000 </Text>
                </View>
                <View style ={{height: '15%', justifyContent: 'center', alignItems: 'center' ,marginHorizontal: '2%'}}>
                <Text style= {{color: '#696969' , fontSize: 12}}>This is the Description of the Image. </Text>
                </View>
                <View style = {{height: '12%', justifyContent: 'center', alignItems: 'center'}}>
                 <TouchableOpacity style={styles.add_to_cart}  onPress={() => Alert.alert('Product has been added Successfully1')}>
                  <Text style={{color: '#fff'}}>Add To Cart</Text>
                 </TouchableOpacity>
                </View>
             </View>
            </>
           })
        }
        </View>
      </ScrollView>

    </View>
  )
}

export default BuyProducts

const styles = StyleSheet.create({

  Container: {
    flex: 1, // This allows the ScrollView to take up the entire screen.
    backgroundColor: '#fff',
  },

  topContainer: {
    backgroundColor: '#fff',
    width: '100%',
    height: '12%',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
     elevation: 7,
  },

  smartText: {
    color: '#000000',
    fontFamily: 'Alatsi',
    fontSize: 21,
    marginLeft: '10%', 
    fontStyle: 'normal',
    fontWeight: 'bold',
  },
  icon: {
    color: '#000000',
  },
  cartContainer: {
    marginRight: '8%',
    justifyContent:'center',
    alignItems: 'center'
  },
  cartTextCircle: {
    position: 'absolute',
     width: 15,
     height: 15,
    borderRadius: 50,
    backgroundColor: '#fff',
     top: -5,
    right: '-3%'
  },
  cartText: {
    color: '#000'
  },

  // Card Styling 
  cardContainer: {
   
    backgroundColor:'#fff',
     flexDirection:'row',
     flexWrap:'wrap',
     justifyContent: 'center',
     marginTop: '5%'
    
  },
  card: {
    height:300,
    backgroundColor:'#fff',
    width: '45%',
    margin: 5,
    marginBottom: '4%',
    elevation: 5,
    borderRadius: 10,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  img_container: {
    backgroundColor: '#fff',
    height: '65%',
    width: '100%',
    justifyContent: 'center',
    alignItems:'center',
  },
  detils_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: '8%' 
  },
  add_to_cart:{
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    width:'70%',height:'80%', backgroundColor:'#3cb371',
    marginBottom: 6
  }
})