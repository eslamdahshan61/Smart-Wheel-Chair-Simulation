import { Component, OnInit , Injectable} from '@angular/core'; 
import { NgForm } from '@angular/forms'; 
import { Router } from '@angular/router';   
import{setDoc, Firestore , collection   , updateDoc , doc  } from '@angular/fire/firestore';   






//import  chair from 'register/chair';
/*to aks: 
how the data should be showen 
how to return a spasafic doc from firestore 
 */


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
}) 

@Injectable({providedIn :'root'})
export class RegisterComponent implements OnInit{   

  constructor(private db :Firestore ) {  
  
   }   

space=false;
bat=false;
Angle=false;
Speed=false;  


check(val:any){
  if (val=="True"){
  this.space=true;
  }
  else
  {
    this.space=false;
  }
  
  }
  
  changeBat(val:any){
    if (val>=0 &&val<=100)
    {
      this.bat=true;
    }
  else{
    this.bat=false;
  }
  } 
  
  changeagl(val:any){
    if (val>=30 &&val<=120)
    {
      this.Angle=true;
    }
  else{
    this.Angle=false;
  }
  }
  changespeed(val:any){
    if (val>=4 && val<=6)
    {
      this.Speed=true
    }
  else{
    this.Speed=false;
  }
  
  } 

  addNewDocumentWithSpecificID(chair: NgForm ) { 

    console.log("hiiii",chair.value.id); 
  
   /*  return 0; */
    
    const dbInstance = collection(this.db, "Wheelchairs"); 
    console.log("HELLO")
     return setDoc(doc(dbInstance,chair.value.id),{...chair.form.value});
  }
  
  updateDocument(chair: NgForm) { 
    console.log("dataUpdate");
    const dataUpdate = doc(this.db, "Wheelchairs", chair.value.id);
    
    return updateDoc(dataUpdate, {
      ...chair.form.value});
  } 
  
  reset_form (chair : NgForm) 
  {
      return  chair.reset() ;
  }  
  

  
  ngOnInit(): void {
     
  }
  getAll() 
  { 
    
    return collection(this.db , "Wheelchairs");
   
  } 

 }


 