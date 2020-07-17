import React from 'react';
import {View,StyleSheet} from 'react-native';
import {Appbar, Title} from 'react-native-paper';

const TopHeader = (props)=>{
    return(
        <Appbar.Header style={styles.blueback}>
            <Title style={styles.whiteFront}>{props.name}</Title>
        </Appbar.Header>
    );
}

const styles = StyleSheet.create({
    blueback:{
        backgroundColor:"#00aaff",
        justifyContent: "center"
    },
    whiteFront:{
        color:"white",
        fontSize:25,  
    }
});

export default TopHeader;