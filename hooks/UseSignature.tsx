import RNFetchBlob from 'rn-fetch-blob';
import React from 'react'; 
import { useRef, useState } from 'react';
import { Platform } from 'react-native';
import { PermissionsAndroid } from 'react-native';

export const UseSignature = () => {
  const [signature, setSign] = useState(null);
  const [colorText, setPenColor] = useState("");

  
  const ref = useRef();

  const handleOK = (signature: React.SetStateAction<null>) => {
    if (signature) {
      setSign(signature);
    }
  };
  
  const handleEmpty = () => {
    console.log("Signature is empty");
  };

  const handleClear = () => {
    console.log("clear success!");
  };

  const handleColorChange = () => {
    ref.current.changePenColor(colorText);
  };

  const handleUndo = () => {
    ref.current.undo();
  };

  const handleRedo = () => {
    ref.current.redo();
  }

//   const handleSave = async () => {
//     try {
//       if (Platform.OS === 'android') {
//       const isReadGranted = await PermissionsAndroid.request(
//           PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
//           {
//             title: "Storage Permission",
//             message: "App needs access to your storage to download Photos",
//             buttonNeutral: "Ask Me Later",
//             buttonNegative: "Cancel",
//             buttonPositive: "OK"
//           }
//         );
//         if (isReadGranted === PermissionsAndroid.RESULTS.GRANTED) {
//           const dirs = RNFetchBlob.fs.dirs
//           var image_data = signature.split('data:image/png;base64,');
//           const filePath = dirs.DownloadDir+"/"+'signature'+new Date().getMilliseconds()+'.png'
//           RNFetchBlob.fs.writeFile(filePath, image_data[1], 'base64')
//           .then(() => {
//             console.log("Successfuly saved to"+ filePath)
//           })
//           .catch((errorMessage) =>{
//             console.log(errorMessage)
//           })
//         }else {
//           console.log("Permission Denied")
//         } 
//       }
//     }catch (error) {
//       console.log(error)
//     }
// }
  

  return {
    handleOK,
    handleEmpty,
    handleClear,
    handleColorChange,
    handleUndo,
    handleRedo,
    // handleSave,
    signature,
    ref,
    colorText,
    setPenColor
  }
}
