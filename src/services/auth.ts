import {
    getAuth,
    signInWithEmailAndPassword,
} from 'firebase/auth';
import '../config/Firebase';

const auth = getAuth();

const userLoginWithEmailAndPassword = (email: string, password: string): any => {
    signInWithEmailAndPassword(auth, email, password)
        .then((userCreds) => {
            console.log(userCreds);
        })
        .catch((error) => {
            console.error(error);
        });
};

export {
    userLoginWithEmailAndPassword,
};
