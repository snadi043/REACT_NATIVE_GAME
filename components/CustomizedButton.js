import {View, Text} from 'react-native';

function CustomizedButton({children}){
    return <View>
    <Text>{children}</Text>
    </View>
}

export default CustomizedButton;