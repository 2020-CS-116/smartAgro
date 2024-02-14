import React,{useEffect} from 'react'
import SplashScreen from 'react-native-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/components/Login';
import Signup from './src/components/Signup';
import ForgotPassword from './src/components/ForgotPassword';
import TabNavigation from './src/components/TabNavigation/TabNavigation';
import Profile from './src/components/profile/Profile';
import PrivacyPolicy from './src/components/profile/PrivacyPolicy';
import HelpandSupport from './src/components/profile/HelpandSupport';
import AboutUs from './src/components/profile/AboutUs';
import TermsandConditions from './src/components/profile/TermsandConditions';
import RateUsModal from './src/components/profile/RateUsModal';
import UpdatePassword from './src/components/profile/UpdatePassword';
import BuyProducts from './src/pages/Tradding/BuyProducts/BuyProducts';
import Productdetails from './src/pages/Tradding/BuyProducts/Productdetails';
import AddtoCart from './src/pages/Tradding/BuyProducts/AddtoCart';
import DiseasePrediction from './src/pages/DiseasePrediction/DiseasePrediction';
import { Provider } from 'react-redux';
import { store } from './src/store/store';
import { ToastProvider } from 'react-native-toast-notifications'
import SellProducts from './src/pages/Tradding/SellProducts/SellProducts';
import AccountCreation from './src/components/AccountCreation';
import BuyerAccount from './src/components/BuyerAccount';
import SellerAccount from './src/components/SellerAccount';
import Dashboard from './src/seller/Dashboard';
import AddProducts from './src/seller/crudOperations/AddProducts';
import ProductDetails from './src/seller/ProductDetails';
import EditProducts from './src/seller/crudOperations/EditProducts';
import Accounts from './src/seller/accounts/Accounts';
import SellerProfile from './src/seller/accounts/Profile'
import SellerPrivacyPolicy from './src/seller/accounts/PrivacyPolicy'
import SellerHelpandSupport from './src/seller/accounts/HelpandSupport'
import AboutSeller from './src/seller/accounts/AboutUs'
import sellerTermsandConditions from './src/seller/accounts/TermsandConditions'
import AdminDashboard from './src/admin/Dashboard'
const Stack = createNativeStackNavigator();
const App = () => {
  useEffect(() => {
    SplashScreen.hide();
}, []);

  return (
    <Provider store={store}>
    <ToastProvider>
    <NavigationContainer>
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={'Login'}>
    <Stack.Screen name='TabNavigation' component={TabNavigation}/>
    <Stack.Screen name='Login' component={Login}/>
    <Stack.Screen name='Signup' component={Signup}/>
    <Stack.Screen name='ForgotPassword' component={ForgotPassword}/>
    <Stack.Screen name='profile' component={Profile}/>
    <Stack.Screen name='privacy' component={PrivacyPolicy}/>
    <Stack.Screen name='help' component={HelpandSupport}/>
    <Stack.Screen name='about' component={AboutUs}/>
    <Stack.Screen name='term' component={TermsandConditions}/>
    <Stack.Screen name='reviewsModal' component={RateUsModal}/>
    <Stack.Screen name='updatePassword' component={UpdatePassword}/>
    <Stack.Screen name='buyProducts' component={BuyProducts}/>
    <Stack.Screen name='detail' component={Productdetails}/>
    <Stack.Screen name='cart' component={AddtoCart}/>
    <Stack.Screen name='disease-prediction' component={DiseasePrediction}/>
    <Stack.Screen name='SmartAgro' component={SellProducts}/>
    <Stack.Screen name='accounts' component={AccountCreation}/>
    <Stack.Screen name='buyeraccount' component={BuyerAccount}/>
    <Stack.Screen name='selleraccount' component={SellerAccount}/>
    {/* Seller Routes */}
    <Stack.Screen name='Seller Dashboard' component={Dashboard}/>
    <Stack.Screen name='Add Products' component={AddProducts}/>
    <Stack.Screen name='details' component={ProductDetails}/>
    <Stack.Screen name='Edit Product' component={EditProducts}/>
    <Stack.Screen name='Accounts' component={Accounts}/>
    <Stack.Screen name='sellerProfile' component={SellerProfile}/>
    <Stack.Screen name='privacyPolicy' component={SellerPrivacyPolicy}/>
    <Stack.Screen name='sellerSupport' component={SellerHelpandSupport}/>
    <Stack.Screen name='aboutSeller' component={AboutSeller}/>
    <Stack.Screen name='sellerTermsandConditions' component={sellerTermsandConditions}/>
    {/* end of Seller Routes */}
    {/* Admin Routes */}
    <Stack.Screen name='admin' component={AdminDashboard}/>
    {/* end of admin Routes */}
  </Stack.Navigator>
 </NavigationContainer>
 </ToastProvider>
   </Provider>
  )
}

export default App

