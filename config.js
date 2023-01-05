import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyCccWX4vznBeYhB8p89ZCRKeDMBsMJ_Bms",
  authDomain: "martian-life.firebaseapp.com",
  projectId: "martian-life",
  storageBucket: "martian-life.appspot.com",
  messagingSenderId: "247165325282",
  appId: "1:247165325282:web:5da8c763ca931e4127f3bb"
};
if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig)
}
export default firebase.database()