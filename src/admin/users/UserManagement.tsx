import { StyleSheet, Text, View,ScrollView,TextInput,TouchableOpacity,Image,ActivityIndicator } from 'react-native'
import React,{useState,useEffect} from 'react'
import MyHeader from '../TabNavigation/MyHeader'
import Styles from '../TabNavigation/Styles'
import { RouteProp, NavigationProp } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import axios from 'axios';
type UserManagementProps = {
    route: RouteProp<Record<string, object | undefined>, string>;
    navigation: NavigationProp<any>;
  };
  interface User {
    id: number;
    firstName: string;
    lastName: string;
    maidenName: string;
    age: number;
    gender: string;
    email: string;
    phone: string;
    username: string;
    password: string;
    birthDate: string;
    image: string;
    bloodGroup: string;
    height: number;
    weight: number;
    eyeColor: string;
    hair: {
      color: string;
      type: string;
    };
    domain: string;
    ip: string;
    address: {
      address: string;
      city: string;
      coordinates: {
        lat: number;
        lng: number;
      };
      postalCode: string;
      state: string;
    };
    macAddress: string;
    university: string;
    bank: {
      cardExpire: string;
      cardNumber: string;
      cardType: string;
      currency: string;
      iban: string;
    };
    company: {
      address: {
        address: string;
        city: string;
        coordinates: {
          lat: number;
          lng: number;
        };
        postalCode: string;
        state: string;
      };
      department: string;
      name: string;
      title: string;
    };
    ein: string;
    ssn: string;
    userAgent: string;
    crypto: {
      coin: string;
      wallet: string;
      network: string;
    };
  }
  
const UserManagement = ({ route, navigation }: UserManagementProps) =>{
  const [searchText, setSearchText] = useState<string>('');
  const [users, setUsers] = useState<User[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<User[]>(users); 
useEffect(() => {
      getUsers()
}, [])
const getUsers=async()=>{
     const response=await axios.get('https://dummyjson.com/users')
     const data=response.data;
     const users=data.users;
      setUsers(users)
} 



const handleChange = (text:any) => {
  setSearchText(text);
  const query = text.toLowerCase();
  setFilteredUsers(users.filter((user) =>
    user.firstName.toLowerCase().includes(query)
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
    <Icon name="add-user" style={{marginRight:10,color:'#FFF'}} size={20} color="#000" />
    <Text style={styles.userButtonText}>New User</Text>
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
       users.length===0?<View style={styles.loadercontainer}>
       <ActivityIndicator size="large" color="#6BAAFC" />
     </View>:filteredUsers.length===0? users.map((item:any)=>{
        return(
          <View style={styles.content} key={item.id}>
          <TouchableOpacity><Image source={{uri:item.image}} style={styles.profileImage}/></TouchableOpacity>
          <View><Text style={styles.text}>{item.firstName} {item.lastName}</Text></View>
          <View><Text style={styles.text}>admin</Text></View>
          <TouchableOpacity><Ionicons  name="ellipsis-horizontal" size={30} color="#000" /></TouchableOpacity>
         </View>
        )
      }): filteredUsers.map((item:any)=>{
        return(
          <View style={styles.content} key={item.id}>
          <TouchableOpacity><Image source={{uri:item.image}} style={styles.profileImage}/></TouchableOpacity>
          <View><Text style={styles.text}>{item.firstName} {item.lastName}</Text></View>
          <View><Text style={styles.text}>admin</Text></View>
          <TouchableOpacity><Ionicons  name="ellipsis-horizontal" size={30} color="#000" /></TouchableOpacity>
         </View>
        )
      })
   }
   </ScrollView>
    </View>
  )
}

export default UserManagement

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
      },
      loadercontainer:{
        flex:1,
       justifyContent:'center',
       alignItems:'center',
       textAlign:'center',
       marginTop:150,
     }
})