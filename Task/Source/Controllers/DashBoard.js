import React, {PureComponent} from 'react';
import {View, Text, SafeAreaView, FlatList} from 'react-native';
import {connect} from 'react-redux';
import {IconWithBadge} from '../Components/IconWithBadge';
import LinearGradient from 'react-native-linear-gradient';
import {HeaderView} from '../Components/HeadeView';
import {CardView} from '../Components/CardView';
import {Cell} from '../Components/Cell';
import {styles} from './Styles';
import {changeStatus} from '../Redux/Actions/Actions';
class DashBoard extends PureComponent {
  constructor(props) {
    super(props);
    this.renderCell = this.renderCell.bind(this);
    this.changeNumberStatus = this.changeNumberStatus.bind(this);
  }

  renderCell({item}) {
    return <Cell item={item} />;
  }

  changeNumberStatus = status => {
    const {dispatch} = this.props;
    this.setState({isStatusActive: status}, () => {
      dispatch(changeStatus(status));
    });
  };

  render() {
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
          <View style={styles.cardView}>
            <View style={styles.cardStyle}>
              <CardView
                number={number}
                message={message}
                changeStatus={this.changeNumberStatus}
              />
            </View>
            <View style={styles.list}>
              <FlatList
                data={data}
                horizontal
                pagingEnabled
                renderItem={this.renderCell}
                keyExtractor={(item, index) => index.toString()}
              />
            </View>
            <Text style={styles.validDate}> Valid till 12th JAN 2020</Text>
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
