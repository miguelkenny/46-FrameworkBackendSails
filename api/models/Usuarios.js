/**
 * Usuarios.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    username: { type: 'string', required: true, unique: true },
    email: { type: 'string', required: true, unique: true },
    password: { type: 'string', required: true },
    nombre: { type: 'string', required: true },
    direccion: { type: 'string', required: true },
    edad: { type: 'number', required: true },
    numCel: { type: 'string', required: true },
    file: { type: 'string' },
  },

};

