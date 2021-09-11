import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    formContext: {
        flex: 1,
        backgroundColor: "#ffffff",
        marginTop: 10,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        alignItems: "center",
        paddingTop: 30
    },
    form: {
        width: "100%",
    },
    formLabel: {
        color: "#000000",
        fontSize: 18,
        paddingLeft: 20,

    },
    input: {
        width: "90%",
        borderRadius: 50,
        backgroundColor: "#f6f6f6",
        height: 40,
        margin: 12,
        paddingLeft: 10,
    },
    formPicker: {
        width: "90%",
        borderRadius: 50,
        backgroundColor: "#f6f6f6",
        height: 40,
        margin: 12,
        paddingLeft: 10,
    },
    buttonAbrirConta: {
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",
        width: "90%",
        backgroundColor: "#FF0043",
        paddingTop: 10,
        paddingBottom: 10,
        marginLeft: 10,
        marginTop: 20,
    },
    textButtonAbrirConta: {
        fontSize: 20,
        color: "#ffffff",
    },
    buttonResetar: {
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",
        width: "90%",
        backgroundColor: "blue",
        paddingTop: 10,
        paddingBottom: 10,
        marginLeft: 10,
        marginTop: 10,
    },
    textButtonResetar: {
        fontSize: 20,
        color: "#ffffff",
    },
})

export default styles