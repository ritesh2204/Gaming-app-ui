import React from 'react';
import { StyleSheet, Text, View, Image, ImageSourcePropType } from 'react-native';
import { Colors } from '@/constants/Colors';

interface SportsCategoryButtonProps {
    label: string;
    icon: ImageSourcePropType;
}

const SportsCategoryButton: React.FC<SportsCategoryButtonProps> = ({ label ,icon}) => {
    return (
        <View style={styles.container}>
            <Image source={icon} style={{ width: 8, height: 8, resizeMode: 'contain'}} />
            <Text style={styles.text}>{label}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "rgba(70, 73, 101, 0.29)",
        paddingVertical: 7,
        marginLeft: 10,
        paddingHorizontal: 10,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection:"row",
        gap: 3.62,
    },
    text: {
        color: Colors.white,
        fontSize: 8,
        fontWeight: 'medium',
    },
});

export default SportsCategoryButton;
