import {Text, StyleSheet} from 'react-native';

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
        borderWidth: 2,

    }
});