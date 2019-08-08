import React from 'react';
import { ButtonGroup, Button } from 'react-native-elements';
import { View, Text } from 'react-native'

export default class FilterScreen extends React.Component {
  constructor() {
    super()
    //set all initial value of buttons to zero
    this.state = {
      selectedIndexConsole: 0,
      selectedIndexCompetitive: 0,
      selectedIndexGender: 0
    }

    //Bind the indexes of each
    this.updateIndexConsole = this.updateIndexConsole.bind(this)
    this.updateIndexCompetitive = this.updateIndexCompetitive.bind(this)
    this.updateIndexGender = this.updateIndexGender.bind(this)
  }

  //handle press of console button selected
  updateIndexConsole(selectedIndexConsole) {
    this.setState({ selectedIndexConsole: selectedIndexConsole })
  }

  //handle press of competitive button selected
  updateIndexCompetitive(selectedIndexCompetitive) {
    this.setState({ selectedIndexCompetitive: selectedIndexCompetitive })
  }

  //handle press of gender button selected
  updateIndexGender(selectedIndexGender) {
    this.setState({ selectedIndexGender: selectedIndexGender })
  }

  render() {
    //Button names
    const consoleButtons = ['Switch', 'PS4', 'xBox', 'PC']
    const competitiveButtons = ['Amateur', 'Intermediate', 'Professional']
    const genderButtons = ['Male', 'Female', 'No Preference']
    
    //states of index
    const { selectedIndexConsole } = this.state
    const { selectedIndexCompetitive } = this.state
    const { selectedIndexGender } = this.state

    return (
      <View>
        <Text style={{ textAlign: 'center', paddingTop: 15, paddingLeft: 10, fontSize: 15 }}>Console Type</Text>
        <ButtonGroup
          onPress={this.updateIndexConsole}
          selectedIndex={selectedIndexConsole}
          buttons={consoleButtons}
          containerStyle={{ height: 45, marginTop: 8, marginBottom: 25 }}
        />
        <Text style={{ textAlign: 'center', paddingTop: 15, paddingLeft: 10, fontSize: 15 }}>Competitiveness</Text>
        <ButtonGroup
          onPress={this.updateIndexCompetitive}
          selectedIndex={selectedIndexCompetitive}
          buttons={competitiveButtons}
          containerStyle={{ height: 45, marginTop: 8 , marginBottom: 25}}
        />
        <Text style={{ textAlign: 'center', paddingTop: 15, paddingLeft: 10, fontSize: 15 }}>Gender</Text>
        <ButtonGroup
          onPress={this.updateIndexGender}
          selectedIndex={selectedIndexGender}
          buttons={genderButtons}
          containerStyle={{ height: 45, marginTop: 8, marginBottom: 25 }}
        />
        {/* Navigate user back to swipe screen to "apply" filters */}
        <Button style={{ marginTop: 30 }} title="Apply Filters" onPress={() => this.props.navigation.navigate('Home')} />
      </View>
    )
  }
}

FilterScreen.navigationOptions = {
  title: 'Filter',
};
