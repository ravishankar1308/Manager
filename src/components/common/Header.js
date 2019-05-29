import React from 'react';
import {Text, View, StyleSheet} from 'react-native';


const Header = (props) => {

    return(
        <View style ={styles.viewStyle}>
        <Text style={styles.textStyle}>{props.headerText}</Text>    
        </View>
        
    );
};

const styles = StyleSheet.create(
    {
        viewStyle :{
            // flex : 1,
            backgroundColor: '#202630',
            justifyContent: 'center',
            alignItems: 'center',
            color : 'white',  
            paddingTop:10,
            height:60,
            shadowColor: 'red',
            shadowOffset: { width:0, height:2},
            shadowOpacity:0.9,
            elevation: 2,
            position: 'relative',
            
        },
        textStyle:{
            color:'white',
        }
    }
);


export {Header};