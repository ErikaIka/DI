/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {Button, TextInput} from 'react-native-paper';

const nombre = nombreUsuario => {
  return <Text>{nombreUsuario}</Text>;
};

const datos = () => {
  return (
    <View style={estilo === 'florida' ? styles.florida : styles.upv}>
      <TextInput
        label="Introduce tus datos"
        placeholder="placeholder"
        placeholderTextColor={estilo === 'florida' ? 'white' : 'orange'}
        left={<TextInput.Icon name="eye" />}
      />
      <TextInput
        label="Introduce tus datos"
        placeholder="placeholder"
        placeholderTextColor={estilo === 'florida' ? 'white' : 'orange'}
        left={<TextInput.Icon name="eye" />}
      />
    </View>
  );
};

const botonInformesAdmin = () => {
  return (
    <Button icon="format-list-bulleted" mode="contained">
      INFORMES
    </Button>
  );
};

const modulos2Dam = [
  {nombre: 'DIN', profesor: 'Manel', horas: 120},
  {nombre: 'ADA', profesor: 'Juanmi', horas: 120},
  {nombre: 'PMDM', profesor: 'Fran', horas: 100},
  {nombre: 'PSP', profesor: 'Fran', horas: 60},
  {nombre: 'SGE', profesor: 'Belén', horas: 100},
  {nombre: 'Inglés', profesor: 'Caterina', horas: 40},
  {nombre: 'EIE', profesor: 'Manuel', horas: 60},
];

const estilo = 'upv';
const isAdmin = false;

class App extends Component {
  render() {
    return (
      <>
        {nombre('Erika Serra')}
        {datos()}
        {isAdmin && botonInformesAdmin()}
        <ScrollView>
          {modulos2Dam.map((item, pos) => {
            return (
              <View
                style={pos % 2 === 0 ? styles.color1 : styles.color2}
                key={pos}>
                <Text>{pos + 1}</Text>
                <Text>{item.nombre}</Text>
                <Text>{item.profesor}</Text>
                <Text>{item.horas} horas</Text>
              </View>
            );
          })}
        </ScrollView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  upv: {
    backgroundColor: 'purple',
    fontSize: 10,
    fontWeight: '600',
    padding: 4,
    paddingLeft: 12,
    textAlign: 'left',
    color: 'grey',
  },
  florida: {
    backgroundColor: 'red',
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
  color1: {
    backgroundColor: '#F48FB1',
  },
  color2: {
    backgroundColor: '#F8BBD0',
  },
});

export default App;
