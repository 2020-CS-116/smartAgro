import { StyleSheet, Text, View,ScrollView,TextInput,TouchableOpacity,Image } from 'react-native'
import React,{useState,useEffect} from 'react'
import MyHeader from '../TabNavigation/MyHeader'
import Styles from '../TabNavigation/Styles'
import { RouteProp, NavigationProp } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import Ionicons from 'react-native-vector-icons/Feather';
import axios from 'axios';
type ProductManagementProps = {
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

const  ProductManagement= ({ route, navigation }: ProductManagementProps) =>{
  const [searchText, setSearchText] = useState<string>('');
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<Product[]>(products); 
useEffect(() => {
      getUsers()
}, [])
const getUsers=async()=>{
     const response=await axios.get('https://fakestoreapi.com/products')
     const data=response.data;
    //  const users=data.users;
     setProducts(data)
} 



const handleChange = (text:any) => {
  setSearchText(text);
  const query = text.toLowerCase();
  setFilteredUsers(products.filter((product) =>
    product.title.toLowerCase().includes(query)
  ));
};
  return (
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
 <View style={{flexDirection:'row',justifyContent:'space-between',width:'100%',marginTop:10,}}>
  {/* <View style={{width:'100%'}}> */}
  <TouchableOpacity style={styles.exportButton}>
      <Image source={require('../../assets/export.png')} style={styles.exportImg}/>
      <Text style={styles.exportButtonText}>Export</Text>
  </TouchableOpacity>
 {/* </View> */}
 {/* <View style={{width:'100%'}}> */}
  <TouchableOpacity style={styles.adduserButton}>
  <Icon name="add-circle-outline" style={{marginRight:10,color:'#FFF'}} size={20} color="#000" />
  <Text style={styles.userButtonText}>New Product</Text>
  </TouchableOpacity>
 {/* </View> */}
  </View>
  <View style={styles.searchBar}>
  <TextInput
      style={styles.input}
      placeholder="Search users..."
      onChangeText={handleChange}
      value={searchText}
    />
    {/* <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
      <Text>Search</Text>
    </TouchableOpacity> */}
  </View>
 {
     filteredUsers.length===0? products.map((item:any)=>{
      return(
        <View style={styles.content} key={item.id}>
        <TouchableOpacity><Image source={{uri:item.image}} style={styles.profileImage}/></TouchableOpacity>
        <View><Text style={styles.text}>{item.title.split(' ').slice(0, 2).join(' ')}</Text></View>
        <View><Text style={styles.text}>{item.category}</Text></View>
        <TouchableOpacity><Ionicons  name="edit" size={30} color="#000" /></TouchableOpacity>
       </View>
      )
    }): filteredUsers.map((item:any)=>{
      return(
        <View style={styles.content} key={item.id}>
        <TouchableOpacity><Image source={{uri:item.image}} style={styles.profileImage}/></TouchableOpacity>
        <View><Text style={styles.text}>{item.title.split(' ').slice(0, 2).join(' ')}</Text></View>
        <View><Text style={styles.text}>{item.category}</Text></View>
        <TouchableOpacity><Ionicons  name="ellipsis-horizontal" size={30} color="#000" /></TouchableOpacity>
       </View>
      )
    })
 }
 </ScrollView>
  </View>
  )
}

export default ProductManagement
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
  searchBar:{
    flexDirection: 'row', 
    alignItems: 'center',
    marginTop:10,
    justifyContent:'center',
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: '#CAFFFF',
    borderWidth: 1,
    borderRadius: 20, 
    paddingHorizontal: 16, 
    marginHorizontal: 10,
    backgroundColor: '#FFFFFF', 
    fontFamily: 'PT Sans', 
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '400', 
  },

  searchButton: {
    backgroundColor: '#32CD32',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    borderBottomEndRadius: 10,
    borderTopEndRadius: 10,
    marginRight: 10,
    elevation: 2, 
  },
      exportButton:{
          elevation:1,
          backgroundColor:"#FF1493",
          padding:10,
          borderRadius:10,
          flexDirection:'row',
          marginLeft:10,
          width:'47%',
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
      },
      adduserButton:{
        marginRight:10,
        elevation:1,
        backgroundColor:"#FB6B03",
        padding:10,
        borderRadius:10,
        flexDirection:'row',
        width:"47%"
      },
      userButtonText:{
        color: '#FFF',
        fontFamily: 'PT Sans',
        fontSize: 16,
        fontStyle: 'normal',
        fontWeight: '500',
      },
      content:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between',
        marginHorizontal:10,
        marginTop:30,
        alignItems:'center'
      },
      profileImage:{
           width:50,
           height:50,
           objectFit:'cover',
           borderRadius:50,
           backgroundColor:'green',
      },
      text:{
        flexShrink: 0,
      color: '#000',
      fontFamily: 'PT Sans',
      fontSize: 12,
      fontStyle: 'normal',
      fontWeight: '700',
      letterSpacing: 1,
      textAlign:'center'
      }
})