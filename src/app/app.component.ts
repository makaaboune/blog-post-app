import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {


  constructor() {

    // Firebase Realtime Database Configuration
    const config = {
      apiKey: 'AIzaSyAfR3MNmGHKyi5o5gtni1JkY1RAeCYTMq8',
      authDomain: 'blogpost-99c4c.firebaseapp.com',
      databaseURL: 'https://blogpost-99c4c.firebaseio.com',
      projectId: 'blogpost-99c4c',
      storageBucket: 'blogpost-99c4c.appspot.com',
      messagingSenderId: '993839455920'
    };
    firebase.initializeApp(config);
  }

  ngOnInit() {
  }

}

