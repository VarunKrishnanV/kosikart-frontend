import {firebaseConfig} from "../../config/FirebaseConfig";
export const signUp =(email,password)=>{
    firebaseConfig.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            const user = userCredential.user;
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;

        });
}


export const login=()=>{

}
