import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import * as Animatable from 'react-native-animatable'
import { useNavigation } from "@react-navigation/native";
import logoImage from '../../../imagens/logo.png';
import styles from "./styles";

export default function Welcome() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.containerLogo}>
                <Animatable.Image
                    animation="flipInX"
                    source={logoImage}                    
                    resizeMode="contain"
                    style={styles.logo}
                />
            </View>

            <Animatable.View animation="fadeInUp" delay={600} style={styles.containerForm}>
                
                <Text style={styles.title}>Tenha todas as informações na palma da mão!</Text>
                <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('Login')}
            >
                <Text style={styles.buttonText}>Entrar</Text>
            </TouchableOpacity>
            </Animatable.View>

           
        </View>
        
    );
}

