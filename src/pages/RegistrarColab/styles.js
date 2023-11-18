import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:'#FCFAD4'
  
    },
    space:{
      marginTop:'30%',
      marginBottom:'18%',
    },
    textSpace:{
      fontSize:30,
      fontWeight:'bold',
      color:'#2D063B',
      paddingHorizontal: 16,

      
    },
    icone:{
      color:'#2D063B',
      marginTop: '10%',  // Ajuste de margem
    },
    pesquisar:{
     // flexDirection: 'row',
      marginTop:'3%',
      position: 'absolute',  // Posicionamento absoluto
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1,
    },
    form:{
      paddingHorizontal: 16,

    },
    input: {
      
      color:'#2D063B',
      height: 40,
      fontSize: 15,
      borderColor:'#2D063B',
      borderWidth: 1,
      borderRadius: 10,
      marginBottom: 16,
      paddingHorizontal: 8,
      backgroundColor:'#fff'
    },
    registrarButton:{
      backgroundColor: '#2D063B',
      borderRadius:20,
      marginTop:'5%',
      alignItems:'center',
      justifyContent:'center',
      alignSelf:'center',
      height:50,
      width:'100%',
      marginBottom: '5%',


    },
    registrarText:{
      color:'#FFF',
      textAlign:'center',
      fontWeight:'bold',
      fontSize:20
  
    }
  });

export default styles