import {Text, StyleSheet, View, ScrollView } from 'react-native';

export default function Recursos(props){
    return(
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
            <View style={styles.card}>
                <Text style={styles.title}>Desempenho de Outro Nível</Text>
                <Text style={styles.item}>• Processadores Intel Core i7, i9 e Ultra 9 de última geração</Text>
                <Text style={styles.item}>• Placas de vídeo NVIDIA RTX 40XX para jogos AAA em alta performance</Text>
                <Text style={styles.item}>• Até 64 GB de RAM DDR5 para multitarefa extrema</Text>
                <Text style={styles.item}>• Armazenamento ultrarrápido com SSDs NVMe (até 4TB)</Text>
            </View>

            <View style={styles.card}>
                <Text style={styles.title}>Design Futurista</Text>
                <Text style={styles.item}>• Acabamento premium com chassi em liga de magnésio ou alumínio</Text>
                <Text style={styles.item}>• Iluminação AlienFX RGB totalmente personalizável</Text>
                <Text style={styles.item}>• Tela com bordas finas, resolução QHD ou 4K, e até 360Hz de taxa de atualização</Text>
            </View>

            <View style={styles.card}>
                <Text style={styles.title}>Sistema de Resfriamento Avançado</Text>
                <Text style={styles.item}>• Tecnologia Cryo-Tech™ com múltiplos ventiladores e câmaras de vapor</Text>
                <Text style={styles.item}>• Fluxo de ar otimizado para manter a performance sem aquecer</Text>
                <Text style={styles.item}>• Modo de overclock dinâmico com controle térmico inteligente</Text>
            </View>

            <View style={styles.card}>
                <Text style={styles.title}>Tecnologia e Segurança</Text>
                <Text style={styles.item}>• Leitor de impressão digital ou reconhecimento facial</Text>
                <Text style={styles.item}>• Alienware Command Center: personalize tudo (ventoinhas, luzes, desempenho)</Text>
                <Text style={styles.item}>• Suporte para Wi-Fi 6E e Thunderbolt 4</Text>
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
    },
    card: {
        backgroundColor: '#1e1e2f',
        borderRadius: 12,
        padding: 20,
        marginBottom: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 7, // sombra no Android
    },
    title: {
        color: '#00e5ff',
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 12,
    },
    item: {
        color: '#cfd8dc',
        fontSize: 16,
        marginBottom: 8,
        lineHeight: 24,
    }
});
