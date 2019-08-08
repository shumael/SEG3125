import React from 'react';
import {
    Image,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    TextInput,
    Switch,
    Button,
    Picker,
} from 'react-native';

export default class ProfileScreen extends React.Component {
    //set default states of index
    state = {
        consoleIndex: 'xbox',
        skillIndex: 'noob',
        genderIndex: 'male',
        timeIndex: '1'
    }
    
    render() {
        return (
            <ScrollView contentContainerStyle={{ alignItems: 'center', justifyContent: 'center' }}>
                <Text style={styles.profile}>
                    {/* Profile */}
                </Text>
                <Image
                    source={{ uri: 'https://i.redd.it/6onq25y0sh311.jpg', }}
                    //borderRadius style will help us make the Round Shape Image
                    style={{ width: 150, height: 150, borderRadius: 100 / 2 }}
                />
                <Text style={styles.text}>
                    John
            </Text>

                <Text style={{ textAlign: 'left' }}>
                    About John
            </Text>

                <TextInput
                    style={{ height: 50, width: 340, backgroundColor: '#E8E8E8', marginTop: 10, marginBottom: 10 }}
                    multiline={true}
                    editable={true}
                    autoFocus={true}
                    placeholder='Describe Yourself'
                />

                <Text style={{ textAlign: 'left' }}>
                    Age
            </Text>

                <TextInput
                    style={{ height: 25, width: 340, backgroundColor: '#E8E8E8', marginTop: 10, marginBottom: 10 }}
                    multiline={true}
                    editable={true}
                    autoFocus={true}
                    placeholder='Enter Age'
                />




                <Text style={{ textAlign: 'left' }}>
                    Games You Own
            </Text>

                <TextInput
                    style={{ height: 50, width: 340, backgroundColor: '#E8E8E8', marginTop: 10, marginBottom: 10 }}
                    multiline={true}
                    editable={true}
                    autoFocus={true}
                    placeholder='Enter Games You Own'
                />

                <Text style={{ textAlign: 'left' }}>
                    School
            </Text>

                <TextInput
                    style={{ height: 25, width: 340, backgroundColor: '#E8E8E8', marginTop: 10, marginBottom: 10 }}
                    multiline={true}
                    editable={true}
                    autoFocus={true}
                    placeholder='Add School'
                />

                <Text style={{ textAlign: 'left' }}>
                    Living In
            </Text>

                <TextInput
                    style={{ height: 25, width: 340, backgroundColor: '#E8E8E8', marginTop: 10, marginBottom: 10 }}
                    multiline={true}
                    editable={true}
                    autoFocus={true}
                    placeholder='Enter City'
                />

                <Text style={{ textAlign: 'left' }}>
                    Time Zone
            </Text>

                <Picker
                    style={{ width: 340, marginTop: 10, marginBottom: 10 }}
                    selectedValue={this.state.timeIndex}
                    onValueChange={(lang) => this.setState({ timeIndex: lang })}>
                    <Picker.Item label="Eastern Daylight Time (GMT-4)" value="1" />
                    <Picker.Item label="Newfoundland Daylight Time (GMT-2:30)" value="2" />
                    <Picker.Item label="Atlantic Daylight Time (GMT-3)" value="3" />
                    <Picker.Item label="Central Daylight Time (GMT-5)" value="4" />
                    <Picker.Item label="Central Standard Time (GMT-6)" value="5" />
                    <Picker.Item label="Mountain Daylight Time (GMT-6)" value="6" />
                    <Picker.Item label="Pacific Daylight Time (GMT-7)" value="7" />
                </Picker>

                <Text style={{ textAlign: 'left' }}>
                    Level of Competitiveness
            </Text>

                <Picker
                    style={{ width: 340, marginTop: 10, marginBottom: 10 }}
                    selectedValue={this.state.skillIndex}
                    onValueChange={(lang) => this.setState({ skillIndex: lang })}>
                    <Picker.Item label="Amateur" value="noob" />
                    <Picker.Item label="Intermediate" value="normal" />
                    <Picker.Item label="Professional" value="pro" />
                </Picker>

                <Text style={{ textAlign: 'left' }}>
                    Gender
            </Text>

                <Picker
                    style={{ width: 340, marginTop: 10, marginBottom: 10 }}
                    selectedValue={this.state.genderIndex}
                    onValueChange={(lang) => this.setState({ genderIndex: lang })}>
                    <Picker.Item label="Male" value="male" />
                    <Picker.Item label="Female" value="female" />
                    <Picker.Item label="Other" value="other" />
                </Picker>

                <Text style={{ textAlign: 'left' }}>
                    Preferred Gaming Systems
            </Text>


                <Picker
                    style={{ width: 340, marginTop: 10, marginBottom: 10 }}
                    selectedValue={this.state.consoleIndex}
                    onValueChange={(lang) => this.setState({ consoleIndex: lang })}>
                    <Picker.Item label="Xbox One" value="xbox" />
                    <Picker.Item label="PlayStation 4" value="ps4" />
                    <Picker.Item label="PC" value="pc" />
                </Picker>
            </ScrollView>
        );
    }
}

ProfileScreen.navigationOptions = {
    title: 'Profile',
};

const styles = StyleSheet.create({
    text: {
        margin: 10,
        fontSize: 20,
        color: 'black',
        fontWeight: 'bold',
    },
    profile: {
        marginBottom: 50,
        marginTop: 10,
        fontSize: 25,
        color: 'black',
        fontWeight: 'bold',
    },
});
