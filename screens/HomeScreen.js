import React, { useContext, useEffect, useRef, useState } from 'react';
import { View, Text, TextInput, StyleSheet, Image, Pressable, ScrollView } from 'react-native';
import { ThemeContext } from '../context/ThemeContext';

export default function HomeScreen({ navigation }) {
  const [name, setName] = useState('');
  const inputRef = useRef(null);
  const { dark, toggleTheme } = useContext(ThemeContext);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const consoles = [
    { img: require('../assets/ps5.png'), nome: 'PS5', preco: 'R$ 4.299' },
    { img: require('../assets/xboxseriesx.png'), nome: 'Xbox Series X', preco: 'R$ 4.199' },
    { img: require('../assets/xboxseriess.png'), nome: 'Xbox Series S', preco: 'R$ 2.649' },
    { img: require('../assets/xboxbranco.png'), nome: 'Xbox Series X 2TB', preco: 'R$ 6.199' },
    { img: require('../assets/ps5pro.png'), nome: 'PS5 Pro', preco: 'R$ 6.137' },
    { img: require('../assets/ps4.png'), nome: 'PS4', preco: 'R$ 1.639' },
      
  ];

  return (
    <ScrollView contentContainerStyle={[styles.container, dark ? styles.dark : styles.light]}>
      <View style={styles.toggle}>
        <Pressable onPress={toggleTheme}>
          <Image source={dark ? require('../assets/claro.png') : require('../assets/escuro.png')} style={styles.icon} />
        </Pressable>
      </View>

      <Text style={[styles.title, dark && styles.textDark]}>Seja Bem-vindo aos Pecinhas Consoles!</Text>

      <TextInput
        ref={inputRef}
        placeholder="Digite seu nome"
        placeholderTextColor={dark ? "#ccc" : "#333"}
        value={name}
        onChangeText={setName}
        style={[styles.input, dark && styles.inputDark]}
      />

      <Text style={[styles.greeting, dark && styles.textDark]}>Olá, {name || "jogador"}!</Text>
      
      <View style={styles.grid}>
        {consoles.map((c, i) => (
          <View key={i} style={styles.item}>
            <Image source={c.img} style={styles.consoleImg} />
            <Text style={[styles.price, dark && styles.textDark]}>{c.nome} - {c.preco}</Text>
          </View>
        ))}
      </View>

      <Pressable style={[styles.button, dark && styles.buttonDark]} onPress={() => navigation.navigate('Carrinho')}>
        <Text style={[styles.buttonText, dark && styles.textDark]}>Gerenciar Jogos no Carrinho</Text>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flexGrow: 1, alignItems: 'center', padding: 30 },
  dark: { backgroundColor: '#111' },
  light: { backgroundColor: '#fff' },
  toggle: { position: 'absolute', top: 40, right: 20 },
  icon: { width: 30, height: 30 },
  title: { fontSize: 28, fontWeight: 'bold', marginTop: 80 },
  textDark: { color: '#fff' },
  input: {
    borderWidth: 1, borderColor: '#999', borderRadius: 10,
    padding: 10, width: '100%', marginVertical: 20, color: '#000'
  },
  inputDark: { backgroundColor: '#333', color: '#fff' },
  greeting: { fontSize: 18, marginBottom: 20 },
  grid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' },
  item: { width: '30%', alignItems: 'center', marginBottom: 20 },
  consoleImg: { width: 80, height: 80, resizeMode: 'contain' },
  price: { marginTop: 5, fontSize: 13, textAlign: 'center' },
  button: { borderWidth: 1, borderColor: '#000', padding: 12, borderRadius: 10 },
  buttonDark: { borderColor: '#fff' },
  buttonText: { fontWeight: 'bold', fontSize: 16 }
});
