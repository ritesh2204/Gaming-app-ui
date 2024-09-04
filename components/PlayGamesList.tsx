import { Colors } from "@/constants/Colors";
import { games } from "@/db/db";
import { Text, View, StyleSheet, ImageSourcePropType, FlatList, ListRenderItem, Image, TouchableOpacity } from "react-native";

interface MenuItem {
    id: string;
    title: string;
    image: ImageSourcePropType;
}
const data: MenuItem[] = games
const PlayGamesList = () => {
    const renderItem: ListRenderItem<MenuItem> = ({ item }) => {
        return (
            <View style={styles.cardContainer}>
                <Image source={item.image} style={styles.cardImage} />
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Play</Text>
                </TouchableOpacity>
            </View>
        );
    };
    return (
        <View style={styles.container}>
            <View style={styles.spaceLeft}>
                <Text style={styles.title}>Let's Play</Text>
                <Text style={styles.subTitle}>E-Sports</Text>
            </View>
            <View style={styles.cardContainer}>
                <FlatList
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                // contentContainerStyle={styles.scrollContainer}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 15,
        backgroundColor: Colors.secondary,
        borderRadius: 10,
        paddingVertical: 10
    },
    spaceLeft: {
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
    cardContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        marginVertical: 10
    },
    cardImage: {
        resizeMode: "contain",
        width: 95,
        height: 95,
        marginHorizontal: 10,
        borderRadius: 5
    },
    button: {
        marginTop:10,
        backgroundColor: Colors.info,
        borderRadius: 4,
        paddingVertical: 5,
        paddingHorizontal: 25,
        alignItems: 'center',
    },
    buttonText: {
        color: Colors.white,
        fontSize: 10,
        fontWeight: 'bold',
    },
})

export default PlayGamesList;