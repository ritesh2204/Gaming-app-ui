import { Colors } from '@/constants/Colors';
import React from 'react';
import { View, Text, Image, FlatList, StyleSheet, ImageSourcePropType } from 'react-native';

interface GameItem {
    id: string;
    title: string;
    games: number;
    image: ImageSourcePropType;
}
const data: GameItem[] = [
    { id: '1', title: 'Live Casino', games: 1254, image: require('../assets/images/teen-patti.png') },
    { id: '2', title: 'Roulette', games: 124, image: require('../assets/images/teen-patti.png') },
    { id: '3', title: 'Teen Patti', games: 545, image: require('../assets/images/teen-patti.png') },
    { id: '4', title: 'Teen Patti', games: 545, image: require('../assets/images/teen-patti.png') },
    { id: '5', title: 'Teen Patti', games: 545, image: require('../assets/images/teen-patti.png') },
];
const GameCard: React.FC<GameItem> = ({ title, games, image}) => (
    <View style={styles.card}>
        <Image source={image} style={styles.image} />
        <View style={styles.gameInnerContent}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.games}>{games} games</Text>
        </View>
    </View>
);
const GameCategories: React.FC = () => {
    return (
        <FlatList
            data={data}
            renderItem={({ item }) => (
                <GameCard title={item.title} games={item.games} image={item.image} id={item.id} />
            )}
            keyExtractor={item => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
        />
    );
};

const styles = StyleSheet.create({
    gameInnerContent:{
        flexDirection: 'column',
        marginLeft: 10
    },
    card: {
        flexDirection: 'row',
        backgroundColor: Colors.secondary,
        borderRadius: 7.42,
        marginRight: 10,
        padding: 10,
        alignItems: 'center',
        width: 120,
    },
    image: {
        width: 31.32,
        height: 31.32,
        borderRadius: 6.96,
    },
    title: {
        color: '#FFFFFF',
        fontSize: 11.14,
        fontWeight: 'bold',
    },
    games: {
        color: '#FFA500',
        fontSize: 6.96,
    },
});

export default GameCategories;
