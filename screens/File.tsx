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
import { getFirestore, setDoc, doc, getDoc, getDocs, collection, query, where, documentId} from 'firebase/firestore';

export default function File({ navigation, route }: RootTabScreenProps<'TabOne'>) {
  const [screenTitle, setScreenTitle] = useState(route?.params ? route?.params?.title : "");
  const [loading, setLoading] = useState(false);
  const [fileData, setFileData] = useState([]);
  const [qHistory, setQHistory] = useState(route?.params? route?.params?.qHistory : 'categories');

  
  // firestore reference
  const db = getFirestore();

  async function getFileData() {
    // let f = [];
    console.log("his",qHistory);
    console.log("title",route?.params?.title);
    const q = query(doc(db, qHistory, ''));

    await getDoc(q).then((data) => {
      if(data.exists()) {
        console.log(data.data())

        setFileData(data.data());
      } else {
        console.log('doc does not exist')
      }
    });
  }
  
  useEffect(() => {
    getFileData();
  },[route]);


  return (
    <View style={styles.container}>
      <List.Section style={{width:'100%'}}>
        <List.Subheader style={styles.title}>{`${screenTitle}`}</List.Subheader>
        {/* {
          fileData?.map((l,i) => {
            return (
              <ListItem 
                key={i}
                title={l.title}
                // onPress={() => navigation.navigate('File', {title:l.title})}
              />
            );
          })
        } */}
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
