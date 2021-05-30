import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ServiceSpecification } from './ServiceSpecification.model';


@Injectable({
  providedIn: 'root'
})
export class ServiceSpecificationService {
  formData!: ServiceSpecification;
  constructor(private firestore:AngularFirestore) { }

  getServiceSpecifications(){
    return this.firestore.collection('ServiceSpecifications').snapshotChanges();
  }
}
