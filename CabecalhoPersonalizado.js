// CabecalhoPersonalizado.js

import React from 'react';
import { View, Text } from 'react-native';

const CabecalhoPersonalizado = ({ titulo }) => {
  return (
    <View>
      <Text>{titulo}</Text>
    </View>
  );
};

export default CabecalhoPersonalizado;
