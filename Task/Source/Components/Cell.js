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
        style={styles.cellBackground}>
        <View style={styles.offerView}>
          <Text>{item.title}</Text>
          <View style={styles.offerMessageView}>
            <Text>{`${item.quantity} FOR `}</Text>
            <Text style={styles.strikeText}>{item.originalValue}</Text>
            <Text> ${item.offerValue}</Text>
          </View>
        </View>
        <View>
          <View style={styles.buyView}>
            <View style={styles.buyLabel}>
              <Text>{`BUY NOW @${item.offerValue}`}</Text>
            </View>
            <View style={styles.ratioView}>
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
    height: height * 0.2,
    overflow: 'hidden',
    padding: 0,
  },
  cellBackground: {height: height * 0.2, padding: 8},
  offerView: {height: height * 0.12, paddingLeft: 15},
  offerMessageView: {flexDirection: 'row'},
  strikeText: {
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
  },
  buyView: {flexDirection: 'row', justifyContent: 'space-around'},
  buyLabel: {
    backgroundColor: 'yellow',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
    borderRadius: 5,
  },
  ratioView: {
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  },
});
