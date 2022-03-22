import { useEffect, useState } from 'react';
import {} from 'react-native-paper';
// import { } from 'firebase/firestore';
import auth from 'firebase/auth';

const Login = ({navigation}) => {

    const [loading, setLoading] = useState(true);

    // window.recaptchaVerifier = new auth.RecaptchaVerifier('sign-in-button', {
    // 'size': 'invisible','callback': (response) => {
    //     // reCAPTCHA solved, allow signInWithPhoneNumber.
    //     // onSignInSubmit();
    // }
    // }, auth.getAuth());

    //     useEffect(() => {
    //       auth.signInAnonymously()
    //     }, []);

    return(
        <View>
            hello world
        </View>
    );
}

export default Login;
