import React, {useState} from 'react';
import {Card} from 'react-native-elements';
import {Text, View, StyleSheet, Dimensions, Image} from 'react-native';
import {Switch} from 'react-native-switch';

export const CardView = ({isNoTringNumber, message, number, changeStatus}) => {
  const alertIcon = require('../Assets/alert.png');
  const checkIcon = require('../Assets/right.png');
  const [isActive, changeState] = useState(false);
  const changeActiveStatus = value => {
    changeState(value);
    changeStatus(value);
  };
  return (
    <Card containerStyle={styles.card}>
      <View style={styles.backgroundView}>
        <View style={styles.messageView}>
          <Text style={[styles.message, {color: isActive ? 'green' : 'red'}]}>
            NoTring Number
          </Text>
          <Text style={styles.number}>{number}</Text>
        </View>
        <View style={styles.switchView}>
          <Switch
            value={isActive}
            onValueChange={val => changeActiveStatus(val)}
            // disabled={false}
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
            renderInsideCircle={() => <Text>{isActive ? 'ON' : 'OFF'}</Text>} // custom component to render inside the Switch circle (Text, Image, etc.)
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
      <View style={styles.statusView}>
        <Image
          source={isActive ? checkIcon : alertIcon}
          style={styles.statusImage}
        />
        <Text
          style={[styles.statusMessage, {color: isActive ? 'green' : 'red'}]}>
          {message}
        </Text>
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
  backgroundView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: height * 0.08,
  },
  messageView: {flex: 1, marginLeft: 8},
  message: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  number: {fontSize: 22, fontWeight: 'bold', marginTop: 10},
  switchView: {height: 25, width: 40, marginTop: 15, marginRight: 25},
  statusMessage: {fontSize: 18},
  statusView: {
    height: height * 0.08,
    alignItems: 'center',
    flexDirection: 'row',
  },
  statusImage: {
    height: 40,
    width: 40,
    marginRight: 15,
    resizeMode: 'contain',
  },
});
