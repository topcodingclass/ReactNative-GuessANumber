import React, { useState } from 'react';
import { Text, View, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 


const GameScreen = props =>{
  const [guess, setGuess] = useState();
  const [result, setResult] = useState('Result goes here')
  const [randomNuber, setRandomNumber] = useState(getRandomArbitrary(1,props.maxNumber))

  function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

  const placeholder = 'Enter a number between 1 and '+props.maxNumber

  const onChangeText = number =>{
    if(number>props.maxNumber)
      {
        alert('Number should be between 1 and '+props.maxNumber)
        setGuess('')
      }
    else
      setGuess(number)
  }

  const compareNumber = () =>{
    console.log(guess, randomNuber)
    let message ='';
    if(guess == randomNuber)
    {
      message = "Bingo";
    }
    else if(guess > randomNuber)
    {
      message = "Too big";
    }
    else{
      message = "Too small";
    }
    setResult(message);
    setGuess('')

  }

  return(
    <View>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} value={guess} placeholder={placeholder} onChangeText={text=>onChangeText(text)} textAlign={'center'} keyboardType="numeric" />
        <TouchableOpacity onPress={compareNumber} >
        <AntDesign name="play" size={50} color="orange" />
        </TouchableOpacity>
      </View>        
        <Text>{result}</Text>
      
    </View>
  )

}

const styles = StyleSheet.create(
  {
    inputContainer:{
      flexDirection:'row',
      justifyContent:'center',
      alignItems:'center'
    },
    input:{
      margin:20,
      borderColor:'gray',
      borderWidth:1,
      height:50,
      width: 250,
      borderRadius:50/2,
    }
  }
)

export default GameScreen;
