import { StyleSheet, Text, View,SafeAreaView,Dimensions, TouchableOpacity } from 'react-native'
const screenWidth = Dimensions.get("window").width;
import React from 'react'
import {
  LineChart,
} from "react-native-chart-kit";
const VisitorInsights = () => {
  const chartConfig = {
    backgroundGradientFrom: "#1E2923",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#08130D",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2, 
    barPercentage: 0.5,
    useShadowColorFromDataset: false,
 
  };
  const data = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        data: [85, 45, 28, 80, 99, 43],
        color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, 
        strokeWidth: 2 
      }
    ],
    legend: ["Monthly Active Users"] 
  };
  return (
    <SafeAreaView style={styles.container}>
     <TouchableOpacity style={styles.visitorInsights}>
     <Text style={styles.headingText}>Visitor Insights</Text>
     <LineChart
  data={data}
  width={screenWidth}
  height={220}
  chartConfig={chartConfig}
/>
     </TouchableOpacity>
    </SafeAreaView>
  )
}

export default VisitorInsights

const styles = StyleSheet.create({
  container:{
     
    width:'100%'
  },
  visitorInsights:{
    marginHorizontal:10,
    borderRadius:10,
  },
  headingText:{
    color: '#000',
    fontFamily: 'Alatsi',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: 'bold',
     marginLeft:10,
     marginBottom:10,
    
  }
})