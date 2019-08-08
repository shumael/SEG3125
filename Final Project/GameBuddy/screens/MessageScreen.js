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

import { ListItem, Icon } from 'react-native-elements'

export default function MessageScreen({ navigation }) {
    nav = navigation;
    //contact list used to populate the list view
    let contactList = [
        {
            name: 'Amy Farha',
            avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
            subtitle: 'Amy sent you a message'
        },
        {
            name: 'Chris Jackson',
            avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
            subtitle: 'Chris sent you a message'
        },
        {
            name: 'Jason Neal',
            avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/guiiipontes/128.jpg',
            subtitle: 'Chris sent you a message'
        },
        {
            name: 'Francis Smith',
            avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/larrygerard/128.jpg',
            subtitle: 'Francis sent you a message'
        },
        {
            name: 'Kyle Bean',
            avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/guinslym/128.jpg',
            subtitle: 'Kyle sent you a message'
        }
    ]

    return (
        <ScrollView>
            <View>
                {
                    //Loop through each element of contactList and display the name and avatar of each contact
                    contactList.map((l, i) => (
                        <ListItem
                            bottomDivider={true}
                            key={i}
                            leftAvatar={{ source: { uri: l.avatar_url } }}
                            title={l.name}
                            subtitle={l.subtitle}
                            subtitleStyle={{ color: 'grey' }}
                            onPress={() => this.nav.navigate('Chat',{name:l.name, avatar_url:l.avatar_url})}
                            rightIcon={<Icon
                                name='ios-arrow-forward'
                                type='ionicon'
                                color='#517fa4'
                              />}
                        />
                    ))
                }
            </View>
        </ScrollView>
    );

}

MessageScreen.navigationOptions = {
    title: 'Messages',
};

