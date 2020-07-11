import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

export default class Data extends Component {
constructor(props){
    super(props)
    this.state={

    }
}


    render( ) {
        const { data } = this.props.route.params;
        console.warn(data)
        return (
            <View style={{}}>
               <Text>
                {JSON.stringify(data)}
               </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({})
