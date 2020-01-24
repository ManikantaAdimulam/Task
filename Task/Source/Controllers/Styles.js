import React from 'react';
import {Dimensions, StyleSheet} from 'react-native';

const {height, width} = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  topView: {
    height: height * 0.5,
  },
  cardView: {
    height: height * 0.5,
    backgroundColor: '#ffffff',
    alignItems: 'center',
  },
  iconsView: {
    flexDirection: 'row',
    width,
    justifyContent: 'space-around',
    marginTop: height * 0.1,
  },
  cardStyle: {top: -height * 0.1},
  list: {width, top: -height * 0.05},
  validDate: {
    color: 'green',
    fontSize: 15,
    fontWeight: '700',
  },
});
