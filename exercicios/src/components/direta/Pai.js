import React from 'react';
import {View, Text} from 'react-native';
import Estilo from '../estilo';
import Filho from './Filho';

export default props => {
  let x = 13;
  let y = 1000;
  return (
    <>
      <Filho a={x} b={y} />
      <Filho a={x + 10} b={y + 200} />
    </>
  );
};
