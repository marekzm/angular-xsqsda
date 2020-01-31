import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';


import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

const config = {
    apiKey: "AIzaSyD9SAgXxdDnhcHk6scS6HVAav8z10-ibhk",
    authDomain: "stackblitz-angular-firebase.firebaseapp.com",
    databaseURL: "https://stackblitz-angular-firebase.firebaseio.com",
    projectId: "stackblitz-angular-firebase",
    storageBucket: "",
    messagingSenderId: "453902784138"
  };

@NgModule({
  imports:      [
   BrowserModule,
   FormsModule,
   AngularFireModule.initializeApp(config),
   AngularFireDatabaseModule
    ],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
