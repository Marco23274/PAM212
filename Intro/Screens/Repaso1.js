import React, { useEffect, useRef, useState } from 'react'
import { Text, StyleSheet, View, Animated, Dimensions, ImageBackground, TextInput, Button, Alert, Switch } from 'react-native'
import * as SplashScreen from "expo-splash-screen";

const { height } = Dimensions.get('window');

export default function Repaso1(){
  const [showMain, setShowMain] = useState(false);

  const fadeLogo = useRef(new Animated.Value(0.5)).current;
  const scaleLogo = useRef(new Animated.Value(0.5)).current;
  const rotateLogo = useRef(new Animated.Value(0)).current;
  const slideText = useRef(new Animated.Value(height / 2)).current;
  const fadeOut = useRef(new Animated.Value(1)).current;

  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);
  const info = [{ id: 1, title: 'Acepto todos los terminos y condiciones', value: false },]


  useEffect(() => {
    (async () => {
      await SplashScreen.preventAutoHideAsync();

      Animated.parallel([
        Animated.timing(fadeLogo, {
          toValue: 1,
          duration: 1200,
          useNativeDriver: true,
        }),
        Animated.spring(scaleLogo, {
          toValue: 1,
          useNativeDriver: true,
        }),
        Animated.timing(rotateLogo, {
          toValue: 1,
          duration: 1200,
          useNativeDriver: true,
        }),
      ]).start();

      Animated.timing(slideText, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
        delay: 800,
      }).start();

      const timer = setTimeout(async () => {
        Animated.timing(fadeOut, {
          toValue: 0,
          duration: 800,
          useNativeDriver: true,
        }).start(async () => {
          await SplashScreen.hideAsync();
          setShowMain(true);
        });
      }, 3000);

      return () => clearTimeout(timer);
    })();
  }, []);

  const rotateInterpolate = rotateLogo.interpolate({
    inputRange: [0, 1],
    outputRange: ["10deg", "360deg"],
  });

  const enviarDatos = () => {
    if (nombre.trim() === '' || correo.trim() === '' || !termsAccepted) {
      Alert.alert('Error', 'Por favor completa todos los campos y acepta los términos');
      alert("Error, Debe rellenar todos los campos y aceptar los términos")
      setMensaje('Faltan campos por llenar o términos no aceptados');
    } else {
      Alert.alert('¡Éxito!', 'Datos enviados correctamente');
      alert("Exito, Datos enviados correctamente")
      setMensaje('Datos enviados correctamente');
    }
  };
  const Item = ({ title, value }) => {
      return (
        <View style={styles.item}>
          <View style={styles.itemBox}>
            <Text style={styles.itemtitle}>{title}</Text>
          </View>
          <View style={styles.switch}>
            <SwitchScreen temporal={value} isButton={true} />
          </View>
        </View>
      )
    }

  if (!showMain) {
    return (
      <Animated.View style={[styles.container, { opacity: fadeOut }]}>
        <Animated.Image
          source={require("../assets/CargaVaultboy.png")}
          resizeMode="contain"
          style={[styles.logoImage, { transform: [{ rotate: rotateInterpolate }, { scale: scaleLogo }] }]}
        />
        <Animated.Text
          style={[ styles.text, { transform:[{translateY: slideText}]} ]}
        >
          Cargando espere un momento
        </Animated.Text>
      </Animated.View>
    );
  }

  // Pantalla principal 
  return (
    <ImageBackground
      source={require("../assets/FondoFallout.jpg")}
      style={styles.background}
      resizeMode='cover'
    >
      <View style={styles.content}>
        <Text style={styles.title}>Registro de usuario</Text>

        <TextInput
          style={styles.input}
          placeholder="Nombre"
          value={nombre}
          onChangeText={setNombre}
        />

        <TextInput
          style={styles.input}
          placeholder="correo@...com"
          keyboardType="email-address"
          value={correo}
          onChangeText={setCorreo}
        />
        <View style={styles.termsContainer}>
          <Switch 
            value={termsAccepted} 
            onValueChange={setTermsAccepted} 
          />
          <Text style={styles.termsText}>Acepto todos los términos y condiciones</Text>
        </View>
        <View style={{ width: '100%', marginTop: 8 }}>
          <Button title="Enviar" onPress={enviarDatos} color="#4a90e2" />
        </View>

        <Text style={styles.mensaje}>{mensaje}</Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#007bffff",
    justifyContent: "center",
    alignItems: "center",
  },
  loader: {
    width: 60,
    height: 6,
    backgroundColor: "#fff",
    borderRadius: 3,
  },
  logoImage: {
    width: 300,
    height: 300,
    marginBottom: 5,
  },
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    width: '90%',
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    padding: 20,
    borderRadius: 10,
  },
  text: {
    color: "white",
    fontSize: 24,
    marginBottom: 10,
    textAlign: "center",
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: "#fff",
    marginBottom: 12,
    textAlign: 'center'
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#a47bf7ff',
    padding: 12,
    borderRadius: 9,
    backgroundColor: "#fff",
    marginBottom: 10,
  },
  mensaje: {
    marginTop: 20,
    fontSize: 18,
    color: '#e431f1ff',
    textAlign: 'center'
  },
  button: {
    width: '100%',
    marginTop: 8,
  },
  termsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  termsText: {
    color: "#fff",
    marginLeft: 10,
  },
})

