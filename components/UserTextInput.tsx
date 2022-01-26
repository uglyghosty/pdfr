import { useEffect } from 'react';
import { StyleSheet, ActivityIndicator, View } from 'react-native';
import { Button, List, Surface, useTheme, TextInput} from 'react-native-paper';
import { useState } from 'react';

const ListItem = ({title, initValue}) => {
    const [loading, isLoading] = useState(true);
    const [value, setValue] = useState('');
    // do a firestore call with title prop
    useEffect(() => {

    },[title]);

    return (
        <View style={{flex:1,}}>
            <TextInput
                style={{width:'100%'}}
                label={title}
                value={value}
                onChangeText={text => setValue(text)}
            />
        </View>
    );
}

export default ListItem;
