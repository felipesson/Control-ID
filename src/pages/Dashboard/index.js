import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from 'react-native-vector-icons'; // Importe o Ionicons
import * as Animatable from 'react-native-animatable';

import styles from './styles';

const Dashboard = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>

            <Animatable.View animation="fadeInLeft" delay={400} style={styles.container}>

                <View style={styles.pesquisar}>
                    <Ionicons style={styles.icone}
                    name="chevron-back"
                    size={40}
                    color="#2D063B"
                    onPress={() => {navigation.navigate("Login")}}
                />
                </View>

                <View style={styles.container}>
                    <Text style={styles.heading}>Dashboard</Text>
                    <View style={styles.containerCards}>
                        <View style={styles.card}>
                            <TouchableOpacity style={styles.buttonRegister} onPress={() => navigation.navigate('Consulta')}>
                                <Text style={styles.textCard}>Consultar colaboradores</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.card1}>
                            <TouchableOpacity style={styles.buttonRegister} onPress={() => navigation.navigate('RegistrarColab')}>
                                <Text style={styles.textCard}>Cadastrar colaboradores</Text>
                            </TouchableOpacity>
                        </View>
                        
                    </View>
                </View>
            </Animatable.View>

        </View>
    );
};

export default Dashboard;
