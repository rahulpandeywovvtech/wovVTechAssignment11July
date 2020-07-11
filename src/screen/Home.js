import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {connect} from 'react-redux';
import {GetNewsAction} from '../redux/action/index';

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textData: '',
      url:'',
      created:'',
      author:'',
      title:''

    };
  }

  componentDidUpdate = (prevProps, prevState) => {
    if (prevProps.getNewsReducer !== this.props.getNewsReducer) {
      const {hits} = this.props.getNewsReducer;

      console.log('hitssssssssss', hits);
    }
  };

  renderItems = (item) => {
    return (
      <TouchableOpacity onPress={()=>{
        this.setState({url:item.item.url,title:item.item.title,author:item.item.author,created:item.item.created_at})
        
        this.props.navigation.navigate('Data',{
       data:item.item
      })}}>
          <View 
        key={item}
        style={{flexDirection: 'column', elevation: 1, marginBottom: 10,padding:5,borderWidth:1,backgroundColor:"#fff",marginTop:10}}>
       <View style={{flexDirection:"row"}}>
       <Text>Title :</Text> 
        <Text numberOfLines={3} style={{fontSize:15,fontWeight:"bold"}}>{item.item.title}</Text>
       </View>

       <View style={{flexDirection:"row"}}>
       <Text>Url :</Text> 
        <Text numberOfLines={3} style={{fontSize:15,fontWeight:"bold"}}>{item.item.url}</Text>
       </View>

       <View style={{flexDirection:"row"}}>
       <Text>Created At :</Text> 
        <Text  style={{fontSize:15,fontWeight:"bold"}}>{item.item.created_at}</Text>
       </View>

       <View style={{flexDirection:"row"}}>
       <Text>Author :</Text> 
        <Text style={{fontSize:15,fontWeight:"bold"}}>{item.item.author}</Text>
       </View>
      </View>
      </TouchableOpacity>
    );
  };

  open = () => {
    console.warn(this.state.textData);
    const data = {
      id: '123',
    };
    this.props.GetNewsAction(data);
  };
  render() {
    console.log('Data from props', this.props.getNewsReducer.hits);
    return (
      <View style={styles.container}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 30,
          }}>
          <TextInput
            placeholder="Search by Url or Author"
            style={{
              borderWidth: 1,
              borderColor: 'gray',
              paddingRight: 40,
              paddingLeft: 10,
              fontSize: 20,
            }}
            onChangeText={(textData) => this.setState({textData})}
            value={this.state.textData}
          />

          <TouchableOpacity
            onPress={this.open}
            style={{padding: 10, borderRadius: 10, backgroundColor: '#00aaff'}}>
            <Text style={{color: '#fff', fontSize: 20, fontWeight: 'bold'}}>
              Search
            </Text>
          </TouchableOpacity>
        </View>
        {/* <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <TouchableOpacity
            onPress={this.open}
            style={{padding: 10, borderRadius: 10, backgroundColor: '#00aaff'}}>
            <Text style={{color: '#fff', fontSize: 20, fontWeight: 'bold'}}>
              Search
            </Text>
          </TouchableOpacity>
        </View> */}

        <View>
          <FlatList
            data={this.props.getNewsReducer.hits}
            renderItem={(item, index) => this.renderItems(item, index)}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
  },
});

const mapStateToProps = (state, ownProps) => {
  return {
    getNewsReducer: state.getNewsReducer,
  };
};

export default connect(mapStateToProps, {GetNewsAction})(Home);
