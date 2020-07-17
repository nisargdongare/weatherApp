import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Appbar, Title, TextInput, Button } from 'react-native-paper';
import TopHeader from '../components/Header';

const SearchScreen = () => {
    const [city, setCity] = useState('');
    const [cities,setCities]= useState([]);
    const fetchCities = (text)=> {
        setCity(text);
        fetch("https://autocomplete.wunderground.com/aq?query="+text)
        .then(item=>item.json())
        .then(cityData=>{console.log(cityData)});
    }
    return (
        <View>
            <TopHeader name="Weather App" />
            <TextInput
                label="Enter City Name"
                theme={{ colors: { primary: "#00aaff" } }}
                value={city}
                onChangeText={(text)=>fetchCities(text)}
            />
            <Button 
                style={styles.setBtn}
                icon="content-save" 
                mode="contained" 
                theme={{ colors: { primary: "#00aaff" } }}
                onPress={()=>console.log('pressed')}>
                    <Text style={styles.whiteFront}>Search</Text>
            </Button>
        </View>
    );
};

const styles = StyleSheet.create({
    setIp: {
        backgroundColor: "#00aaff",
        justifyContent: "center"
    },
    setBtn:{
        backgroundColor:"#00aaff",
        margin:20,
    },
    whiteFront:{
        color:"white",
    }
});

export default SearchScreen;