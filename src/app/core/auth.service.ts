import { AngularFireAuth } from 'angular/fire/auth';
import * as firebase from 'firebase/app';

constructor(public afAuth: AngularFireAuth){};

doFacebookLogin(){
   return new Promise<any>((resolve, reject) => {
     let provider = new firebase.auth.FacebookAuthProvider();
     this.afAuth.auth
     .signInWithPopup(provider)
     .then(res => {
       resolve(res);
     }, err => {
       console.log(err);
       reject(err);
     })
   })
};

doGoogleLogin(){
  return new Promise<any>((resolve, reject) => {
    let provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('profile');
    provider.addScope('email');
    this.afAuth.auth
    .signInWithPopup(provider)
    .then(res => {
      resolve(res);
    })
  })
};

doRegister(value){
   return new Promise<any>((resolve, reject) => {
     firebase.auth().createUserWithEmailAndPassword(value.email, value.password)
     .then(res => {
       resolve(res);
     }, err => reject(err))
   })
 };