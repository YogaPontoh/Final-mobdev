import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
  FlatList,
} from 'react-native';

const home = ({Menu}) => {

  constructor(props) {
    super(props);
    this.state = {
      data: [
        {id:1,  title: "Watcsdhe",      color:"#FF4500", image:"./assets/Vector Smart Object.png", next:"<FriendScreen/>" },
        {id:2,  title: "T-shirt",     color:"#87CEEB", image:"./assets/Vector Smart Object-1.png", next:"<FriendScreen/>"},
        {id:3,  title: "Brief case",     color:"#4682B4", image:"./assets/Vector Smart Object-2.png", next:"<FriendScreen/>"} ,
        {id:4,  title: "Glasses",   color:"#6A5ACD", image:"./assets/Vector Smart Object-3.png", next:"<FriendScreen/>"} ,
        {id:5,  title: "Pants",  color:"#FF69B4", image:"./assets/Vector Smart Object-4.png", next:"<FriendScreen/>"} ,
        {id:6,  title: "Short Pants",   color:"#00BFFF", image:"./assets/Vector Smart Object-5.png", next:"<FriendScreen/>"} ,
        {id:7,  title: "shoes",   color:"#00FFFF", image:"./assets/Vector Smart Object-6.png", next:"<FriendScreen/>"} ,
        {id:8,  title: "hat",    color:"#20B2AA", image:"./assets/Vector Smart Object-7.png", next:"<FriendScreen/>"} ,
      ]
    };
  }

  clickEventListener(item) {
    Alert.alert(item.title)
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList style={styles.list}
          contentContainerStyle={styles.listContainer}
          data={this.state.data}
          horizontal={false}
          numColumns={2}
          keyExtractor= {(item) => {
            return item.id;
          }}
          renderItem={({item}) => {
            return (
              <View>
                <TouchableOpacity style={[styles.card, {backgroundColor:item.color}]} onPress={() => {this.next}}>
                  <Image style={styles.cardImage} source={{uri:item.image}}/>
                </TouchableOpacity>

                <View style={styles.cardHeader}>
                  <View style={{alignItems:"center", justifyContent:"center"}}>
                    <Text style={[styles.title, {color:item.color}]}>{item.title}</Text>
                  </View>
                </View>
              </View>
            )
          }}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    marginTop:40,
    backgroundColor:'#bfe3fe',
  },
  list: {
    paddingHorizontal: 5,
    backgroundColor:"#bfe3fe",
  },
  listContainer:{
    alignItems:'center'
  },
  /******** card **************/
  card:{
    shadowColor: '#474747',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 12,
    marginVertical: 20,
    marginHorizontal: 40,
    backgroundColor:"#369bca",
    //flexBasis: '42%',
    width:120,
    height:120,
    borderRadius:60,
    alignItems:'center',
    justifyContent:'center'
  },
  cardHeader: {
    paddingVertical: 17,
    paddingHorizontal: 16,
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    flexDirection: 'row',
    alignItems:"center", 
    justifyContent:"center"
  },
  cardContent: {
    paddingVertical: 12.5,
    paddingHorizontal: 16,
  },
  cardFooter:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 12.5,
    paddingBottom: 25,
    paddingHorizontal: 16,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1,
  },
  cardImage:{
    height: 50,
    width: 50,
    alignSelf:'center'
  },
  title:{
    fontSize:24,
    flex:1,
    alignSelf:'center',
    fontWeight:'bold'
  },
});      

export default home;