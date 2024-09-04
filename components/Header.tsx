import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { Colors } from '@/constants/Colors';

const Header = () => {
    let profileImage = '../assets/images/tiger-image.png';
    return (
        <View style={styles.container}>
            <MaterialCommunityIcons name="text-search" size={30} style={styles.menuIcon} />
            <View style={styles.row}>
                <View style={styles.priceContainer}>
                    <View style={styles.balanceContainer}>
                        <Text style={styles.balanceText}>₹589.31</Text>
                        <Text style={styles.subText}>Bonus: ₹0.31</Text>
                    </View>
                    <TouchableOpacity style={styles.addButton}>
                        <FontAwesome name="plus" size={10} color={Colors.white} />
                    </TouchableOpacity>
                </View>
                <LinearGradient
                    colors={[Colors.evenblue, Colors.oddpink]}
                    style={styles.gradientBorder}
                >
                    <Image
                        source={require(profileImage)}
                        style={styles.profileImage}
                    />
                </LinearGradient>
                <View style={styles.notificationContainer}>
                    <FontAwesome name="bell" size={12} color="gray" />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: Colors.secondary,
        height: 100,
        paddingTop: 50,
        paddingHorizontal:15
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    priceContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Colors.lightRgba,
        borderRadius: 6,
        marginHorizontal: 14,
        height: 25
    },
    menuIcon: {
        color: Colors.white,
    },
    notificationContainer: {
        backgroundColor: Colors.lightRgba,
        borderRadius: 5,
        padding: 6,
        paddingVertical: 8,
        paddingHorizontal:8
    },
    balanceContainer: {
        marginHorizontal: 16,
        flexDirection: 'column',
        alignItems: 'center',
    },
    balanceText: {
        color: 'white',
        fontSize: 9,
        fontWeight: 'bold',
    },
    subText: {
        color: 'white',
        fontSize: 5,
    },
    addButton: {
        backgroundColor:Colors.info,
        padding: 8,
        borderTopRightRadius: 8,
        borderBottomRightRadius: 6,
    },
    gradientBorder: {
        width: 41,
        height: 41,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10,
    },
    profileImage: {
        width: 36,
        height: 36,
        borderRadius: 20,
    },
});

export default Header;
