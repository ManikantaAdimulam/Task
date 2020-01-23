import React, {useState} from 'react';
import {Card} from 'react-native-elements';
import {Text, View, StyleSheet, Dimensions, Image} from 'react-native';
import {Switch} from 'react-native-switch';

export const CardView = ({isNoTringNumber, message, number, changeStatus}) => {
  const alertIcon = require('../Assets/alert.png');
  const checkIcon = require('../Assets/right.png');
  return (
    <Card containerStyle={styles.card}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          height: height * 0.08,
        }}>
        <View style={{flex: 1, marginLeft: 8}}>
          <Text
            style={{
              fontSize: 22,
              fontWeight: 'bold',
              color: isNoTringNumber ? 'green' : 'red',
            }}>
            NoTring Number
          </Text>
          <Text style={{fontSize: 22, fontWeight: 'bold', marginTop: 10}}>
            {number}
          </Text>
        </View>
        <View style={{height: 25, width: 40, marginTop: 15, marginRight: 25}}>
          <Switch
            value={isNoTringNumber}
            onValueChange={val => console.log(val)}
            disabled={false}
            activeText={'On'}
            inActiveText={'Off'}
            circleSize={30}
            barHeight={30}
            circleBorderWidth={1}
            outerCircleStyle={{backgroundColor: '#ffffff'}}
            backgroundActive={'green'}
            backgroundInactive={'red'}
            circleActiveColor={'#ffffff'}
            circleInActiveColor={'#ffffff'}
            changeValueImmediately={true}
            renderInsideCircle={() => (
              <Text>{isNoTringNumber ? 'ON' : 'OFF'}</Text>
            )} // custom component to render inside the Switch circle (Text, Image, etc.)
            changeValueImmediately={true} // if rendering inside circle, change state immediately or wait for animation to complete
            innerCircleStyle={{alignItems: 'center', justifyContent: 'center'}} // style for inner animated circle for what you (may) be rendering inside the circle
            outerCircleStyle={{}} // style for outer animated circle
            renderActiveText={false}
            renderInActiveText={false}
            switchLeftPx={2} // denominator for logic when sliding to TRUE position. Higher number = more space from RIGHT of the circle to END of the slider
            switchRightPx={2} // denominator for logic when sliding to FALSE position. Higher number = more space from LEFT of the circle to BEGINNING of the slider
            switchWidthMultiplier={2} // multipled by the `circleSize` prop to calculate total width of the Switch
            switchBorderRadius={30} // multipled by the `circleSize` prop to calculate total width of the Switch
          />
        </View>
      </View>
      <View
        style={{
          height: height * 0.08,
          alignItems: 'center',
          flexDirection: 'row',
        }}>
        <Image
          source={isNoTringNumber ? checkIcon : alertIcon}
          style={{
            height: 40,
            width: 40,
            marginRight: 15,
            resizeMode: 'contain',
          }}
        />
        <Text style={{fontSize: 18}}>{message}</Text>
      </View>
    </Card>
  );
};

const {height, width} = Dimensions.get('window');
const styles = StyleSheet.create({
  card: {
    width: width * 0.8,
    borderRadius: 20,
    height: height * 0.2,
  },
});
