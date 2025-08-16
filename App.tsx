import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const App = () => {
  const [peso, setPeso] = useState<string|Number>('');
  const [altura, setAltura] = useState<string|number>('');
  const [imc, setImc] = useState<null|Number>(null);

  const calcularIMC = () => {
    const alturaMetros = parseFloat( altura.toString()) / 100; // Convertendo de centímetros para metros
    const imcCalculado = parseFloat( peso.toString()) / (alturaMetros * alturaMetros);
    setImc(imcCalculado); // Arredondando para duas casas decimais
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={peso.toString()}
          onChangeText={(texto)=>setPeso(texto)}
          placeholder="Peso (kg)"
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          value={altura.toString()}
          onChangeText={(texto)=>setAltura(texto)  }
          placeholder="Altura (cm)"
          keyboardType="numeric"
        />
        <Button title="Calcular IMC" onPress={calcularIMC} />
      </View>

      {imc && (
        <View style={styles.card}>
          <Text style={styles.cardText}>Peso: {peso.toString()} kg</Text>
          <Text style={styles.cardText}>Altura: {altura.toString()} cm</Text>
          <Text style={styles.cardText}>IMC: {imc.toFixed(2)}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    width: '80%',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
  },
  card: {
    marginTop: 20,
    padding: 20,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
  },
  cardText: {
    fontSize: 16,
    marginBottom: 5,
  },
});

export default App;
