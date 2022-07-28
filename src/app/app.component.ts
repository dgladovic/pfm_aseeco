import {
  Component,
  ViewChild,
  ComponentFactoryResolver,
  ApplicationRef,
  Injector,
  AfterViewChecked, ChangeDetectorRef, OnDestroy
} from '@angular/core';
import {ActivationStart, Router, RouterOutlet} from '@angular/router';
import {FormBuilder, FormGroup} from '@angular/forms';

import {ConstantsService} from "./_services/constants.service";



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent  {
  
  parentMenuItems?: any[];
  
  private externalWindow = null;

 

  

  constructor(
              private CONSTANTS: ConstantsService,
              ) {}

  ngOnInit() {
    this.parentMenuItems = this.CONSTANTS.MENU_ITEMS;
  }

  
  

  
  
}
