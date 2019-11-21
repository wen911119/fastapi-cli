const addDogSchema = {
  body: {
    type: 'object',
    required: ['name', 'age'],
    properties: {
      name: {
        type: 'string'
      },
      age: {
        type: 'number'
      },
      color: {
        type: 'string'
      }
    }
  },
  response: {
    200: {
      type: 'object',
      required: ['name', 'age', 'id'],
      properties: {
        id: {
          type: 'string'
        },
        name: {
          type: 'string'
        },
        age: {
          type: 'number'
        },
        color: {
          type: 'string'
        }
      }
    }
  }
}

module.exports = {
  addDogSchema
}
