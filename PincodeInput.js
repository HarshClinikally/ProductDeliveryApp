// src/components/PincodeInput.js
import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';

const PincodeInput = ({ onSubmit }) => {
  const [pincode, setPincode] = useState('');

  return (
    <View>
      <TextInput
        placeholder="Enter Pincode"
        value={pincode}
        onChangeText={setPincode}
        keyboardType="numeric"
      />
      <Button title="Check Delivery Date" onPress={() => onSubmit(pincode)} />
    </View>
  );
};

export default PincodeInput;
