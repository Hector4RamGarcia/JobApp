// import SignatureScreen from 'react-native-signature-canvas'
import { View, Text, StyleSheet, TextInput, ScrollView, TouchableOpacity} from "react-native";
import React, { useRef, useState } from "react";
import { Picker } from '@react-native-picker/picker';
// import {UseSignature} from "../hooks/UseSignature";

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
            <Text style={styles.checkboxLabel}>Opción 3</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

// export const Section3 = ({setIsSignatureActive}) => {
//   const {colorText,handleClear,handleColorChange,handleEmpty,handleOK,handleRedo,handleSave, handleUndo, ref, setPenColor,signature} = UseSignature();
//   const [isWriting, setIsWriting] = useState(false);

//   const startWriting = () => {
//     setIsWriting(true);
//     setIsSignatureActive(true);
//   };

//   const confirmSignature = () => {
//     handleOK;
//     setIsWriting(false);
//     setIsSignatureActive(false);
//   };
  
//   return (
//     <View>
//       <View style={styles.container}>
//         <View style={styles.innerContainer}>
//           <View style={{flexDirection:"row", justifyContent:"space-between"}}>
//             <Text style={styles.serviceTitle}>Sección tres</Text>
//             <Text style={styles.serviceTitle}>1/10</Text>
//           </View>
//           <View style={styles.signatureContainer}>
//             {!isWriting && 
//             <TouchableOpacity onPress={startWriting}>
//               <Text>Firma aqui</Text>
//             </TouchableOpacity>}
//             {isWriting && 
//               <SignatureScreen
//                 ref={ref}
//                 onOK={confirmSignature}
//                 onEmpty={handleEmpty}
//                 onClear={handleClear}
//                 onColorChange={handleColorChange}
//                 onUndo={handleUndo}
//                 onRedo={handleRedo}
//                 onSave={handleSave}
//                 setIsSignatureActive={setIsSignatureActive} // Pass setIsSignatureActive to SignatureScreen
//               />
//             }
            
//           </View>
//         </View>
//       </View>
//     </View>

//   );
// };

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
  signatureContainer: {
    height: 400,
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
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkboxLabel: {
    marginLeft: 8,
  },
});