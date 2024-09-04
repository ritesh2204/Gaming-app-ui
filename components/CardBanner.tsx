import { Colors } from '@/constants/Colors';
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const CardBanner = () => {
    return (
        <View style={styles.container}>
            <Image
                source={require('../assets/images/aviator.png')}
                style={styles.backgroundImage}
            />
            <View style={styles.cardBottom}>
                <View style={styles.cardContent}>
                    <Image
                        source={require('../assets/images/aviator.png')}
                        style={styles.logo}
                    />
                    <View style={styles.textContainer}>
                        <Text style={styles.title}>Aviator</Text>
                        <Text style={styles.subtitle}>Instant Game, Instant Win!</Text>
                    </View>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Play Now</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop:15,
        padding: 6,
        borderRadius: 8,
        overflow: 'hidden',
        backgroundColor: Colors.secondary,
    },
    backgroundImage: {
        width: '100%',
        height: 180,
        justifyContent: 'flex-end',
        borderRadius: 10,
    },
    cardBottom: {
        paddingTop: 5,
    },
    cardContent: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between', 
    },
    logo: {
        width: 33,
        height: 33,
        marginRight: 12,
    },
    textContainer: {
        flex: 1, 
    },
    title: {
        color: Colors.white,
        fontSize: 16,
        fontWeight: 'bold',
    },
    subtitle: {
        color: Colors.lightGray,
        fontSize: 7,
    },
    button: {
        backgroundColor: '#007AFF',
        borderRadius: 4,
        paddingVertical: 10,
        paddingHorizontal: 30,
        alignItems: 'center',
    },
    buttonText: {
        color: Colors.white,
        fontSize: 10,
        fontWeight: 'bold',
    },
});

export default CardBanner;
