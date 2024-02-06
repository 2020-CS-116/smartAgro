import { StyleSheet, Text, View,SafeAreaView,FlatList,TouchableOpacity } from 'react-native'
import React,{useState} from 'react'
import { RouteProp, NavigationProp } from '@react-navigation/native';
import MyHeader from '../components/TabNavigation/MyHeader'
type ProductScreenProps = {
  route: RouteProp<Record<string, object | undefined>, string>;
  navigation: NavigationProp<any>;
};
type ItemData = {
  id: string;
  title: string;
};

const DATA: ItemData[] = [
 
];

type ItemProps = {
  item: ItemData;
  onPress: () => void;
  backgroundColor: string;
  textColor: string;
};
const Item = ({item, onPress, backgroundColor, textColor}: ItemProps) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, {backgroundColor}]}>
    <Text style={[styles.title, {color: textColor}]}>{item.title}</Text>
  </TouchableOpacity>
);
const listEmptyComponent=()=>{
  return(
    <View style={styles.emptyContainer}>
      <Text style={{color:'green',textAlign:'center',justifyContent:'center',alignItems:'center',fontSize:20}}>No messages in the inbox</Text>
    </View>
  )
}
const  Sales_Reports = ({ route, navigation }: ProductScreenProps) =>  {
  const [selectedId, setSelectedId] = useState<string>();
  const renderItem = ({item}: {item: ItemData}) => {
    const backgroundColor = item.id === selectedId ? '#6e3b6e' : '#f9c2ff';
    const color = item.id === selectedId ? 'white' : 'black';
  
    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={backgroundColor}
        textColor={color}
      />
    );
  };
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
     <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        extraData={selectedId}
        ListEmptyComponent={listEmptyComponent}
      />
    </SafeAreaView>
  )
}

export default Sales_Reports

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
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  emptyContainer:{
    flex:1,
           justifyContent:'center',
           alignItems:'center',
           textAlign:'center',
           marginTop:200,
           alignContent:'center',

  }
})