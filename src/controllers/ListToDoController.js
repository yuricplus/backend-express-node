const crypto = require('crypto')
const connection = require('../database/connection');

module.exports = {
    async index(request, response){
      const toDo = await connection('list').select('*')

      return response.json(toDo)
    },
    async create(request, response) {
      const { title, date, priority } = request.body.body;

      const [id] = await connection('list').insert({
          title,
          date,
          priority
      });
      
      return response.json({ id })
    },
    async delete(request, response) {
      const { id } = request.params;

      await connection('list').where('id', id).delete();
      
      return response.status(204).send()
    }
}