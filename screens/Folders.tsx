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

export default function Files({ navigation }: RootTabScreenProps<'TabOne'>) {
  const stackNavigation = useNavigation();
 
  const [reporter, setReporter] = useState("");
  const [screenTitle, setScreenTitle] = useState("");
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState([]);

  // const [data, setData] = useState([
  //   {title:'Daily'},
  //   {title:'Incidents'},
  // ]);
  const db = getFirestore();

  // const docRef = doc(db, "users", "FpyftA1lqDpXyv91Db9q");
  async function getCategorties() {
    // const docSnap = await getDoc(docRef);

    // if (docSnap.exists()) {
    //   console.log("Document data:", docSnap.data());
    // } else {
    //   // doc.data() will be undefined in this case
    //   console.log("No such document!");
    // }
    let cats = [];

    const q = query(collection(db, "categories"));

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      cats.push(doc.data());
    });

    setCategories(cats);
  }
  
  getCategorties();

  return (
    <View style={styles.container}>
      <List.Section style={{width:'100%'}}>
        <List.Subheader style={styles.title}>Categories</List.Subheader>
        {
          categories.map((l,i) => {
            return (
              <ListItem 
                key={i}
                title={l.title}
                onPress={() => stackNavigation.navigate('Files', {title:l.title})}
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
