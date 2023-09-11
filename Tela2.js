// Tela2.js

import React from 'react';
import { View, Text } from 'react-native';
import BotaoPersonalizado from './BotaoPersonalizado';
import CabecalhoPersonalizado from './CabecalhoPersonalizado';

const Tela2 = ({ proximaTela }) => {
  return (
    <View>
      <CabecalhoPersonalizado titulo="Tela 2" />
      <Text>Alguns Dados</Text>
      <BotaoPersonalizado titulo="Ir para Tela 3" aoPressionar={proximaTela} />
    </View>
  );
};

export default Tela2;
