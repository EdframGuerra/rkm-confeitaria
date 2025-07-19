import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // Importar HttpClient
import { Observable } from 'rxjs';
import { InterfaceProduct } from '../models/interface.product'; // Importar a interface InterfaceProduct

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'http://localhost:3000/products'; // URL do JSON Server para produtos

  constructor(private http: HttpClient) { } // Injetar HttpClient

  /**
   * Obtém a lista de produtos do backend simulado.
   * @returns Um Observable com um array de produtos.
   */
  getProducts(): Observable<InterfaceProduct[]> {
    return this.http.get<InterfaceProduct[]>(this.apiUrl);
  }

  // Métodos para adicionar, atualizar e deletar produtos (para futura implementação admin)
  addProduct(product: InterfaceProduct): Observable<InterfaceProduct> {
    return this.http.post<InterfaceProduct>(this.apiUrl, product);
  }

  updateProduct(product: InterfaceProduct): Observable<InterfaceProduct> {
    return this.http.put<InterfaceProduct>(`${this.apiUrl}/${product.id}`, product);
  }

  deleteProduct(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
