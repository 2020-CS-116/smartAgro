import { StyleSheet, Text, View,ScrollView,FlatList,TouchableOpacity,Image,TextInput } from 'react-native'
import React,{useState} from 'react'
import { RouteProp, NavigationProp } from '@react-navigation/native';
import MyHeader from '../TabNavigation/MyHeader'
import Styles from '../TabNavigation/Styles'
import Icon from 'react-native-vector-icons/Ionicons';
type OrderManagementProps = {
  route: RouteProp<Record<string, object | undefined>, string>;
  navigation: NavigationProp<any>;
};
interface Order {
  Order_Id: number;
  Order_Number: string;
  Status: string;
  Item: string;
  Customer_Name: string;
  Shipping_Service: string;
  Tracking_Code: string;
}

const OrderManagement = ({ route, navigation }: OrderManagementProps) =>{
  const [searchText, setSearchText] = useState<string>('');
  const [orders, setOrders] = useState<Order[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<Order[]>(orders); 
  const DATA=[
    {
      "Order_Id": 59217,
      "Order_Number": 59217342,
      "Status": "inproduction",
      "Item": 1,
      "Customer_Name": "Cody Fisher",
      "Shipping_Service": "Standard",
      "Tracking_Code": "940010010936113003113"
    },
    {
      "Order_Id": 59217,
      "Order_Number": 59217342,
      "Status": "new order",
      "Item": 1,
      "Customer_Name": "Kriston Waston",
      "Shipping_Service": "Priority",
      "Tracking_Code": "950010010936113003113"
    },
    {
      "Order_Id": 59217,
      "Order_Number": 59217342,
      "Status": "cancelled",
      "Item": 1,
      "Customer_Name": "Kriston Waston",
      "Shipping_Service": "Priority",
      "Tracking_Code": "950010010936113003113"
    },
    {
      "Order_Id": 59217,
      "Order_Number": 59217342,
      "Status": "rejected",
      "Item": 1,
      "Customer_Name": "John Smith",
      "Shipping_Service": "Express",
      "Tracking_Code": "950010010936113003113"
    }
    ,
    {
      "Order_Id": 59217,
      "Order_Number": 59217342,
      "Status": "rejected",
      "Item": 1,
      "Customer_Name": "John Smith",
      "Shipping_Service": "Express",
      "Tracking_Code": "950010010936113003113"
    },
  ]

  const handleChange = (text:any) => {
    setSearchText(text);
    const query = text.toLowerCase();
    setFilteredUsers(orders.filter((order) =>
    order.Customer_Name.toLowerCase().includes(query)
    ));
  };
  const renderItem = ({ item }:any) => (
    <Item order={item} />
  );
  const Item = ({ order }:any) => (
    <TouchableOpacity style={{ padding: 10, marginTop: 5, elevation: 6, backgroundColor: '#FFFF', borderRadius: 10, marginHorizontal: 10 }}>
    <Text style={{ color: 'blue' }}>Order Id: {order.Order_Id}</Text>
    <Text style={{ color: 'green' }}>Order Number: {order.Order_Number}</Text>
    <Text style={{ color: 'red' }}>Status: {order.Status}</Text>
    <Text style={{ color: 'purple' }}>Customer Name: {order.Customer_Name}</Text>
    <Text style={{ color: 'orange' }}>Shipping Service: {order.Shipping_Service}</Text>
    <Text style={{ color: 'brown' }}>Tracking Code: {order.Tracking_Code}</Text>
  </TouchableOpacity>
  
  );
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
 <View style={{flexDirection:'row',justifyContent:'space-between',width:'100%',marginTop:10,marginBottom:10}}>
  {/* <View style={{width:'100%'}}> */}
  <TouchableOpacity style={styles.exportButton}>
      <Image source={require('../../assets/export.png')} style={styles.exportImg}/>
      <Text style={styles.exportButtonText}>Export</Text>
  </TouchableOpacity>
 {/* </View> */}
 {/* <View style={{width:'100%'}}> */}
  <TouchableOpacity style={styles.adduserButton}>
  <Icon name="add-circle-outline" style={{marginRight:10,color:'#FFF'}} size={20} color="#000" />
  <Text style={styles.userButtonText}>Create Order</Text>
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
 <FlatList
      data={DATA}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
      nestedScrollEnabled={true}
    />
    </ScrollView>
    </View>
  )
}

export default OrderManagement

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
})