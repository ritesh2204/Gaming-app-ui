import { Colors } from '@/constants/Colors';
import { Text, View, StyleSheet, Image } from 'react-native';

const LeagueHeader = () => {
    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <Image source={require("../assets/images/cricket.png")} style={styles.icon} />
                <Text style={styles.leagueText}>United states - Major League</Text>
            </View>
            <View>
                <Image source={require("../assets/images/star.png")} style={styles.icon} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    row:{
        flexDirection: 'row',
        alignItems: 'center',
    },
    leagueText:{
        color: Colors.primaryText,
        fontSize: 12,
        fontWeight: 'medium'
    },
    icon:{
        resizeMode: 'contain',
        width:10,
        height: 10,
        marginRight: 10,
        tintColor: Colors.primaryText
    }
})

export default LeagueHeader;