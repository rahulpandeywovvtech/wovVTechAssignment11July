import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

export default class Data extends Component {
    render( props) {
        const { data } = this.props.params;
        console.warn(data)
        return (
            <View style={{justifyContent:"center",alignItems:"center"}}>
               <Text>
                
               </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({})
