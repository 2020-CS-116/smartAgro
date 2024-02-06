import React from 'react';
import { View, FlatList, Text, TouchableOpacity } from 'react-native';
import { RouteProp, NavigationProp } from '@react-navigation/native';
const data = [
  { id: 1, Name: 'Product 1', Popularity: "10%", Sales: "90%" },
  { id: 2, Name: 'Product 2', Popularity: "15%", Sales: "70%" },
  { id: 3, Name: 'Product 3', Popularity: "8%", Sales: "30%" },
  // Add more data as needed
];
type TopProductsScreenProps = {
    route: RouteProp<Record<string, object | undefined>, string>;
    navigation: NavigationProp<any>;
  };
  
const TopProducts = ({ route, navigation }: TopProductsScreenProps) => {
  const renderItem = ({ item }:any) => (
   <TouchableOpacity>
     <View style={{ flexDirection: 'row', padding: 10, }}>
      <Text style={{ flex: 1,color:'#FF8900' }}>{item.id}</Text>
      <Text style={{ flex: 2 ,color:'#884DFF'}}>{item.Name}</Text>
      <Text style={{ flex: 1,color:'#00E58F' }}>{item.Popularity}</Text>
      <Text style={{ flex: 1,color:"#0095FF" }}>{item.Sales}</Text>
    </View>
   </TouchableOpacity>
  );

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      nestedScrollEnabled={true}
      keyExtractor={item => item.id.toString()}
      ListHeaderComponent={() => (
       <TouchableOpacity>
         <View style={{ flexDirection: 'row', padding: 10, backgroundColor: '#f2f2f2',marginHorizontal:5,borderRadius:5,}}>
          <Text style={{ flex: 1, fontWeight: 'bold',color:'#FF8900' }}>ID</Text>
          <Text style={{ flex: 2, fontWeight: 'bold',color:'#884DFF' }}>Name</Text>
          <Text style={{ flex: 1, fontWeight: 'bold',color:'#00E58F' }}>Popularity</Text>
          <Text style={{ flex: 1, fontWeight: 'bold',color:"#0095FF" }}>Sales</Text>
        </View>
       </TouchableOpacity>
      )}
    />
  );
};

export default TopProducts;
