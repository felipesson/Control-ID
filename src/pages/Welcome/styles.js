import { StyleSheet } from "react-native";

const styles=StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#FCFAD4',

    },
    logo: {
        width:'90%',
    },
    containerLogo: {
        flex:3,
        justifyContent:'center',
        alignItems:'center',
    },
    containerForm:{
        flex:1,
        backgroundColor:'#fff',
        borderTopLeftRadius:25,
        borderTopRightRadius:25,
        paddingStart:'5%',
        paddingEnd:'5%',
    },
    title:{
        fontSize: 25,
        fontWeight:'bold',
        marginTop: 12,
        marginBottom: 12,
        color:'#2D063B'
    },
    texto:{
        color:'#a1a1a1',
    },
    button: {
        backgroundColor:'#2D063B',
        position:'absolute',
        justifyContent:'center',
        alignItems:'center',
        bottom:'15%',
        alignSelf:'center',
        width:'60%',
        paddingVertical: 8,
        borderRadius: 10,
    },
    buttonText: {
        fontSize:18,
        color:'#fff',
        fontWeight:'900'
    },
});

export default styles;