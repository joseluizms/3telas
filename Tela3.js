// Tela3.js

import React from 'react';
import { View, Text } from 'react-native';
import CabecalhoPersonalizado from './CabecalhoPersonalizado';

const Tela3 = () => {
  return (
    <View>
      <CabecalhoPersonalizado titulo="Tela 3" />
      <Text>Você chegou na tela final.</Text>
    </View>
  );
};

export default Tela3;
