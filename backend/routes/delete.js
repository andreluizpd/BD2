var express = require('express');
var router = express.Router();

var productModel = require('../models/index');

//Deleta todos os produtos (DELETE)
router.delete('/all', function(req, res) {
    productModel.remove({}, function(err, data) {
      if(err){
        return res.status(404).json({
          message: "Erro ao excluir todos os registros"
        });
      }
      res.json({message: 'Todos os registros apagados'});
    });
  });

module.exports = router;