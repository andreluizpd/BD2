var express = require('express');
var router = express.Router();

var productModel = require('../models/index');


// Listar os usuários (GET)
// Recuperar um único usuário através do seu ID (GET)
// Pesquisar usuários (GET)
// Criar um usuário (POST)
// Alterar um usuário (PUT)
// Excluir um usuário (DELETE)
// Excluir todos os usuários (DELETE)

// Listar todos os produtos (GET)
router.get('/', function(req, res, next){
  productModel.find({}).exec((err, response) => {
    res.json(response);
  })
});

//Listar produtos por ID (GET)
router.get('/:id', function(req, res, next){
  productModel.findOne({_id: req.params.id}).exec((err, response) => {
    res.json(response);
  });
});

//Pesquisar produto (POST)
router.post('/search', function(req, res, next){
  query = {};
  query[req.body.field] = new RegExp(req.body.term, 'i');
  productModel.find(query).exec((err, results) => {
    res.json(results);
  });
});

//Incluir Produto (POST)
router.post('/', function(req, res, next){
  var newProduct = new productModel(req.body);

  newProduct.criado_em = new Date();
  newProduct.alterado_em = newProduct.criado_em;

  newProduct.save(err => {
    if(err){
      return res.status(400).json({
        message: 'Erro ao incluir o produto'
      });
    }
    res.json({message: `Produto ${newProduct.descricao} adicionado`});
  });
});

//Alterar produto (PUT)
router.put('/:id', function(req, res){
  var product = req.body;

  product.alterado_em = new Date();
  productModel.update({_id: req.params.id}, product, function(err, data){
    if(err){
      return res.status(400).json({
        message: 'Erro ao alterar o produto'
      });
    }
    res.json({message: `Produto ${product.descricao} alterado`});
  });
});

//Deletar produto (DELETE)
router.delete('/:id', function(req, res){
  var productFound;

  productModel.findOne({_id: req.params.id}).exec((err, response) => {
    productFound = response.nome;
  });

  productModel.remove({_id: req.params.id}, function(err, data) {
    if(err){
      return res.status(404).json({
        message: "Produto não encontrado"
      });
    }
    res.json({message: `Produto ${productFound} excluido`});
  });
});

module.exports = router;
