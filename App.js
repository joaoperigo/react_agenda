import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text, ScrollView, FlatList } from 'react-native';

export default function App() {
  const [lembrete, setLembrete] = useState('');
  const [lembretes, setLembretes] = useState([]);
  const [contador, setContador] = useState(0);
  const capturarLembrete = (lembrete) => {
    setLembrete(lembrete);
  }
  const adicionarLembrete = () => {
    setLembretes(lembretes => {
      setContador (contador + 1);
      return [{key: contador.toString(), value: lembrete}, ...lembretes];
    })
    //lembretes = [a, b, c]
    //...lembretes = a, b, c operador spread
    //console.log(lembrete);
  }
  return (
    <View style={styles.container}>
     <View style={styles.lembreteInputView}>
      {/*Usuário irá inserir lembretes aqui */}
        <TextInput 
          placeholder="Digite o lembrete..."
          style={styles.lembreteTextInput}
          onChangeText={capturarLembrete}
        />
        <View
          style={styles.lembreteInputButton}
        >
        <Button          
          title="+"
          onPress={adicionarLembrete}
        />
        </View>
     </View>
     <View>
    <View
      style={{width: '80%', alignSelf: 'center'}}
    >
      <FlatList 
        data={lembretes}
        renderItem = {lembrete => (
          <View style={styles.itemNaLista}>
            <Text>{lembrete.item.value}</Text>
          </View>
        )}
      />
    </View>

     {

      /*
      <ScrollView>
      <View style={{alignItems: 'center'}}>
        {
          /*Aqui será exibida a lista de lembretes
          lembretes.map((lembrete) => (
            <View
              key={lembrete}
              style={styles.itemNaLista}
            >
              <Text>
                {lembrete}
              </Text>
            </View>
          ))
        }
      </View>
     </ScrollView>
      */

     }
     
     </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    padding: 40 
  },
  lembreteInputView: { 
    alignItems: 'center',
    marginBottom: 12 
  },
  lembreteTextInput: {
    width: '80%',
    borderBottomColor: '#CCC',
    borderBottomWidth: 1,
    marginBottom: 4,
    padding: 4,
    textAlign: 'center'
  },
  lembreteInputButton: { 
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


