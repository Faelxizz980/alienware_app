import {Text, Pressable, Image, StyleSheet, View } from 'react-native';

import Logo from '../assets/Logo.gif'
export default function Inicio (props){
    return(
        
        <View style={styles.container} >
            <Image source={ Logo } style={ styles.img } />
            <Text style={styles.Title}>Alienware</Text>
            <Text style={styles.SubTitle}>Tecnologia alienígena. Performance humana.</Text>

            <Pressable
                onPress={ () => { props.navigation.navigate("Nossos Produtos") } }
                style={styles.card}>  
                <Text style={ styles.cardTexto}>Conheça os Produtos</Text>
            </Pressable>
            <Pressable
                onPress={ () => { props.navigation.navigate("Nossos Recursos") } }
                style={styles.card}>  
                <Text style={ styles.cardTexto}>Conheça Nossos Recursos</Text>
            </Pressable>
           

        </View>

    );
}

export const styles =  StyleSheet.create({
    container:{
         backgroundColor: '#111218ff',
        alignItems:'center',
        flex: 1
    },
    img:{
        marginTop:100,
        borderRadius:'50rem',
    },
     Title: {
        color: '#00F0FF', // Ciano neon
        fontSize: 38,
        fontWeight: 'bold',
        marginTop:48,
    },
    SubTitle:{
        color: '#A7A9AC',
        fontSize: 23,
    },
    card:{
        backgroundColor: '#0051adff',
        borderRadius:3,
        width:190,
        height:40,
        marginTop:58,
        justifyContent: 'center',
        alignItems:'center',
        borderColor:'#0077FF',
        borderStyle:'solid',
        borderWidth:1
    },
    cardTexto:{
        color:'#FFFFFF'
    }
})