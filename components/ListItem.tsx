import { StyleSheet } from 'react-native';
import { Button, List, useTheme,} from 'react-native-paper';

const ListItem = ({title, onPress}) => {
    return (
        <List.Item 
            title={title}
            style={{width:'100%',}}
            left={props => <List.Icon {...props} icon="folder" />}
            onPress={onPress}
        />
    );
}

export default ListItem;
