import React, { useContext } from 'react';
import { View, Text, StyleSheet, Pressable, Image } from 'react-native';
import { ThemeContext } from '../context/ThemeContext';

export default function PurchaseScreen({ route, navigation }) {
  const { dark } = useContext(ThemeContext);
  const { id, nome, preco } = route.params;

  const images = {
    ps5: require('../assets/ps5.png'),
    xboxseriesx: require('../assets/xboxseriesx.png'),
    xboxseriess: require('../assets/xboxseriess.png'),
    xboxbranco: require('../assets/xboxbranco.png'),
    ps5pro: require('../assets/ps5pro.png'),
    ps4: require('../assets/ps4.png'),
  };

  const img = images[id];

  const handlePayment = (tipo) => {
    console.log(`Pagamento via ${tipo}`);
    alert(`Pagamento via ${tipo}\nObrigado! A confirmação do pagamento chegará no seu e-mail.`);
  };

  return (
    <View style={[styles.container, dark ? styles.dark : styles.light]}>
      <Text style={[styles.title, dark && styles.textDark]}>Adquirir {nome}</Text>

      <Image source={img} style={styles.consoleImg} />

      <Text style={[styles.price, dark && styles.textDark]}>Preço: {preco}</Text>

      <Text style={[styles.subtitle, dark && styles.textDark]}>
        Selecione a forma de pagamento:
      </Text>

      <View style={styles.options}>
        <Pressable style={styles.option} onPress={() => handlePayment('Pix')}>
          <Text style={styles.optionText}>Pix</Text>
        </Pressable>
        <Pressable style={styles.option} onPress={() => handlePayment('Cartão de Crédito')}>
          <Text style={styles.optionText}>Crédito</Text>
        </Pressable>
        <Pressable style={styles.option} onPress={() => handlePayment('Boleto')}>
          <Text style={styles.optionText}>Boleto</Text>
        </Pressable>
      </View>

      <Pressable style={styles.backBtn} onPress={() => navigation.goBack()}>
        <Text style={styles.backText}>Voltar</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20
  },
  dark: { backgroundColor: '#111' },
  light: { backgroundColor: '#fff' },
  textDark: { color: '#fff' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  price: { fontSize: 20, marginBottom: 20 },
  subtitle: { fontSize: 18, marginBottom: 10 },
  options: {
    width: '100%',
    alignItems: 'center',
    gap: 15,
    marginBottom: 30,
  },
  option: {
    backgroundColor: '#0a84ff',
    padding: 12,
    borderRadius: 10,
    width: '60%',
    alignItems: 'center',
  },
  optionText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  backBtn: { padding: 10 },
  backText: { color: '#999' },
  consoleImg: {
    width: 140,
    height: 120,
    resizeMode: 'contain',
    marginVertical: 20,
  },
});
