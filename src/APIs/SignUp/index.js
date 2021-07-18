import {FirebaseConfig} from "../../config/FirebaseConfig";
export const signUp =(email,password,phoneNumber,name)=>{
    FirebaseConfig.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            user.updateProfile({
                displayName: name,
            }).then(r => {
                saveUserToFireStore(phoneNumber,name,user)
            })

        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;

        });
}
export const saveUserToFireStore=(phoneNumber,name,user)=>{
    FirebaseConfig.firestore().collection('users').doc(user.uid).set({
        name:name,
        phoneNumber:phoneNumber,
        email:user.email
    })
        .then(() => {
            console.log("Document successfully written!");
        })
        .catch((error) => {
            console.error("Error writing document: ", error);
        });
}

export const login=()=>{

}
