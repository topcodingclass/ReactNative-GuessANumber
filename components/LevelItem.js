import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Button } from 'react-native';


export default function LevelItem(props){
  return(
    <TouchableOpacity onPress={props.onPress}>
        <View style={{...styles.container, backgroundColor:props.color}}>
          <Text>{props.level}</Text>
        </View>
    </TouchableOpacity>
  )

}


const styles= StyleSheet.create({
  container: {
        flex: 1,
        width:'90%',
        borderRadius: 10,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 10,
        elevation: 3,
        padding: 15,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        alignSelf:'center'
      }
  }
)
