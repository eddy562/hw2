import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
export default function App() {
  return (

    // Main outer box to create borders around whole screen
    <View style={styles.container}>
      
      {/*Begin Column box container */}
      <View style={styles.columnContainer}>
        <Text style={styles.text}>Column</Text>
        
        {/*Column*/}
        <View style={styles.columnBox}>
          <Text style={styles.text}>Child</Text></View>
        
        <View style={styles.columnBox}>
          <Text style={styles.text}>Child</Text></View>
        

        <View style={styles.columnBox}>
          <Text style={styles.text}>Child</Text></View>
        
        </View> {/* close tag for column */} 

      <View style={styles.rowContainer}> 
      <Text style={styles.text}>Row</Text> 
      
      {/*Begin Row box container */}
      <View style={styles.rowFlexDesign}>
        
        {/*Row*/}
        <View style={styles.rowBox}>
        <Text style={styles.text}>Child</Text> </View>

        <View style={styles.rowBox}>
          <Text style={styles.text}>Child</Text></View>
        
        <View style={styles.rowBox}>
          <Text style={styles.text}>Child</Text></View>
         
        </View>     
      </View>   
      <StatusBar style="auto" />

    </View> /**close view for main container */
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex :1,
   // height:600,
    //width: 500,
    height:350,
    width: 300,
    backgroundColor: 'ghostwhite',
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: '35',
    marginHorizontal: '5',
  
  },

  columnContainer: {
    borderWidth: 2,
    height:300,
    width: 125,
    borderColor : 'red',
    marginBottom: 30,
    marginVertical: 10,
    marginRight: 120
  },
  rowFlexDesign: {
    flexDirection: 'row',
  },
  rowContainer: {
    
    borderWidth: 2,
    borderColor : 'orange',
    marginBottom: 10,
    paddingHorizontal: 8,
  },
  columnBox: {
    borderWidth: 2,
    backgroundColor: 'lightgray',
    borderColor : 'blue',
    height: 75,
    width: 85,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
    marginLeft: 12
  
  },
  rowBox: {
    borderWidth: 2,
    backgroundColor: 'lightgray',
    borderColor : 'green',
    height: 60,
    width: 75,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
    marginRight: 15
    

  },
  text: {
    fontSize: 16,
    marginBottom: 10,
    fontWeight: 'bold',
    marginHorizontal: 5,
    alignItems: 'center',
  },


});