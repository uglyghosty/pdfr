import { useEffect, useState } from 'react';
import {View,} from 'react-native';


const ReportScreen = ({route}) => {
    const [report, setReport] = useState();

    useEffect(() => {
        if(route.params?.title) {
            // firestore().collection('reports').doc(route.params?.title)
        }
    },[route]);

    return(
        <View>

        </View>
    )
}

export default ReportScreen;