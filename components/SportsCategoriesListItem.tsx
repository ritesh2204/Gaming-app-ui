import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, ListRenderItem } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome } from '@expo/vector-icons';
import { sportsMenus } from "../db/db"

interface MenuItem {
    id: string;
    label: string;
    tag?: string;
    isArrow?: boolean;
}
const data: MenuItem[] = sportsMenus
const SportsCategoriesListItem: React.FC = () => {
    const renderItem: ListRenderItem<MenuItem> = ({ item }) => {
        return (
            <TouchableOpacity style={styles.menuItem}>
                <View style={styles.tagWrapper}>
                    {item.tag && (
                        <LinearGradient colors={['#d4a0f6', '#9b59b6']} style={styles.tagContainer}>
                            <Text style={styles.tagText}>{item.tag}</Text>
                        </LinearGradient>
                    )}
                </View>
                <View style={styles.menuTextContainer}>
                    <Text style={styles.menuText}>{item.label}</Text>
                </View>
            </TouchableOpacity>
        );
    };
    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.scrollContainer}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingVertical: 10,
    },
    scrollContainer: {
        alignItems: 'center',
    },
    menuItem: {
        marginRight: 20,
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    menuTextContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 20,
    },
    menuText: {
        color: "#AEB3E2",
        fontSize: 12,
        fontWeight: 'medium',
        textAlign: 'center',
    },
    tagContainer: {
        paddingVertical: 2,
        paddingHorizontal: 6,
    },
    tagText: {
        color: 'white',
        fontSize: 6,
        fontWeight: 'bold',
    },
    tagWrapper: {
        height: 20,
        justifyContent: 'flex-end',
    },
});


export default SportsCategoriesListItem;
