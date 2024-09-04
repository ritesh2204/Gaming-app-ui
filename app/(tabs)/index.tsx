import { Text, StyleSheet, View, ScrollView } from 'react-native';
import { Colors } from '@/constants/Colors';
import Header from '@/components/Header';
import SportsCategoriesListItem from '@/components/SportsCategoriesListItem';
import UserBoard from '@/components/UserBoard';
import Banner from '@/components/Banner';
import GameCategories from '@/components/GameCategories';
import Inplay from '@/components/Inplay';
import LeagueHeader from '@/components/LeagueHeader';
import MatchCard from '@/components/MatchCard';
import FeaturedGames from '@/components/FeaturedGames';
import CallToAction from '@/components/CallToAction';
import CardBanner from '@/components/CardBanner';
import PlayGamesList from '@/components/PlayGamesList';
import DownloadAppBanner from '@/components/DownoadAppBanner';
import CasinoList from '@/components/CasinoList';
import CustomButton from '@/components/CustomButton';
import Footer from '@/components/Footer';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.spacer}>
          <SportsCategoriesListItem />
          <UserBoard />
          <Banner />
          <GameCategories />
          <Inplay />
          <LeagueHeader />
          <MatchCard
            time="Tomorrow, 04:30"
            team1="Los Angeles Knight Riders"
            team2="Seattle Orcas"
            odds={[
              { value: '1.78', color: Colors.evenblue, stake: '8' },
              { value: '1.78', color: Colors.evenpink, stake: '8' },
              { value: '', color: Colors.oddblue, stake: '' },
              { value: '', color: Colors.oddpink, stake: '' },
              { value: '1.78', color: Colors.evenblue, stake: '8' },
              { value: '1.78', color: Colors.evenpink, stake: '8' }
            ]}
          />
          <LeagueHeader />
          <MatchCard
            time="Tomorrow, 04:30"
            team1="Los Angeles Knight Riders"
            team2="Seattle Orcas"
            odds={[
              { value: '1.78', color: Colors.evenblue, stake: '8' },
              { value: '1.78', color: Colors.evenpink, stake: '8' },
              { value: '', color: Colors.oddblue, stake: '' },
              { value: '', color: Colors.oddpink, stake: '' },
              { value: '1.78', color: Colors.evenblue, stake: '8' },
              { value: '1.78', color: Colors.evenpink, stake: '8' }
            ]}
          />
          <LeagueHeader />
          <MatchCard
            time="Tomorrow, 04:30"
            team1="Los Angeles Knight Riders"
            team2="Seattle Orcas"
            odds={[
              { value: '1.78', color: Colors.evenblue, stake: '8' },
              { value: '1.78', color: Colors.evenpink, stake: '8' },
              { value: '', color: Colors.oddblue, stake: '' },
              { value: '', color: Colors.oddpink, stake: '' },
              { value: '1.78', color: Colors.evenblue, stake: '8' },
              { value: '1.78', color: Colors.evenpink, stake: '8' }
            ]}
          />
          <FeaturedGames />
          <CallToAction />
          <CardBanner />
          <PlayGamesList />
          <DownloadAppBanner />
          <CasinoList />
          <View style={styles.buttonContainer}>
            <CustomButton iconName="globe" text="English" onPress={() => console.log('Language Pressed')} />
            <CustomButton iconName="moon" iconType="FontAwesome5" text="Dark" onPress={() => console.log('Theme Pressed')} />
          </View>
          <View style={{ marginTop: 25 }}>
            <Footer />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary
  },
  spacer: {
    marginHorizontal: 20
  },
  scrollContainer:{
    paddingBottom: 50
  },
  buttonContainer: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
  }
});
