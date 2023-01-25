import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editar-producto',
  templateUrl: './editar-producto.component.html',
  styleUrls: ['./editar-producto.component.css'],
})
export class EditarProductoComponent {
  constructor(private rutaActiva: ActivatedRoute) {}
  cat = this.rutaActiva.snapshot.params['id'];
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
  currentProduct: any;
  ngOnInit(): void {
    this.currentProduct = this.products.find((product) => {
      return product.id == this.cat;
    });
  }

  updateProduct() {
    console.log(this.currentProduct);
  }
}
