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
import {CardView} from '../Components/CardView';
import {Cell} from '../Components/Cell';

class DashBoard extends PureComponent {
  constructor(props) {
    super(props);
    this.renderCell = this.renderCell.bind(this);
  }

  renderCell({item}) {
    return <Cell item={item} />;
  }

  render() {
    console.log(this.props);
    const callIcon = require('../Assets/call.png');
    const messageIcon = require('../Assets/mail.png');
    const {name, data, number, message} = this.props;
    return (
      <LinearGradient colors={['#8019A3', '#AC2782']} style={styles.container}>
        <SafeAreaView>
          <View style={styles.topView}>
            <HeaderView title={`Welcome, \n ${name}`} />
            <View style={styles.iconsView}>
              <IconWithBadge title={'Calls'} icon={callIcon} />
              <IconWithBadge title={'Messages'} icon={messageIcon} />
            </View>
          </View>
          <View
            style={{
              height: height * 0.5,
              backgroundColor: '#ffffff',
              alignItems: 'center',
            }}>
            <View style={{top: -height * 0.1}}>
              <CardView number={number} message={message} />
            </View>
            <View style={{width}}>
              <FlatList
                data={data}
                horizontal
                pagingEnabled
                renderItem={this.renderCell}
                keyExtractor={(item, index) => index}
              />
            </View>
          </View>
        </SafeAreaView>
      </LinearGradient>
    );
  }
}

const mapStateToProps = state => ({
  ...state.reducer,
  ...state.listReducer,
  ...state.cardReducer,
});

export default connect(mapStateToProps)(DashBoard);

const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  topView: {
    height: height * 0.5,
  },

  iconsView: {
    flexDirection: 'row',
    width,
    justifyContent: 'space-around',
    marginTop: height * 0.1,
  },
});
