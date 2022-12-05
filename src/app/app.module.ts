import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; 
import { NgForm , ReactiveFormsModule  } from '@angular/forms'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component'; 
import { RouterModule } from '@angular/router';  
import { CommonModule } from '@angular/common'; 
import {  FormsModule } from '@angular/forms';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore/'; 
import { initializeAppCheck } from '@firebase/app-check';
import { environment } from 'src/environments/environment';  
import{provideFirebaseApp , initializeApp} from '@angular/fire/app';
import{provideFirestore , getFirestore} from '@angular/fire/firestore';     


 


import{secondComponent} from './secondFolder/sceond.component' ;  

import { DashboardComponent } from './dashboard/dashboard.component';  
import { RegisterComponent } from './register/register.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ShowDataComponent } from './show-data/show-data.component';  








/* const routes=[
  {path :'dashboard' , component : DashboardComponent } ,
  {path :'register' , component : RegisterComponent} ,
  {path :'data-binding' ,component : DataBindingComponent} ,
  { path: '',   component : DashboardComponent},
  
]; */

@NgModule({
  declarations: [ 
    AppComponent ,
    secondComponent ,   
    
    RegisterComponent, DashboardComponent, MainPageComponent,  

  ],
  imports: [
    BrowserModule,
    AppRoutingModule ,   
    ReactiveFormsModule ,
    /* RouterModule.forRoot(routes) ,  */
    FormsModule , 
    CommonModule , 
    AngularFirestoreModule,  
    provideFirebaseApp(()=>initializeApp(environment.firebase)) ,
    provideFirestore(()=>getFirestore())
   
    
    
   ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { } 

