import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
  TouchableNativeFeedback,
  Alert,
  Image,
  Animated
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  // Estados dos botões
  const [arredondado, setArredondado] = useState(true);
  const [corBotao, setCorBotao] = useState('#FF8C00');
  const [mensagem, setMensagem] = useState('Botão Nativo');

  // 1️⃣ Muda o formato (bordas)
  const handleHighlightPress = () => {
    setArredondado(!arredondado);
  };

  // 2️⃣ Muda a cor do gradiente
  const handleOpacityPress = () => {
    setCorBotao(corBotao === '#FF8C00' ? '#4A00E0' : '#FF8C00');
  };

  // 3️⃣ Faz algo aleatório
  const handleNativePress = () => {
    const acoes = [
      '🔥 Você é incrível!',
      '🎉 Parabéns!',
      '😎 Suave na nave!',
      '🚀 Voando baixo!',
      '🍕 Bora comer pizza!',
    ];
    const aleatoria = acoes[Math.floor(Math.random() * acoes.length)];
    setMensagem(aleatoria);
  };

  const handleLongPress = (tipo) => Alert.alert('Toque longo', `Você segurou o botão ${tipo}!`);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Desafio dos Botões 🔘</Text>

      {/* 1️⃣ TouchableHighlight (muda o formato) */}
      <TouchableHighlight
        style={[
          styles.botao,
          {
            backgroundColor: '#4CAF50',
            borderRadius: arredondado ? 50 : 5,
          },
        ]}
        underlayColor="#2E7D32"
        onPress={handleHighlightPress}
        onLongPress={() => handleLongPress('TouchableHighlight')}
      >
        <Text style={styles.textoBotao}>
          {arredondado ? 'Botão Arredondado' : 'Botão Quadrado'}
        </Text>
      </TouchableHighlight>

      {/* 2️⃣ TouchableOpacity (muda cor e tem ícone + gradiente) */}
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={handleOpacityPress}
        onLongPress={() => handleLongPress('TouchableOpacity')}
      >
        <LinearGradient
          colors={[corBotao, '#FF3D00']}
          style={styles.gradienteBotao}
        >
          <Image
            source={{ uri: 'https://cdn-icons-png.flaticon.com/512/1828/1828817.png' }}
            style={styles.icone}
          />
          <Text style={styles.textoBotao}>Botão Colorido</Text>
        </LinearGradient>
      </TouchableOpacity>

      {/* 3️⃣ TouchableNativeFeedback (faz algo aleatório) */}
      <TouchableNativeFeedback
        onPress={handleNativePress}
        onLongPress={() => handleLongPress('TouchableNativeFeedback')}
        background={TouchableNativeFeedback.Ripple('#1976D2', true)}
      >
        <View style={[styles.botao, { backgroundColor: '#2196F3' }]}>
          <Text style={styles.textoBotao}>{mensagem}</Text>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
}

// 🎨 Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  botao: {
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    elevation: 5,
  },
  textoBotao: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '600',
  },
  gradienteBotao: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 6,
  },
  icone: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
});
