import { Component, OnInit} from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Pruti';

  ngOnInit(){
    // Initialize Firebase
    const config = {
      apiKey: "AIzaSyBdsA95YF5wgmvTiiZP0wlPvGV4OZhMDgs",
      authDomain: "vrbove-prutie.firebaseapp.com",
      databaseURL: "https://vrbove-prutie.firebaseio.com",
      projectId: "vrbove-prutie",
      storageBucket: "vrbove-prutie.appspot.com",
      messagingSenderId: "708241133122"
    };
    firebase.initializeApp(config);
  }
}
