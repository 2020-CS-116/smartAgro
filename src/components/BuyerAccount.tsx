import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import { View, Text, TouchableOpacity, Alert, SafeAreaView, StyleSheet, Image, ActivityIndicator } from 'react-native';
import { responsiveHeight } from 'react-native-responsive-dimensions';
import { TextInput } from 'react-native-paper';
// import auth from '@react-native-firebase/auth';
import { useToast } from "react-native-toast-notifications";
interface SignupProps {
  navigation: {
    navigate: (routeName: string) => void;
  };
}

const BuyerAccount: React.FC<SignupProps> = (props) => {
  const [passwordVisible, setPasswordVisible] = useState(false); // State to manage password visibility
  const [userName, setUserName] = useState('');
  const [verifyusername, setverifyusername] = useState(false)
  const [phoneNumber, setPhoneNumber] = useState('');
  const [verifyphone, setverifyphone] = useState(false)
  const [password, setPassword] = useState('');
  const [verifypass, setverifypass] = useState(false)
  const [confirmPassword, setConfirmPassword] = useState('')
  const [verifyCpass, setverifyCpass] = useState(false)
  const [loading, setLoading] = useState<boolean>(false)
  const toast = useToast();
  const data = {
    userName,
    phoneNumber,
    password,

  }
  const handleRegistration = async () => {
    //   if(userName.length===0)
    //   {
    //     toast.show('Please enter the first name!', {
    //       type: 'success',
    //       placement: 'top',
    //       duration: 3000,
    //       style: styles.toastContainer,
    //       textStyle: styles.toastText,

    //     });
    //   }
    //   else if(phoneNumber.length===0)
    //   {
    //     toast.show('Please enter the last name!', {
    //       type: 'success',
    //       placement: 'top',
    //       duration: 3000,
    //       style: styles.toastContainer,
    //       textStyle: styles.toastText,

    //     });
    //   }
    //   else if(email.length===0)
    //   {
    //     toast.show('Please enter the email!', {
    //       type: 'success',
    //       placement: 'top',
    //       duration: 3000,
    //       style: styles.toastContainer,
    //       textStyle: styles.toastText,

    //     });
    //   }
    //   else if(password.length===0)
    //   {
    //     toast.show('Please enter the password!', {
    //       type: 'success',
    //       placement: 'top',
    //       duration: 3000,
    //       style: styles.toastContainer,
    //       textStyle: styles.toastText,

    //     });
    //   }
    //   else if(confirmPassword.length===0)
    //   {
    //     toast.show('Please enter the confirm password!', {
    //       type: 'success',
    //       placement: 'top',
    //       duration: 3000,
    //       style: styles.toastContainer,
    //       textStyle: styles.toastText,

    //     });
    //   }
    //   // else if(password.length===confirmPassword.length)
    //   // {
    //   //   toast.show('password and confirm password must match!', {
    //   //     type: 'success',
    //   //     placement: 'top',
    //   //     duration: 3000,
    //   //     style: styles.toastContainer,
    //   //     textStyle: styles.toastText,

    //   //   });
    //   // }
    //   else 
    //   {
    //     // setLoading(true)
    //     // try {

    //     //   // Create a new user with email and password
    //     //   const userCredential = await auth().createUserWithEmailAndPassword(email, password);

    //     //   // Update the user profile with additional information
    //     //   await userCredential.user?.updateProfile({
    //     //     displayName: `${userName} ${lastName}`,
    //     //   });
    //     //  setLoading(false)
    //     //  props.navigation.navigate('Login')
    //     // } catch (error:any) {
    //     //   setLoading(false)
    //     //   Alert.alert('Registration Error:', error.message)
    //     //   console.error('Registration Error:', error.message);
    //     // }
    //   }
    //  console.warn("Buyer account created successfuly")
    // props.navigation.navigate('admin')

    data.userName = ("")
    Alert.alert('User has been Signed Up Successfully!')
  };


  const validusename = (e: string) => {
    const unamevar = e
    setUserName(unamevar)
    setverifyusername(false)
    const usernameRegex = /^[a-z0-9]+$/;
    if (usernameRegex.test(unamevar)) {
      setUserName(unamevar)
      setverifyusername(true)
    }
  }

  const validphone = (e: string) => {
    const phonevar = e
    setPhoneNumber(phonevar)
    setverifyphone(false)
    const phoneRegex = /^03\d{9}$/;
    if (phoneRegex.test(phonevar)) {
      setPhoneNumber(phonevar)
      setverifyphone(true)
    }
  }

  const validpass = (e: string) => {
    const passvar = e;
    setPassword(passvar);
    setverifypass(false);
    const passwordRegex = /^[\w\d!@#$%^&*()\-+=<>?/.,;:'"[\]{}|\\]{8}$/;
    if (passwordRegex.test(passvar)) {
      setPassword(passvar);
      setverifypass(true)

    }
  }

  const validCpass = (e: string) => {
    const passCvar = e;
    setConfirmPassword(passCvar);
    setverifyCpass(false);
    const passwordRegex = /^[\w\d!@#$%^&*()\-+=<>?/.,;:'"[\]{}|\\]{8}$/;
    if (passwordRegex.test(passCvar)) {
      setConfirmPassword(passCvar);
      setverifyCpass(true)

    }
  }

  return (
    <SafeAreaView>
      <ScrollView style={styles.container} keyboardShouldPersistTaps = "always">
        <View style={styles.imageContainer}>
          <Image source={require('../assets/login.png')} />
        </View>
        <View style={styles.contentContainer}>
          <Text style={styles.accessText}>
            Sign Up
          </Text>
          <View style={styles.inputContainer}>

            <TextInput
              label="Username"
              left={<TextInput.Icon icon="account-circle" size={25} />}
              style={styles.input}
              value={userName} onChangeText={e => validusename(e)}
            />
            {
              userName.length < 1 ? null : verifyusername ? null :
                <Text style={{ margin: 5, color: '#D20062' }}> Only use small letter and Integer </Text>
            }
            <TextInput
              label="Phone"
              left={<TextInput.Icon icon="account-circle" size={25} />}
              style={styles.input}
              value={phoneNumber} onChangeText={e=>validphone(e)}
            />
            {
              phoneNumber.length < 1 ? null : verifyphone ? null :
              <Text style={{ margin: 5, color: '#D20062' }}> Invalid Phone Number </Text>
            }

            <TextInput
              label="Password"
              left={<TextInput.Icon icon={require('../assets/lock.png')} size={20} />}
              secureTextEntry={!passwordVisible} // Set secureTextEntry based on passwordVisible state
              right={
                <TextInput.Icon
                  icon={passwordVisible ? 'eye' : 'eye-off'} // Toggle icon based on passwordVisible state
                  onPress={() => setPasswordVisible(!passwordVisible)} // Toggle password visibility on icon press
                />
              }
              style={styles.input}
              value={password} onChangeText={e=> validpass(e)}
            />
            {
              password.length < 1 ? null : verifypass ? null :
              <Text style={{ margin: 5, color: '#D20062' }}> Password must be 8 digit long </Text>
            }
            <TextInput
              label="Confirm password"
              left={<TextInput.Icon icon={require('../assets/lock.png')} size={20} />}
              secureTextEntry={!passwordVisible} // Set secureTextEntry based on passwordVisible state
              right={
                <TextInput.Icon
                  icon={passwordVisible ? 'eye' : 'eye-off'} // Toggle icon based on passwordVisible state
                  onPress={() => setPasswordVisible(!passwordVisible)} // Toggle password visibility on icon press
                />
              }
              style={styles.input}
              value={confirmPassword} onChangeText={e=> validCpass(e)}
            />
            {
              confirmPassword.length < 1 ? null : verifyCpass ? null :
              <Text style={{ margin: 5, color: '#D20062' }}>Password must be 8 digit long </Text>
            }
            {
              loading ? (<ActivityIndicator size="large" color="#0000ff" />) : <TouchableOpacity style={styles.button} onPress={handleRegistration}>
                <Text style={styles.buttonText}>Sign Up</Text>
              </TouchableOpacity>
            }
            <View style={styles.loginContainer}>
              <Text style={styles.text}>Already have an account?</Text>
              <Text style={styles.loginText} onPress={() => props.navigation.navigate('Login')} >Log in</Text>
            </View>
          </View >

        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default BuyerAccount

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: responsiveHeight(30),
  },
  contentContainer: {
    backgroundColor: '#fff',
  },
  accessText: {
    color: '#000',
    fontFamily: 'PT Sans',
    fontSize: 32,
    fontStyle: 'normal',
    fontWeight: '700',
    marginLeft: 30,
    marginTop: 20,
  },
  text: {
    color: '#B0ABAB',
    fontFamily: 'PT Sans',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '400',
    marginLeft: 50,
    marginTop: 5,
  },
  inputContainer: {
    paddingHorizontal: 20,
  },
  input: {
    backgroundColor: '#fff',
    marginTop: 10,
  },
  button: {
    width: '100%',
    height: 40,
    flexShrink: 0,
    borderRadius: 10,
    backgroundColor: '#4BA26A',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#FFF',
    fontFamily: 'PT Sans',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '700',

  },
  lineContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    marginTop: 20,
  }
  ,
  text1: {
    color: '#262626',
    fontFamily: 'PT Sans',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '400',
    marginRight: 10,
    marginLeft: 10,
  },
  horizontalLine: {
    width: 100,
    height: 1,
    backgroundColor: '#B0ABAB',
    marginTop: 15,

  },
  authContainer: {
    display: 'flex',
    width: '100%',
    height: 87.569,
    padding: 2,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    flexShrink: 0,
  },
  image: {
    width: 45.87,
    height: 45,
    flexShrink: 0,
    marginRight: 20,
  },
  image1: {
    width: 45.87,
    height: 45,
    flexShrink: 0,
    marginLeft: 40,
  },
  loginContainer: {
    flexDirection: 'row',
    marginTop: 20,
    marginBottom: 20,
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
  toastContainer: {
    backgroundColor: '#4CAF50', // Green color for success
    padding: 16,
    borderRadius: 8,
    marginHorizontal: 16,
    marginVertical: 70,
    width: '100%'
  },
  toastText: {
    color: 'white',
  },
})
