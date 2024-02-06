import { StyleSheet, Text, View,SafeAreaView,ScrollView,Image,TouchableOpacity,Button } from 'react-native'
import React,{useEffect, useState} from 'react'
import { RouteProp, NavigationProp } from '@react-navigation/native';
import MyHeader from '../components/TabNavigation/MyHeader'
import Icon from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign'
import AntDesign1 from 'react-native-vector-icons/AntDesign'
type ProductScreenProps = {
  route: RouteProp<Record<string, object | undefined>, string>;
  navigation: NavigationProp<any>;
};
interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}


const Products = ({ route, navigation }: ProductScreenProps) =>  {
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
     getProductData()
}, []);

const getProductData=async()=>{
  await fetch('https://fakestoreapi.com/products')
  .then(res=>res.json())
  .then(json=>setProducts(json))
}
const DeleteProduct=(id:number)=>{
    console.warn("Deleted Product Successfully",id),
    console.log(id)
}
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
        {
          products.map((item)=>{
            return(
              <ScrollView   contentContainerStyle={styles.cardContainer}  key={item.id} >
              <TouchableOpacity>
                <View>
                <Image style={styles.image}  source={{uri:item.image}} />
                </View>
              </TouchableOpacity>
              <View style={{marginTop:20}}>
                <Text style={{color:'#ff001a'}}>{item.title.split(' ').slice(0,3).join(' ')}</Text>
                <Text style={{marginTop:10,color:'#f5a403'}}>{item.price}$</Text>
                <Text style={{marginTop:10,color:"#00ff58"}}>{item.rating.count}</Text>
                <Text style={{marginTop:10,color:'#7800fa'}}>{item.category}</Text>
                <TouchableOpacity style={styles.readMoreButton} onPress={()=>navigation.navigate('details',{ id: item.id })}><Text style={{color:'#FFF'}}><AntDesign name='eye' style={{color:"#FFF"}}  size={20}/></Text></TouchableOpacity>
              </View>
              <View style={{marginRight:10,justifyContent:'center',alignItems:'flex-end'}}>
                <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('Edit Product',{ id: item.id })}><Icon name='edit' style={{color:"#FFF"}}   size={20}/></TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={()=>DeleteProduct(item.id)}><AntDesign name='delete' style={{color:"#FFF"}}  size={20}/></TouchableOpacity>
              </View>
              </ScrollView>
            )
          })
        }
     </View>
     </ScrollView>
    </SafeAreaView>
  )
}

export default Products

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
    marginBottom:80,
  },
  cardContainer:{
      flexDirection:"row",
      justifyContent:'space-between',
      elevation:6,
      borderRadius:10,
      marginTop:10,
      marginHorizontal:10,
      backgroundColor:'#FFF'
  }
  ,
  image:{
      width:100,
      height:130,
      borderRadius:20,
      marginTop:10,
      marginLeft:10,
      marginBottom:10,
      marginRight:10,
  },
  button:{
       width:40,
       height:30,
       justifyContent:'center',
       alignItems:'center',
       backgroundColor:"green",
       color:'FFF',
       marginBottom:10,
       borderRadius:5,
     
  },
  readMoreButton:{
        width:50,
        height:30,
        backgroundColor:'green',
        justifyContent:'center',
        alignItems:"center",
        borderRadius:10,
        marginTop:10,
        marginBottom:10,
  }
})