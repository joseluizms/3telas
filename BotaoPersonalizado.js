// BotaoPersonalizado.js

import React from 'react';
import { Button } from 'react-native';

const BotaoPersonalizado = ({ titulo, aoPressionar }) => {
  return <Button title={titulo} onPress={aoPressionar} />;
};

export default BotaoPersonalizado;
