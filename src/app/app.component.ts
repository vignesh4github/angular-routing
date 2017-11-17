import { Component } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit() {

    firebase.initializeApp({
      apiKey: "AIzaSyBHfoEo0nISlxPAInIt26MvyUTQDSJbRtA",
      authDomain: "demoapp-95625.firebaseapp.com",
    });

  }
  title = 'app';
}
