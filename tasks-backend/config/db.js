const config = require('../knexfile.js')
const knex = require('knex')(config)

knex.migrate.latest([config]) // deixar isso só em aplicação pequena, pra evitar que rode sozinho mais de uma vez
module.exports = knex