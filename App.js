import React from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';


/* export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
} */

export default function App() {
  return (
    <View style={styles.container}>
    <View style={styles.box}>
    <Text style={styles.boxText}>Child</Text> </View>
    <View style={styles.box}>
    <Text style={styles.boxText}>Child</Text></View>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E1DBDB',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: 'green',
    marginTop: '15%',
    marginBottom: '15%',
    marginLeft: '5%',
    marginRight: '5%',
    flexDirection: "column"

  },

 
box: {
  width: 100,
    height: 50,
    alignItems: 'center',
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: 'green',
    marginVertical: '10%',
    backgroundColor: 'lightgray',
    justifyContent: 'space-evenly'
},

boxText:{
  fontSize: 16,
  fontWeight: 'bold'

}
});