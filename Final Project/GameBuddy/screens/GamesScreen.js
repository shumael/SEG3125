import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Dimensions,
  TouchableOpacity
} from 'react-native';
import { SearchBar } from 'react-native-elements';



export default class GamesScreen extends Component {
  //set initial state of search bar to empty
  state = {
    search: '',
  };

  //Function to update the state of search bar on press of button
  updateSearch = search => {
    this.setState({ search });
  };

  render() {
    const { search } = this.state;
    return (
      <View>
        <SearchBar
          placeholder="Search"
          onChangeText={this.updateSearch}
          value={search}
        />
        <ScrollView
          //style={styles.contentContainer}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
        >
          <Text style={styles.welcome}> Select Your Games!</Text>
          <TouchableOpacity onPress={() => { this.props.navigation.navigate('Filter'); }}>
            <Image source={require('../assets/images/CSGOBanner.jpg')} style={[styles.contentContainer, { width: (Dimensions.get('window').width) - 8 }, { height: (Dimensions.get('window').height) / 4 }]} />
            </TouchableOpacity>

          <TouchableOpacity onPress={() => { this.props.navigation.navigate('Filter'); }}>
          <Image source={require('../assets/images/mkBanner.jpg')} style={[styles.contentContainer, { width: (Dimensions.get('window').width) - 8 }, { height: (Dimensions.get('window').height) / 4 }]} />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => { this.props.navigation.navigate('Filter'); }}>
          <Image source={require('../assets/images/rlBanner.png')} style={[styles.contentContainer, { width: (Dimensions.get('window').width) - 8 }, { height: (Dimensions.get('window').height) / 4 }]} />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => { this.props.navigation.navigate('Filter'); }}>
          <Image source={require('../assets/images/owBanner.jpg')} style={[styles.contentContainer, { width: (Dimensions.get('window').width) - 8 }, { height: (Dimensions.get('window').height) / 4 }]} />
          </TouchableOpacity>
          
          <TouchableOpacity onPress={() => { this.props.navigation.navigate('Filter'); }}>
          <Image source={require('../assets/images/mmBanner.jpg')} style={[styles.contentContainer, { width: (Dimensions.get('window').width) - 8 }, { height: (Dimensions.get('window').height) / 4 }]} />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => { this.props.navigation.navigate('Filter'); }}>
          <Image source={require('../assets/images/alBanner.jpg')} style={[styles.contentContainer, { width: (Dimensions.get('window').width) - 8 }, { height: (Dimensions.get('window').height) / 4 }]} />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => { this.props.navigation.navigate('Filter'); }}>
          <Image source={require('../assets/images/dbBanner.jpg')} style={[styles.contentContainer, { width: (Dimensions.get('window').width) - 8 }, { height: (Dimensions.get('window').height) / 4 }]} />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => { this.props.navigation.navigate('Filter'); }}>
          <Image source={require('../assets/images/gtaBanner.png')} style={[styles.contentContainer, { width: (Dimensions.get('window').width) - 8 }, { height: (Dimensions.get('window').height) / 4 }]} />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => { this.props.navigation.navigate('Filter'); }}>
          <Image source={require('../assets/images/mcBanner.png')} style={[styles.contentContainer, { width: (Dimensions.get('window').width) - 8 }, { height: (Dimensions.get('window').height) / 4 }]} />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => { this.props.navigation.navigate('Filter'); }}>
          <Image source={require('../assets/images/pubgBanner.png')} style={[styles.contentContainer, { width: (Dimensions.get('window').width) - 8 }, { height: (Dimensions.get('window').height) / 4 }]} />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => { this.props.navigation.navigate('Filter'); }}>
          <Image source={require('../assets/images/dqBanner.jpg')} style={[styles.contentContainer, { width: (Dimensions.get('window').width) - 8 }, { height: (Dimensions.get('window').height) / 4 }]} />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => { this.props.navigation.navigate('Filter'); }}>
          <Image source={require('../assets/images/fnBanner.jpg')} style={[styles.contentContainer, { width: (Dimensions.get('window').width) - 8 }, { height: (Dimensions.get('window').height) / 4 }]} />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => { this.props.navigation.navigate('Filter'); }}>
          <Image source={require('../assets/images/mhBanner.jpg')} style={[styles.contentContainer, { width: (Dimensions.get('window').width) - 8 }, { height: (Dimensions.get('window').height) / 4 }]} />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => { this.props.navigation.navigate('Filter'); }}>
          <Image source={require('../assets/images/r6Banner.jpg')} style={[styles.contentContainer, { width: (Dimensions.get('window').width) - 8 }, { height: (Dimensions.get('window').height) / 4 }]} />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => { this.props.navigation.navigate('Filter'); }}>
          <Image source={require('../assets/images/lolBanner.jpg')} style={[styles.contentContainer, { width: (Dimensions.get('window').width) - 8 }, { height: (Dimensions.get('window').height) / 4 }]} />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => { this.props.navigation.navigate('Filter'); }}>
          <Image source={require('../assets/images/u4Banner.jpg')} style={[styles.contentContainer, { width: (Dimensions.get('window').width) - 8 }, { height: (Dimensions.get('window').height) / 4 }]} />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => { this.props.navigation.navigate('Filter'); }}>
          <Image source={require('../assets/images/arkBanner.jpg')} style={[styles.contentContainer, { width: (Dimensions.get('window').width) - 8 }, { height: (Dimensions.get('window').height) / 4 }]} />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => { this.props.navigation.navigate('Filter'); }}>
          <Image source={require('../assets/images/fifaBanner.jpg')} style={[styles.contentContainer, { width: (Dimensions.get('window').width) - 8 }, { height: (Dimensions.get('window').height) / 4 }]} />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => { this.props.navigation.navigate('Filter'); }}>
          <Image source={require('../assets/images/pdBanner.png')} style={[styles.contentContainer, { width: (Dimensions.get('window').width) - 8 }, { height: (Dimensions.get('window').height) / 4 }]} />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => { this.props.navigation.navigate('Filter'); }}>
          <Image source={require('../assets/images/ror2Banner.jpg')} style={[styles.contentContainer, { width: (Dimensions.get('window').width) - 8 }, { height: (Dimensions.get('window').height) / 4 }]} />
          </TouchableOpacity>
          
        </ScrollView>
      </View>
    );
  }
}

GamesScreen.navigationOptions = {
  title: 'Select Game',
};

const styles = StyleSheet.create({
  contentContainer: {
    marginRight: 4,
    marginLeft: 4,
    marginTop: 10,
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: '#68a0cf',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff'
  },
  welcome: {
    color: '#fff',
    textAlign: 'center',
  }
});
