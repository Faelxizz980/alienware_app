import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import Inicio from './components/TelaInicial'
import Produtos from './components/TelaProdutos'
import Recuros from './components/TelaRecursos' 


const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
         screenOptions={{
          headerStyle: {
            backgroundColor: '#01010aff', // cor de fundo do header
          },
          headerTintColor: '#5c5c61ff',   // cor do texto e ícones do header
          headerTitleStyle: {
            fontWeight: 'bold',
            fontFamily: 'Playfair Display',
          },
          headerTitleAlign: '', // centraliza o título
        }}
        >
        <Stack.Screen 
          name="Inicio" 
          component={Inicio} 
        />
        <Stack.Screen 
          name="Nossos Produtos" 
          component={Produtos} 
        />
        <Stack.Screen 
          name="Nossos Recursos" 
          component={Recuros} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});