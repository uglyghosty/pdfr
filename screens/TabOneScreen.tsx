import { StyleSheet } from 'react-native';
import { Button, List, } from 'react-native-paper';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import { useEffect, useState } from 'react';
// import firestore, { firebase } from '@react-native-firebase/firestore';
import { useNavigation, } from '@react-navigation/native';
// import firebase from '@react-native-firebase/app';
import ListItem from '../components/ListItem';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  const stackNavigation = useNavigation();
 
  const [counter, setCount] = useState(0);
  const [reporter, setReporter] = useState("");
  const [screenTitle, setScreenTitle] = useState("")
  // const [listItems, setListItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([
    {title:'Daily'},
    {title:'Incidents'},
  ]);
  // console.log(firestore().collection('users'));

  return (
    <View style={styles.container}>
      <List.Section style={{width:'100%'}}>
        <List.Subheader style={styles.title}>Categories</List.Subheader>
        {
          data.map((l,i) => {
            return (
              <ListItem 
                key={i}
                title={l.title}
                onPress={() => stackNavigation.navigate('ReportScreen', {title:l.title})}
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
