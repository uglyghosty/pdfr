import { useState, } from 'react';
import { StyleSheet,  } from 'react-native';
import { Button, List, TextInput, } from 'react-native-paper';
import ListItemComponent from '../components/ListItem';
import { Text, View } from '../components/Themed';

export default function Profile({navigation}) {
  const [name, setName] = useState('');

  return (
    <View style={styles.container}>
      <List.Section style={{width: '100%'}}>
        <List.Item
          style={{width:'100%'}}
          left={() => <TextInput
              label='name'
              style={{width:'100%', backgroundColor:'transparent'}}
              value={name}
              onChangeText={text => setName(text)}
            />
          }
        />
        <List.Item
          style={{width:'100%'}}
          left={() => <TextInput
              label='email'
              style={{flex:5, backgroundColor:'transparent'}}
              value={name}
              onChangeText={text => setName(text)}
              clearButtonMode='never'
              />
            }
        />
        <List.Item
          style={{width:'100%'}}
          title='My Reports'
          onPress={() => navigation.navigate('Files', {uid:''}) }
        />
      </List.Section>
      {/* if previous values differ from current changes, then back save button appear */}
      {<Button style={{bottom: 0, position: 'absolute',}}>SAVE</Button>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
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
