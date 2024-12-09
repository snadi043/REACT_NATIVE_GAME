import { View, StyleSheet, Dimensions } from "react-native";
import Colors from "../../constants/colors";

function Card({children}){
    return <View style={styles.cardContainer}>{children}</View>
}

export default Card;

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    cardContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: deviceWidth < 380 ? 18 : 36,
        padding: 16,
        marginHorizontal: 24,
        backgroundColor: Colors.primary400,
        elevation: 4,
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: {height: 2, width: 0},
        shadowRadius: 6,
        borderRadius: 8,
    },
})