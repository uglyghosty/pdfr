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
  const stackNavigation = useNavigation();
 
  const [reporter, setReporter] = useState("");
  const [screenTitle, setScreenTitle] = useState("");
  const [loading, isLoading] = useState(true);
  const [folders, setFolders] = useState([]);
  const [files, setFiles] = useState([]);

  // const [data, setData] = useState([
  //   {title:'Daily'},
  //   {title:'Incidents'},
  // ]);
  const db = getFirestore();

  // const docRef = doc(db, "users", "FpyftA1lqDpXyv91Db9q");
  async function getFolders() {
    // const docSnap = await getDoc(docRef);

    // if (docSnap.exists()) {
    //   console.log("Document data:", docSnap.data());
    // } else {
    //   // doc.data() will be undefined in this case
    //   console.log("No such document!");
    // }
    let foldersArr = [];

    const q = query(collection(db, "categories"));
    
    await getDocs(q).then((collection) => {
        collection?.forEach((doc) => {
          if(doc?.data()) {
            foldersArr.push(doc.data());
          }
      });
  
      setFolders(foldersArr);
    });
  }

  async function getFiles(title) {
    console.log(title)
    // const docSnap = await getDoc(docRef);

    // if (docSnap.exists()) {
    //   console.log("Document data:", docSnap.data());
    // } else {
    //   // doc.data() will be undefined in this case
    //   console.log("No such document!");
    // }
    let filesArr = [];

    const q = query(collection(db, `categories/${title}`/reports));

    await getDocs(q).then((files) => {
        files?.forEach((doc) => {
          console.log(doc.data());
        filesArr.push(doc?.data());
      });
  
      setFolders(filesArr);
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
            return (
              <ListItem 
                key={i}
                title={l?.title}
                onPress={() => l?.title ? navigation.navigate('Files',{title: l?.title}) : {}}
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
