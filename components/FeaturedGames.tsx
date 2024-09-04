import { Colors } from "@/constants/Colors";
import { View, StyleSheet, Text, Image } from "react-native";

const FeaturedGames = () => {
    return (
        <View style={styles.container}>
            <View style={styles.spaceLeft}>
                <Text style={styles.title}>Play Our</Text>
                <Text style={styles.subTitle}>Featured Games</Text>
            </View>
            <Image source={require("../assets/images/gamesBanner.png")} style={styles.bannerImage} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.secondary,
        borderRadius: 10,
        marginTop: 20,
        paddingVertical: 15
    },
    spaceLeft:{
        marginLeft: 15
    },
    title: {
        fontSize: 10,
        fontWeight: "light",
        color: Colors.white
    },
    subTitle: {
        fontSize: 22,
        fontWeight: "bold",
        color: Colors.white
    },
    bannerImage: {
        resizeMode: "contain",
        width: "100%",
        height: 230,
        marginTop: 10
    }
})

export default FeaturedGames;