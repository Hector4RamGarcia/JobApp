import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet } from 'react-native';

const GradientBackground = ({ children, style }: { children: React.ReactNode, style: any }) => {
  return (
    <LinearGradient
      colors={['#5BC4F1', '#1D71B8']} // Colores del gradiente
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={[styles.gradient, style]} // Permitir la combinación de estilos
    >
      {children}
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
});

export default GradientBackground;
