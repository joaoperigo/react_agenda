import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text, ScrollView, FlatList } from 'react-native';

export default function App() {
  const [nome, setNome] = useState('');
  const [numero, setNumero] = useState('');
  const [contatos, setContatos] = useState([]);
  const [contador, setContador] = useState(0);

  const capturarNome = (nome) => {
    setNome(nome);
  }

  const capturarNumero = (numero) => {
    setNumero(numero);
  }

  const adicionarContato = () => { 
    setContatos(contatos => {
      setContador (contador + 1);
      return [{key: contador.toString(), nome: nome, numero: numero}, ...contatos];
    })

  }
  return (
    <View style={styles.container}>
     <View style={styles.inputView}>
      {/*Usuário irá inserir lembretes aqui */}

        <TextInput 
          placeholder="Digite o nome..."
          style={styles.textInput}
          onChangeText={capturarNome}
        />

        <TextInput 
          placeholder="Digite o numero..."
          style={styles.textInput}
          onChangeText={capturarNumero}
        />

        <View
          style={styles.inputButton}
        >
        <Button          
          title="+"
          onPress={adicionarContato}
        />
        </View>

     </View>
     <View>
    <View
      style={{width: '80%', alignSelf: 'center'}}
    >
      <FlatList 
        data={contatos}
        renderItem = {contato => (
          <View style={styles.itemNaLista}>
            <Text>{contato.item.nome}</Text>
            <Text>{contato.item.numero}</Text>
          </View>
        )}
      />
    </View>

     
     </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    padding: 40 
  },
  inputView: { 
    alignItems: 'center',
    marginBottom: 12 
  },
  textInput: {
    width: '80%',
    borderBottomColor: '#CCC',
    borderBottomWidth: 1,
    marginBottom: 4,
    padding: 4,
    textAlign: 'center'
  },
  inputButton: { 
    width: '80%' 
  },
  itemNaLista: {
    padding: 12,
    backgroundColor: '#DDD',
    borderColor: 'black',
    borderWidth: 1,
    marginBottom: 8,
    borderRadius: 16,
    alignItems: 'center'
  }
})


