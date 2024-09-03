import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity, Modal } from "react-native";
import { Picker } from '@react-native-picker/picker';
import React, { useState } from "react";
import { Checkbox } from 'react-native-paper';
import GradientBackground from "./GradientBackground";

export const Section1 = () => {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={{flexDirection:"row", justifyContent:"space-between"}}>
          <Text style={styles.serviceTitle}>Sección uno</Text>
          <Text style={styles.serviceTitle}>1/10</Text>
        </View>
        <View style={[styles.innerContainer, {backgroundColor:"rgba(40, 56, 245,0.1)"}]}>
          <Text style={styles.subtitle}>Pregunta de tipo texto corto</Text>
          <TextInput
            placeholder="Escribe aquí..."
          />
        </View>
        <View style={[styles.innerContainer, {backgroundColor:"rgba(40, 56, 245,0.1)"}]}>
          <Text style={styles.subtitle}>Pregunta de tipo texto largo</Text>
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
          <Text style={styles.serviceTitle}>2/10</Text>
        </View>
        <View style={[styles.innerContainer, {backgroundColor:"rgba(40, 56, 245,0.1)"}]}>
          <Text style={styles.subtitle}>Pregunta de tipo texto corto</Text>
          <Picker
            selectedValue={selectedValue}
            onValueChange={(itemValue) => setSelectedValue(itemValue)}
          >
            <Picker.Item label="Opción 1" value="option1" />
            <Picker.Item label="Opción 2" value="option2" />
            <Picker.Item label="Opción 3" value="option3" />
          </Picker>
        </View>
        <View style={[styles.innerContainer, {backgroundColor:"rgba(40, 56, 245,0.1)"}]}>
          <Text style={styles.subtitle}>Pregunta de selección múltiple:</Text>
          <View style={styles.checkboxContainer}>
            <View style={styles.checkboxItem}>
              <Checkbox
                color="#dadada"
                status={selectedValues.option1 ? 'checked' : 'unchecked'}
                onPress={() => setSelectedValues({...selectedValues, option1: !selectedValues.option1})}
              />
              <Text style={styles.checkboxLabel}>Opción 1</Text>
            </View>
            <View style={styles.checkboxItem}>
              <Checkbox
                color="#dadada"
                status={selectedValues.option2 ? 'checked' : 'unchecked'}
                onPress={() => setSelectedValues({...selectedValues, option2: !selectedValues.option2})}
              />
              <Text style={styles.checkboxLabel}>Opción 2</Text>
            </View>
            <View style={styles.checkboxItem}>
              <Checkbox
                color="#dadada"
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

export const Section3 = () => {

  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={{flexDirection:"row", justifyContent:"space-between"}}>
          <Text style={styles.serviceTitle}>Sección tres</Text>
          <Text style={styles.serviceTitle}>3/10</Text>
        </View>
        <View style={[styles.innerContainer, {backgroundColor:"rgba(40, 56, 245,0.1)"}]}>
          <Text style={styles.subtitle}>Firma</Text>
          <View style={styles.imageContainer}>
            <TouchableOpacity onPress={openModal}>
              <Image
                source={require("../assets/images/signature.png")}
                style={{width: 100, height: 100}}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={false}
      >
        <GradientBackground style={{flex:1}}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Firma aquí</Text>
            <TouchableOpacity onPress={closeModal} style={styles.closeButton}>
              <Text style={styles.closeButtonText}>Cerrar</Text>
            </TouchableOpacity>
          </View>
        </GradientBackground>
      </Modal>
    </View>
  )
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
    backgroundColor: 'rgba(40, 56, 145, 0.1)',
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.10,
    shadowRadius: 4.65,
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  serviceTitle: {
    fontSize: 14,
    color: '#000',
    fontWeight: 'bold',
  },
  subtitle: {
    color: '#dadada',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(40, 56, 145, 0.1)',
    margin: 10,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  closeButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#2838F5',
    borderRadius: 5,
  },
  closeButtonText: {
    color: 'white',
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