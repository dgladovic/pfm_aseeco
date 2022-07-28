import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConstantsService {

  constructor() { }

  readonly NAV_ITEMS = [
    {
      displayName: "HOME",
      iconName: "home",
      route: "home",
      id: "home1",
      click: "",
    },
    
  ];

  readonly MENU_ITEMS = [
    {
      title: "HOME",
      icon: 'home'
    },
    {
      title: "MY ACCOUNT",
      
    },
    {
      title: "PAYMENTS",
     
    },
    {
      title: "CARDS",
     
    },
    {
      title: "CURRENCY EXCANGE",
    
    },
    {
      title: "PRODUCT CATALOUGE",
    
    },
    {
      title: "PFM",
    
    },
    {
      title: "SELF CARE",
    
    },
    {
      title: "SUPPORT",
    
    },
  ];


  readonly BUTTON_ITEMS = [
    {
      title: "Financial overview",
      icon: 'home'
    },
    {
      title: "Budgets",
      
    },
    {
      title: "Saving goals",
     
    },
    {
      title: "categorization rules",
     
    },
    
  ];

  readonly CARD_LIST = [
    {
      id:1,
      name: 'Ana Jovanovic',
      date: '14.07.2014',
      amount: '207.656,00 RSD'
    },
    {
      id:2,
      name: 'Dimitrije Gladovic',
      date: '14.07.2014',
      amount: '207.656,00 RSD'
      
    },
    {
      id:3,
      name: 'Pera Peric',
      date: '14.07.2014',
      amount: '207.656,00 RSD'
     
    },
    {
      id:4,
      name: 'Mica Dalic',
      date: '14.07.2014',
      amount: '207.656,00 RSD'
     
    },
    {
      id:5,
      name: 'Treba Iteric',
      date: '14.07.2014',
      amount: '207.656,00 RSD'
      
    },
    
  ];

  public API_LIST = [
    
  ]


}
