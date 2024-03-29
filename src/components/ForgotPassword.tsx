import React, { useState } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, Image, Alert, StyleSheet, ScrollView } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign'
import { RouteProp, NavigationProp } from '@react-navigation/native';
import { responsiveHeight } from 'react-native-responsive-dimensions';
import { TextInput } from 'react-native-paper';
type ForgotPasswordProps = {
  route: RouteProp<Record<string, object | undefined>, string>;
  navigation: NavigationProp<any>;
};

const ForgotPassword: React.FC<ForgotPasswordProps> = ({ navigation }) => {

  const [emial, setemail] = useState('');
  const [verifyemial, setverifyemail] = useState(false);

  const handleSendLink = () => {
    console.warn("Link send in your email for verification")
  }

  const validemail = (e: string) => {
    const emailvar = e;
    setemail(emailvar);
    setverifyemail(false);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    if (emailRegex.test(emailvar)) {
      setemail(emailvar)
      setverifyemail(true)
    }
  }
  return (
    <ScrollView>
      <SafeAreaView style={styles.topContainer}>
        <View style={styles.container}>
          <View style={styles.iconContainer}>
            <AntDesign name='left' size={20} style={styles.icon} onPress={() => navigation.goBack()} />

          </View>
          <View style={styles.imageContainer}>
            <Image source={require('../assets/forget.png')} />
          </View>
          <View style={styles.contentContainer}>
            <Text style={styles.text}>
              Forgot Password
            </Text>
            <Text style={styles.subText}>
              Enter the email address you used when you joined and we'll send you instructions to reset your password.
            </Text>
            <TextInput
              label="Email"
              left={<TextInput.Icon icon="email" size={25} />}
              style={styles.input}
              onChangeText={e => validemail(e)}
            />
            {
              emial.length < 1 ? null : verifyemial ? null :
                <Text style={{ margin: 5, color: '#D20062' }}> Invalid Email</Text>
            }
            <TouchableOpacity style={styles.button} onPress={handleSendLink}>
              <Text style={styles.buttonText}>Send Link</Text>
            </TouchableOpacity>
            <View style={styles.loginContainer}>
              <Text style={styles.text1}>Having a Problem?</Text>
              <Text style={styles.loginText} onPress={() => navigation.navigate('Signup')} >Send Again</Text>
            </View>
          </View>

        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default ForgotPassword;
const styles = StyleSheet.create({
  topContainer: {
    flex: 1,
  },
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  iconContainer: {
    width: '100%',
    height: 58.483,
    flexDirection: 'row',
    backgroundColor: '#fff'
  },
  icon: {
    width: 16.75,
    height: 27.586,
    color: '#000000',
    marginLeft: 10,
    marginTop: 20,
  },
  imageContainer: {
    width: '100%',
    height: responsiveHeight(30),
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center'
  },
  contentContainer: {
    paddingHorizontal: 20,
  },
  text: {
    color: '#000',
    fontFamily: 'PT Sans',
    fontSize: 24,
    fontStyle: 'normal',
    fontWeight: '700',


  },
  subText: {
    color: '#9A9595',
    textAlign: 'justify',
    fontFamily: 'PT Sans',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '400',
    marginTop: 10,
  },
  input: {
    backgroundColor: '#fff',
    marginTop: 20,
  },
  button: {
    width: '100%',
    height: 40,
    flexShrink: 0,
    borderRadius: 10,
    backgroundColor: '#4BA26A',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  buttonText: {
    color: '#FFF',
    fontFamily: 'PT Sans',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '700',

  },
  loginContainer: {
    flexDirection: 'row',
    marginTop: 30,
  }
  ,
  loginText: {
    color: '#4BA26A',
    fontFamily: 'PT Sans',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '700',
    marginLeft: 10,
    marginTop: 4,
  },
  text1: {
    color: '#B0ABAB',
    fontFamily: 'PT Sans',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '400',
    marginLeft: 50,
    marginTop: 5,
  },
})