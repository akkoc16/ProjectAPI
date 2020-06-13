import React from 'react'
import {View,Text,Image} from 'react-native'
import styles from '../styles'


const Item = props => {
    return(
        <View style={styles.item.container}>
            <Image
                style={styles.item.image} 
                source={{uri: props.data.image}}/>
            <Text style={styles.item.artistname}>{props.data.artist}</Text>
            <Text style={styles.item.songname}>{props.data.title}</Text>
        </View>
    )
}

export { Item }