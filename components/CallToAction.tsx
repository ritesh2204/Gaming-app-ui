import { Colors } from '@/constants/Colors';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

const CallToAction = () => {
    return (
        <View style={styles.container}>
            <Image
                source={require('../assets/images/girl.png')}
                style={styles.image}
            />
            <View style={styles.textContainer}>
                <Text style={styles.title}>GET A NEW ID INSTANTLY</Text>
                <Text style={styles.subtitle}>OVER WHATSAPP</Text>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>GET ID NOW</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 15
    },
    image: {
        width: 129,
        height: 149,
        resizeMode: 'contain',
    },
    textContainer: {
        alignItems: 'center',
    },
    title: {
        fontSize: 10,
        fontWeight: 'bold',
        color: Colors.oddpink,
    },
    subtitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: Colors.white,
        marginBottom: 20,
    },
    button: {
        backgroundColor: Colors.info,
        paddingHorizontal: 30,
        paddingVertical: 10,
        borderRadius: 4,
    },
    buttonText: {
        color: Colors.white,
        fontSize: 10,
        fontWeight: 'bold',
    },
});

export default CallToAction;