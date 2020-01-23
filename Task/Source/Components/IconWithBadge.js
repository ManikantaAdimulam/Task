import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {Badge, Avatar} from 'react-native-elements';
export const IconWithBadge = ({title, icon}) => {
  return (
    <View>
      <View style={styles.iconContainer}>
        <View>
          <Image style={styles.icon} source={icon} />
          <Badge
            status="success"
            containerStyle={{
              position: 'absolute',
              top: 0,
              right: 0,
              height: 25,
              width: 25,
            }}
            badgeStyle={{
              height: 25,
              width: 25,
              borderRadius: 12.5,
              backgroundColor: 'red',
            }}
          />
        </View>
      </View>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
    height: 100,
    width: 100,
    borderRadius: 50,
    backgroundColor: '#ffffff',
    resizeMode: 'center',
  },
  badge: {
    height: 25,
    width: 25,
    borderRadius: 12.5,
    backgroundColor: '#000000',
  },
  iconContainer: {
    flexDirection: 'row',
  },
  title: {
    color: '#ffffff',
    fontSize: 18,
    textAlign: 'center',
  },
});
