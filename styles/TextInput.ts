import { StyleSheet } from "react-native";

const inputStyles = StyleSheet.create({
    input: {
        fontSize: 18,
        borderWidth: 1,
        paddingLeft: 10,
        marginLeft: "5%",
        marginRight: "5%",
        backgroundColor: "white",
    },
    dropbox: {
        paddingLeft: 10,
        marginLeft: "5%",
        marginRight: "5%",
        backgroundColor: "white",
        borderRadius: 0,
    },
    dropdown: {
        paddingLeft: 10,
        marginLeft: "5%",
        marginRight: "5%",
        borderRadius: 0,
        marginTop: "1.5%",
        marginBottom: "1.5%",
        backgroundColor: "white",
    },
    errorText: {
        color: "red",
        marginLeft: "5%",
        marginRight: "5%",
        marginBottom: "2.5%",
    },
    invalid: {
        borderWidth: 1,
        borderColor: "red",
    },
    valid: {
        borderWidth: 1,
        borderColor: "black",
    },
});

export default inputStyles;
