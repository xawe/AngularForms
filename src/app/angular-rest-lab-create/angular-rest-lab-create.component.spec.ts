import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularRestLabCreateComponent } from './angular-rest-lab-create.component';

describe('AngularRestLabCreateComponent', () => {
  let component: AngularRestLabCreateComponent;
  let fixture: ComponentFixture<AngularRestLabCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularRestLabCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularRestLabCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
