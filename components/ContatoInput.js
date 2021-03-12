import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const ContatoInput = (props) => {
    const [nome, setNome] = useState('');
    const [numero, setNumero] = useState('');

  const capturarNome = (nome) => {
    setNome(nome);
  }

  const capturarNumero = (numero) => {
    setNumero(numero);
  }

  const capturarContato = (nomeContato, numeroContato) => {
    return {nome: nomeContato, numero: numeroContato}
    }

  return (
    <View style={styles.contatoView}>

      <TextInput 
        style={styles.contatoTextInput}
        placeholder="Seu nome.."
        onChangeText={capturarNome}
        value={nome}
      />

        <TextInput 
        style={styles.contatoTextInput}
        placeholder="Seu numero..."
        onChangeText={capturarNumero}
        value={numero}
      />

      <View style={{width: '80%'}}>
        <Button
            title="+"
            onPress={() => {
                props.onAdicionarContato(capturarContato(nome, numero))
            }
            }
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  contatoView: {
    marginBottom: 12,
    alignItems: 'center'
  },
  contatoTextInput: {
    width: '80%',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    padding: 8,
    textAlign: 'center',
    marginBottom: 4,
    outline: 0
  }
});


export default ContatoInput; 