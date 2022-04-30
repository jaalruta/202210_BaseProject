/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { faker } from '@faker-js/faker';
import { CoffeeListComponent } from './coffee-list.component';
import { Coffee } from '../coffee';

describe('CoffeeListComponent', () => {
  let component: CoffeeListComponent;
  let fixture: ComponentFixture<CoffeeListComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoffeeListComponent ],
      imports: [HttpClientModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoffeeListComponent);
    component = fixture.componentInstance;
    component.cafes = [
       new Coffee(1,faker.lorem.sentence(),'Blend',faker.lorem.sentence(),faker.lorem.sentence(),faker.datatype.number(),faker.lorem.sentence()),
       new Coffee(2,faker.lorem.sentence(),'Blend',faker.lorem.sentence(),faker.lorem.sentence(),faker.datatype.number(),faker.lorem.sentence()),
       new Coffee(3,faker.lorem.sentence(),'Blend',faker.lorem.sentence(),faker.lorem.sentence(),faker.datatype.number(),faker.lorem.sentence()),
      ]
    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('debe crear tabla con tres cafes', () => {
    let cantidadEncabezado = By.css('tbody').length;
    let cantidadFilas = debug.query(By.css('tbody')).properties['childElementCount'];
    expect(cantidadFilas+cantidadEncabezado).toEqual(
      4
    );
  });
});
