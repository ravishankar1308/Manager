import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';

const Input = ({lable, value, onChangeText, placeholder, secureTextEntry}) => {
return(
    <View style={styles.containerStyle}>
    
    <Text style={styles.lableStyle}>
        {lable}
    </Text>
    <View style={styles.inputStyle}>
    <TextInput
    placeholder={placeholder}
    autoCorrect={false}
    style={styles.inputStyle}
    value={value}
    onChangeText={onChangeText}
    
    secureTextEntry={secureTextEntry}
    /></View>
    </View>
);
};


const styles= StyleSheet.create(
    {
        inputStyle:{
            height:20,width:100,
            color: '#000',
            paddingRight:5,
            paddingLeft:5,
            fontSize:18,
            lineHeight:23,
            flex:2
        },
        lableStyle:{
            fontSize:18,
            paddingLeft:20,
            flex:1,
            backgroundColor: '#fffaaa',
        },
        containerStyle:{
            height:40,
            flex:1,
            flexDirection:'row',
            alignItems:'center'
        }
    }
);
export default Input;