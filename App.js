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
    flex: 1,
    backgroundColor: 'ghostwhite',
    marginVertical: '10%',
    marginHorizontal: '5%',
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },

  columnContainer: {
    borderWidth: 2,
    borderColor : 'green',
    marginVertical: 10,
    marginLeft: 20,
    marginRight: 260
  },
  rowFlexDesign: {
    flexDirection: 'row',
    
  },
  rowContainer: {
    
    borderWidth: 2,
    borderColor : 'green',

  },
  columnBox: {
    borderWidth: 2,
    backgroundColor: 'lightgray',
    borderColor : 'green',
    width: 80,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 5,
    marginHorizontal: 5

  },
  rowBox: {
    borderWidth: 2,
    backgroundColor: 'lightgray',
    borderColor : 'green',
    width: 100,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 2.5,
    marginHorizontal: 5

  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    marginHorizontal: 5,
    
    
    alignItems: 'center',

  },
  rowHeading: {
    borderWidth: 2

  }

});