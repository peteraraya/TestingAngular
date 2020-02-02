import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalComponent } from './hospital.component';

describe('HospitalComponent', () => {
  let component: HospitalComponent;
  let fixture: ComponentFixture<HospitalComponent>;

  beforeEach(async(() => {
    // TestBed.configureTestingModule({
    //   declarations: [ HospitalComponent ]
    // })
   // .compileComponents(); // no es necesario por los webpacks
  }));

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HospitalComponent]
    })

    fixture = TestBed.createComponent(HospitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); // dispara el ciclo de detección de cambios de angular
  });

  it('Debe de crear un hospital component', () => {
    expect(component).toBeTruthy();
  });
});
