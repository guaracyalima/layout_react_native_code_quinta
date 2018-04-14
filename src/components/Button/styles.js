/* @flow */
'use strict';

import { StyleSheet } from 'react-native';

module.exports = StyleSheet.create({
  container: {
  	height: 31,
  	backgroundColor: '#FF9982',
  	borderRadius: 30,
  	justifyContent: 'center',
  	alignItems: 'center',
  	paddingHorizontal: 15
  },

  'button-outline': {
  	backgroundColor: '#fff',
  	borderWidth: 1,
  	borderColor: '#FF9982'
  },

  text: {
  	color: '#fff',
  	fontWeight: 'bold',
  	fontSize: 12
  },

  'text-outline': {
  	color: '#FF9982'
  }
});