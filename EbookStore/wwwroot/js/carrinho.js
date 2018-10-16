class Carrinho {
     clickIncremento(btn) {
         this.getData(btn);
         data.Quantidade++;
         this.postQuantidade(data);
    }

     clickDecremento(btn) {
         this.getData(btn);
         data.Quantidade--;
         this.postQuantidade(data);
     }

     updateQuantidade(input) {
         var data = this.getData(input);
         this.postQuantidade(data);
     }

     getData(elemento) {
         var linhaDoItem = $(btn).parents('[item-id]');
         var itemId = linhaDoItem.attr('item-id');
         var novaQtde = linhaDoItem.find('input').val();

         var data = {
             Id: itemId,
             Quantidade: novaQtde
         };
     }

     postQuantidade(data) {
         $.ajax({
             url: '/pedido/PostQuantidade',
             type: 'POST',
             contentType: 'application/json',
             data: JSON.stringify(data)
         }).done(function (response) {
             alert(response.itemPedido.quantidade);
         });
     }
}

var carrinho = new Carrinho();