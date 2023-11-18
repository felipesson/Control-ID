import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:  "#FCFAD4", 
    },
    containerBemvindo: {
        
        marginTop:'30%',
        marginBottom:'30%',
        marginStart:'5%'
    },
    containerForm: {
        backgroundColor: "#ffff",
        flex: 2,
        width: "100%",
        paddingStart:'5%',
        paddingEnd:'5%',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
    },
    title: {
        fontSize: 35,
        fontWeight: 'bold',
        color: '#2D063B', 
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
        color:'#2D063B',
        fontWeight:'bold',
        width:'90%',
        fontSize:20,
      },
    buttonAcessar: {
        backgroundColor: '#2D063B',
        borderRadius:4,
        paddingVertical:8,
        marginTop:18,
        alignItems:'center',
        justifyContent:'center',
        width:'100%'
    },
    buttonTextAcessar: {
        color:'#Fff',
        fontWeight:'900',
        fontSize:18
    },
    buttonGoLogin:{
        marginTop:14,
        alignSelf:'center',
        color:'#2D063B'
    },
    buttonTextGoLogin:{
        color:'#a1a1a1'
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
       //backgroundColor:'black'
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