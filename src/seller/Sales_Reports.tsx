import { StyleSheet, Text, View,SafeAreaView,ScrollView,Platform, TouchableOpacity } from 'react-native'
import React,{useEffect} from 'react'
import { RouteProp, NavigationProp } from '@react-navigation/native';
import MyHeader from '../components/TabNavigation/MyHeader'
import RNFS from 'react-native-fs';
import FontAwesome5  from 'react-native-vector-icons/FontAwesome5'
type ProductScreenProps = {
  route: RouteProp<Record<string, object | undefined>, string>;
  navigation: NavigationProp<any>;
};
const  Sales_Reports = ({ route, navigation }: ProductScreenProps) =>  {
  useEffect(() => {
    // Optional: Delete the file if it exists before downloading
    const filePath = RNFS.DocumentDirectoryPath + '/example.pdf';
    RNFS.unlink(filePath)
      .then(() => {
        console.log('Previous file deleted');
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const downloadFile = () => {
    const url = 'https://www.scielo.cl/pdf/jtaer/v15n1/0718-1876-jtaer-15-01-00107.pdf';
    const filePath = RNFS.DocumentDirectoryPath + '/report.pdf';
    RNFS.downloadFile({
      fromUrl: url,
      toFile: filePath,
      background: true, // Enable downloading in the background (iOS only)
      discretionary: true, // Allow the OS to control the timing and speed (iOS only)
      progress: (res) => {
        // Handle download progress updates if needed
        const progress = (res.bytesWritten / res.contentLength) * 100;
        console.log(`Progress: ${progress.toFixed(2)}%`);
      },
    })
      .promise.then((response) => {
        console.log('File downloaded!', response);
      })
      .catch((err) => {
        console.log('Download error:', err);
      });
  };

  return (
    <SafeAreaView >
     <View >
     <MyHeader
     back
     onPressBack={() => navigation.goBack()}
     title={route.name}
     right="more-vertical"
     onRightPress={() => navigation.navigate('profile')}
     style={styles.headerWithShadow}
   />
     </View>
     <ScrollView >
     <View style={styles.contentContainer}>
      <TouchableOpacity style={styles.button} onPress={downloadFile}>
        <FontAwesome5 name='file-download' size={25} style={{color:'#FF6666'}}/>
        <Text style={styles.text}>Generate Report</Text>
      </TouchableOpacity>
     </View>
     </ScrollView>
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
    marginHorizontal:10,
    
    
  },
  button:{
      width:'100%',
      height:50,
      elevation:6,
      backgroundColor:"#FFF",
      borderRadius:10,
      flexDirection:'row',
      justifyContent:'center',
      alignItems:'center',
    
      
     
  }
  , 
  text:{
      fontSize:16,
      marginLeft:10,
      color:"green"
  }
})