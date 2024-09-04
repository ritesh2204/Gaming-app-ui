import React from 'react';
import { StyleSheet, View, Text, Image } from "react-native";
import { Colors } from "@/constants/Colors";
import SportsCategoryButton from "./SportsCategoryButton";

const Inplay: React.FC = () => {
    const footballIcon = require('../assets/images/football.png');
    const cricketIcon = require('../assets/images/cricket.png');
    const tennisIcon = require('../assets/images/tennis.png');

    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <Image source={require('../assets/images/inplay.png')} style={styles.inplayIcon} />
                <Text style={styles.inplayText}>Inplay</Text>
            </View>
            <View style={styles.row}>
                <SportsCategoryButton label="Cricket" icon={cricketIcon} />
                <SportsCategoryButton label="Football" icon={footballIcon} />
                <SportsCategoryButton label="Tennis" icon={tennisIcon} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop:14,
        marginBottom: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: Colors.secondary,
        paddingVertical: 5,
        paddingHorizontal: 5,
        borderRadius: 7.42,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    inplayIcon: {
        width: 15,
        height: 15,
        marginRight: 5,
        resizeMode: 'contain',
    },
    inplayText: {
        color: "#fff",
        fontWeight: '500', 
        fontSize: 12,
    },
});

export default Inplay;

