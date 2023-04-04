import react, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import { Map, Modal, Panel, Input, List } from "./components/index";

export default function App() {
  const [puntos, setPuntos] = useState([]);
  const [puntosTemp, setPuntosTemp] = useState([]);
  const [nombre, setNombre] = useState('');
  const [visibility, setVisibility] = useState(false);
  const [visibilityFilter, setVisibilityFilter] = useState('new_punto'); //puede tener dos valores: new_punto o all_puntos
  const [pointsfilter, setPointsFilter] = useState(true);

  const togglePointsFilter = () => setPointsFilter(!pointsfilter)

  const handleLongPress = ({ nativeEvent }) => {
    setVisibilityFilter('new_punto')
    setPuntosTemp( nativeEvent.coordinate);
    setVisibility(true)    
  };

  const handleChangetext = (text) =>{
    setNombre(text)
  }

  const handleSubmit = () => {
    const newPunto = {coordinate: puntosTemp, name: nombre}
    setPuntos(puntos.concat(newPunto))
    setVisibility(false)
    setNombre('')
  }

  const handleCancel = () =>{
    setVisibility(false)
    setNombre('')
  }

  const handleCloseModal = () =>{
    setVisibility(false)
  }

  const handleOpenModal = () =>{
    setVisibility(true)
  }

  const handleLista = () => {
    setVisibilityFilter('all_puntos')
    setVisibility(true)
  }

  return (
    <View style={styles.container}>
      <Map onLongPress={handleLongPress} puntos={puntos} pointsfilter={pointsfilter}/>
      <Panel onPressLeft={handleLista} textLeft='Lista' onPressRight={togglePointsFilter} textRight='Mostrar / Ocultar' />
      <Modal visibility={visibility}>
        <View>
          {
            visibilityFilter === 'new_punto' 
            ?
            <>
                <Input style={styles.modalInput} title="Nombre" placeholder="Nombre del punto" onChangeText={handleChangetext} />
                <View style={styles.modalButtons}>
                  <Button  title="Aceptar"  onPress={handleSubmit}/>
                  <Button  title="Cancelar" onPress={handleCancel} />
                </View>
            </>
            :
            <List onPressClose={handleCloseModal}  puntos={puntos}/>
          }
        </View>
      </Modal>
     
    </View>
  );
}

const styles = StyleSheet.create({
  modalInput:{
    paddingVertical:5,
  },
  modalButtons:{
    flex: 0,
    flexDirection: "row",
    justifyContent: "space-evenly",
    paddingBottom: 20
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
  },
});
