import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Colors } from '@/constants/Colors';

const DownloadAppBanner = () => {
    return (
        <View style={styles.container}>
            <LinearGradient
                colors={['#FF78FF', '#833ab4']}
                style={styles.gradient}
            >
                <View style={styles.contentContainer}>
                    <View style={styles.imageContainer}>
                        <Image
                            source={require('../assets/images/laptop.png')}
                            style={styles.mainImage}
                            resizeMode="contain"
                        />
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={styles.title}>DOWNLOAD{"\n"}OUR APP</Text>
                    </View>
                </View>
            </LinearGradient>
            <View style={styles.footerContainer}>
                <View style={styles.footerContent}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Image
                        source={require('../assets/images/volrant.png')}
                        style={styles.footerLogo}
                        resizeMode="contain"
                    />
                    <View style={styles.footerTextContainer}>
                        <Text style={styles.footerTitle}>WINTOO</Text>
                        <Text style={styles.footerSubtitle}>Explore More Features</Text>
                    </View>
                    </View>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Get App</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    gradient: {
        marginTop: 35,
        height: 100,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    contentContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    imageContainer: {
        flex: 1,
    },
    mainImage: {
        width: 200,
        height: 132,
        marginBottom: 30,
    },
    textContainer: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    title: {
        color: Colors.white,
        fontSize: 26,
        fontWeight: 'bold',
    },
    button: {
        marginTop: 10,
        backgroundColor: Colors.info,
        paddingHorizontal: 40,
        paddingVertical: 10,
        borderRadius: 5,
    },
    buttonText: {
        color: '#fff',
        fontSize: 10,
    },
    footerContainer: {
        padding: 10,
        backgroundColor: Colors.secondary,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10
    },
    footerContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    footerLogo: {
        width: 33,
        height: 33,
    },
    footerTextContainer: {
        marginLeft: 10,
    },
    footerTitle: {
        color: Colors.white,
        fontSize: 16,
        fontWeight: 'bold',
    },
    footerSubtitle: {
        color: '#ccc',
        fontSize: 6,
    },
});

export default DownloadAppBanner;
