import { StyleSheet, View,SafeAreaView ,ScrollView,Text, TouchableOpacity,FlatList,TextInput,Image, Alert} from 'react-native'
import React,{useEffect, useState} from 'react'
import { RouteProp, NavigationProp } from '@react-navigation/native';
import ImagePicker from 'react-native-image-crop-picker';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome5';
// import axios from 'axios';
// import { BASE_URL } from '../../../api/BaseUrl';
import MyHeader from '../TabNavigation/MyHeader'
import SelectDropdown from 'react-native-select-dropdown'
const categories = ["Product1", "Product2", "Product3", "Product4"]
type editProductsProps = {
  route: RouteProp<Record<string, object | undefined>, string>;
  navigation: NavigationProp<any>;
};
type ItemData={
   id:string,
   title:string,
   description:string,
   price:number,
   quantity:number,
   category:string,
   image:string
}
type ItemProps = {
  item: ItemData;
};
const EditProducts:React.FC<editProductsProps> = ({ route, navigation }:editProductsProps,{item}: {item: ItemData}) => {
  const [title, setTitle] = useState<string>('');
  const [price,setPrice]=useState<any>()
  const [quantity,setQuantity]=useState<any>()
  const [description,setDiscription]=useState<string>()
  const [category,setCategory]=useState<string>()
  const [image, setImage] = useState<string | null>(null);
  const[filename,setFileName]= useState<string | null>(null);
  const [getData, setData] = useState([]);
  const updatedPrice=parseFloat(price)
  const updatedQuantiy=parseInt(quantity)
 
  const data={
    title,
    description,
    price: updatedPrice,
    quantity: updatedQuantiy,
    category,
    image
  }
  const formData = new FormData();
  formData.append("title",data.title)
  formData.append("description",data.description)
  formData.append("price",data.price)
  formData.append("quantity",quantity)
  formData.append("image",{
    uri:image,
    type:'image/jpg',
    name:filename
  })
  const { id } = route.params as { id: string };
    const [product, setProduct] = useState<ItemData | null>(null);
  useEffect(() => {
    getProductData()
}, []);

const getProductData=async()=>{
 await fetch(`https://fakestoreapi.com/products/${id}`)
 .then(res=>res.json())
 .then(json=>setProduct(json))
}
useEffect(() => {
    if (product) {
      setTitle(product.title);
      setPrice(product.price.toString());
      setQuantity('Dummy Quantity');
      setDiscription(product.description);
      setCategory(product.category);
      setImage(product.image);
    }
  }, [product]);
  
if(!product) {
    return null; 
}
// Object.entries(data).forEach(([key, value]) => {
//   formData.append(key, value as string | Blob | null);
// });pri
// useEffect(()=>{
// const handegetData=async()=>{
// //  const response=await axios.get(BASE_URL)
// //  console.log("The response is:",response)
// //  if(response.status===200)
// //  {
// //      setData(response.data)
// //  }
// // }
// // handegetData()
// },[])

  const imagePick = () => {
    ImagePicker.openPicker({
      mediaType:'photo',
      width: 400,
      height: 400,
      cropping: true,
    }).then((image) => {
      console.log(image);
      setImage(image.path);
      const paths=image['path']
      const filename=paths.substring(paths.lastIndexOf('/')+1);
      setFileName(filename)
    });
  };
  
  const UpdateItemHandler = async () => {
   console.warn("Product Updated Successfully")
   console.log("The data is:",data)
    // const headers={
    //   Accept:'application/json',
    //   'Content-Type':'multipart/form-data',
    // }
    // try {
    //   // Make a POST request to add an item
    //   // const postResponse =await axios.post(BASE_URL, formData, {headers:headers})
    //   // console.log("The post response is:",postResponse)
    //   // if (postResponse.status === 201) {
    //   //   // console.log('Post request successful');
    //   //   // Close the modal
    //   //   setTitle('')
    //   //   setDiscription('')
    //   //   setPrice('')
    //   //   setQuantity('')
    //   //   setImage('')
    //   //   setModalVisible(!isModalVisible);
    //   // }
    // } catch (error) {
    //   console.error('Error:', error);
    // }
  };
  return (
    <SafeAreaView>
     <View style={styles.container}>
      <MyHeader
        back
        onPressBack={() => navigation.goBack()}
        title={route.name}
        right="more-vertical"
        onRightPress={() => console.log('right')}
        style={styles.headerWithShadow}
      />
      <ScrollView style={styles.contentContainer} nestedScrollEnabled={true}>
       <View  style={styles.modalContainer}>
      <View style={styles.modal}>
        <View style={styles.inputContainer}>
        <TextInput
      placeholder='Enter product name'
      style={styles.input}
      value={title} onChangeText={(text)=>setTitle(text)}/>
       <TextInput
      placeholder='Enter product price'
      style={styles.input}
      value={price} onChangeText={(text)=>setPrice(text)}/>
     
       <TextInput
      placeholder='Enter product quantity'
      
      style={styles.input}
      value={quantity} onChangeText={(text)=>setQuantity(text)}/>
      <SelectDropdown
            data={categories}
            onSelect={(selectedItem, index) => {
              console.log(selectedItem, index);
            }}
            defaultButtonText={category}
            buttonTextAfterSelection={(selectedItem, index) => {
              return selectedItem;
            }}
            rowTextForSelection={(item, index) => {
              return item;
            }}
            buttonStyle={styles.dropdown1BtnStyle}
            buttonTextStyle={styles.dropdown1BtnTxtStyle}
            renderDropdownIcon={isOpened => {
              return <FontAwesomeIcon name={isOpened ? 'chevron-up' : 'chevron-down'} color={'green'} size={15} />;
            }}
            dropdownIconPosition={'right'}
            dropdownStyle={styles.dropdown1DropdownStyle}
            rowStyle={styles.dropdown1RowStyle}
            rowTextStyle={styles.dropdown1RowTxtStyle}
          />
        <TextInput
      placeholder='Enter product discription'
      style={styles.input1}
      multiline={true}
      numberOfLines={4}
      value={description} onChangeText={(text)=>setDiscription(text)}/>
        </View>
        <TouchableOpacity onPress={imagePick}  style={styles.imageContainer}>
       {image ? (
        <Image style={styles.image} source={{ uri: image }} />
      ) : (
        <Text >Product Image</Text>
      )}
    </TouchableOpacity>
       <TouchableOpacity onPress={UpdateItemHandler} style={styles.button1}>
      <Text style={styles.buttonText1}>Update Product</Text>
    </TouchableOpacity>
      </View>
    </View>
       {/* end add crop model */}
      </ScrollView>
    </View>
   </SafeAreaView>
  )
}

export default EditProducts

const styles = StyleSheet.create({
    container:{
      backgroundColor:'#fff',
      height:'100%',
  },
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
         backgroundColor:"#FFF"
    },
    button: {
      width: "100%",
      height: 50,
      flexShrink: 0,
      borderRadius: 14,
      backgroundColor: '#FFF',
      borderWidth:1,
      borderColor:'green',
      flex:1,
      justifyContent:'center',
      alignItems:'center',
      paddingHorizontal: 10,
      shadowColor: 'green',
      shadowOpacity: 1,
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowRadius: 4,
      elevation: 6,
      marginTop:10,
    },
    buttonText:{
      color:'green',
      textAlign: 'center',
      fontFamily: 'PT Sans',
      fontSize: 16,
      fontStyle: 'normal',
      fontWeight: '700',
      
    },
    modalContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    modal: {
      width: "100%",
      height: 'auto',
      borderRadius: 15,
      backgroundColor: '#FFF',
      alignItems: 'center',
      
     
    },
    text: {
      color: '#4BA26A',
      fontFamily: 'PT Sans',
      fontSize: 24,
      fontStyle: 'normal',
      fontWeight: '700',
      marginBottom:10,
    },
    input1: {
      height: 122,
      flex: 0,
      borderRadius: 15,
      borderWidth: 1,
      borderColor: '#000',
      padding: 8,
      color: 'black', 
      fontSize: 16,
      fontFamily: 'PT Sans', 
      fontStyle: 'normal',
      fontWeight: '400',
      marginBottom:30,
    },
    input2: {
      height: 100,
      flex: 0,
      borderRadius: 15,
      borderWidth: 1,
      borderColor: '#000',
      padding: 8,
      color: 'black', 
      fontSize: 16,
      fontFamily: 'PT Sans', 
      fontStyle: 'normal',
      fontWeight: '400',
      marginBottom:30,
    },
    button1: {
      width: 330,
      height: 40,
      flex: 0,
      backgroundColor: '#4BA26A', 
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 15,
    
    },
    buttonText1: {
      color: '#FFF', 
      fontFamily: 'PT Sans',
      fontSize: 16,
      fontStyle: 'normal',
      fontWeight: '700',
     
    },
    button2: {
      width: 330,
      height: 40,
      flex: 0,
      backgroundColor: '#FFF', 
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 15,
      borderWidth:1,
      borderColor:'green',
     
    },
    buttonText2: {
      color: 'green', 
      fontFamily: 'PT Sans',
      fontSize: 16,
      fontStyle: 'normal',
      fontWeight: '700',
     
    },
    inputContainer:{
      paddingHorizontal:20,
 },
 input:{
  height: 40,
  borderColor: 'green',
  borderWidth: 1,
  marginBottom: 10,
  paddingHorizontal: 10,
  borderRadius:15
 },
 imageContainer:{
  width:'90%',
  height:160,
  borderRadius:20,
  justifyContent:'center',
  alignItems:'center',
  borderWidth:1,
  borderColor:'green',
  marginBottom:10,
  marginHorizontal:20,
},
image:{
  width:'100%',
  height:160,
  borderRadius:20,
  justifyContent:'center',
  alignItems:'center',
},

card: {
  width: 200,
  height:'auto', 
  margin: 10, 
  padding:10,
  borderRadius: 7.387,
   
  backgroundColor: '#fff',
 
  alignItems: 'center',
  justifyContent: 'center',
 
 

  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.2, 
  shadowRadius: 4,
  elevation: 4, 
},
imageContainer1: {
  alignItems: 'center',
  justifyContent: 'center',
  width:'100%'
},
image1: {
  width: '100%',
  height: 150,
  margin:10,


},
cardtitle: {
  fontSize: 12,
  fontWeight: 'bold',
  marginVertical: 5,
  textAlign: 'center',
  marginTop:10,
},
price: {
  fontSize: 14,
  fontWeight: 'normal',
  marginVertical: 5,
  textAlign: 'center',
  marginTop:0,
  color:'#000',
},
save: {
  fontSize: 14,
  fontWeight: 'normal',
  marginVertical: 5,
  textAlign: 'center',
},
buyButton: {
  width:200,
  backgroundColor: '#4BA26A',
  padding: 10,
  borderRadius: 5,
  marginTop: 30,
},
buyButtonText: {
  color: '#FFF',
  textAlign: 'center',
  fontWeight: 'bold',
},
title: {
  color: '#272D2F',
  fontFamily: 'Aoboshi One',
  fontSize: 20,
  fontStyle: 'normal',
  fontWeight: 'bold',
  lineHeight: 30.784,
},
dropdown1BtnStyle: {
  width: '100%',
  height: 40,
  borderColor: 'green',
  borderWidth: 1,
  marginBottom: 10,
  paddingHorizontal: 10,
  borderRadius:15,
  backgroundColor:'#FFF'
},
dropdown1BtnTxtStyle: {color: '#4BA26A', textAlign: 'left'},
dropdown1DropdownStyle: {backgroundColor: '#FFF'},
dropdown1RowStyle: {backgroundColor: '#FFF', borderBottomColor: '#FFF'},
dropdown1RowTxtStyle: {color: '#444', textAlign: 'left'},
  })