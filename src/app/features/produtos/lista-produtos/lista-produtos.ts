import { Component, signal, computed } from '@angular/core';
import { Produto } from '../produto/produto';
 


@Component({
  selector: 'app-lista-produtos',
  imports: [Produto],
  templateUrl: './lista-produtos.html',
  styleUrl: './lista-produtos.css',
})
export class ListaProdutos {
  //REATIVO QUE PERMITE ALTERAÇÕES (COM SET OU UPDATE)
  produtos = signal([
    { nome: 'Notebook', preco: 3800 },
    { nome: 'Mouse', preco: 179 },
    { nome: 'fone', preco: 80 },
  ]);

  //OBSERVA OUTRO SIGNAL E SE ATUALIZA AUTOMATICAMENTE
  totalProdutos = computed(() => this.produtos().length);



  exibirProduto(nome: string) {
    console.log('Produto selecionado:', nome);
    // Aqui você pode atualizar o estado, abrir modal, etc.
  }
   adicionarProduto() {
    this.produtos.update((listaAtual) => [
      ...listaAtual, 
      { nome: 'Teclado', preco: 250 }]);
  }


}
