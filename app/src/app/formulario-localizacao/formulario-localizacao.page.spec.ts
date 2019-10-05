import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioLocalizacaoPage } from './formulario-localizacao.page';

describe('FormularioLocalizacaoPage', () => {
  let component: FormularioLocalizacaoPage;
  let fixture: ComponentFixture<FormularioLocalizacaoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioLocalizacaoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioLocalizacaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
