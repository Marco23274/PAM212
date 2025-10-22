import React, { useState } from 'react'
import { Text, StyleSheet, View, Button } from 'react-native'
import ContadorScreen from './ContadorScreen';
import BotonesScreen from './Botones/BotonesScreen';
import ButtonsSwitchScreen from './ButtonsSwitchScreen';
import TextImputAlertScreen from './TextImputAlertScreen';
import SplashScreenPro from './ImageBackgroungSlapshScreen';
import ScrollViewScreen from './ScrollViewScreen';
import ActivityIndicatorScreen from './ActivityIndicatorScreen';
import FlatListSectionListScreen from './FlatListSectionListScreen';
import ModalScreen from './ModalScreen';
import BottonSheetScreen from './BottonSheetScreen';

// Main: zona de los componentes
export default function MenuScreen() {
  const [screen, setScreen] = useState("menu");

  switch (screen) {
    case "contador":
      return <ContadorScreen />;
    case "botones":
      return <BotonesScreen />;
    case "buttonsYswitch":
      return <ButtonsSwitchScreen />;
    case "text,imputYalert":
      return <TextImputAlertScreen />;
    case "imagebackgroundYslapshscreen":
      return <SplashScreenPro />;
    case "scrollview":
      return <ScrollViewScreen />;
    case "activityindicator":
      return <ActivityIndicatorScreen />;
    case "flatlistYsectionlist":
      return <FlatListSectionListScreen />;
    case "modal":
      return <ModalScreen />;
    case "bottomsheet":
      return <BottonSheetScreen />;
    case "menu":
    default:
      return (
        <View style={styles.container}>
          <Text style={styles.title}>Menu practicas</Text>
          <View style={{ margin: 10 }}>
            <Button onPress={() => setScreen("contador")} title="Pract:Contador" color={"rgba(35, 170, 93, 1)"} />
            <Button onPress={() => setScreen("botones")} title="Pract: Botones" color={"rgba(85, 69, 234, 1)"} />
            <Button onPress={() => setScreen("buttonsYswitch")} title="Pract:ButtonsSwitch" color={"rgba(154, 17, 138, 1)"} />
            <Button onPress={() => setScreen("text,imputYalert")} title="Pract: Text, Imput & Alert" color={"rgba(29, 116, 87, 1)"} />
            <Button onPress={() => setScreen("imagebackgroundYslapshscreen")} title="Pract: ImageBackgroung & SlapshScreen" color={"rgba(191, 87, 39, 1)"} />
            <Button onPress={() => setScreen("scrollview")} title="Pract: ScrollView" color={"rgba(81, 198, 221, 1)"} />
            <Button onPress={() => setScreen("activityindicator")} title="Pract:ActivityIndicator" color={"rgba(86, 15, 43, 1)"} />
            <Button onPress={() => setScreen("flatlistYsectionlist")} title="Pract: FlatList y Section List" color={"rgba(172, 42, 42, 1)"} />
            <Button onPress={() => setScreen("modal")} title="Pract: Modal" color={"rgba(161, 26, 26, 1)"} />
            <Button onPress={() => setScreen("bottomsheet")} title="Pract: Bottom Sheet" color={"rgba(187, 187, 58, 1)"} />
          </View>
        </View>
      );
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' },
  title: { fontSize: 18, fontWeight: 'bold', marginBottom: 12 }
})