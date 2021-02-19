import React from 'react';
import {TouchableOpacity ,View ,Text, TextInput, StyleSheet} from 'react-native';
import firebase from 'firebase';
import db from '../Config';

export default class WelcomeScreen extends React.Component{
    constructor(){
        super();
        this.state = ({
            EmailID:"",
            Password:"",
        })
    }
    LogIN = async()=>{
        firebase.auth().signInWithEmailAndPassword(this.state.EmailID,this.state.Password)
        .then(()=>{
            alert("You have successfully Loged IN")
        })
        .catch(error=>{
            alert(error.code);
        })
    }
    SignUp = async()=>{
        firebase.auth().createUserWithEmailAndPassword(this.state.EmailID,this.state.Password)
        .then(()=>{
            alert("You have succesfully created an account");
        })
        .catch(error=>{
            alert(error.code);
        })
    }
    render(){
        return(
            <View style = {styles.container}>
                <View style = {styles.heading}>
                    <Text style = {styles.title}>
                        Welcome To Book Santa
                    </Text>
                </View>
                <View style = {styles.inputContainer}>
                <TextInput style = {styles.inputBox}  placeholder = {"Enter E-mail ID"}
                keyboardType = {'email-address'}
                placeholderTextColor = {"#006400"}
                onChangeText = {Text=>{
                    this.setState({
                        EmailID:Text
                    })
                }}
                />
                <TextInput style = {styles.inputBox} secureTextEntry = {true} placeholder = {"Enter Password"}
                placeholderTextColor = {"#006400"}
                onChangeText = {Text=>{
                    this.setState({
                       Password:Text
                    })
                }}
                />
                <TouchableOpacity style = {styles.buttonStyle} onPress = {()=>{
                    this.LogIN();
                }}>
                    <Text style = {{color:"blue"}}>
                        Log IN
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style = {[styles.buttonStyle,{marginTop:20}]} onPress = {()=>{
                    this.SignUp();
                }}>
                    <Text>
                        Sign UP?
                    </Text>
                </TouchableOpacity>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#FFFF00",
    },
    heading:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
    },
    title:{
        fontSize:100,
        fontWeight:50,
        color:"#DC143C",
        paddingBottom:40,
        marginBottom:50,
    },
    inputContainer:{
        flex:1,
        alignItems:"center",
    },
    inputBox:{
        width:300,
        height:30,
        borderColor:"#FFA500",
        fontSize:30,
        margin:20,
        borderBottomWidth:2,
        paddingLeft:40,
        marginBottom:50,
        marginTop:-20,
    },
    buttonStyle:{
        width:150 ,
        height:30 ,
        borderRadius:10,
        backgroundColor:"#BFFF00",
        justifyContent:"center",
        alignItems:"center",
        shadowColor:"black",
        shadowOffset:{width:0,height:5},
        shadowOpacity:0.7,
        shadowRadius:5,
        elevation:20,
    }

})