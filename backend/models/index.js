var mongoose = require('mongoose');


// Descrição
//  Quantidade
//  Preço
//  Data de criação
//  Data de alteração

var schema = mongoose.Schema({
    descricao: {
        type: String,
        required: true
    },
    quantidade: Number,
    preco: {
        type: Number,
        required: true
    },
    criado_em: Date,
    alterado_em: Date
});

var model = mongoose.model('products', schema);
module.exports = model;