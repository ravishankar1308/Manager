import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const CardSection = (props) => {
    return(
        <View style={styles.Containner}>
            {props.children}
        </View>
    );
}

const styles= StyleSheet.create(
    {
        Containner:{
            borderBottomWidth:1,
            padding:5,
            backgroundColor: '#fff',
            justifyContent: 'flex-start',
            flexDirection: 'row',
            borderColor: '#ddd',
            position: 'relative'
        }
    }
);

export default CardSection;