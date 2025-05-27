import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, TextInput, Image, ScrollView, Pressable } from 'react-native';
import { ThemeContext } from '../context/ThemeContext';

export default function GameCartScreen({ navigation }) {
  const { dark, toggleTheme } = useContext(ThemeContext);
  const [qtd, setQtd] = useState('');

  const jogos = [
    { img: require('../assets/reddead2.jpg'), nome: 'RDR2' },
    { img: require('../assets/GTA VI.png'), nome: 'GTA VI' },
    { img: require('../assets/thelastofus.png'), nome: 'The Last of Us' },
    { img: require('../assets/spiderman.png'), nome: 'Spider-Man' },
    { img: require('../assets/fifa25.png'), nome: 'FC25' },
    { img: require('../assets/godofwar.png'), nome: 'God Of War' },
  ];

  return (
    <ScrollView contentContainerStyle={[styles.container, dark ? styles.dark : styles.light]}>
      
      <View style={styles.toggle}>
        <Pressable onPress={toggleTheme}>
          <Image
            source={dark ? require('../assets/claro.png') : require('../assets/escuro.png')}
            style={styles.icon}
          />
        </Pressable>
      </View>

      <Text style={[styles.title, dark && styles.textDark]}>
        Selecione a quantidade de jogos:
      </Text>

      <View style={styles.games}>
        {jogos.map((j, i) => (
          <View key={i} style={styles.jogo}>
            <Image source={j.img} style={styles.jogoImg} />
            <Text style={[styles.nome, dark && styles.textDark]}>{j.nome}</Text>
          </View>
        ))}
      </View>

      <TextInput
        value={qtd}
        onChangeText={setQtd}
        keyboardType="numeric"
        placeholder="Quantidade"
        placeholderTextColor={dark ? '#ccc' : '#000'}
        style={[styles.input, dark && styles.inputDark]}
      />

      <View style={styles.btns}>
        <Pressable style={styles.sendBtn} onPress={() => alert(`Você selecionou ${qtd} jogos.`)}>
          <Text style={styles.sendText}>Enviar Quantidade</Text>
        </Pressable>

        <Pressable style={styles.backBtn} onPress={() => navigation.goBack()}>
          <Text style={styles.backText}>Voltar à Loja</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 80,
    alignItems: 'center',
  },
  dark: { backgroundColor: '#111' },
  light: { backgroundColor: '#fff' },
  textDark: { color: '#fff' },
  toggle: { position: 'absolute', top: 40, right: 20 },
  icon: { width: 30, height: 30 },
  title: { fontSize: 22, marginBottom: 20, textAlign: 'center' },
  games: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  jogo: { alignItems: 'center', margin: 10 },
  jogoImg: { width: 80, height: 80, resizeMode: 'contain' },
  nome: { marginTop: 5, fontSize: 12 },
  input: {
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 10,
    padding: 10,
    marginVertical: 20,
    width: '100%',
    color: '#000',
  },
  inputDark: { backgroundColor: '#333', color: '#fff' },
  btns: {
    width: '100%',
    alignItems: 'center',
    gap: 15,
    marginTop: 10,
  },
  sendBtn: {
    backgroundColor: '#0a84ff',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 10,
  },
  sendText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  backBtn: {
    paddingVertical: 10,
  },
  backText: {
    color: '#999',
    fontSize: 14,
  },
});
