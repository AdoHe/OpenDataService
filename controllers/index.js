var Entity = require('../schema/Entity');

/**
 *  Home page
 *
 */
exports.index = function(req, res) {
  res.render('index');
}

/**
 * Query page
 *
 */
exports.query = function(req, res) {
  res.render('query');
}

/**
 * Upload file page
 *
 */
exports.upload = function(req, res) {
  res.render('upload');
}

/**
 * EDM page
 *
 */
exports.edm = function(req, res) {
  Entity.getEntities(function(err, entities) {
    if(err) {
    } else {
      res.render('edm', {
        entities: entities
      });
    }
  });
}
