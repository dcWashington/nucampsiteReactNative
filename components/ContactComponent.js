import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native'
import { Card } from 'react-native-elements'

class Contact extends Component {

    static navigationOptions = {
        title: 'Contact Us'
    }

    render(){
        return (
            <ScrollView>
                <Card wrapperStyle={{margin: 20}}>
                    <Text>Contact Information</Text>
                    {/* <Card.Divider/> */}
                    <Text>1 Nucamp Way</Text>
                    <Text>Seattle, WA 98001</Text>
                    <Text style={{marginBottom: 10}}>U.S.A</Text>
                </Card>

                {/* <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                    </Card.Body>
                </Card> */}
            </ScrollView>
        )
    }
}

export default Contact;