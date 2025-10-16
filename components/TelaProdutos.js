import { Text, Image, StyleSheet, View, ScrollView } from 'react-native';

import produto2 from '../assets/Foto2.webp';
import produto3 from '../assets/Foto3.avif';
import produto5 from '../assets/foto6.png';

export default function Produtos(props) {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <Text style={styles.Title}>Nossos Produtos</Text>

      <View style={styles.card}>
        <Image source={produto2} style={styles.produtos} resizeMode="cover" />
        <Text style={styles.Text}>Notebook Dell Alienware Area-51</Text>
      </View>

      <View style={styles.card}>
        <Image source={produto3} style={styles.produtos} resizeMode="contain" />
        <Text style={styles.Text}>Desktop Gamer Alienware Aurora R15</Text>
      </View>

      <View style={styles.card}>
        <Image source={produto5} style={styles.produtos} resizeMode="contain" />
        <Text style={styles.Text}>Monitor Gamer Curvo Alienware AW3423DWF 34" QHD QD-OLED 165Hz</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111218',
  },
  contentContainer: {
    padding: 20,
    paddingBottom: 40,
  },
  card: {
    backgroundColor: '#1e1e2f',
    borderRadius: 12,
    padding: 16,
    marginBottom: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 6,
    elevation: 8,
  },
  produtos: {
    width: 496,
    height: 362,
    borderRadius: 12,
    marginBottom: 12,
  },
  Title: {
    color: '#00e5ff',
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 25,
  },
  Text: {
    color: '#cfd8dc',
    fontSize: 16,
    textAlign: 'center',
  },
});
