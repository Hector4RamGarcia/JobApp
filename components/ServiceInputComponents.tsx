import { View, Text, StyleSheet, TextInput } from "react-native";
import { Picker } from '@react-native-picker/picker';
import React, { useState } from "react";
import { Checkbox } from 'react-native-paper';

export const Section1 = () => {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={{flexDirection:"row", justifyContent:"space-between"}}>
          <Text style={styles.serviceTitle}>Sección uno</Text>
          <Text style={styles.serviceTitle}>1/10</Text>
        </View>
        <View style={styles.innerContainer}>
          <Text>Pregunta de tipo texto corto</Text>
          <TextInput
            placeholder="Escribe aquí..."
          />
        </View>
        <View style={styles.innerContainer}>
          <Text>Pregunta de tipo texto largo</Text>
          <TextInput
            style={styles.textArea}
            multiline={true}
            numberOfLines={4}
            placeholder="Escribe aquí..."
          />
        </View>
      </View>
    </View>
  );
};

export const Section2 = () => {
  const [selectedValue, setSelectedValue] = useState('option1');
  const [selectedValues, setSelectedValues] = useState({
    option1: false,
    option2: false,
    option3: false,
  });

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={{flexDirection:"row", justifyContent:"space-between"}}>
          <Text style={styles.serviceTitle}>Sección dos</Text>
          <Text style={styles.serviceTitle}>1/10</Text>
        </View>
        <View style={styles.innerContainer}>
          <Text>Pregunta de tipo texto corto</Text>
          <Picker
            selectedValue={selectedValue}
            onValueChange={(itemValue) => setSelectedValue(itemValue)}
          >
            <Picker.Item label="Opción 1" value="option1" />
            <Picker.Item label="Opción 2" value="option2" />
            <Picker.Item label="Opción 3" value="option3" />
          </Picker>
        </View>
        <View style={styles.innerContainer}>
          <Text>Pregunta de selección múltiple:</Text>
          <View style={styles.checkboxContainer}>
            <View style={styles.checkboxItem}>
              <Checkbox
                status={selectedValues.option1 ? 'checked' : 'unchecked'}
                onPress={() => setSelectedValues({...selectedValues, option1: !selectedValues.option1})}
              />
              <Text style={styles.checkboxLabel}>Opción 1</Text>
            </View>
            <View style={styles.checkboxItem}>
              <Checkbox
                status={selectedValues.option2 ? 'checked' : 'unchecked'}
                onPress={() => setSelectedValues({...selectedValues, option2: !selectedValues.option2})}
              />
              <Text style={styles.checkboxLabel}>Opción 2</Text>
            </View>
            <View style={styles.checkboxItem}>
              <Checkbox
                status={selectedValues.option3 ? 'checked' : 'unchecked'}
                onPress={() => setSelectedValues({...selectedValues, option3: !selectedValues.option3})}
              />
              <Text style={styles.checkboxLabel}>Opción 3</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 15,
  },
  innerContainer: {
    width: '96%',
    padding: 10,
    marginTop:10,
    backgroundColor: '#F3F4F6',
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.10,
    shadowRadius: 4.65,
    elevation: 2,
  },
  serviceTitle: {
    fontSize: 14,
    color: '#000',
    fontWeight: 'bold',
  },
  textArea: {
    height: 100,
    padding: 10,
  },
  checkboxContainer: {
    flexDirection: 'column',
  },
  checkboxItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  checkboxLabel: {
    marginLeft: 8,
  },
});
