import { Component, OnInit , Injectable} from '@angular/core'; 
import { NgForm } from '@angular/forms'; 
import { Router } from '@angular/router';   
import { map } from 'rxjs/operators'; 
import{addDoc ,setDoc, Firestore , collection   , updateDoc , doc, getDoc   } from '@angular/fire/firestore';   

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private db :Firestore ) { } 

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
  
  


}
