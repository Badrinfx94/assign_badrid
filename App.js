import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,TextInput,TouchableOpacity, Alert} from 'react-native';
import React,{useEffect,useState} from 'react'
import { PasswordValidate } from './src/PasswordValidation';
import {Amplify,API,graphqlOperation} from 'aws-amplify'
import awsmobile from './aws-exports'
import {createTest} from './mutations.js'
Amplify.configure(awsmobile)
export default function App() {
  const [userName,setUserName]=useState("")
  const [pass, setPass]=useState("")
  const [validation,setValidation]=useState(PasswordValidate("dsd"))
  useEffect(()=>{
    setValidation(PasswordValidate(pass))
  },[pass])
  onPassChange=(txt)=>{
    setPass(txt)
  }
  onUserNameChange=(txt)=>{
    setUserName(txt)
  }

  const submitDetails=async()=>{
  if(userName!="" && pass!=""){
    let input={
      password:pass,
      username:userName
    }
    API.graphql(graphqlOperation(createTest,{input}))
  }
  else{
    Alert.alert("need username and password input")
  }
  }
  return (  
    <View style={styles.container}>
      <StatusBar style="auto" />
        <TextInput style={styles.input1} placeholderTextColor="#fff" placeholder='Enter Username' onChangeText={(e)=>onUserNameChange(e)} value={userName}></TextInput>
        <TextInput style={styles.input2} placeholderTextColor="#fff" placeholder='Enter Password' onChangeText={(e)=>onPassChange(e)} value={pass}></TextInput>
        <TouchableOpacity onPress={()=>submitDetails()} style={styles.button}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      <View style={styles.validation}>
        <Text style={{color:"white"}}>{validation.reduce((count, a) => count + a, 0)}</Text>
        <Text style={{color:validation[0]==1 ? "red" :"#013220"}}>Password Must contain atleast one lowercase </Text>
        <Text style={{color:validation[1]==1 ? "red" :"#013220"}}>Password Must contain atleast one uppercase </Text>
        <Text style={{color:validation[2]==1 ? "red" :"#013220"}}>Password Must contain atleast one digit</Text>
        <Text style={{color:validation[4]==1 ? "red" :"#013220"}}>Pasword should not have consecutive three characters</Text>
        <Text style={{color:validation[3]==1 ? "red" :"#013220"}}>Password should be between 6 to 20 characters</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({


  container: {
    flex: 1,
    backgroundColor: '#555555',
    alignItems: 'center',
    justifyContent: 'center',

  },
  input1:{
    width:"70%",
    height:"8%",
    textAlign:"left",
    borderBottomWidth:2,
    borderBottomColor:"#496595",
    fontSize:20,
    color:"white"
  },
  input2:{
    width:"70%",
    height:"8%",
    textAlign:"left",
    borderBottomWidth:2,
    borderBottomColor:"#496595",
    fontSize:20,
    color:"white"

  },
  validation:{
    marginTop:30
  },
  button:{
    marginTop:30,
    width:"55%",
    height:"6%",
    alignItems:"center",
    backgroundColor:"#496595",
    borderRadius:20,
    justifyContent:"center"
  },
  buttonText:{
    fontSize:20,
    color:"white"
  }
});
