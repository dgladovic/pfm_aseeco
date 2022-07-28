import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {

  constructor(
    private http: HttpClient,
  ) { }

  private transactionsUrl = 'http://127.0.0.1:4010/transactions?page=345&page-size=634&sort-by=soluta&sort-order=asc';
  private categoryUrl = 'http://127.0.0.1:4010/categories';
  private spendingAnalyticsUrl = 'http://127.0.0.1:4010/categories';

  private splitTransactionUrl = 'http://127.0.0.1:4010/transaction/rerum/split';
  private categorizeUrl='http://127.0.0.1:4010/transaction/et/categorize';

  public getTransactions(){
    return this.http.get(this.transactionsUrl);
  }

  public getCategories(){
    return this.http.get(this.categoryUrl);
  }

}
