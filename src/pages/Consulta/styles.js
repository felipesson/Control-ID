import { StyleSheet, StatusBar } from "react-native";

const styles = StyleSheet.create({
  container: {//container do botão voltar página
    backgroundColor:'#FCFAD4'
  },
  view: {// view da exibição dos dados
    marginTop: StatusBar.currentHeight,
    backgroundColor:'#FCFAD4',
    flex: 1

  },
  pesquisar: {//barra de pesquisa
    flexDirection: "row",
    backgroundColor:'#FCFAD4',
    marginTop:'3%',
    maxWidth:'98%',
  },
  containerDados:{// container dos dados
      flex: 1,
      padding: 20,
      marginTop:'10%',

  },
  input: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 25,
    fontSize: 20,
    paddingHorizontal: 20,
    
  },

  item: {
    backgroundColor: '#2D063B',
    padding: 16,
    marginBottom: '5%',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
  },
  itemText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  lixeira:{
    flexDirection: 'row',
    justifyContent: 'space-between',
   // alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginLeft:'5%',
    marginRight:'5%',
  },
  });
  

export default styles;