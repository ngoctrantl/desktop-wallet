import BaseModel from './base'
import { toString } from 'lodash'

export default new BaseModel({
  type: 'object',
  properties: {
    id: {
      type: 'string'
    },
    type: {
      type: 'integer'
    },
    name: {
      type: 'string'
    },
    symbol: {
      type: 'string'
    },
    balance: {
      type: 'string',
      format: (data) => toString(data.amount || 0)
    },
    digits: {
      type: 'integer',
      minimum: 0,
      default: 8
    },
    raw: {
      type: 'object'
    },
    isExpired: {
      type: 'boolean',
      format: (data) => (data.isExpired || false)
    }
  }
})
