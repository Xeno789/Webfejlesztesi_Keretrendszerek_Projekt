import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ServiceSpecificationService } from 'src/app/shared/ServiceSpecification.service';

@Component({
  selector: 'app-ServiceSpecification',
  templateUrl: './ServiceSpecification.component.html',
  styleUrls: ['./ServiceSpecification.component.scss']
})
export class ServiceSpecificationComponent implements OnInit {

  constructor(public service : ServiceSpecificationService,private firestore:AngularFirestore,private snackBar:MatSnackBar) { }

  ngOnInit(): void {
    this.resetForm();
  }

  resetForm(form? : NgForm){
    if(form != null){
      form.resetForm();
    }
    this.service.formData = {
      docID:null,
      description: "",
      href: "",
      id:"",
      isBundle:false,
      lastUpdate:"",
      lifecycleStatus:"",
      name:"",
      validForStart:"",
      validForEnd:"",
      version:""
    }
  }

  onSubmit(form:NgForm){
    let data = Object.assign({},form.value);
    delete data.docID;
    if(form.value.docID==null){
      this.firestore.collection('ServiceSpecifications').add(data);
    }
    else{
      this.firestore.doc('ServiceSpecifications/'+form.value.docID).update(data);
    }
    this.resetForm(form);
    this.snackBar.open("Sikeres hozzáadás.","",{
      duration:4000,
      panelClass: "submit-dialog"
    });
  }
}
