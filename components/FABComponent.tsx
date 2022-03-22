import { Provider, FAB, Portal } from 'react-native-paper';
import { useState } from 'react';
import { StyleSheet, } from 'react-native';


const FABComponent = () => {
    
    const [state, setState] = useState({ open: false });
    const onStateChange = ({ open }) => setState({ open });
    const { open } = state;
    // admin controls change the button option
    const [ isAdmin, setAdmin ] = useState(false);

    return(
        <Provider>
            <Portal>
                <FAB.Group
                open={open}
                icon={open ? 'close' : 'plus'}
                actions={[
                    { icon: 'file', label: 'drafts', onPress: () => console.log('Pressed my drafts') },
                    { icon: 'file', label: 'add report', onPress: () => console.log('Pressed add report') },
                    { icon: 'file', label: 'add category', onPress: () => console.log('Pressed add category') },
                ]}
                onStateChange={onStateChange}
                // onPress={() => {
                //     setOpen(!open);
                // }}
                />
            </Portal>
        </Provider>
        );
    }

export default FABComponent;

const styles = StyleSheet.create({
    fab: {
      position: 'absolute',
      margin: 16,
      right: 0,
      bottom: 0,
    },
});
