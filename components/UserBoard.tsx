import { Colors } from '@/constants/Colors';
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';

const UserBoard = () => {
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.welcomeText}>Welcome, Ritesh</Text>
                <Text style={styles.balanceText}>5000.00</Text>
                <Text style={styles.exposureText}>EXPOSURE: <Text style={{color: Colors.white, fontSize: 10}}>2000</Text></Text>
            </View>
                <View style={styles.buttonsContainer}>
                <TouchableOpacity style={styles.button}>
                    <Image source={require('../assets/images/deposit.png')} style={styles.icon}/>
                    <Text style={styles.buttonText}>Deposit</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button}>
                    <Image source={require('../assets/images/withdrawl.png')} style={styles.icon}/>
                    <Text style={styles.buttonText}>Withdrawl</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button}>
                    <Image source={require('../assets/images/claimBonus.png')} style={styles.icon}/>
                    <Text style={styles.buttonText}>Claim Bonus</Text>
                </TouchableOpacity>
                </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop:10,
        backgroundColor: Colors.secondary,
        paddingVertical: 12,
        paddingHorizontal: 12,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    welcomeText: {
        color: '#fff',
        fontSize: 12,
    },
    balanceText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    exposureText: {
        color: '#f54242',
        fontSize: 8,
    },
    icon:{
        width: 30,
        height: 30,
        marginBottom:2,
        resizeMode: 'contain',
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    button: {
        backgroundColor: "rgba(70, 73, 101, 0.29)",
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderRadius: 3,
        alignItems: 'center',
        marginHorizontal: 6
    },
    buttonText: {
        color: Colors.white,
        fontSize: 6,
    },
});

export default UserBoard;
