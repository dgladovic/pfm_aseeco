import {Component, OnInit, ViewChild} from '@angular/core';

import {NavItem} from '../../interfaces/nav-item';
import {AppComponent} from "../../app.component";
import {ActivationStart, Router, RouterOutlet} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {ConstantsService} from "../../_services/constants.service";

@Component({
  selector: 'app-site-header',
  templateUrl: './site-header.component.html',
  styleUrls: ['./site-header.component.css']
})

export class SiteHeaderComponent implements OnInit {

  isAdmin?: boolean;
  navItems?: NavItem[];

 

  constructor(
    private router: Router,
    private appComp: AppComponent,
    private CONSTANTS: ConstantsService,
    public matDialog: MatDialog,
  ) {
  }

  ngOnInit() {
    this.resetFields();
    
  }

  /**
   * reset fields
   *
   * @private
   */
  private resetFields() {
    this.isAdmin = true;
    // add navigation items
    this.navItems = this.CONSTANTS.NAV_ITEMS;
  }
}
