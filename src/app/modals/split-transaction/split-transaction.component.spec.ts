import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SplitTransactionComponent } from './split-transaction.component';

describe('SplitTransactionComponent', () => {
  let component: SplitTransactionComponent;
  let fixture: ComponentFixture<SplitTransactionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SplitTransactionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SplitTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
