import { Provider, FAB, Portal } from 'react-native-paper';
import { useState } from 'react';
import { StyleSheet } from 'react-native';


const FABComponent = () => {
    
    const [state, setState] = useState({ open: false });
    const onStateChange = ({ open }) => setState({ open });
    const { open } = state;
    return(
        <Provider>
            <Portal>
                <FAB.Group
                open={open}
                icon={open ? 'calendar-today' : 'plus'}
                actions={[
                    { icon: 'plus', onPress: () => console.log('Pressed add') },
                    {
                    icon: 'star',
                    label: 'Star',
                    onPress: () => console.log('Pressed star'),
                    },
                    {
                    icon: 'email',
                    label: 'Email',
                    onPress: () => console.log('Pressed email'),
                    },
                    {
                    icon: 'bell',
                    label: 'Remind',
                    onPress: () => console.log('Pressed notifications'),
                    small: false,
                    },
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
