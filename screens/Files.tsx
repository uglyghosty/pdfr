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
  const [screenTitle, setScreenTitle] = useState(route?.params ? route?.params?.title : "");
  const [loading, setLoading] = useState(false);
  const [files, setFiles] = useState([]);
  const [qHistory, setQHistory] = useState(route?.params? route?.params?.qHistory + '/' + route?.params?.title : 'categories');

  // firestore reference
  const db = getFirestore();
  
  async function getFiles() {
    let f = [];

    const q = query(collection(db, qHistory + `/reports`));

    await getDocs(q).then((collection) => {
      collection.forEach((doc) => {
        if(doc?.exists()) {
          f.push(doc);
        }
      })
    });

    setFiles(f);
  }
  
  useEffect(() => {
    getFiles();
  },[route]);

  return (
    <View style={styles.container}>
      <List.Section style={{width:'100%'}}>
        <List.Subheader style={styles.title}>{`${screenTitle}`}</List.Subheader>
        {
          files.map((l,i) => {
            const data = l?.data();
            return (
              <ListItem 
                key={i}
                title={data?.title}
                onPress={() => navigation.navigate('File', {qHistory: qHistory + '/reports/' + data?.title, title: data?.title})}
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
