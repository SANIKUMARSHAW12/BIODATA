import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";


const Stack = createStackNavigator();

const HomeScreen = ({ navigation }) => {
  const handleDownloadPress = () => {
    navigation.navigate("Download");
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleDownloadPress} style={styles.button}>
        <Text style={styles.buttonText}>Download PDF</Text>
      </TouchableOpacity>
    </View>
  );
};

const DownloadScreen = () => {
  const [data] = useState([
      {
        id: 3253969,
        name: "Miss Jahnu Pilla",
        email: "pilla_miss_jahnu@rolfson-gorczany.",
        gender: "male",
        status: "active",
      },
      {
        id: 3253968,
        name: "Daevi Patil",
        email: "daevi_patil@ferry-towne.test",
        gender: "male",
        status: "active",
      },
      {
        id: 3253966,
        name: "Jaimini Pillai",
        email: "pillai_jaimini@damore-bahringer.test",
        gender: "female",
        status: "inactive",
      },
      {
        id: 3253965,
        name: "Rep. Vasudeva Nair",
        email: "vasudeva_rep_nair@legros.",
        gender: "male",
        status: "active",
      },
      {
        id: 3253963,
        name: "Chandradev Deshpande",
        email: "chandradev_deshpande@damore.",
        gender: "male",
        status: "active",
      },
      {
        id: 3253962,
        name: "Manikya Sethi",
        email: "sethi_manikya@heaney-prohaska.test",
        gender: "female",
        status: "active",
      },
      {
        id: 3253961,
        name: "Chandradev Acharya",
        email: "acharya_chandradev@fay.test",
        gender: "male",
        status: "active",
      },
    ],
  
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Downloaded Data</Text>
      <View style={styles.tableContainer}>
        <View style={styles.tableHeader}>
          <Text style={styles.tableHeaderText}>id </Text>
          <Text style={styles.tableHeaderText}>name </Text>
          <Text style={styles.tableHeaderText}>email </Text>
          <Text style={styles.tableHeaderText}>gender </Text>
          <Text style={styles.tableHeaderText}>status </Text>
        </View>
        {data.map((item, index) => (
          <View style={styles.tableRow} key={index}>
            <Text style={styles.tableText}>{item.id}</Text>
            <Text style={styles.tableText}>{item.name}</Text>
            <Text style={styles.tableText}>{item.email}</Text>
            <Text style={styles.tableText}>{item.gender}</Text>
            <Text style={styles.tableText}>{item.status}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Download" component={DownloadScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  tableContainer: {
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 5,
    padding: 10,
    width:'100%',
    height:'90%',
  },
  tableHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 2,
    paddingBottom: 5,
    marginBottom: 5,
  },
  tableHeaderText: {
    fontWeight: "bold",
  },
  tableRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  tableText: {
    flex: 1,
  },
});

export default App;
