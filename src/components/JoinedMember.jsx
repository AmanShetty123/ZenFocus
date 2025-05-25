import { StyleSheet, Text, View } from 'react-native'
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen'

const JoinedMember = ({item}) => {
  return (
    <View style={styles.mainContainer}>
        <Text style={styles.text}>{item.name}</Text>
    </View>
  )
}

export default JoinedMember

const styles = StyleSheet.create({
    mainContainer: {
        borderWidth: 1,
        borderRadius: 30,
        padding: 10,
        width: wp('80%'),
        alignItems:'center',
    },
    text: {
        fontSize: 20
    }
})