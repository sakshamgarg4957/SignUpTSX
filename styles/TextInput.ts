import { StyleSheet } from "react-native";

const inputStyles = StyleSheet.create({
    input: {
        fontSize: 18,
        paddingLeft: 10,
    },
    box: {
        borderWidth: 1,
        marginLeft: "5%",
        marginRight: "5%",
        backgroundColor: "white",
        display: "flex",
        flexDirection: "row",
    },
    dropbox: {
        paddingLeft: 10,
        marginRight: "5%",
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
    iconBox: {
        height: "100%",
        borderRightWidth: 1,
        width: 50,
        // backgroundColor: "#ECECEC",
        paddingTop: 5,
    },
    icon: {
        alignSelf: "center",
    },
});

export default inputStyles;
