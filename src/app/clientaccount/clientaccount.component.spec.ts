import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientaccountComponent } from './clientaccount.component';

describe('ClientaccountComponent', () => {
  let component: ClientaccountComponent;
  let fixture: ComponentFixture<ClientaccountComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClientaccountComponent]
    });
    fixture = TestBed.createComponent(ClientaccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
