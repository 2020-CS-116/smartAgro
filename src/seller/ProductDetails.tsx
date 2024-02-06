import { StyleSheet, Text, View,SafeAreaView,Image,TouchableOpacity, ScrollView } from 'react-native'
import React,{useEffect,useState} from 'react'
import { RouteProp, NavigationProp } from '@react-navigation/native';
import MyHeader from '../seller/TabNavigation/MyHeader'
import Icon from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign'
type ProductdetailsProps = {
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
const ProductDetails :React.FC<ProductdetailsProps> = ({ route, navigation }) =>  {
    const { id } = route.params as { id: string };
    const [product, setProduct] = useState<Product | null>(null);
  
    useEffect(() => {
       getProductData()
  }, []);
  
  const getProductData=async()=>{
    await fetch(`https://fakestoreapi.com/products/${id}`)
    .then(res=>res.json())
    .then(json=>setProduct(json))
  }
  if (!product) {
    return null; 
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
   <ScrollView style={{marginBottom:80}}>
   <View style={styles.contentContainer}>
   <Text style={styles.text}>{product.title}</Text>
    <TouchableOpacity style={{backgroundColor:'#FFF'}}>
        <View>
        <Image source={{uri:product.image}} style={styles.image}/>
        </View>
    </TouchableOpacity>
    <Text style={styles.text}>{product.description}</Text>
    <Text style={styles.text}>{product.category}</Text>
    <Text style={styles.text}>{product.rating.rate}</Text>
    <View style={{marginRight:10,justifyContent:'center',alignItems:'center',flexDirection:'row',}}>
                <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('Edit Product',{ id:product.id })}><Icon name='edit' style={{color:"#FFF"}}   size={20}/></TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={()=>DeleteProduct(product.id)}><AntDesign name='delete' style={{color:"#FFF"}}  size={20}/></TouchableOpacity>
              </View>
    </View>
   </ScrollView>
   </SafeAreaView>
  )
}

export default ProductDetails

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
        marginHorizontal:10,
        elevation:6,
        backgroundColor:'#FFF',
        borderRadius:10,
        marginTop:10,

      },
      image:{
            width:"100%",
            height:300,
            objectFit:'cover',
            borderRadius:30,
            marginTop:10,
      },
      text:{
        marginHorizontal:30,
        marginTop:10,
        
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
        marginRight:20,
      
   },
})
