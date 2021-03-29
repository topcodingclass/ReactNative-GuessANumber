import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Button } from 'react-native';
import Header from './components/Header'
import GameScreen from './screens/GameScreen'
import LevelItem from './components/LevelItem'
import DATA from './data/data'

const App = () => {
  console.log(DATA)
  const [isGameStart, setIsGameStart] = useState(false)
  const [max, setMax]= useState()
  const selectLevel = max =>{
    setIsGameStart(true);
    setMax(max)
  }
  const renderItem = ({ item }) => {
    return(
      <LevelItem color={item.color} level={item.level} onPress={()=>{selectLevel(item.max)}} />   
    )
  };

  let screen = <View>
  <Text style={styles.levelText}>Select a Level</Text>
  <FlatList data={DATA} renderItem={renderItem}  keyExtractor={item => item.level} />
  </View>
  if(isGameStart)
    screen = <View>
              <GameScreen maxNumber={max} />
              <Button title="Back to level" onPress={()=>setIsGameStart(false)} />
            </View>

  return(

    <View>
      <Header title="Guess A Number" />
      {screen}
    </View>
  )
}

const styles= StyleSheet.create({
  container: {
        flex: 1,
        borderRadius: 10,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 10,
        elevation: 3,
        padding: 15,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
      },
  levelText: {
    margin:20,
    fontSize:25,
    alignSelf:'center'

  }
}
)

export default App