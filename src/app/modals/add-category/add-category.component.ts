import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { TransactionsService } from 'src/app/_services/transactions.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})

export class AddCategoryComponent implements OnInit{
  
  public categoriesList:any = [];
  public mainCat:any = [];
  public subCat:any = [];
  public truncCat:any = [];

  public mCat: object = {};

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<AddCategoryComponent>,
    public transactionsService: TransactionsService,

    ) { }
  
    ngOnInit(): void {
      this.categoriesList = (this.data.data.items);
      this.getCategories();
    }

  onCancel(): void {

  }
  
  getCategories(){
    for(let i = 0; i<this.categoriesList.length; i++){
      if(this.categoriesList[i]['parent-code'] == ''){
        this.mainCat[i] = this.categoriesList[i];
      }
      else{
        this.subCat.push(this.categoriesList[i])
      }
    }
    console.log(this.mainCat);
    console.log(this.subCat);
  }

  subCatCheck(set:any){

    if(this.truncCat.length != 0){
      this.truncCat.length = 0;
    }

    for(let i = 0; i<this.subCat.length; i++){
      if(this.subCat[i]['parent-code'] == set){
        this.truncCat.push(this.subCat[i])
        console.log(this.subCat[i]);
      }
    }
  }

  changeClient(value:any) {
    this.mCat = value;
  }


}