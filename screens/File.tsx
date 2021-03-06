import { StyleSheet } from 'react-native';
import { Button, List, } from 'react-native-paper';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import { useEffect, useState } from 'react';
import { useNavigation, } from '@react-navigation/native';
// import firebase from '@react-native-firebase/app';
// import fs from '@react-native-firebase/firestore';
import ListItem from '../components/ListItem';
import UserTextInput from '../components/UserTextInput';
import { getFirestore, setDoc, doc, getDoc, getDocs, collection, query, where, documentId} from 'firebase/firestore';

export default function File({ navigation, route }: RootTabScreenProps<'TabOne'>) {
  const [screenTitle, setScreenTitle] = useState(route?.params ? route?.params?.title : "");
  const [loading, setLoading] = useState(false);
  const [fileData, setFileData] = useState([]);
  const [qHistory, setQHistory] = useState(route?.params? route?.params?.qHistory : 'categories');

  
  // firestore reference
  const db = getFirestore();
  
  let componentsArr = [];

  async function getFileData() {
    const q = query(doc(db, qHistory, ''));

    await getDoc(q).then((data) => {
      if(data.exists()) {
        setFileData(data.data());

      } else {
        console.log('doc does not exist')
      }
    })
  }
  
  console.log(fileData)
  
  
  // let componentsArr = [];
  
  // const renderInputs = () => {
  //   Object.values(fileData).forEach(i => {
  //     // console.log(i?.inputType)
  //     if (i) {
  //       return componentsArr.push(<View style={{backgroundColor:'red', height:100, width:'100%'}}></View>);
  //     }
  //   });
  // }
  
  useEffect(() => {
    getFileData();
  },[route, ]);

  return (
    <View style={styles.container}>
      <List.Section style={{width:'100%'}}>
        <List.Subheader style={styles.title}>{`${screenTitle}`}</List.Subheader>
        {
          Object.entries(fileData).map(([key, values]) => {
            if (values?.inputType === 'textInput') {
              return(<UserTextInput key={key} title={key} value={values?.value}/>);
            }
            if (values?.inputType === 'time') {
              // TODO: create time component for user input
              return;
            }
          })
        }
      </List.Section>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 10,
    fontSize:40
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
