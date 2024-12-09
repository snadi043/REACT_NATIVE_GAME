import {Text, Platform, StyleSheet} from 'react-native';

function Title({children}){
   return <Text style={styles.title}>{children}</Text>
}

export default Title;

const styles = StyleSheet.create({
    title: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 24,
        borderColor: 'white',
        padding: 12,
        color: 'white',
        // borderWidth: Platform.OS === 'ios' ? 0 : 2,
        borderWidth: Platform.select(
            {ios: 0, android: 2}
        )

    }
});