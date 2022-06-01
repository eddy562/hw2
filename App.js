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
    /* Column Settings */
  <View style={styles.container}>
    <View style={styles.coulumBox}>
       <Text style={styles.columnText}>Column</Text>
    <View style={styles.childBox}>
      <Text style={styles.boxText}>Child</Text> </View>
    <View style={styles.childBox}>
      <Text style={styles.boxText}>Child</Text> </View>
    <View style={styles.childBox}>
      <Text style={styles.boxText}>Child</Text></View>

{/* ROW Settings */}
    <View style={styles.rowBox}> 
      <Text style={styles.rowText}>Row</Text>
    <View style={styles.childRow}>
      <Text style={styles.boxText}>Child</Text></View>
    <View style={styles.childRow}>
      <Text style={styles.boxText}>Child</Text></View>
    <View style={styles.childRow}>
      <Text style={styles.boxText}>Child</Text></View>
    </View>
    </View>
    </View>
    
  );
}
/*Container Box */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E1DBDB',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: 'green',
    marginTop: '10%',
    marginBottom: '10%',
    marginLeft: '5%',
    marginRight: '5%',
    

  },
  /*Container Column */
coulumBox:{
    width: 150,
    height: 250,
    alignItems: 'center',
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: 'blue',
    marginVertical: '1%',
    marginLeft: '15%',
    marginRight: '70%',
    justifyContent: 'left'
},


/* Coulum Child Text Style */
childBox: {
    width: 100,
    height: 50,
    alignItems: 'center',
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: 'blue',
    marginVertical: '5%',
    backgroundColor: 'lightgray',
    justifyContent: 'space-evenly'
},
/*Container Row */
rowBox:{
  flexDirection: 'row',
  width: 400,
  height: 115,
  alignItems: 'center',
  borderWidth: 2,
  marginTop: '50%',
  borderStyle: 'solid',
  borderColor: 'red',
  marginLeft: '170%',
  justifyContent: 'space-evenly'
},
/* Row Child Text Style */
childRow: {
  width: 100,
  height: 50,
  alignItems: 'center',
  borderWidth: 2,
  borderStyle: 'solid',
  borderColor: 'red',
  marginVertical: '5%',
  marginBottom: '1%',
  backgroundColor: 'lightgray',
  justifyContent: 'center'
},
/** Row Title */
rowText:{
  fontSize: 18,
  color: 'red',
  fontWeight: 'bold',
  enum: 'top'
  /*marginBottom: '20%',
  marginTop: '1%',
  justifyContent: 'left'*/ 
},

/* child box font*/ 
boxText:{
  fontSize: 20,
  color: 'green',
  fontWeight: 'bold'

},
/**Colum title */
columnText:{
  color:'blue',
  fontSize: 20,
  fontWeight: 'bold'

}



});
