import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from 'react-native';

import { Icon } from 'react-native-elements'

import CardStack, { Card } from 'react-native-card-stack-swiper';
export default function HomeScreen({ navigation }) {
  nav = navigation;
  return (
    <View style={{ flex: 1 }}>
      <CardStack
        style={styles.content}
        //Pop up a message if there are no cards
        renderNoMoreCards={() => <Text style={{ fontWeight: '700', fontSize: 18, color: 'gray' }}>No cards remaining, try refreshing.</Text>}
        ref={swiper => {
          this.swiper = swiper
        }}

        onSwiped={() => console.log('onSwiped')}
        onSwipedLeft={() => console.log('onSwipedLeft')}
      >
      {/* First Card */}
        <Card style={[styles.card, styles.card1]}>

          <Image style={{ width: "100%", height: '70%' }} source={require('../assets/images/05.jpg')} />
          <View style={{ flex: 1, flexDirection: 'col' }}>
            <Text style={{ color: 'white', fontSize: 30, paddingTop: 10, paddingLeft: 10 }} fontFamily='Roboto'>Jason, 29</Text>
            <Text style={{ color: 'grey', fontSize: 20, paddingTop: 2, paddingLeft: 10 }} fontFamily='Roboto'>Intermidiate</Text>

            {/* Console logos */}
            <View style={{ flex: 1, flexDirection: 'row', marginLeft: 10, marginTop: 5 }}>
              <Icon type='ionicon' name='logo-playstation' color='white' size={30} />
              <Icon type='ionicon' name='logo-steam' color='white' size={30} />
            </View>
          </View>

        </Card>
        {/* Second Card */}
        <Card style={[styles.card, styles.card1]}>

          <Image style={{ width: "100%", height: '70%' }} source={{ uri: 'https://i.dailymail.co.uk/1s/2019/02/06/11/9455752-6673151-The_female_gamer_who_plays_games_such_as_Warframe_and_Borderland-a-8_1549450999571.jpg', }} />
          <View style={{ flex: 1, flexDirection: 'col' }}>
            <Text style={{ color: 'white', fontSize: 30, paddingTop: 10, paddingLeft: 10 }} fontFamily='Roboto'>Jen, 20</Text>
            <Text style={{ color: 'grey', fontSize: 20, paddingTop: 2, paddingLeft: 10 }} fontFamily='Roboto'>Professional</Text>

            {/* Console logos */}
            <View style={{ flex: 1, flexDirection: 'row', marginLeft: 10, marginTop: 5 }}>
              <Icon type='ionicon' name='logo-playstation' color='white' size={30} />
            </View>
          </View>

        </Card>
      </CardStack>


      <View style={styles.footer}>
        <View style={styles.buttonContainer}>

          {/* X button which allows a user to discard card to the left*/}
          <TouchableOpacity style={[styles.button, styles.red]} onPress={() => {
            this.swiper.swipeLeft();
          }}>
            <Icon name='clear' color='#fd267d' size={50} />
          </TouchableOpacity>

          {/* Refresh button which just pulls the last swiped card from the top */}
          <TouchableOpacity style={[styles.button, styles.orange]} onPress={() => {
            this.swiper.goBackFromTop();
          }}>
            <Icon name='refresh' color='rgb(246,190,66)' style={{ height: 62, width: 62 }} />
          </TouchableOpacity>

          {/* Check mark button which swipes the card right */}
          <TouchableOpacity style={[styles.button, styles.green]} onPress={() => {
            this.swiper.swipeRight();
          }}>
            <Icon name='check' color='#01df8a' size={50} />
          </TouchableOpacity>
        </View>

      </View>
    </View>
  );
}

HomeScreen.navigationOptions = {
  title: "Match",
  //Filter button in the top right of the swipe screen which navigates user to filter screen
  headerRight: (<View style={{ paddingRight: 20 }}><Icon onPress={() => { nav.navigate('Filter'); }} type='ionicon' name='ios-options' /></View>)
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#f2f2f2',
  },
  content: {
    flex: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    width: 320,
    height: 470,
    backgroundColor: '#FE474C',
    borderRadius: 5,
    shadowColor: 'rgba(0,0,0,0.5)',
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.5,
  },
  card1: {
    backgroundColor: 'rgb(26,27,34)',
  },
  card2: {
    backgroundColor: '#FEB12C',
  },
  label: {
    lineHeight: 400,
    textAlign: 'center',
    fontSize: 55,
    fontFamily: 'System',
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
  footer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonContainer: {
    width: 220,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    shadowColor: 'rgba(0,0,0,0.3)',
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.5,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 0,
  },
  orange: {
    width: 55,
    height: 55,
    borderWidth: 6,
    borderColor: 'rgb(246,190,66)',
    borderWidth: 4,
    borderRadius: 55,
    marginTop: -15
  },
  green: {
    width: 75,
    height: 75,
    backgroundColor: '#fff',
    borderRadius: 75,
    borderWidth: 6,
    borderColor: '#01df8a',
  },
  red: {
    width: 75,
    height: 75,
    backgroundColor: '#fff',
    borderRadius: 75,
    borderWidth: 6,
    borderColor: '#fd267d',
  }
});