import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css'],
})
export class TablaComponent {
  constructor(private router: Router) {}
  products = [
    {
      id: 1,
      codigo: 1,
      descripcion: 'Galletas chokis',
      precioCompra: 10.00,
      precioVenta: 15.000,
      ganancia: 5,
      existencia: 100.00,
    },
    {
      id: 2,
      codigo: 2,
      descripcion: 'Mermelada de fresa',
      precioCompra: 65.00,
      precioVenta: 80.00,
      ganancia: 15,
      existencia: 100.00,
    },
    {
      id: 3,
      codigo: 3,
      descripcion: 'Aceites',
      precioCompra: 18.00,
      precioVenta: 20.00,
      ganancia: 2,
      existencia: 100.00,
    },
    {
      id: 4,
      codigo: 4,
      descripcion: 'Palomitas de Maiz',
      precioCompra: 12.00,
      precioVenta: 15.00,
      ganancia: 3,
      existencia: 100.00,
    },
    {
      id: 5,
      codigo: 5,
      descripcion: 'Doritos',
      precioCompra: 5.00,
      precioVenta: 8.00,
      ganancia: 3,
      existencia: 100.00,
    },
  ];

  editar(product: any) {
    this.router.navigate(['edit', JSON.stringify(product)]);
  }
}
