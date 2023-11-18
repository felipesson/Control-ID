import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, TextInput,ScrollView,Text } from 'react-native';
import * as Animatable from 'react-native-animatable';
import styles from './styles';
import { useNavigation } from "@react-navigation/native";
import {Ionicons} from '@expo/vector-icons';
import { DatabaseConnection } from '../dataColab/databacolab'

export default function RegistrarColab() {
  
  const [nome, setNome] = useState('');
  const [cargo, setCargo] = useState('');
  const [cpf, setCPF] = useState('');
  const [rg, setRG] = useState('');
  const [naturalidade, setNaturalidade] = useState('');
  const [estadoCivil, setestadoCivil] = useState('');
  const [sexo, setSexo] = useState('');
  const [telefone, setTelefone] = useState('');
  const [contato, setContato] = useState('');
  const [dataNascimento, setdataNascimento] = useState('');
  const [dataAdmissao, setdataAdmissao] = useState('');
  const [endereco, setEndereco] = useState('');
  const [pis, setPis] = useState('');
  const [numeroCarteira, setnumeroCarteira] = useState('');
  const [serieCarteira, setserieCarteira] = useState('');
  const [id, setId] = useState('');
  
  const navigation = useNavigation();

  useEffect(() => {
    const db = DatabaseConnection.getConnection();
    db.transaction((tx) => {
      tx.executeSql(
        'CREATE TABLE IF NOT EXISTS colaboradores (id PRIMARY KEY AUTOINCREMENT, cpf TEXT UNIQUE, nome TEXT NOT NULL, cargo TEXT, rg TEXT, naturalidade TEXT, estadoCivil TEXT, sexo TEXT, telefone TEXT, contato TEXT, dataNascimento TEXT, dataAdmissao TEXT, endereco TEXT, pis TEXT, serieCarteira TEXT)',
        [],
        () => {
          console.log('Tabela "colaboradores" criada com sucesso.');
        },
        (error) => {
          console.error('Erro ao criar a tabela "colaboradores":', error);
        }
      );
    });
  }, []);
  


 const handleRegistro = () => {
  
  const db = DatabaseConnection.getConnection();

  db.transaction((tx) => {
    tx.executeSql(
      'INSERT INTO colaboradores (cpf, nome, cargo, rg, naturalidade, estadoCivil, sexo, telefone, contato, dataNascimento, dataAdmissao, endereco, pis, serieCarteira) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
      [cpf, nome, cargo, rg, naturalidade, estadoCivil, sexo, telefone, contato, dataNascimento, dataAdmissao, endereco, pis, serieCarteira],
      () => {
          console.log('funcionário cadastrado com sucesso!');
          //setCadastroSucesso(true);
          setTimeout(() => {
              //setCadastroSucesso(false);
              navigation.navigate('Dashboard');
          }, 3000);
      },
      (_, error) => {
          console.error('Erro ao inserir o usuário', error);
      }
  );
  
  })
  };




  return (
      
    <ScrollView style={styles.container}>
            <View style={styles.pesquisar}>
                <Ionicons style={styles.icone}
                name="chevron-back"
                size={40}
                color="#2D063B"
                onPress={() => {navigation.navigate("Dashboard")}}
              />
            </View>
      <Animatable.View animation="fadeInLeft" delay={400} style={styles.space}>
        <Text style={styles.textSpace}>Digite os dados para cadastrar o colaborador!</Text>
      </Animatable.View> 
      <Animatable.View animation="fadeInLeft" delay={450} style={styles.form}>
      <TextInput
        style={styles.input}
        placeholder="Nome completo"
        value={nome}
        onChangeText={text => setNome(text)}
      />
       
      <TextInput
        style={styles.input}
        placeholder="Cargo"
        value={cargo}
        onChangeText={text => setCargo(text)}
      />
      
      <TextInput
        style={styles.input}
        placeholder="CPF"
        value={cpf}
        onChangeText={text => setCPF(text)}
      />
       <TextInput
        style={styles.input}
        placeholder="RG"
        value={rg}
        onChangeText={text => setRG(text)}
      />
       <TextInput
        style={styles.input}
        placeholder="Naturalidade"
        value={naturalidade}
        onChangeText={text => setNaturalidade(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Estado civil"
        value={estadoCivil}
        onChangeText={text => setestadoCivil(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Sexo"
        value={sexo}
        onChangeText={text => setSexo(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Telefone"
        value={telefone}
        onChangeText={text => setTelefone(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Contato de emergência"
        value={contato}
        onChangeText={text => setContato(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Data de nascimento"
        value={dataNascimento}
        onChangeText={text => setdataNascimento(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Data de admissão"
        value={dataAdmissao}
        onChangeText={text => setdataAdmissao(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Endereço"
        value={endereco}
        onChangeText={text => setEndereco(text)}
      />
      
      
       <TextInput
        style={styles.input}
        placeholder="PIS/PASEP"
        value={pis}
        onChangeText={text => setPis(text)}
      />


       <TextInput
        style={styles.input}
        placeholder="Série da carteira de trabalho"
        value={serieCarteira}
        onChangeText={text => setserieCarteira(text)}
      />
            <View style={styles.registrarButton}>
      <TouchableOpacity>
        <Text style={styles.registrarText} onPress={handleRegistro}>Registrar</Text>
      </TouchableOpacity>
      </View>
      </Animatable.View>


    </ScrollView>
  );
}


