import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    
  container: {// view da exibição dos dados
    backgroundColor:'#FCFAD4',
    flex: 1,

  },
  container2:{
    backgroundColor:'#FCFAD4',
    flex: 1,
    marginTop:'20%',
   // position:'absolute',


  },
  deletar:{
    marginTop:'40%',
    marginBottom:'40%',
    alignSelf:'center'

  },
  title:{
    fontSize:28,
    fontWeight:'bold',
    color:'#2D063B'
    
  },
  pesquisar: {//barra de pesquisa
    flexDirection: "row",
    backgroundColor:'#FCFAD4',
    //marginTop:'0%',
    maxWidth:'98%',
    alignSelf:'center'

  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: '#2D063B',
    borderRadius: 8,
    paddingHorizontal: 12,
    marginRight: 8,
    alignSelf:'center'

  },
  iconButton: {
   // padding: 10,
    alignItems: 'center',
    alignSelf:'center'
  },

 
});

export default styles;
