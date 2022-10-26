/**
 * Products.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    title: { type: 'string', required: true, unique: true },
    desc: { type: 'string', required: true },
    img: { type: 'string', required: true },
    categories: { type: 'string', },
    size: { type: 'string', },
    color: { type: 'string', },
    price: { type: 'number', required: true },
    inStock: { type: 'string' }
  }
};

