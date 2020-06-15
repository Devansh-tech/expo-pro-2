import * as React from 'react';
import { Text, View, StyleSheet , Button, Alert } from 'react-native';

export default class App extends React.Component {
  render() {
    return(
      <View>
        <View style={{width:200 , height:100 , marginTop:80}}>
        <Button title="sound1" color="red" onPress={() => Alert.alert('Play Sound 1')}/>
        </View>

        <View style={{width:200 , height:100 , marginTop:80, marginLeft:150}}>
        <Button title="sound2" color="blue" onPress={() => Alert.alert('Play Sound 2')}/>
        </View>
        
        <View style={{width:180 , height:100 , marginTop:20}}>
        <Button title="sound3" color="purple" onPress={() => Alert.alert('Play Sound 3')}/>
        </View>

        
        <View style={{width:200 , height:100 , marginTop:20, marginLeft:80, marginRight:80}}>
        <Button title="sound4" color="green" onPress={() => Alert.alert('Play Sound 4')}/>
        </View>

      </View>
    );
  }
}
