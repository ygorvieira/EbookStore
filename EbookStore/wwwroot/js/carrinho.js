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
        var linhaDoItem = $(elemento).parents('[item-Id]');
        var itemId = linhaDoItem.attr('item-Id');
        var qtde = linhaDoItem.find('input').val();

        return {
            Id: itemId,
            Quantidade: qtde
        }
     }

     postQuantidade(data) {
        $.ajax({
            url: '/pedido/PostQuantidade',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(data)
        })
     }
}

var carrinho = new Carrinho();