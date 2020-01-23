import React from 'react';
import {Card} from 'react-native-elements';
import {
  Text,
  StyleSheet,
  Dimensions,
  View,
  ImageBackground,
} from 'react-native';

export const Cell = ({item}) => {
  return (
    <Card containerStyle={styles.card}>
      <ImageBackground
        source={require('../Assets/background.png')}
        style={{height: height * 0.16, margin: -12}}>
        <View style={{height: height * 0.074}}>
          <Text>{item.title}</Text>
          <View style={{flexDirection: 'row'}}>
            <Text>{`${item.quantity} FOR `}</Text>
            <Text
              style={{
                textDecorationLine: 'line-through',
                textDecorationStyle: 'solid',
              }}>
              {item.originalValue}
            </Text>
            <Text> ${item.offerValue}</Text>
          </View>
        </View>
        <View>
          <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
            <View
              style={{
                backgroundColor: 'yellow',
                height: 40,
                alignItems: 'center',
                justifyContent: 'center',
                padding: 8,
                borderRadius: 5,
              }}>
              <Text>{`BUY NOW @${item.offerValue}`}</Text>
            </View>
            <View
              style={{
                height: 40,
                alignItems: 'center',
                justifyContent: 'center',
                padding: 8,
              }}>
              <Text>{item.ratio}</Text>
            </View>
          </View>
        </View>
      </ImageBackground>
    </Card>
  );
};

const {height, width} = Dimensions.get('window');
const styles = StyleSheet.create({
  card: {
    width: width * 0.85,
    borderRadius: 20,
    height: height * 0.15,
  },
});
