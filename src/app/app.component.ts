import { Component, ViewChild } from '@angular/core';
import { Platform, NavController, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import * as firebase from 'firebase';

import { TabsPage } from '../pages/tabs/tabs';
import { OptionsPage } from '../pages/options/options';
import { AuthPage } from '../pages/auth/auth';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  tabsPage: any = TabsPage;
  optionsPage: any = OptionsPage;
  authPage: any = AuthPage;
  @ViewChild('myContent') content: NavController;

  isAuth: boolean;

  constructor(platform: Platform,
              statusBar: StatusBar, 
              splashScreen: SplashScreen,
              private menuCtrl: MenuController) {
    platform.ready().then(() => {
      
      // Your web app's Firebase configuration
      // For Firebase JS SDK v7.20.0 and later, measurementId is optional
      let firebaseConfig = {
        apiKey: "AIzaSyAhz3IMYjhG3mjPKlvvM3Vp0hXdO43hYac",
        authDomain: "projet-openclassrooms-72d1a.firebaseapp.com",
        databaseURL: "https://projet-openclassrooms-72d1a.firebaseio.com",
        projectId: "projet-openclassrooms-72d1a",
        storageBucket: "projet-openclassrooms-72d1a.appspot.com",
        messagingSenderId: "422157726015",
        appId: "1:422157726015:web:aa35477239ad6a298f238a",
        measurementId: "G-NKM1PG3BBN"
      };
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);

      firebase.auth().onAuthStateChanged(
        (user) => {
          if (user) {
            this.isAuth = true;
            this.content.setRoot(TabsPage);
          }
          else {
            this.isAuth = false;
            this.content.setRoot(AuthPage, {mode: 'connect'});
          }
        }
      );
      firebase.analytics();

      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  onNavigate(page: any, data?: {}) {
    this.content.setRoot(page, data ? data : null);
    this.menuCtrl.close();
  }

  onDisconnect() {
    firebase.auth().signOut();
    this.menuCtrl.close();
  }
}

