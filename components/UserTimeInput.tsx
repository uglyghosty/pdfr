import { useEffect, useCallback, } from 'react';
import { StyleSheet, ActivityIndicator, View } from 'react-native';
import { Button, List, Surface, useTheme, TextInput} from 'react-native-paper';
import { useState } from 'react';
import { TimePickerModal } from 'react-native-paper-dates';

const ListItem = ({title, initValue}) => {
    const [loading, isLoading] = useState(true);
    const [value, setValue] = useState('');
    const [date, setDate] = useState<Date | undefined>(undefined);
    const [visible, setVisible] = useState(false);
    // do a firestore call with title prop
    useEffect(() => {

    },[title]);

    const onDismissSingle = useCallback(() => {
        setVisible(false);
    }, [setVisible]);

    const onConfirm = useCallback(
        ({ hours, minutes }) => {
          setVisible(false);
          console.log({ hours, minutes });
        },
        [setVisible]
    );    

    const onDismiss = useCallback(() => {
        setVisible(false)
    }, [setVisible]); 

    return (
        <Surface style={{flex:1, marginHorizontal:10, }}>
             <TimePickerModal
                visible={visible}
                onDismiss={onDismiss}
                onConfirm={onConfirm}
                // hours // default: current hours
                // minutes // default: current minutes
                label={title} // optional, default 'Select time'
                uppercase={false} // optional, default is true
                cancelLabel="Cancel" // optional, default: 'Cancel'
                confirmLabel="Ok" // optional, default: 'Ok'
                animationType="fade" // optional, default is 'none'
                locale="en" // optional, default is automically detected by your system
            />
            <List.Item title={title} right={() => <List.Icon icon='clock'/>} onPress={()=> setVisible(true)}/>
        </Surface>
    );
}

export default ListItem;
