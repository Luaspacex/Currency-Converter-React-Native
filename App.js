import React, { useState } from "react";
import {Button, View, StyleSheet,TextInput, ImageBackground, Text } from "react-native";
import RNPickerSelect from 'react-native-picker-select';
const App = () => {
  const [selectedValue, setSelectedValue] = useState("");
  const [secondSelectedValue, setSecondSelectedValue] = useState("");
  const [amount, setAmount] = useState("");
  const [fromCurrency, setFromCurrency] = useState("");
  const [toCurrency, setToCurrency] = useState("");

  const [finalAmount, setFinalAmount] = useState("");

    const onButtonPress = () => {
    fetch(
      "http://api.exchangerate.host/convert?from=" +
        fromCurrency +
        "&to=" +
        toCurrency +
        "&amount=" + 
        amount, 
      {
        method: "GET"
      })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
      setFinalAmount(data.result.toFixed(1));
      })
      .catch((error) => {
        //throw error;
        console.log(error);
      });
    }
  return (
    <>
    <View style={styles.container}>
        <ImageBackground
        style={styles.main_background}
        source={{
          uri:
            "https://static.wixstatic.com/media/454bab_c65798cc651b4993bce8aaddbf04ebc7~mv2.png"
        }}
      >
       <TextInput
            style={styles.amountInput}
            value={amount}
            onChangeText={setAmount}
          />
          <View style={styles.mainPicker}>
           <RNPickerSelect value={fromCurrency} onChangeText={setFromCurrency}
            style={styles.picker} 
            onValueChange={(value) => setFromCurrency(value)}
            items={[
              { label: 'USD', value: 'USD' },
              { label: 'KZT', value: 'KZT' },
              { label: 'RUB', value: 'RUB' },
              { label: 'EUR', value: 'EUR' },
              { label: 'GBP', value: 'GBP' },
              { label: 'CNY', value: 'CNY' },
              { label: 'KRW', value: 'KRW' },
              { label: 'JPY', value: 'JPY' },
              { label: 'CAD', value: 'CAD' },
              { label: 'INR', value: 'INR' },
              { label: 'SEK', value: 'SEK' },
              { label: 'TRY', value: 'TRY' },
              { label: 'NOK', value: 'NOK' },
              { label: 'RON', value: 'RON' },
            ]}
        />
          <RNPickerSelect  style={styles.picker} value={toCurrency}  onChangeText={setToCurrency}  
          
           onValueChange={(value) => setToCurrency(value)}
            items={[
                { label: 'USD', value: 'USD' },
                { label: 'KZT', value: 'KZT' },
                { label: 'RUB', value: 'RUB' },
                { label: 'EUR', value: 'EUR' },
                { label: 'GBP', value: 'GBP' },
                { label: 'CNY', value: 'CNY' },
                { label: 'KRW', value: 'KRW' },
                { label: 'JPY', value: 'JPY' },
                { label: 'CAD', value: 'CAD' },
                { label: 'INR', value: 'INR' },
                { label: 'SEK', value: 'SEK' },
                { label: 'TRY', value: 'TRY' },
                { label: 'NOK', value: 'NOK' },
                { label: 'RON', value: 'RON' },
            ]}
        />
   </View>
        <Button title="Convent" style={styles.button}  onPress={onButtonPress} />
        <Text>{finalAmount} {toCurrency}</Text>
      </ImageBackground>
      
    </View>
    



 </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainPicker: {
    alignItems: "center",
    justifyContent: "center",

  },
  main_background: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column"
      },
  amountInput: {
       borderRadius: 6,
       borderColor: "black",
        paddingVertical: 12,
        paddingHorizontal: 18,
        backgroundColor: "black",
        color: "white",
        width: "25%",
        alignSelf: "center"
        
  },
  selectInput: {
    height: 50, 
    width: 100,
    marginBottom: 165,
  }
});

export default App;