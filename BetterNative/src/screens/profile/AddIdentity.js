import React from 'react';
import {StyleSheet, Text, View, Platform} from 'react-native';
import {Button, Container, Header, Content, Form, Item, Input, Left, Icon, Body, Right, Title, Card, CardItem, Row, Col, Picker, Label} from "native-base";

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

const states = ['Alabama','Alaska','American Samoa','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','District Of Columbia','Federated States Of Micronesia','Florida','Georgia','Guam','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Marshall Islands','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Northern Mariana Islands','Ohio','Oklahoma','Oregon','Palau','Pennsylvania','Puerto Rico','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virgin Islands','Virginia','Washington','West Virginia','Wisconsin','Wyoming'];


export default class Profile extends React.Component {
    static navigationOptions = ({navigation}) => ({
        header: (
            <Header>
                <Left>
                    <Button transparent onPress={() => navigation.goBack()}>
                        <Text><Icon name="arrow-back"/></Text>
                    </Button>
                </Left>

                <Body>
                <Title>Add Identity Doc</Title>
                </Body>

                <Right></Right>
            </Header>
        )
    });

    constructor(props) {
        super(props);

        this.state = {
            selectedIdType: "",
            state: "New York"
        }
    }

    onIdTypeSelect(newValue) {
        this.setState({
            selectedIdType: newValue
        })
    }

    onStateSelect(newValue) {
        this.setState({
            state: newValue
        })
    }

    addProfile = () => {
        this.props.navigation.state.params.onProfileAdd()
        this.props.navigation.goBack();
    }

    render() {
        var stateForm = (
            <Row><Col>
                <Item>
                    <Label>Front of ID</Label>
                    <Button light onPress={() => {this.props.navigation.navigate("IdentityCamera")}}><Icon name="ios-camera"/></Button>
                </Item>
                <Item>
                    <Label>Back of ID</Label>
                    <Button light onPress={() => {this.props.navigation.navigate("IdentityCamera")}}><Icon name="ios-camera"/></Button>
                </Item>
                <Item>
                    <Label>ID with Face</Label>
                    <Button light onPress={() => {this.props.navigation.navigate("IdentityCamera")}}><Icon name="ios-camera"/></Button>
                </Item>

                <Item>
                    <Label>State</Label>
                    <Picker
                        mode="dropdown"
                        placeholder="State"
                        selectedValue={this.state.state}
                        onValueChange={this.onStateSelect.bind(this)}
                        style={{ width:(Platform.OS === 'ios') ? undefined : 240 }}
                    >
                        {states.map((state, index) =>  {
                            return <Item label={state} value={state} key={index} />
                        })}
                    </Picker>
                </Item>

                <Item fixedLabel>
                    <Label>License ID #</Label>
                    <Input value="812383431" />
                </Item>

                <Item fixedLabel>
                    <Label>Expiration</Label>
                    <Input value="10/31/2021" />
                </Item>

                <Item></Item>                 

                <Button block primary onPress={() => {this.addProfile()}} >
                    <Text>Submit</Text>
                </Button>
            </Col></Row>
        )

        let form = null;

        if(this.state.selectedIdType == "Driver's License")
            form = stateForm

        return (
            <Container>
                <Content>
                    <Form>
                        <Item>
                            <Label>ID Type</Label>
                            <Picker
                                mode="dropdown"
                                placeholder="Select One"
                                style={{ width:(Platform.OS === 'ios') ? undefined : 240 }}
                                selectedValue={this.state.selectedIdType}
                                onValueChange={this.onIdTypeSelect.bind(this)}
                            >
                                {IdTypes.map((IdType, index) =>  {
                                    return <Item label={IdType.type} value={IdType.type} key={index} />
                                })}
                            </Picker>
                        </Item>

                        {form}

                    </Form>
                </Content>
            </Container>
        )
    }
}