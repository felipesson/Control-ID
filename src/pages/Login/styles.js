import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FCFAD4',
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
      containerBemvindo:{
        marginTop:'40%',
        marginBottom:'30%',
        marginStart:'5%'
        
      },
      title:{
        fontSize:35,
        fontWeight:'bold',
        color:'#2D063B'
      },
      containerForm:{ 
        backgroundColor:'#fff',
        flex:1,
        borderTopLeftRadius:25,
        borderTopRightRadius:25,
        paddingStart:'5%',
        paddingEnd:'5%'
      },
      inputLogin:{
        fontSize:20,
        fontWeight:'bold',
        marginTop:20,
        borderBottomWidth:1,
        height:50,
        marginBottom:16,
        
      },
      inputSenha:{
        fontWeight:'bold',
        width:'90%',
        fontSize:20,
  
      },
      buttonAcessar:{
        backgroundColor: '#2D063B',
        borderRadius:10,
        paddingVertical:8,
        marginTop:20,
        alignItems:'center',
        justifyContent:'center',
        width:'100%'
      },
      buttonTextAcessar:{
        color:'#Fff',
        fontWeight:'900',
        fontSize:18
  
      },
      buttonRegister:{
        marginTop:14,
        alignSelf:'center',
        color:'#2D063B'
      },
      buttonTextRegister:{
        color:'#a1a1a1',
        textDecorationLine: 'underline'
      },
      eyeContainer:{
        flexDirection:'row',
        with:'100%',
        fontSize:20,
        fontWeight:'bold',
        marginTop:20,
        borderBottomWidth:1,
        height:50,
        marginBottom:16,
       // backgroundColor:'black'
      },
      eye:{
       // backgroundColor:'red',
        width:'13%',
        height:50,
        justifyContent:'center',
        alignItems:'center'
      },
      errorMessage: {
        fontSize: 12,
        color:"red",
        fontWeight: "bold",
        justifyContent:'flex-start'
      }

})

export default styles