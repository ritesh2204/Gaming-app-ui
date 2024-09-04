import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Colors } from '@/constants/Colors';

const Footer = () => {
    return (
        <View style={styles.footer}>
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Casino</Text>
                <View style={styles.linkContainer}>
                    {['Casino Home', 'Slots', 'Live Casino', 'New Releases', 'Recommended', 'Table Game', 'BlackJack', 'Roulette', 'Baccarat'].map((item, index) => (
                        <Text key={index} style={styles.linkText}>{item}</Text>
                    ))}
                </View>
            </View>
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Sports</Text>
                <View style={styles.linkContainer}>
                    {['Sports Home', 'Live', 'Rules', 'Sports Betting'].map((item, index) => (
                        <Text key={index} style={styles.linkText}>{item}</Text>
                    ))}
                </View>
            </View>
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>About Us</Text>
                <View style={styles.linkContainer}>
                    {['News', 'Work with us', 'Business Contacts', 'Help Desk', 'Verify Representative'].map((item, index) => (
                        <TouchableOpacity key={index} style={styles.linkWrapper}>
                            <Text style={styles.linkText}>{item}</Text>
                            <FontAwesome name="external-link" size={12} color={"#828FA4"} style={styles.linkIcon} />
                        </TouchableOpacity>
                    ))}
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    footer: {
        padding: 20,
        paddingBottom: 40,
    },
    section: {
        marginBottom: 20,
    },
    sectionTitle: {
        color: "#C0CCDF",
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 10,
        textAlign: 'center',
    },
    linkContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    linkWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 10,
    },
    linkText: {
        color: "#828FA4",
        fontSize: 12,
        marginHorizontal: 8,
        lineHeight: 28
    },
    linkIcon: {
        marginLeft: 0,
    },
    paymentContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        flexWrap: 'wrap',
        marginTop: 10,
    },
    paymentIcon: {
        width: 50,
        height: 25,
        marginHorizontal: 10,
        marginVertical: 5,
        resizeMode: 'contain',
    },
});

export default Footer;
