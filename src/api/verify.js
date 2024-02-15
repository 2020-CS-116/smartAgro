import { BASE_URL } from "@env";
// console.log("The base url is:",BASE_URL)
export const sendSmsVerification = async (phoneNumber) => {
    // console.log("The base url is:",BASE_URL)
    // console.log("The phone number is:",phoneNumber)
 try {
   const data = JSON.stringify({
     to: phoneNumber,
     channel: "sms",
   });

   const response = await fetch(`${BASE_URL}/start-verify`, {
     method: "POST",
     headers: {
       "Content-Type": "application/json",
     },
     body: data,
   });

   const json = await response.json();
   return json.success;
 } catch (error) {
   console.error(error);
   return false;
 }
};

const checkVerification = async (phoneNumber, code) => {
 try {
   const data = JSON.stringify({
     to: phoneNumber,
     code,
   });

   const response = await fetch(`${BASE_URL}/check-verify`, {
     method: "POST",
     headers: {
       "Content-Type": "application/json",
     },
     body: data,
   });

   const json = await response.json();
   return json.success;
 } catch (error) {
   console.error(error);
   return false;
 }
};

module.exports = {
 sendSmsVerification,
 checkVerification,
};


// {data.map((item: any, index: number) => (
//   // Render every two cards in one row
//   index % 2 === 0 && (
//     <View key={index} style={styles.cardRow}>
//       <TouchableOpacity style={styles.cardContainer} onPress={() => navigation.navigate('Users')}>
//         <View style={styles.logoContainer}>
//           <Icon name="users" size={20} color="#FFF" />
//         </View>
//         <Text style={styles.price} >1025</Text>
//         <Text style={styles.total} >Users</Text>
//         <Text style={styles.text} >Last update: 2 days ago</Text>
//       </TouchableOpacity>

//       {/* Render the second card in the row */}
//       {data[index + 1] && (
//         <TouchableOpacity style={styles.cardContainer} onPress={() => navigation.navigate('Users')}>
//           <View style={styles.logoContainer}>
//             <Icon name="users" size={20} color="#FFF" />
//           </View>
//           <Text style={styles.price} >1025</Text>
//           <Text style={styles.total} >Users</Text>
//           <Text style={styles.text} >Last update: 2 days ago</Text>
//         </TouchableOpacity>
//       )}
//     </View>
//   )
// ))}