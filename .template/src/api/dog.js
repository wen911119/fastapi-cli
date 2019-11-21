const { API, Router } = require('@ruiyun/fastapi')
const { Post } = Router

const { addDogSchema } = require('../schemas/dog.schema.js')

class Dog extends API {
  @Post('/add', addDogSchema)
  async add(request, reply) {
    const { name, age, color } = request.body
    const { success, data, errMsg } = await this.service.DogService.add({
      name,
      age,
      color
    })
    if (success) {
      reply.send(data)
    } else {
      reply.status(400).send({
        error: 10001,
        message: errMsg
      })
    }
  }
}

module.exports = Dog
