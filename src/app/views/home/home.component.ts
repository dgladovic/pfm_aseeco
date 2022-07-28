import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import {MatDialog} from '@angular/material/dialog';

import { TransactionsService } from 'src/app/_services/transactions.service';
import { ConstantsService} from "../../_services/constants.service";
import { SplitTransactionComponent } from 'src/app/modals/split-transaction/split-transaction.component';
import { AddCategoryComponent } from 'src/app/modals/add-category/add-category.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  buttonItems?: any[];
  cardList?: any[];
  transactionsList: any = [];
  

  constructor(
    private CONSTANTS: ConstantsService,
    public API_LIST: ConstantsService,
    public dialog: MatDialog,
    protected transactionsService: TransactionsService

    
  ) { }

  addCat(): void {
    let apiref = this.transactionsService.getCategories().subscribe( (res) => {
    let dialogref = this.dialog.open(AddCategoryComponent, {
      panelClass: "add",
      height: '60%',
      width: '35%',
      data:{data :res}
    });
  })
  }

  splitCat(): void {
    let dialogref = this.dialog.open(SplitTransactionComponent, {
      panelClass: "splitCat",
      height: '80%',
      width: '35%',
    });
  }

  getTransactions(): any {
    this.transactionsService.getTransactions().subscribe( (res)=> {
      this.transactionsList = res;
      this.cardList = this.transactionsList.items;
      
    });
  }

  ngOnInit(): void {

    this.getTransactions();
    this.buttonItems = this.CONSTANTS.BUTTON_ITEMS;
    this.cardList = this.CONSTANTS.CARD_LIST;
  }

}
