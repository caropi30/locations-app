import react from "react";
import { FlatList, Text, View, Button, StyleSheet, Dimensions} from "react-native";

export default ({puntos, onPressClose}) => {
    return(
        <>
            <View style={styles.list}>
                <FlatList 
                    data={puntos.map( x => x.name)}
                    renderItem={({item}) => <View style={styles.item}><Text>{item}</Text></View>}
                    keyExtractor={item => item}
                />
            </View>
            <View style={styles.btn}>
                <Button title="Cerrar" onPress={onPressClose} />
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    list:{
        height: Dimensions.get('window').height - 600,
        width: Dimensions.get('window').width - 100,
    },
    item:{
        borderBottomWidth: 1,
        borderColor: '#ccc',
        height: 50,
        justifyContent: 'center',
        padding: 15,
        width: '100%'
    },
    btn:{
        paddingVertical: 10
    }
})

