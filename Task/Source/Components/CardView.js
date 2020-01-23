import React from 'react';
import {Card} from 'react-native-elements';
import {Text, View, Switch} from 'react-native';

const CardView = ({isNoTringNumber, messge, number}) => {
  return (
    <Card>
      <View>
        <View>
          <Text>NoTring Number</Text>
          <Text>{number}</Text>
        </View>
      </View>
    </Card>
  );
};
