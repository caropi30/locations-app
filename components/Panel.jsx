import react from "react";
import { StyleSheet, Dimensions, Button, View } from 'react-native';

export default ({onPressLeft, textLeft, onPressRight, textRight}) => {
    return(
       <View style={styles.panel}>
            <Button title={textLeft} onPress={onPressLeft} />
            <Button  title={textRight} onPress={onPressRight}/>
       </View>
    )
}

const styles = StyleSheet.create({
    panel:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    }
})