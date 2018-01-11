using EbookStore.Models;
using System.Collections.Generic;

namespace EbookStore
{
    public interface IDataService
    {
        void InicializaDb();
        List<Produto> GetProdutos();
        List<ItemPedido> GetItensPedido();
    }
}