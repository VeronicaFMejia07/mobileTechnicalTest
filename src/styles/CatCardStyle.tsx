import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    containerCard:{
        backgroundColor: 'white',
        height: 430,
        borderWidth: 2,
        borderRadius: 15,
        marginVertical: 15,
        paddingVertical: 15,
        borderColor: '#FF8787'
    },
    containerRowOne:{
        flexDirection: 'row',
        display:'flex',
        marginHorizontal: 20,
        marginTop: 8,
        justifyContent: 'space-between'
    },
    name:{
        fontSize: 20,
        color:'#400D51',
        fontWeight:'bold'
    },
    buttonMore:{
        width: 90,
        height: 30,
        justifyContent: 'center',
        backgroundColor: '#FF9494',
        borderColor: '#FF9494',
        borderWidth: 2,
        borderRadius: 15
    },
    seeMore:{
        fontSize: 20,
        fontWeight:'600',
        color:'#400D51',
        alignSelf: 'center'
    },
    containerImage:{
        height: 300,
        marginVertical: 15,
        marginHorizontal: 15,
    },
    image:{
        flex: 1,
        borderRadius: 15
    },
    containerRowTwo:{
        flexDirection: 'row',
        display:'flex',
        marginHorizontal: 20,
        justifyContent: 'space-between',
    },
    country:{
        fontSize: 18,
        color:'#400D51',
        fontWeight: '600'
    },
    intelligence:{
        fontSize: 18,
        color:'#400D51',
        fontWeight: '600'
    }
});