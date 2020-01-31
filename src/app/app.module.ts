import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';


import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

const config = {
    apiKey: "AIzaSyDsg4LP9PLIvkDZD1lhSicd6o3Uu4YRy7Y",
    authDomain: "test-d13b5.firebaseapp.com",
    databaseURL: "https://test-d13b5.firebaseio.com",
    projectId: "test-d13b5",
    storageBucket: "test-d13b5.appspot.com",
    messagingSenderId: "335686771339"
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
