import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, SafeAreaView, Text, Alert } from 'react-native';
import { Ionicons, MaterialIcons } from 'react-native-vector-icons';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import { DatabaseConnection } from '../dataColab/databacolab';
import * as Animatable from 'react-native-animatable';

const ExcluirColaborador = () => {
  const navigation = useNavigation();
  const [inputProductId, setInputProductId] = useState('');
  const db = DatabaseConnection.getConnection();

  const handleDelete = () => {
    const parsedId = parseInt(inputProductId, 10);

    if (isNaN(parsedId)) {
      Alert.alert('Erro', 'Por favor, insira um ID de colaborador válido.');
      return;
    }

    confirmDelete(parsedId);
  };

  const confirmDelete = (id) => {
    Alert.alert(
      'Confirmar Exclusão',
      'Tem certeza de que deseja excluir este colaborador?',
      [
        {
          text: 'Cancelar',
          style: 'cancel',
        },
        {
          text: 'Excluir',
          onPress: () => deleteProduct(id),
        },
      ]
    );
  };

  const deleteProduct = (id) => {
    db.transaction((tx) => {
      tx.executeSql(
        'DELETE FROM colaboradores WHERE id=?',
        [id],
        (tx, results) => {
          if (results.rowsAffected > 0) {
            Alert.alert('Sucesso', 'Colaborador excluído com sucesso!', [
              {
                text: 'OK',
                onPress: () => {
                  setInputProductId('');
                },
              },
            ]);
          } else {
            Alert.alert('Erro', 'Nenhum colaborador encontrado com o ID fornecido.');
          }
        }
      );
    });
  };

  return (
    <View style={styles.container}>

        <Animatable.View animation="fadeInLeft" delay={200} style={styles.deletar}>
         <Text style={styles.title}> Delete os dados inserindo o ID! </Text>
         </Animatable.View>
    <SafeAreaView style={styles.container2}>

      
      <Animatable.View animation="fadeInDown" delay={300} style={styles.pesquisar}>
      <Ionicons
        name="chevron-back"
        size={50}
        color="#2D063B"
        onPress={() => navigation.goBack()}
        style={{ opacity: 1 }} // Defina a opacidade inicial
        activeOpacity={0.5}   // Define a opacidade durante o pressionamento
      />
        <TextInput
          style={styles.input}
          placeholder="ID do Colaborador"
          keyboardType="numeric"
          autoCorrect={false}
          value={inputProductId}
          onChangeText={(inputText) => setInputProductId(inputText)}
        />
        <TouchableOpacity style={styles.iconButton} onPress={handleDelete}>
          <MaterialIcons name="delete" size={51} color="#2D063B" />
        </TouchableOpacity>
      </Animatable.View>
    </SafeAreaView>
    </View>
  );
};

export default ExcluirColaborador;
