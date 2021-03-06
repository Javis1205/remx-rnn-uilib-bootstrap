import React, { PureComponent } from 'react'
import {View, Text} from 'react-native';
//import { connect } from 'remx';

// import * as store from '../stores/topics/topicsStore';
// import * as actions from '../stores/topics/topicsActions';


class Screen1 extends PureComponent {
    render() {
        return (
            <View style={styles.container}>
            <Text style={styles.instructions}>
              Screen1
            </Text>
          </View>
        );
    }
}

const styles ={
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },
  };

export default Screen1;