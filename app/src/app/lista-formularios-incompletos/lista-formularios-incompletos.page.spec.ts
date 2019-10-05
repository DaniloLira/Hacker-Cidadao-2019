import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaFormulariosIncompletosPage } from './lista-formularios-incompletos.page';

describe('ListaFormulariosIncompletosPage', () => {
  let component: ListaFormulariosIncompletosPage;
  let fixture: ComponentFixture<ListaFormulariosIncompletosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaFormulariosIncompletosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaFormulariosIncompletosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
