import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity, TouchableHighlight} from 'react-native';



const Button = ({onPress, children}) => {
return(
    
    <TouchableOpacity onPress={onPress} style={styles.ButtonStyle}>
        <Text style={styles.textStyle}>{children}</Text>
    </TouchableOpacity>
    
);
};

const styles= StyleSheet.create(
    {
        ButtonStyle:{
            borderRadius:5,
            shadowRadius:5,
            flex:1,
            height:80,
            alignSelf: 'stretch',
            backgroundColor: '#fff',
            borderWidth:1,
            borderColor: '#007aff',
            marginLeft:5,
            marginRight:5,
            marginTop:20,
        },
        textStyle:{
            alignSelf:'center',
            color: '#007aff',
            fontSize:16,
            fontWeight: '600',
            paddingTop:10,
           
            paddingBottom:10
        }
    }
);

export default Button;