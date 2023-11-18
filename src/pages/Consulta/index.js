import React, { useState, useEffect  } from 'react';
import { View, TextInput, SafeAreaView, Text, FlatList } from 'react-native';
import { Ionicons } from 'react-native-vector-icons';
import styles from './styles';
import { useNavigation } from "@react-navigation/native";
import { DatabaseConnection } from '../dataColab/databacolab'
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable';

const Consulta = () => {
  const navigation = useNavigation();
  const [funcionariosData, setFuncionariosData] = useState([])
  const [text, setText] = useState('');

  useEffect(() => {
    consultarBancoDeDados();
  }, [])

  const consultarBancoDeDados = () => {
    const db = DatabaseConnection.getConnection();
    db.transaction((tx) => {
        tx.executeSql('SELECT * from colaboradores', [], (_, { rows }) => {
            const dadosFuncionarios = [];
            for (let i = 0; i <rows.length; i++) {
                dadosFuncionarios.push(rows.item(i));
            }
            setFuncionariosData(dadosFuncionarios)
        })
    })
  }

  

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.itemText}>Nome: {item.nome}</Text>
      <Text style={styles.itemText}>Cargo: {item.cargo}</Text>
      <Text style={styles.itemText}>CPF: {item.cpf}</Text>
      <Text style={styles.itemText}>RG: {item.rg}</Text>
      <Text style={styles.itemText}>Naturalidade: {item.naturalidade}</Text>
      <Text style={styles.itemText}>EstadoCivil: {item.estadoCivil}</Text>
      <Text style={styles.itemText}>Sexo: {item.sexo}</Text>
      <Text style={styles.itemText}>Telefone: {item.telefone}</Text>
      <Text style={styles.itemText}>Contato: {item.telefone}</Text>
      <Text style={styles.itemText}>Data de nascimento: {item.dataNascimento}</Text>
      <Text style={styles.itemText}>data de Admissao: {item.dataAdmissao}</Text>
      <Text style={styles.itemText}>Endereço: {item.endereco}</Text>
      <Text style={styles.itemText}>Pis: {item.pis}</Text>
      <Text style={styles.itemText}>Carteira: {item.serieCarteira}</Text>

      
    </View>
  );

  

  const handleSearchPress = () => {
    // Adicione a lógica de pesquisa aqui usando o valor em 'text'
    console.log('Pesquisar:', text);
    // Por exemplo, você pode filtrar os dados com base no texto e atualizar o estado da FlatList
  };

  return (
    <SafeAreaView style={styles.view}>

      <Animatable.View animation="fadeInDown" delay={200} style={styles.pesquisar}>
            <Ionicons 
            name="chevron-back"
            size={40}
            color="#2D063B"
            onPress={() => {navigation.navigate("Dashboard")}}
          />
      
        <TextInput
          style={styles.input}
          placeholder="Pesquisar"
          autoCapitalize="none"
          autoCorrect={false}
          value={text}
          onChangeText={(value) => setText(value)}
          
        />
        <Ionicons name="search" size={38} color="#2D063B" onPress={handleSearchPress} />
      </Animatable.View>

      <Animatable.View animation="fadeInLeft" delay={250} style={styles.containerDados}>
      <FlatList
        data={funcionariosData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()} // Use toString() para garantir que a chave seja uma string
        />
    </Animatable.View>
    <Animatable.View animation="fadeInUp" delay={300} style={styles.lixeira}>

    <MaterialIcons
      name="delete"
      size={60}
      color="#2D063B"
      style={styles.lixeiraIcon}
      onPress={() => handleDeleteItem(item.id)}     
       />
    <FontAwesome
      name="plus"
      size={60}
      color="#2D063B"
      style={styles.containerPlus}
      onPress={() => {navigation.navigate("RegistrarColab")}}

    />
  </Animatable.View>

</SafeAreaView>
    
    
  );
};

export default Consulta;
