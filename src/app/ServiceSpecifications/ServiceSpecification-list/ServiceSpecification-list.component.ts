import { SimpleChanges } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { MatSnackBar} from '@angular/material/snack-bar';
import { Subscription } from 'rxjs';
import { ServiceSpecification } from 'src/app/shared/ServiceSpecification.model';
import { ServiceSpecificationService } from 'src/app/shared/ServiceSpecification.service';

@Component({
  selector: 'app-ServiceSpecification-list',
  templateUrl: './ServiceSpecification-list.component.html',
  styleUrls: ['./ServiceSpecification-list.component.scss']
})
export class ServiceSpecificationListComponent{

  list!: ServiceSpecification[];
  constructor(private service: ServiceSpecificationService,private firestore:AngularFirestore,private snackBar:MatSnackBar) { }
  sub!:Subscription;

  ngAfterViewInit(): void {
    this.resetTable();
  }

  onEdit(service:ServiceSpecification){
    this.service.formData = Object.assign({},service);
  }

  onDelete(docID:any){
    if(confirm("Biztosan törölni szeretnéd?")){
      this.firestore.doc('ServiceSpecifications/'+docID).delete();
      this.snackBar.open("Sikeres törlés.","",{
        duration:4000,
        panelClass: "delete-dialog"
      });
    }
  }
  osszetett1(){
    this.list = []
    this.sub = this.firestore.collection('ServiceSpecifications', ref=>ref.where('lifecycleStatus', '==','Active').orderBy('description','desc')).get().subscribe(res =>{
      res.docs.forEach(e1 =>{
        this.list.push(e1.data() as ServiceSpecification)
      })
    });
  }
  osszetett2(){
    this.list = []
    this.sub = this.firestore.collection('ServiceSpecifications', ref=>ref.where('lastUpdate', '>','2015').orderBy('lastUpdate','desc')).get().subscribe(res =>{
      res.docs.forEach(e1 =>{
        this.list.push(e1.data() as ServiceSpecification)
      })
    });
  }
  resetTable(){
    this.service.getServiceSpecifications().subscribe(actionArray =>{
      this.list = actionArray.map(item => {
        return {
          docID:item.payload.doc.id,      
          ...item.payload.doc.data()as object} as ServiceSpecification
      })
    });
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.snackBar.open("Változás.","",{
      duration:4000,
      panelClass: "Változás történt."
    }); 
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe()
  }
}
