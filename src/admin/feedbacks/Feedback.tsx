import { StyleSheet, Text, View,TouchableOpacity, Image, ScrollView } from 'react-native'
import React from 'react'
import Styles from '../TabNavigation/Styles'
import MyHeader from '../TabNavigation/MyHeader'
import { RouteProp, NavigationProp } from '@react-navigation/native';
type FeedbackProps = {
  route: RouteProp<Record<string, object | undefined>, string>;
  navigation: NavigationProp<any>;
};
const Feedback = ({ route, navigation }: FeedbackProps) => {
  const data = [
    {
        "id": "60d2252067d0d8992e611a79",
        "message": "Your insight on this topic is truly enlightening. Thank you for sharing your perspective!",
        "rating": "★★★★★",
        "picture": "https://randomuser.me/api/portraits/med/women/25.jpg"
    },
    {
        "id": "60d2252067d0d8992e611a79",
        "message": "I appreciate your thoughtful contributions to the discussion. Your input adds great value!",
        "rating": "★★★★☆",
        "picture": "https://randomuser.me/api/portraits/med/men/40.jpg"
    },
    {
        "id": "60d2252067d0d8992e611a79",
        "message": "It's evident that you've put a lot of effort into your work. Well done!",
        "rating": "★★★★½",
        "picture": "https://randomuser.me/api/portraits/med/women/30.jpg"
    },
    {
        "id": "60d2252067d0d8992e611a79",
        "message": "Your creativity shines through in everything you do. Keep up the amazing work!",
        "rating": "★★★★⅞",
        "picture": "https://randomuser.me/api/portraits/med/men/15.jpg"
    },
    {
        "id": "60d2252067d0d8992e611a79",
        "message": "Thank you for always being so supportive and encouraging to others. Your kindness doesn't go unnoticed!",
        "rating": "★★★★★",
        "picture": "https://randomuser.me/api/portraits/med/women/50.jpg"
    },
    {
        "id": "60d2252067d0d8992e611a79",
        "message": "You have a unique way of looking at things, and I find it incredibly refreshing. Please continue to share your ideas!",
        "rating": "★★★☆☆",
        "picture": "https://randomuser.me/api/portraits/med/men/20.jpg"
    },
    {
        "id": "60d2252067d0d8992e611a79",
        "message":"Your passion for learning is evident in everything you do. Keep feeding your curiosity—it's inspiring to witness!",
        "rating": "★★★★☆",
        "picture": "https://randomuser.me/api/portraits/med/women/10.jpg"
    },
    {
        "id": "60d2252067d0d8992e611a79",
        "message": "I'm constantly impressed by your dedication and determination. You're an inspiration to us all!",
        "rating": "★★★★★",
        "picture": "https://randomuser.me/api/portraits/med/men/5.jpg"
    },
    {
        "id": "60d2252067d0d8992e611a79",
        "message":"Your positivity is contagious! Thank you for bringing such a bright energy to our community!",
        "rating": "★★★★⅞",
        "picture": "https://randomuser.me/api/portraits/med/women/35.jpg"
    },
    {
        "id": "60d2252067d0d8992e611a79",
        "message":"You have a knack for problem-solving that's truly admirable. Your solutions never cease to amaze me!",
        "rating": "★★★★★",
        "picture": "https://randomuser.me/api/portraits/med/men/45.jpg"
    }
]



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
      <ScrollView nestedScrollEnabled={true} contentContainerStyle={styles.scrollContent}>
        {data.map((item: any, index: number) => (
          <View key={index} style={styles.cardRow}>
            <TouchableOpacity style={styles.cardContainer} >
              <View style={styles.logoContainer}>
              <Image style={{width:40,height:40,borderRadius:50}} source={{uri:item.picture}}/>
              </View>
              <Text style={styles.price} >{item.rating}</Text>
              <Text style={styles.price} >{item.message}</Text>
              
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  )
}

export default Feedback

const styles = StyleSheet.create({
  headerWithShadow: {
    height: 80,
    shadowColor: 'rgba(0, 0, 0, 0.3)',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 6,
  },
  scrollContent: {
    paddingHorizontal: 10,
  },
  cardRow: {
    flexDirection: 'column',
   
    marginTop: 10,
  },
  cardContainer: {
    width: '100%',
    height: 165,
    borderRadius: 15,
    backgroundColor: '#6BAAFC',
    paddingLeft: 15,
    marginVertical: 10,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  logoContainer: {
    width: 40,
    height: 40,
    backgroundColor: 'green',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  price: {
    color: '#FFF',
    fontFamily: 'PT Sans',
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: '700',
    letterSpacing: 1,
    marginTop: 20,
  },
  total: {
    color: '#FFF',
    fontFamily: 'PT Sans',
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: '700',
    letterSpacing: 1,
    marginTop: 10,
  },
  text: {
    color: '#FFF',
    fontFamily: 'PT Sans',
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: '700',
    letterSpacing: 1,
    marginTop: 10,
  },
})
