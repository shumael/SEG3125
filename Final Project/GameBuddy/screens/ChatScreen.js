import React from 'react'
import { GiftedChat } from 'react-native-gifted-chat'
import {Text} from 'react-native'

export default class ChatScreen extends React.Component {
  //The inital state of messages is empty
  state = {
    messages: [],
  }
  
  //Here we add a message to default on loading of component
  componentWillMount() {
    //We recieve the name and image of contact to mantain the illusion that this is a custom screen
    const avatar_url = this.props.navigation.getParam('avatar_url', 'no-name-found');
    //Adding dummy message
    this.setState({
      messages: [
        {
          _id: 1,
          text: 'Hello there. Want to play FIFA?',
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'React Native',
            avatar: avatar_url,
          },
        },
      ],
    })
  }

  //If user clicks send, append users message to the message state array
  onSend(messages = []) {
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }))
  }

  render() {
    return (
      <GiftedChat
        messages={this.state.messages}
        //onSend call the onSend function to add message to state
        onSend={messages => this.onSend(messages)}
        user={{
          _id: 1,
        }}
      />
    )
  }
}