import { TextInput, View } from "react-native-web";
import CustomizedButton from "../components/CustomizedButton";

function HomeScreenGameComponent(){
    return <View>
        <TextInput/>
        <CustomizedButton>Reset</CustomizedButton>
        <CustomizedButton>Confirm</CustomizedButton>

    </View>
}
export default HomeScreenGameComponent;