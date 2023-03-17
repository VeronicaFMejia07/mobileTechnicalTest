import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    containerHome:{
        marginHorizontal: 15
    },
    containerSearch:{
        flexDirection:'row',
        borderWidth: 2,
        borderRadius: 15,
        borderColor:'#FF9494',
        height: 45,
    },
    inputSearch:{
        fontSize: 17,
        width: 310,
        color: '#400D51',
        marginStart: 6,
        fontWeight: '500'
    },
    buttonSearch:{
        width: 40,
        justifyContent: 'center',
        borderRadius: 15,
        marginLeft: 15
    },
    icon:{
        alignSelf:'center'
    }

})