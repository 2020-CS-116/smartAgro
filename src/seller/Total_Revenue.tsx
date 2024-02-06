import React from 'react';
import { StyleSheet, SafeAreaView, Dimensions, TouchableOpacity } from 'react-native';
import { BarChart } from 'react-native-chart-kit';

const screenWidth = Dimensions.get("window").width;

const Total_Revenue = () => {
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
        data: [20, 45, 28, 80, 99, 43]
      }
    ]
  };

  return (
    <SafeAreaView style={styles.container}>
     <TouchableOpacity style={styles.total_revenue}>
     <BarChart
        style={styles.graphStyle}
        data={data}
        width={screenWidth}
        height={220}
        yAxisLabel="$"
        yAxisSuffix='k'
        chartConfig={chartConfig}
        verticalLabelRotation={30}
      />
     </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container:{
         flex:1,
         marginBottom:10,
    },
  graphStyle: {
    marginHorizontal:10,
    borderRadius:10,
  },
total_revenue:{
    
}
});

export default Total_Revenue;
