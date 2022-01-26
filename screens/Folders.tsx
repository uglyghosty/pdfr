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
import { getFirestore, setDoc, doc, getDoc, getDocs, collection, query, where, } from 'firebase/firestore';

export default function Files({ navigation, route }: RootTabScreenProps<'TabOne'>) {
  const [reporter, setReporter] = useState("");
  const [screenTitle, setScreenTitle] = useState("");
  const [loading, isLoading] = useState(true);
  const [folders, setFolders] = useState([]);
  const [files, setFiles] = useState([]);
  const [qHistory, setQHistory] = useState('/');

  // firebase reference
  const db = getFirestore();

  async function getFolders() {
    let foldersArr = [];

    const q = query(collection(db, "categories"));
    
    await getDocs(q).then((collection) => {
        collection?.forEach((doc) => {
          if(doc?.data()) {
            foldersArr.push(doc);
          }
      });
  
      setFolders(foldersArr);
    });
  }
  
  useEffect(() => {
    getFolders();
  },[route]);

  return (
    <View style={styles.container}>
      <List.Section style={{width:'100%'}}>
        <List.Subheader style={styles.title}>Categories</List.Subheader>
        {
          folders.map((l,i) => {
            const data = l?.data();
            const path = l?.id;
            return (
              <ListItem 
                key={i}
                title={data?.title}
                onPress={() => data?.title ? navigation.navigate('Files', {qHistory: qHistory + 'categories', title: data?.title}) : {}}
              />
            );
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
