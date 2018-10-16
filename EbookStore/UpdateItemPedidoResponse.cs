﻿using EbookStore.Models;
using EbookStore.Models.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EbookStore
{
    public class UpdateItemPedidoResponse
    {
        public ItemPedido ItemPedido { get; private set; }
        public CarrinhoViewModel CarrinhoViewModel { get; private set; }

        public UpdateItemPedidoResponse(ItemPedido itemPedido, 
            CarrinhoViewModel carrinhoViewModel)
        {
            this.ItemPedido = itemPedido;
            this.CarrinhoViewModel = carrinhoViewModel;
        }
    }
}
