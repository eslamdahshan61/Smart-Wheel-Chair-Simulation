import {Router} from '@angular/router';  
import { Component, OnInit ,Injectable} from '@angular/core';
import { RegisterComponent } from '../register/register.component';
import { map } from 'rxjs/operators';
import { collectionChanges, collectionSnapshots, DocumentSnapshot, QueryDocumentSnapshot} from "@angular/fire/firestore";


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
}) 

@Injectable({providedIn :"root"})
export class DashboardComponent  { 
 
 
  all_Chairs: any[] = [];
  constructor(private Register: RegisterComponent) { }

  ngOnInit() {
  
      collectionSnapshots(this.Register.getAll()).pipe(
      map((changes) => {
        return changes.map((doc) => {
          return ({ id:doc.id, ...doc.data() })
        })
      })
    ).subscribe(data => {
      this.all_Chairs = data;
    }); 
   



 
 } } 

