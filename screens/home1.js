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
  Dimensions
} from 'react-native';

var {height, width} = Dimensions.get('window');

const home1 = ({Menu}) => {

  constructor(props) {
    super(props);
    this.state = {
      data: [
        {id:1,  title: "You",      color:"#FF4500", image:"https://img.icons8.com/color/70/000000/name.png"},
        {id:2,  title: "Home",     color:"#87CEEB", image:"https://img.icons8.com/office/70/000000/home-page.png"},
        {id:3,  title: "Love",     color:"#4682B4", image:"https://img.icons8.com/color/70/000000/two-hearts.png"} ,
        {id:4,  title: "Family",   color:"#6A5ACD", image:"https://img.icons8.com/color/70/000000/family.png"} ,
        {id:5,  title: "Friends",  color:"#FF69B4", image:"https://img.icons8.com/color/70/000000/groups.png"} ,
        {id:6,  title: "School",   color:"#00BFFF", image:"https://img.icons8.com/color/70/000000/classroom.png"} ,
        {id:7,  title: "Things",   color:"#00FFFF", image:"https://img.icons8.com/dusk/70/000000/checklist.png"} ,
        {id:8,  title: "World",    color:"#20B2AA", image:"https://img.icons8.com/dusk/70/000000/globe-earth.png"} ,
        {id:9,  title: "Remember", color:"#191970", image:"https://img.icons8.com/color/70/000000/to-do.png"} ,
        {id:10, title: "Game",     color:"#008080", image:"https://img.icons8.com/color/70/000000/basketball.png"} ,
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
          keyExtractor= {(item) => {
            return item.id;
          }}
          renderItem={({item}) => {
            return (
              <TouchableOpacity style={[styles.card, {backgroundColor:item.color}]} onPress={() => {this.clickEventListener(item)}}>
                <Image style={styles.cardImage} source={{uri:item.image}}/>
                <Text style={styles.title}>{item.title}</Text>
              </TouchableOpacity>
            )
          }}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    marginTop:20,
  },
  list: {
    //paddingHorizontal: 5,
    backgroundColor:"#E6E6E6",
  },

  /******** card **************/
  card:{
    width: width,
    height:150,
    flexDirection:'row',
    padding:20,

    justifyContent: 'center', 
    alignItems: 'center' 
  },
  cardImage:{
    height: 70,
    width: 70,
  },
  title:{
    fontSize:28,
    flex:1,
    color:"#FFFFFF",
    fontWeight:'bold',
    marginLeft:40
  },
  subTitle:{
    fontSize:12,
    flex:1,
    color:"#FFFFFF",
  },
  icon:{
    height: 20,
    width: 20, 
  }
});     

export default home1;