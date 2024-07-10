import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdicionarPedidoComponent } from './adicionar-pedido.component';

describe('AdicionarPedidoComponent', () => {
  let component: AdicionarPedidoComponent;
  let fixture: ComponentFixture<AdicionarPedidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdicionarPedidoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdicionarPedidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
