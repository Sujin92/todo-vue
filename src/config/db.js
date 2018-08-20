import firebase from 'firebase'

let config = {
        apiKey: "AIzaSyB9ohaXmsgWdbrNoGfIW1q8ScwqdBgrjOA",
        authDomain: "todo-vue-3928b.firebaseapp.com",
        databaseURL: "https://todo-vue-3928b.firebaseio.com/",
        projectId: "todo-vue-3928b",
        storageBucket: "todo-vue-3928b.appspot.com",
        messagingSenderId: "582005954401"
      };

let app = firebase.initializeApp(config);
export const db = app.database()
