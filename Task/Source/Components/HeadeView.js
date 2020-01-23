import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
} from 'react-native';
export const HeaderView = ({title}) => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity>
        <Image source={require('../Assets/menu.png')} style={styles.menuIcon} />
      </TouchableOpacity>
    </View>
  );
};

const {height, width} = Dimensions.get('window');
const styles = StyleSheet.create({
  header: {
    height: 64,
    width,
    flexDirection: 'row',
    padding: 8,
  },
  title: {
    flex: 1,
    color: '#ffffff',
    fontSize: 20,
    marginLeft: width * 0.1,
    fontWeight: '600',
  },
  menuIcon: {
    height: 30,
    width: 40,
    resizeMode: 'contain',
  },
});
