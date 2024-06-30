import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarItensVendaComponent } from './listar-itens-venda.component';

describe('ListarItensVendaComponent', () => {
  let component: ListarItensVendaComponent;
  let fixture: ComponentFixture<ListarItensVendaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarItensVendaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarItensVendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
