import { StyleSheet, Text, View } from "react-native";
export default function Footer() {
    return (
        <View style={styles.container}>
            <Text style = {styles.footerText}>All rights reserved by SMU, 2024 ©</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: "grey",
        alignItems: "center",
        justifyContent: "center",
        width: 500,
        height: 50,
    },
    footerText: {
        fontSize: 18,
        color: 'black',
        fontWeight:"bold",
        marginRight:"20%"
    },
});
