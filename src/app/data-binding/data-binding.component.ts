import { NgIf } from '@angular/common';
import { Router } from '@angular/router';  
import { Component, OnInit , Injectable , Output} from '@angular/core'; 
import { Firestore } from '@angular/fire/firestore';



@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
}) 

@Injectable({providedIn :'root'})
export class DataBindingComponent  { 
  
    
    
  constructor(private db : Firestore)
   {

   }


  }


