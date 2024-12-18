import {View, Text, StyleSheet, Pressable} from 'react-native';

function CustomizedButton({children, onCustomizedButtonPressProp}){

    return <View style={styles.buttonOuterContainer}>
            <Pressable 
                style={({pressed}) => pressed ? [styles.pressed, styles.buttonInnerContainer] : styles.buttonInnerContainer} 
                android_ripple={color="#640233"}
                onPress={onCustomizedButtonPressProp}>
                <Text style={styles.buttonText}>{children}</Text>
            </Pressable>
        </View>
    
}

export default CustomizedButton;

const styles = StyleSheet.create({
    buttonInnerContainer:{
        paddingHorizontal: 16,
        paddingVertical: 8,
        elevation: 2,
        backgroundColor: "#72063C",

    },
    buttonOuterContainer: {
        borderRadius: 16,
        margin: 4,
        overflow: 'hidden' 
    },
    buttonText:{
        color: 'white',
        textAlign: 'center',

    },
    pressed: {
        opacity: 0.75,
    }
})