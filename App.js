// src/App.js
import React, { useState } from 'react';
import { View } from 'react-native';
import ProductSelector from './components/ProductSelector';
import PincodeInput from './components/PincodeInput';
import DeliveryDate from './components/DeliveryDate';

const App = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [deliveryDate, setDeliveryDate] = useState('');

  const handleProductSelect = (product) => {
    setSelectedProduct(product);
  };

  const handlePincodeSubmit = (pincode) => {
    // Simulate delivery date calculation based on pincode
    const estimatedDate = new Date();
    estimatedDate.setDate(estimatedDate.getDate() + 3); // Example: 3 days later
    setDeliveryDate(estimatedDate.toDateString());
  };

  return (
    <View>
      <ProductSelector onSelect={handleProductSelect} />
      {selectedProduct && <PincodeInput onSubmit={handlePincodeSubmit} />}
      {deliveryDate && <DeliveryDate date={deliveryDate} />}
    </View>
  );
};

export default App;
