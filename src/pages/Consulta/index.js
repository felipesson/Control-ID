import React, { useState, useEffect } from 'react';
import { View, TextInput, TouchableOpacity, SafeAreaView, Text, FlatList, Alert } from 'react-native';
import { Ionicons } from 'react-native-vector-icons';
import styles from './styles';
import { useNavigation } from "@react-navigation/native";
import { DatabaseConnection } from '../dataColab/databacolab'
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable';

const Consulta = () => {
  const navigation = useNavigation();
  const [funcionariosData, setFuncionariosData] = useState([]);
  const [text, setText] = useState('');
  const [searchText, setSearchText] = useState('');
  const db = DatabaseConnection.getConnection();

  useEffect(() => {
    consultarBancoDeDados();
  }, [])

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.itemText}>Id: {item.id}</Text>
      <Text style={styles.itemText}>Nome: {item.nome}</Text>
      <Text style={styles.itemText}>Cargo: {item.cargo}</Text>
      <Text style={styles.itemText}>CPF: {item.cpf}</Text>
      <Text style={styles.itemText}>RG: {item.rg}</Text>
      <Text style={styles.itemText}>Naturalidade: {item.naturalidade}</Text>
      <Text style={styles.itemText}>EstadoCivil: {item.estadoCivil}</Text>
      <Text style={styles.itemText}>Sexo: {item.sexo}</Text>
      <Text style={styles.itemText}>Telefone: {item.telefone}</Text>
      <Text style={styles.itemText}>Contato: {item.contato}</Text>
      <Text style={styles.itemText}>Data de nascimento: {item.dataNascimento}</Text>
      <Text style={styles.itemText}>data de Admissao: {item.dataAdmissao}</Text>
      <Text style={styles.itemText}>Endereço: {item.endereco}</Text>
      <Text style={styles.itemText}>Pis: {item.pis}</Text>
      <Text style={styles.itemText}>Carteira: {item.serieCarteira}</Text>
    </View>
  );

  const handleSearchPress = () => {
    if (modoExclusao) {
      const parsedId = parseInt(searchText, 10);
      if (isNaN(parsedId)) {
        Alert.alert('Erro', 'Por favor, insira um ID de colaborador válido.');
        return;
      }
      const query = `SELECT * FROM colaboradores WHERE id=${parsedId}`;
      consultarBancoDeDados(query);
    } else {
      const searchTerm = searchText.trim().toLowerCase();
      const camposPesquisaveis = ['nome', 'cargo', 'cpf', 'rg', 'naturalidade', 'estadoCivil', 'sexo', 'telefone', 'contato', 'dataNascimento', 'dataAdmissao', 'endereco', 'pis', 'serieCarteira'];
      const whereClause = camposPesquisaveis.map((campo) => `LOWER(${campo}) LIKE '%${searchTerm}%'`).join(' OR ');
      const query = `SELECT * FROM colaboradores WHERE ${whereClause}`;
      consultarBancoDeDados(query);
    }
  };;

  const consultarBancoDeDados = (customQuery) => {
    const db = DatabaseConnection.getConnection();
    db.transaction((tx) => {
      const query = customQuery || 'SELECT * FROM colaboradores';
      tx.executeSql(query, [], (_, { rows }) => {
        const dadosFuncionarios = [];
        for (let i = 0; i < rows.length; i++) {
          dadosFuncionarios.push(rows.item(i));
        }
        setFuncionariosData(dadosFuncionarios);
      });
    });
  };

  

  return (
    <SafeAreaView style={styles.view}>
      <Animatable.View animation="fadeInDown" delay={200} style={styles.pesquisar}>
        <Ionicons
          name="chevron-back"
          size={40}
          color="#2D063B"
          onPress={() => { navigation.navigate("Dashboard") }}
        />
        <TextInput
          style={styles.input}
          placeholder="Pesquisar"
          autoCapitalize="none"
          autoCorrect={false}
          value={searchText}
          onChangeText={(inputText) => setSearchText(inputText)}
        />
        <Ionicons name="search" size={38} color="#2D063B" onPress={handleSearchPress} />
      </Animatable.View>

      <Animatable.View animation="fadeInLeft" delay={250} style={styles.containerDados}>
        <FlatList
          data={funcionariosData}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          extraData={funcionariosData}
        />
      </Animatable.View>

      <Animatable.View animation="fadeInUp" delay={300} style={styles.lixeira}>
        
        <FontAwesome
          name="plus"
          size={60}
          color="#2D063B"
          style={styles.containerPlus}
          onPress={() => { navigation.navigate("RegistrarColab") }}
        />
      </Animatable.View>
    </SafeAreaView>
  );
};

export default Consulta;
