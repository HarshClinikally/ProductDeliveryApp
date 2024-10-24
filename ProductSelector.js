// src/components/ProductSelector.js
import React from 'react';
import { View, Text, Button } from 'react-native';

const products = [
  { id: 1, name: 'Product A' },
  { id: 2, name: 'Product B' },
  { id: 3, name: 'Product C' },
];

const ProductSelector = ({ onSelect }) => {
  return (
    <View>
      <Text>Select a Product:</Text>
      {products.map(product => (
        <Button key={product.id} title={product.name} onPress={() => onSelect(product)} />
      ))}
    </View>
  );
};

export default ProductSelector;
