import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button, Container, Header, Content, Form, Item, Input, Left, Icon, Body, Right, Title, Card, CardItem, Row, Col, Picker} from "native-base";

const IdTypes = [
	{"type": "Passport"},
	{"type": "Driver's License"},
	{"type": "Health Insurance Card"},
	{"type": "State ID"},
	{"type": "Social Security Card"},
	{"type": "Birth Certificate"},
	{"type": "Student ID"},
	{"type": "DOD ID"},
	{"type": "VA Document"},
	{"type": "Native American Tribal Document"}
];

export default class Profile extends React.Component {
    static navigationOptions = ({navigation}) => ({
        header: (
            <Header>
                <Left>
                    <Button transparent onPress={() => navigation.goBack()}>
                        <Text><Icon name="arrow-back"/> Back</Text>
                    </Button>
                </Left>

                <Body>
                    <Title>Profile</Title>
                </Body>
                
                <Right></Right>
            </Header>
        )
    });

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Container>
                <Content>
                	<Form>
			            <Picker
			              mode="dropdown"
			              placeholder="Select One"
			              /*selectedValue={this.state.selected2}*/
			              /*onValueChange={this.onValueChange2.bind(this)}*/
			            >
	                    	{IdTypes.map((IdType, index) =>  {
	                    		return <Item label={IdType.type} value={IdType.type} key={index} />
							})}
            			</Picker>
            		</Form>
                </Content>
            </Container>
        )
    }
}