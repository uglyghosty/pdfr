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
        <Surface style={{flex:1, marginHorizontal:10, }}>
            <TextInput
                style={{width:'100%', backgroundColor:'white',}}
                label={title}
                value={value}
                onChangeText={text => setValue(text)}
            />
        </Surface>
    );
}

export default ListItem;
