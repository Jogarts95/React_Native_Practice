import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}> Administrador de Citas {" "}
        <Text style={styles.subTitle}>
          Veterinaria
        </Text>
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f3f6'
  },
  title: {
    textAlign: "center",
    fontSize: 30
  },
  subTitle: {
    textAlign: "center",
    color: "#6D28D9",
    fontWeight: "bold"
  }
});

export default App
