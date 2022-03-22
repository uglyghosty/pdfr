import { useEffect } from 'react';
import { StyleSheet, ActivityIndicator } from 'react-native';
import { Button, List, Surface, useTheme,} from 'react-native-paper';
import { useState } from 'react';

const ListItem = ({title, onPress, firestore}) => {
    const [files, setfiles] = useState([]);
    const [loading, isLoading] = useState(true);
    // do a firestore call with title prop
    useEffect(() => {

    },[title]);

    return (
        <Surface
        style={{ marginBottom:10, marginHorizontal:10, }}
        >
            <List.Accordion 
                right={() => {
                    // chevron
                    // if admin, add edit button
                    // else show nothing
                }}
                expanded={false} // admin control will have true value
                style={{width:'100%',}}
                left={props => <List.Icon {...props} icon="folder" />}
                onPress={onPress}
                title={title}
            >
                {
                    loading?
                    <Surface style={{flex:1,}}>
                        <ActivityIndicator/>
                    </Surface>
                    :
                    files.length > 0?
                    <Surface style={{flex:1,}}>
                        <List.Item title="first item" />
                        <List.Item title="Second item" />
                    </Surface>
                    :
                    <Surface style={{flex:1,}}>
                        <List.Item title="No reports yet"/>
                    </Surface>
                }
            </List.Accordion>
        </Surface>  
    );
}

export default ListItem;
