// src/components/DeliveryDate.js
import React from 'react';
import { View, Text } from 'react-native';

const DeliveryDate = ({ date }) => {
  return (
    <View>
      <Text>Estimated Delivery Date: {date}</Text>
    </View>
  );
};

export default DeliveryDate;
