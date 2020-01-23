import React, {PureComponent} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Dimensions,
  StyleSheet,
  FlatList,
} from 'react-native';
import {connect} from 'react-redux';
import {IconWithBadge} from '../Components/IconWithBadge';
import LinearGradient from 'react-native-linear-gradient';
import {HeaderView} from '../Components/HeadeView';

class DashBoard extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);
    const callIcon = require('../Assets/call.png');
    const messageIcon = require('../Assets/mail.png');
    const {name, data} = this.props;
    return (
      <View style={styles.container}>
        <LinearGradient colors={['#8019A3', '#AC2782']} style={styles.topView}>
          <HeaderView title={`Welcome \n ${name}`} />
          <View
            style={{
              flexDirection: 'row',
              width,
              justifyContent: 'space-around',
            }}>
            <IconWithBadge title={'Calls'} icon={callIcon} />
            <IconWithBadge title={'Messages'} icon={messageIcon} />
          </View>
        </LinearGradient>
        <View>
          <FlatList
            data={data}
            horizontal
            pagingEnabled
            renderItem={({item}) => <Text>{item.title}</Text>}
            keyExtractor={(item, index) => index}
          />
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  ...state.reducer,
  ...state.listReducer,
});

export default connect(mapStateToProps)(DashBoard);

const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  topView: {
    height: height * 0.5,
    justifyContent: 'space-between',
  },
});
