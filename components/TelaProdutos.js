import {Text, Pressable, Image, StyleSheet, View, ImageBackground } from 'react-native';

import Fundo from '../assets/foto.jpg'
import produto1 from '../assets/produto1.png'
import { ScrollView } from 'react-native-web';

export default function Produtos(props){
    return(
        <ScrollView style={styles.container}>
            <ImageBackground source={Fundo} style={styles.fundo}>
             <Text style={styles.Title}>Nossos Produtos </Text>
             <Image source={produto1} style={styles.produtos}/>
            </ImageBackground>
        </ScrollView>
    );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  fundo: {
    width: '100vw',
    height: '100vh',
    justifyContent: 'center',
    alignItems: 'center',
  },

  produtos: {
    width: 530,
    height: 290,
    borderRadius: 12,
    padding: 16,
  },

  title: {
    color: '#ffffffff',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 40, // 400 era exagerado, ajuste conforme layout real
    textAlign: 'center',
  },
});
