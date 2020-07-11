import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import Navigation from './src/navigation/Index';
import {Provider} from 'react-redux';
import store from './src/redux/store/Index';
export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Provider store={store}>
          <Navigation />
        </Provider>
              </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D3D3D3',
  },
});
