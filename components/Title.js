import {Text, StyleSheet} from 'react-native';
import  Colors  from '../constants/colors';

function Title({children}){
   return <Text style={styles.title}>{children}</Text>
}

export default Title;

const styles = StyleSheet.create({
    title: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 24,
        borderColor: Colors.accent500,
        padding: 12,
        color: Colors.accent500,
        borderWidth: 2,

    }
});