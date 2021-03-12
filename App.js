import React, { useState } from 'react';
import { Button, StyleSheet, TextInput, View, Text, ScrollView, FlatList } from 'react-native';
import ContatoInput from './components/ContatoInput';
import ContatoItem from './components/ContatoItem';


export default function App() {
  const [contatos, setContatos] = useState([]);
  const [contador, setContador] = useState(0);

  const adicionarContato = (contato) => { 
    setContatos(contatos => {
      setContador (contador + 1);
      return [{key: contador.toString(), nome: contato.nome, numero: contato.numero}, ...contatos];
    })
  }

  const removerContato = (keyASerRemovida)  => {
    setContatos(contatos => {
      return contatos.filter((contato) => {
        return contato.key !== keyASerRemovida
      })
    });  
  }

  return (
    <View style={styles.container}>
      <ContatoInput onAdicionarContato={adicionarContato}/>     
      <View>
          <View
            style={{width: '80%', alignSelf: 'center'}}
          >
            <FlatList 
              data={contatos}
              renderItem = {contato => (
                <ContatoItem 
                  nome={contato.item.nome} 
                  numero={contato.item.numero} 
                  onDelete={removerContato}
                  chave={contato.item.key}
                  
                />
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


