import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:'#FCFAD4'
    },
    icone:{
      color:'#2D063B',
      marginTop: '10%',  // Ajuste de margem
    },
    pesquisar:{
     // flexDirection: 'row',
      marginTop:'3%',
      position: 'absolute',  // Posicionamento absoluto
      left: 0,
      right: 0,
      zIndex: 1,
    },
    heading: {  
      color:'#2D063B',  
      marginTop: '35%',
      padding:10,
      fontSize: 40,
      fontWeight: 'bold',
      marginBottom: '15%',
      alignSelf:'center',
    },
    containerCards:{
      marginTop:'15%' ,  
      padding:10,         
    },
    card: {
      backgroundColor: '#2D063B',
      padding: 25,
      marginBottom: 16,
      borderRadius: 8,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.3,
      shadowRadius: 4,
      elevation: 4,
      
    },
    card1:{
      backgroundColor: '#2D063B',
      padding: 25,
      marginBottom: 16,
      borderRadius: 8,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.3,
      shadowRadius: 4,
      elevation: 4,
      marginTop:'15%'
    },
    textCard:{
      color:'#fff',
      fontWeight:'bold'
    },

  })

  export default styles