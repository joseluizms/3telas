// Tela1.js

import React from 'react';
import { View } from 'react-native';
import BotaoPersonalizado from './BotaoPersonalizado';
import CabecalhoPersonalizado from './CabecalhoPersonalizado';

const Tela1 = ({ proximaTela }) => {
  return (
    <View>
      <CabecalhoPersonalizado titulo="Tela 1" />
      <BotaoPersonalizado titulo="Ir para Tela 2" aoPressionar={proximaTela} />
    </View>
  );
};

export default Tela1;
