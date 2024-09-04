import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Colors } from '@/constants/Colors';

// Define the type for each game item
interface GameItemProps {
  title: string;
  provider: string;
  image: number; 
}

// Define the type for the data array
interface Game {
  id: string;
  title: string;
  provider: string;
  image: number;
}

// Mock data array
const games: Game[] = [
  {
    id: '1',
    title: 'Teen Patti One Day',
    provider: 'Provider Supernova',
    image: require('../assets/images/teen-patti.png'),
  },
  {
    id: '2',
    title: 'Race 2020',
    provider: 'Provider Supernova',
    image: require('../assets/images/teen-patti.png'),
  },
  {
    id: '3',
    title: 'Amar Akbar Anthony',
    provider: 'Provider Supernova',
    image: require('../assets/images/teen-patti.png'),
  },
  {
    id: '4',
    title: 'Bollywood Casino',
    provider: 'Provider Supernova',
    image: require('../assets/images/teen-patti.png'),
  },
];

const GameItem: React.FC<GameItemProps> = ({ title, provider, image }) => {
  return (
    <View style={styles.gameItem}>
      <Image source={image} style={styles.gameImage} resizeMode="cover" />
      <View style={styles.gameInfo}>
        <Text style={styles.gameTitle}>{title}</Text>
        <Text style={styles.gameProvider}>{provider}</Text>
      </View>
      <TouchableOpacity style={styles.playButton}>
        <LinearGradient
          colors={['#9D50BB', '#6E48AA']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.gradient}
        >
          <Text style={styles.playButtonText}>Play Now</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

const CasinoList: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>PLAY</Text>
      <Text style={styles.sectionSubtitle}>INDIAN CASINO</Text>
      <FlatList
        data={games}
        renderItem={({ item }) => (
          <GameItem title={item.title} provider={item.provider} image={item.image} />
        )}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
};

// Styles for the components
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.secondary,
    padding: 10,
    borderRadius: 10,
    marginTop: 10
  },
  sectionTitle: {
    color: Colors.white,
    fontSize: 10,
    fontWeight: 'light',
  },
  sectionSubtitle: {
    color: Colors.white,
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  listContent: {
    paddingBottom: 0,
  },
  gameItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: "#31344E",
    borderRadius: 10,
    marginBottom: 15,
  },
  gameImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  gameInfo: {
    flex: 1,
    marginLeft: 15,
  },
  gameTitle: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
  gameProvider: {
    color: Colors.lightGray,
    fontSize: 8,
    width: 50,
  },
  playButton: {
    marginRight: 10,
  },
  gradient: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  playButtonText: {
    color: Colors.white,
    fontSize: 10,
    fontWeight: 'bold',
  },
});

export default CasinoList;
